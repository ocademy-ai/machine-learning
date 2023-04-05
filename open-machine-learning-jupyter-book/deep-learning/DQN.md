---
jupytext:
  cell_metadata_filter: -all
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.11.5
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Deep Q-learning

## Overview

Usually, we regard Deep Q Network as DQN, and it can also be called Reinforcement Learning (RL) whose aim is to achieve the desired behavior of an agent that learns from its mistakes and improves its performance. 

RL is a type of machine learning that allows us to create AI agents that learn from the environment by interacting with it to maximize its cumulative reward. Here is an image showing the basic RL operation principle:

:::{figure-md} 02_pipline
<img src="../../images/deep-learning/DQN/02_pipline.png" width="90%" class="bg-white mb-1">

Pipline of DQN
:::

From this image, we can see that at each step $k$, the agent picks an action $u_k$, receives an observation $y_k$ and receives a reward $r_k$, and the environment receives an action $u_k$, emits an observation $y_{k+1}$ and emits a reward $r_{k+1}$. Later, the time increments k ← k + 1. A one step time delay is assumed between executing the action and receiving the observation as well as reward. We assume that the resulting time interval $∆t = t_k − t_{k+1}$ is constant.

```{note}
Key characteristics of RL:
- No supervisor.
- Data-driven.
- Discrete time steps.
- Sequential data stream (not independent and identically distributed data).
- Agent actions affect subsequent data (sequential decision making).
```

##  Basic terminology

### Reward

A reward is a scalar random variable $R_k$ with realizations $r_k$:

- Often it is considered a real-number $r_k \in \mathbb{R}$ or an integer $r_k \in \mathbb{Z}$.
- The reward function (interpreter) may be naturally given or is a design degree of freedom (i.e., can be manipulated).
- It fully indicates how well an RL agent is doing at step $k$.
- The agent’s task is to maximize its reward over time.

```{example}
If we want the machine to flip a pancake:
- Pos. reward: catching the 180◦ rotated pancake
- Neg. reward: droping the pancake on the floor
```

Rewards can have many different flavors and are highly depending on the given problem:

- Actions may have short and/or long term consequences.
- The reward for a certain action may be delayed.
- Examples: Stock trading, strategic board games,...
- Rewards can be positive and negative real values.
- Certain situations (e.g. car hits wall) might lead to a negative reward.
- Exogenous impacts might introduce stochastic reward components.
- Example: A wind gust pushes the helicopter into a tree.

Besides, the RL agent’s learning process is heavily linked with the reward distribution over time. Designing expedient rewards functions is therefore crucially important for successfully applying RL. And often there is no predefined way on how to design the “best reward function”.

### Task-dependent return definitions

#### Episodic tasks

Episodic tasks can naturally break into subsequences (finite horizon), for examples: most games, maze,... And the return becomes a finite sum: $g_k = r_{k+1} + r_{k+2} + ... + r_{N}$. Episodes end at their terminal step $k = N$.

#### Continuing tasks

Continuing tasks lack a natural end (infinite horizon), for example: process control task, and the return should be discounted to prevent infinite numbers: $g_k = r_{k+1} + \gamma r_{k+2} + \gamma^2 r_{k+3} + ... = \sum_{i=1}^{\infty} \gamma^{i} r_{k+i+1}$. Here, $\gamma ∈ {\mathbb{R}|0 ≤ \gamma ≤ 1}$ is the discount rate.

```{note}
From numeric viewpoint:
If $\gamma$ = 1 and $r_k$ > 0 for $k → \infty $, $g_k$ gets infinite.
If $\gamma$ < 1 and $r_k$ is bounded for $k → \infty$, $g_k$ is bounded.

From strategic viewpoint:
If $\gamma$ ≈ 1: agent is farsighted.
If $\gamma$ ≈ 0: agent is shortsighted (only interested in immediate reward).
```

### State

#### Environment state

Random variable $X_k^{e}$ with realizations $x_k^{e}$:

- Internal status representation of the environment, e.g.physical states (car velocity or motor current), game states (current chess board situation). financial states (stock market status).
- Fully, limited or not at all visible by the agent:sometimes even ’foggy’ or uncertain, but in general: $Y_k = f(X_k)$ as the measurable outputs of the environment.
- Continuous or discrete quantity.

#### Agent state

Random variable $X_k^{a}$ with realizations $x_k^{a}$:

- Internal status representation of the agent.
- In general: $x_k^{a} \neq x_k^{e}$, e.g., due to measurement noise or an additional agent’s memory.
- Agent’s condensed information relevant for next action.
- Dependent on internal knowledge / policy representation of the agent.
- Continuous or discrete quantity.

### Action

