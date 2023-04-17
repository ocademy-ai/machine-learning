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

```{note}
If we want the machine to flip a pancake:
- Pos. reward: catching the 180◦ rotated pancake
- Neg. reward: droping the pancake on the floor
```

Rewards can have many different flavors and are highly dependent on the given problem:

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
import tensorflow as tf
import maze
import maze_collection as mc
import random as r
import numpy as np
import matplotlib.pyplot as plt
```

```{code-cell}
def main(output_file_name):
    # housekeeping
    m = maze.Maze(mc.T_maze)
    sess = tf.Session()
    learning_rate = 0.0001
    num_memory_units = 4
    graphical = True
    file_output = True

    if file_output is True:
        # output to file (this is set to overwrite!)
        file = open(output_file_name + ".txt", "w")
        file.write("Iter\tWon?\tSteps\tAll steps\n")

    # neural network structure
    x = tf.placeholder(tf.float32, [None, 2+num_memory_units])

    W1 = tf.Variable(tf.truncated_normal([2+num_memory_units, 6]))
    b1 = tf.Variable(tf.truncated_normal([1, 6]))

    h1 = tf.sigmoid(tf.matmul(x, W1) + b1)

    W2 = tf.Variable(tf.truncated_normal([6, 6]))
    b2 = tf.Variable(tf.truncated_normal([1, 6]))

    h2 = tf.sigmoid(tf.matmul(h1, W2) + b2)

    W3 = tf.Variable(tf.truncated_normal([6, 4+num_memory_units]))
    b3 = tf.Variable(tf.truncated_normal([1, 4+num_memory_units]))

    output_final_layer_before_activation_function = tf.matmul(h2, W3) + b3
    left_output = output_final_layer_before_activation_function[:, 0:4]
    right_output = output_final_layer_before_activation_function[:, 4:]
    y = tf.nn.softmax(left_output)
    memory_units = tf.sigmoid(right_output)

    sess.run(tf.global_variables_initializer())

    weights_list = [W1, b1, W2, b2, W3, b3]

    # gradients (i.e. dp/dw) for backpropagation
    dprobability0_dweights = tf.gradients(y[:, 0], weights_list)
    dprobability1_dweights = tf.gradients(y[:, 1], weights_list)
    dprobability2_dweights = tf.gradients(y[:, 2], weights_list)
    dprobability3_dweights = tf.gradients(y[:, 3], weights_list)

    # weight update operation
    ph_delta_weights_list = [tf.placeholder(tf.float32, w.get_shape()) for w in weights_list]
    update_weights = [tf.assign(weights_list[i], weights_list[i] + ph_delta_weights_list[i])
                      for i in range(len(weights_list))]

    # training setup
    maxSteps = 20
    iteration = 0
    maxIterations = 10000

    steps_taken = np.zeros(maxIterations)

    # Plot display -----------------------------------------------------------------------------------------------------
    if graphical is True:
        spread = 50

        plt.ion()
        fig = plt.figure("Maze solver")
        ax = fig.add_subplot(111)
        ax.axis([0, maxIterations/spread + 1, 0, maxSteps + 1])
        plt.ylabel("Steps taken")
        plt.xlabel("Iterations ({})".format(spread))
        ax.plot([0], [0])
        ax.grid()

        iterations = []
        duration_history = []

    # Looping through iterations
    while iteration < maxIterations:
        # Current step
        step = 0

        # All outputs and dp_dthetas for this iteration
        probabilities = np.zeros(maxSteps)
        dp_dthetas = list()

        memory = np.zeros(num_memory_units)

        movements = ""

        while m.won is False and step < maxSteps:
            # Defining neural network input
            input_values = np.array([m.normal_x(), m.normal_y()])
            input_values = np.append(input_values, memory)

            # Running input through the neural network
            [output, dp0dtheta, dp1dtheta, dp2dtheta, dp3dtheta, output_memory] =\
                sess.run([y, dprobability0_dweights, dprobability1_dweights, dprobability2_dweights,
                          dprobability3_dweights, memory_units],
                         feed_dict={x: [input_values]})

            # Random value between 0 and 1, inclusive on both sides
            result = r.uniform(0, 1)

            if result <= output[0][0]:
                # Up
                m.move_up()
                probabilities[step] = output[0][0]
                dp_dthetas.append(dp0dtheta)
                movements += "U"
            elif result <= output[0][0] + output[0][1]:
                # Right
                m.move_right()
                probabilities[step] = output[0][1]
                dp_dthetas.append(dp1dtheta)
                movements += "R"
            elif result <= output[0][0] + output[0][1] + output[0][2]:
                # Down
                m.move_down()
                probabilities[step] = output[0][2]
                dp_dthetas.append(dp2dtheta)
                movements += "D"
            elif result <= output[0][0] + output[0][1] + output[0][2] + output[0][3]:
                # Left
                m.move_left()
                probabilities[step] = output[0][3]
                dp_dthetas.append(dp3dtheta)
                movements += "L"

            memory = output_memory[0]
            step += 1

        print("Iteration #{:05d}\tWon: {}\tSteps taken: {:04d}\tSteps: {}".format(iteration, m.won,
                                                                                  step, movements))
        if file_output is True:
            file.write("{:05d}\t{}\t{:04d}\t{}\n".format(iteration, m.won, step, movements))

        # Assigning a reward
        reward = maxSteps - (2 * step)  # linear reward function
        #reward = maxSteps - pow(step, 2)  # power reward function

        # Applying weight change for every step taken, based on the reward given at the end
        for i in range(step):
            deltaTheta = [(learning_rate * (1 / probabilities[i]) * reward) * dp_dthetas[i][j]
                          for j in range(len(weights_list))]

            sess.run(update_weights, feed_dict=dict(zip(ph_delta_weights_list, deltaTheta)))

        steps_taken[iteration] = step
        if graphical is True and iteration % spread == 0:
            steps_mean = np.mean(steps_taken[iteration-spread:iteration+1])
            iterations = iterations+[iteration/spread]
            duration_history = duration_history+[steps_mean]
            del ax.lines[0]
            ax.plot(iterations, duration_history, 'b-', label='Traj1')
            plt.draw()
            plt.pause(0.001)

        m.reset()

        iteration += 1
    if file_output is True:
        file.close()
    if graphical is True:
        if file_output is True:
            plt.savefig(output_file_name + ".png")
        else:
            plt.show()
        #input("Press [enter] to continue.")
        plt.close()
    sess.close()
```

```{code-cell}
if __name__ == "__main__":
    for run in range(15, 25):
        number = "{:05d}".format(run)
        main("./output/T_fixed-memory-linear_reward/" + number)
```

## Your turn! 🚀

 TBD.

## Self study

You can refer to this website for further study:

- [Introduction to Reinforcement Learning](https://pylessons.com/CartPole-reinforcement-learning)

## Acknowledgments

Thanks to [Paderborn University - LEA](https://github.com/upb-lea) for creating the open-source course [reinforcement_learning_course_materials](https://github.com/upb-lea/reinforcement_learning_course_materials) and [Gergely Pacsuta](https://github.com/pacsuta) for creating the open-source project [tf-nn-maze-solver](https://github.com/pacsuta/tf-nn-maze-solver). They inspire the majority of the content in this chapter.

---

```{bibliography}
:filter: docname in docnames
```