An action is the agent’s degree of freedom in order to maximize its reward. The major distinctions are: 
- Finite action set (FAS): $u_k ∈ {u_{k,1},u_{k,2}, ...} ∈ \mathbb{R}_m$.
- Continuous action set (CAS): Infinite number of actions: $u_k ∈ \mathbb{R}_m$.
- Deterministic $u_k$ or random Uk variable.
- Often state-dependent and potentially constrained: $u_k ∈ U(x_k) ⊆ \mathbb{R}_m$.

```{note}
Evaluating the state and action spaces (e.g., finite vs. continuous) of a new RL problem should be always the first steps in order to choose appropriate solution algorithms.
```

### Policy

A policy $\pi$ is the agent’s internal strategy on picking actions.
- Deterministic policies: maps state and action directly: $u_k = \pi (x_k)$. 
- Stochastic policies: maps a probability of the action given a state: $\pi(U_k|X_k) = \mathbb{P} [Uk|Xk]$ .
- RL is all about changing $\pi$ over time in order to maximize the expected return.

#### Example

Here is a deterministic policy example: find optimal gains ${K_p, K_i, K_d}$ given the reward $r_k = −e^2_k$
- Agent’s behavior is explicitly determined by ${K_p, K_i, K_d}$.
- Reference value is part of the environment state: $x_k =[y_k y^∗_k]^T$.
- Control output is the agent’s action: $u_k = \pi(x_k|K_p, K_i, K_d)$.

:::{figure-md} 03_policy_example
<img src="../../images/deep-learning/DQN/03_policy_example.png" width="90%" class="bg-white mb-1">

Classical PID control loop with scalar quantities
:::

### Value functions

The state-value function is the expected return being in state $x_k$ following a policy $\pi:v_{\pi}(x_k)$.

Assuming an MDP problem structure the state-value function is $v_{\pi}(x_k) = \mathbb{E}_{\pi} [G_k | X_k = x_k] = \mathbb{E}_{\pi}[\sum_{i=0}^{\infty} \gamma^i R_{k+i+1} | x_k]$.

The action-value function is the expected return being in state $x_k$ taken an action $u_k$ and, thereafter, following a policy $\pi: q_{\pi}(x_k,u_k)$.

Assuming an MDP problem structure the action-value function is $q_{\pi}(x_k, u_k) = \mathbb{E}_{\pi} [G_k | X_k=x_k, U_k=u_k] = \mathbb{E}_{\pi} [\sum_{i=0}^{\infty} \gamma^i R_{k+i+1} | x_k,u_k]$.

A key task in RL is to estimate $v_{\pi}(x_k)$ and $q_{\pi}(x_k,u_k)$ based on sampled data.

### Model

A model predicts what will happen inside an environment.

That could be a state model $\mathcal{P}$: $\mathcal{P} = \mathbb{P}[X_{k+1}=x_{k+1}|X_k=x_k, U_k=u_k]$. Or a reward model $\mathcal{R}$: $\mathcal{R} = \mathbb{P}[R_{k+1}=r_{k+1}|X_k=x_k, U_k=u_k]$. In general, those models could be stochastic (as denoted above) but in some problems relax to a deterministic form. Using data in order to fit a model is a learning problem of its own and often called system identification.

### Exploration and exploitation

In RL the environment is initially unknown. How to act optimal?
- Exploration: find out more about the environment.
- Exploitation: maximize current reward using limited information. 

```{note}
Trade-off problem: what’s the best split between both strategies? 
```

## Main algorithms

In this section, we will take maze as an example. The problem statement is:

- Reward: $r_k = −1$.
- At goal: episode termination.
- Actions: $u_k \in {N, E, S, W}$.
- State: agent’s location.
- Deterministic problem (no stochastic influences).

:::{figure-md} 04_maze
<img src="../../images/deep-learning/DQN/04_maze.png" width="90%" class="bg-white mb-1">

Maze setup statement
:::

### RL-solution by policy

:::{figure-md} 05_maze_policy
<img src="../../images/deep-learning/DQN/05_maze_policy.png" width="90%" class="bg-white mb-1">

Maze solved by policy
:::

Key characteristics:
- For any state there is a direct action command.
- The policy is explicitly available.

### RL-solution by value function

:::{figure-md} 06_maze_valuefunc
<img src="../../images/deep-learning/DQN/06_maze_valuefunc.png" width="90%" class="bg-white mb-1">

Maze solved by value function
:::

Key characteristics:
- The agent evaluates neighboring maze positions by their value.
- The policy is only implicitly available.

### RL-solution by model evaluation

:::{figure-md} 07_maze_modeleval
<img src="../../images/deep-learning/DQN/07_maze_modeleval.png" width="90%" class="bg-white mb-1">

Maze solved by model evaluation
:::

Key characteristics:
- Agent uses internal model of the environment.
- The model is only an estimate (inaccurate, incomplete).
- The agent interacts with the model before.

### RL agent taxonomy

:::{figure-md} 07_taxonomy
<img src="../../images/deep-learning/DQN/07_taxonomy.png" width="90%" class="bg-white mb-1">

Main categories of reinforcement learning algorithms
:::

## Code

This is an example of DQN discrete model.

```{code-cell}
import wandb
import tensorflow as tf
from tensorflow.keras.layers import Input, Dense
from tensorflow.keras.optimizers import Adam

import gym
import argparse
import numpy as np
from collections import deque
import random

tf.keras.backend.set_floatx('float64')
wandb.init(name='DQN', project="deep-rl-tf2")

parser = argparse.ArgumentParser()
parser.add_argument('--gamma', type=float, default=0.95)
parser.add_argument('--lr', type=float, default=0.005)
parser.add_argument('--batch_size', type=int, default=32)
parser.add_argument('--eps', type=float, default=1.0)
parser.add_argument('--eps_decay', type=float, default=0.995)
parser.add_argument('--eps_min', type=float, default=0.01)

args = parser.parse_args()

class ReplayBuffer:
    def __init__(self, capacity=10000):
        self.buffer = deque(maxlen=capacity)
    
    def put(self, state, action, reward, next_state, done):
        self.buffer.append([state, action, reward, next_state, done])
    
    def sample(self):
        sample = random.sample(self.buffer, args.batch_size)
        states, actions, rewards, next_states, done = map(np.asarray, zip(*sample))
        states = np.array(states).reshape(args.batch_size, -1)
        next_states = np.array(next_states).reshape(args.batch_size, -1)
        return states, actions, rewards, next_states, done
    
    def size(self):
        return len(self.buffer)

class ActionStateModel:
    def __init__(self, state_dim, aciton_dim):
        self.state_dim  = state_dim
        self.action_dim = aciton_dim
        self.epsilon = args.eps
        
        self.model = self.create_model()
    
    def create_model(self):
        model = tf.keras.Sequential([
            Input((self.state_dim,)),
            Dense(32, activation='relu'),
            Dense(16, activation='relu'),
            Dense(self.action_dim)
        ])
        model.compile(loss='mse', optimizer=Adam(args.lr))
        return model
    
    def predict(self, state):
        return self.model.predict(state)
    
    def get_action(self, state):
        state = np.reshape(state, [1, self.state_dim])
        self.epsilon *= args.eps_decay
        self.epsilon = max(self.epsilon, args.eps_min)
        q_value = self.predict(state)[0]
        if np.random.random() < self.epsilon:
            return random.randint(0, self.action_dim-1)
        return np.argmax(q_value)

    def train(self, states, targets):
        self.model.fit(states, targets, epochs=1, verbose=0)
    

class Agent:
    def __init__(self, env):
        self.env = env
        self.state_dim = self.env.observation_space.shape[0]
        self.action_dim = self.env.action_space.n

        self.model = ActionStateModel(self.state_dim, self.action_dim)
        self.target_model = ActionStateModel(self.state_dim, self.action_dim)
        self.target_update()

        self.buffer = ReplayBuffer()

    def target_update(self):
        weights = self.model.model.get_weights()
        self.target_model.model.set_weights(weights)
    
    def replay(self):
        for _ in range(10):
            states, actions, rewards, next_states, done = self.buffer.sample()
            targets = self.target_model.predict(states)
            next_q_values = self.target_model.predict(next_states).max(axis=1)
            targets[range(args.batch_size), actions] = rewards + (1-done) * next_q_values * args.gamma
            self.model.train(states, targets)
    
    def train(self, max_episodes=1000):
        for ep in range(max_episodes):
            done, total_reward = False, 0
            state = self.env.reset()
            while not done:
                action = self.model.get_action(state)
                next_state, reward, done, _ = self.env.step(action)
                self.buffer.put(state, action, reward*0.01, next_state, done)
                total_reward += reward
                state = next_state
            if self.buffer.size() >= args.batch_size:
                self.replay()
            self.target_update()
            print('EP{} EpisodeReward={}'.format(ep, total_reward))
            wandb.log({'Reward': total_reward})


def main():
    env = gym.make('CartPole-v1')
    agent = Agent(env)
    agent.train(max_episodes=1000)

if __name__ == "__main__":
    main()
```

## Your turn! 🚀

 TBD.

## Self study

You can refer to this website for further study:

- [Introduction to Reinforcement Learning](https://pylessons.com/CartPole-reinforcement-learning)

## Acknowledgments

Thanks to [Paderborn University - LEA](https://github.com/upb-lea) for creating the open-source course [reinforcement_learning_course_materials](https://github.com/upb-lea/reinforcement_learning_course_materials) and [River](https://github.com/marload) for creating the open-source project [DeepRL-TensorFlow2](https://github.com/marload/DeepRL-TensorFlow2). They inspire the majority of the content in this chapter.

---

```{bibliography}
:filter: docname in docnames
```
