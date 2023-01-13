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

# Long-short term memory

As we have learned the normal RNNs on the previous lessons, today we are going to use long-short term memory (LSTM) to fix the problems that are induced from the RNN architecture.

```{seealso}
The vanilla LSTM is proposed in 2005, the paper is [Bidirectional LSTM Networks for Improved Phoneme Classification and Recognition](https://link.springer.com/chapter/10.1007/11550907_126), and after that, a lot of paper based on it appeared.
```

## Overview
The essential problems of RNN are vanishing/exploding gradient problems.The gradient vanishing/exploding problem is a common issue in training deep neural networks. This problem occurs when the gradient of the loss function with respect to the weights of the network becomes very small or very large.

There are several possibilities will bring on this kind of problem, for example:
- a poor choice of hyper-parameters,
- a poor architecture,
- a bug in the code.

Luckily, LSTM can use a memory cell for modeling long-range dependencies and avoid vanishing/exploding gradient problems.

First, let's see the architecture of LSTM cell.

:::{figure-md} LSTM cell
<img src="../../images/deep-learning/LSTM/LSTM_cell.png" width="90%" class="bg-white mb-1">

Illustration of LSTM unit {cite}`LSTM_cell`
:::

It looks like the cell of RNN, but there are still some differences between them. The same part is the direction of data, one input and two outputs. 
However, the LSTM cell adds a cell state $c^{<t>}$, which updates with the time. $c^{<t-1>}$ means cell state at previous time step and $c^{<t-1>}$ means cell state at current time step.
The $h^{t}$ is still the activation.

:::{figure-md} LSTM cell state
<img src="../../images/deep-learning/LSTM/cell_state.png" width="90%" class="bg-white mb-1">

LSTM unit of state c {cite}`LSTM_cell_state`
:::

## Special Gates
Then, we take a look at the inside of cell. $\bigodot$ means element-wise multiplication operator, $\bigoplus$ means element-wise addition operator and $\sigma$ means logistic sigmoid activation functions.

Now, we should pay attention to 'Gates'. 

The first is 'Forget Gate' $f$, and it controls which information is remembered, and which is forgotten; can reset the cell state. This function can be written as $f_t = \sigma (W_{fx}x^{<t>} + W_{fh}h^{<t-1>} + b_f)$

Next, 'Input Gate' is $i_t = \sigma(W_{ix}x^{<t>} + W_{ih}h^{<t-1>} + b_i)$ and 'Input Node' is $g_t = tanh(W_{gt}x^{<t>} + W_{gh}x^{<t-1>} + b_g)$.

To brief summarize the previous gates in an expression: $C^{<t>} = (C^{<t-1>} \bigodot f_t) \bigoplus (i_t \bigodot g_t)$. Since $i_t$ is 'Input Gate' and $g_t$ is 'Input Gate', $(i_t \bigodot g_t)$ is for updatting the cell state.

Finally, 'Output Gate' is for updating the values of hidden units: $o_t = \sigma(W_{ox}x^{<t>} + W_{oh}x^{<t-1>} + b_o)$. So the activateion of the current time is $h^{<t>} = o_t \bigodot tanh(C^{<t>})$.

### Code
Here we implement an LSTM model on all a data set of Shakespeare works.

```{code-cell}
import os
import re
import string
import requests
import numpy as np
import collections
import random
import pickle
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.python.framework import ops
ops.reset_default_graph()
```

Start a session.
```{code-cell}
sess = tf.Session()
```

Set RNN Parameters.
```{code-cell}
min_word_freq = 5  # Trim the less frequent words off
rnn_size = 128  # RNN Model size
epochs = 10  # Number of epochs to cycle through data
batch_size = 100  # Train on this many examples at once
learning_rate = 0.001  # Learning rate
training_seq_len = 50  # how long of a word group to consider
embedding_size = rnn_size  # Word embedding size
save_every = 500  # How often to save model checkpoints
eval_every = 50  # How often to evaluate the test sentences
prime_texts = ['thou art more', 'to be or not to', 'wherefore art thou']
```

Download/store Shakespeare data.
```{code-cell}
data_dir = 'temp'
data_file = 'shakespeare.txt'
model_path = 'shakespeare_model'
full_model_dir = os.path.join(data_dir, model_path)
```

Declare punctuation to remove, everything except hyphens and apostrophes.
```{code-cell}
punctuation = string.punctuation
punctuation = ''.join([x for x in punctuation if x not in ['-', "'"]])
```

Make Model Directory.
```{code-cell}
if not os.path.exists(full_model_dir):
    os.makedirs(full_model_dir)
```

Make data directory.
```{code-cell}
if not os.path.exists(data_dir):
    os.makedirs(data_dir)
print('Loading Shakespeare Data')
```

Check if file is downloaded.
```{code-cell}
if not os.path.isfile(os.path.join(data_dir, data_file)):
    print('Not found, downloading Shakespeare texts from www.gutenberg.org')
    shakespeare_url = 'http://www.gutenberg.org/cache/epub/100/pg100.txt'
    # Get Shakespeare text
    response = requests.get(shakespeare_url)
    shakespeare_file = response.content
    # Decode binary into string
    s_text = shakespeare_file.decode('utf-8')
    # Drop first few descriptive paragraphs.
    s_text = s_text[7675:]
    # Remove newlines
    s_text = s_text.replace('\r\n', '')
    s_text = s_text.replace('\n', '')
    
    # Write to file
    with open(os.path.join(data_dir, data_file), 'w') as out_conn:
        out_conn.write(s_text)
else:
    # If file has been saved, load from that file
    with open(os.path.join(data_dir, data_file), 'r') as file_conn:
        s_text = file_conn.read().replace('\n', '')
```

Clean text.
```{code-cell}
print('Cleaning Text')
s_text = re.sub(r'[{}]'.format(punctuation), ' ', s_text)
s_text = re.sub('\s+', ' ', s_text).strip().lower()
```

Build word vocabulary function.
```{code-cell}
def build_vocab(text, min_freq):
    word_counts = collections.Counter(text.split(' '))
    # limit word counts to those more frequent than cutoff
    word_counts = {key: val for key, val in word_counts.items() if val > min_freq}
    # Create vocab --> index mapping
    words = word_counts.keys()
    vocab_to_ix_dict = {key: (i_x+1) for i_x, key in enumerate(words)}
    # Add unknown key --> 0 index
    vocab_to_ix_dict['unknown'] = 0
    # Create index --> vocab mapping
    ix_to_vocab_dict = {val: key for key, val in vocab_to_ix_dict.items()}
    
    return ix_to_vocab_dict, vocab_to_ix_dict
```

Build Shakespeare vocabulary.
```{code-cell}
print('Building Shakespeare Vocab')
ix2vocab, vocab2ix = build_vocab(s_text, min_word_freq)
vocab_size = len(ix2vocab) + 1
print('Vocabulary Length = {}'.format(vocab_size))
```

Sanity Check.
```{code-cell}
assert(len(ix2vocab) == len(vocab2ix))
```

Convert text to word vectors.
```{code-cell}
s_text_words = s_text.split(' ')
s_text_ix = []
for ix, x in enumerate(s_text_words):
    try:
        s_text_ix.append(vocab2ix[x])
    except KeyError:
        s_text_ix.append(0)
s_text_ix = np.array(s_text_ix)
```

Define LSTM RNN Model.
```{code-cell}
class LSTM_Model():
    def __init__(self, embedding_size, rnn_size, batch_size, learning_rate,
                 training_seq_len, vocab_size, infer_sample=False):
        self.embedding_size = embedding_size
        self.rnn_size = rnn_size
        self.vocab_size = vocab_size
        self.infer_sample = infer_sample
        self.learning_rate = learning_rate
        
        if infer_sample:
            self.batch_size = 1
            self.training_seq_len = 1
        else:
            self.batch_size = batch_size
            self.training_seq_len = training_seq_len
        
        self.lstm_cell = tf.contrib.rnn.BasicLSTMCell(self.rnn_size)
        self.initial_state = self.lstm_cell.zero_state(self.batch_size, tf.float32)
        
        self.x_data = tf.placeholder(tf.int32, [self.batch_size, self.training_seq_len])
        self.y_output = tf.placeholder(tf.int32, [self.batch_size, self.training_seq_len])
        
        with tf.variable_scope('lstm_vars'):
            # Softmax Output Weights
            W = tf.get_variable('W', [self.rnn_size, self.vocab_size], tf.float32, tf.random_normal_initializer())
            b = tf.get_variable('b', [self.vocab_size], tf.float32, tf.constant_initializer(0.0))
        
            # Define Embedding
            embedding_mat = tf.get_variable('embedding_mat', [self.vocab_size, self.embedding_size],
                                            tf.float32, tf.random_normal_initializer())
                                            
            embedding_output = tf.nn.embedding_lookup(embedding_mat, self.x_data)
            rnn_inputs = tf.split(axis=1, num_or_size_splits=self.training_seq_len, value=embedding_output)
            rnn_inputs_trimmed = [tf.squeeze(x, [1]) for x in rnn_inputs]
        
        # If we are inferring (generating text), we add a 'loop' function
        # Define how to get the i+1 th input from the i th output
        def inferred_loop(prev):
            # Apply hidden layer
            prev_transformed = tf.matmul(prev, W) + b
            # Get the index of the output (also don't run the gradient)
            prev_symbol = tf.stop_gradient(tf.argmax(prev_transformed, 1))
            # Get embedded vector
            out = tf.nn.embedding_lookup(embedding_mat, prev_symbol)
            return out
        
        decoder = tf.contrib.legacy_seq2seq.rnn_decoder
        outputs, last_state = decoder(rnn_inputs_trimmed,
                                      self.initial_state,
                                      self.lstm_cell,
                                      loop_function=inferred_loop if infer_sample else None)
        # Non inferred outputs
        output = tf.reshape(tf.concat(axis=1, values=outputs), [-1, self.rnn_size])
        # Logits and output
        self.logit_output = tf.matmul(output, W) + b
        self.model_output = tf.nn.softmax(self.logit_output)
        
        loss_fun = tf.contrib.legacy_seq2seq.sequence_loss_by_example
        loss = loss_fun([self.logit_output], [tf.reshape(self.y_output, [-1])],
                        [tf.ones([self.batch_size * self.training_seq_len])])
        self.cost = tf.reduce_sum(loss) / (self.batch_size * self.training_seq_len)
        self.final_state = last_state
        gradients, _ = tf.clip_by_global_norm(tf.gradients(self.cost, tf.trainable_variables()), 4.5)
        optimizer = tf.train.AdamOptimizer(self.learning_rate)
        self.train_op = optimizer.apply_gradients(zip(gradients, tf.trainable_variables()))
        
    def sample(self, sess, words=ix2vocab, vocab=vocab2ix, num=10, prime_text='thou art'):
        state = sess.run(self.lstm_cell.zero_state(1, tf.float32))
        word_list = prime_text.split()
        for word in word_list[:-1]:
            x = np.zeros((1, 1))
            x[0, 0] = vocab[word]
            feed_dict = {self.x_data: x, self.initial_state: state}
            [state] = sess.run([self.final_state], feed_dict=feed_dict)

        out_sentence = prime_text
        word = word_list[-1]
        for n in range(num):
            x = np.zeros((1, 1))
            x[0, 0] = vocab[word]
            feed_dict = {self.x_data: x, self.initial_state: state}
            [model_output, state] = sess.run([self.model_output, self.final_state], feed_dict=feed_dict)
            sample = np.argmax(model_output[0])
            if sample == 0:
                break
            word = words[sample]
            out_sentence = out_sentence + ' ' + word
        return out_sentence
```

Define LSTM Model.
```{code-cell}
lstm_model = LSTM_Model(embedding_size, rnn_size, batch_size, learning_rate,
                        training_seq_len, vocab_size)
```

Tell TensorFlow we are reusing the scope for the testing.
```{code-cell}
with tf.variable_scope(tf.get_variable_scope(), reuse=True):
    test_lstm_model = LSTM_Model(embedding_size, rnn_size, batch_size, learning_rate,
                                 training_seq_len, vocab_size, infer_sample=True)
```

Create model saver.
```{code-cell}
saver = tf.train.Saver(tf.global_variables())
```

Create batches for each epoch.
```{code-cell}
num_batches = int(len(s_text_ix)/(batch_size * training_seq_len)) + 1
```

Split up text indices into subarrays, of equal size.
```{code-cell}
batches = np.array_split(s_text_ix, num_batches)
```

Reshape each split into [batch_size, training_seq_len].
```{code-cell}
batches = [np.resize(x, [batch_size, training_seq_len]) for x in batches]
```

Initialize all variables.
```{code-cell}
init = tf.global_variables_initializer()
sess.run(init)
```

Train model.
```{code-cell}
train_loss = []
iteration_count = 1
for epoch in range(epochs):
    # Shuffle word indices
    random.shuffle(batches)
    # Create targets from shuffled batches
    targets = [np.roll(x, -1, axis=1) for x in batches]
    # Run a through one epoch
    print('Starting Epoch #{} of {}.'.format(epoch+1, epochs))
    # Reset initial LSTM state every epoch
    state = sess.run(lstm_model.initial_state)
    for ix, batch in enumerate(batches):
        training_dict = {lstm_model.x_data: batch, lstm_model.y_output: targets[ix]}
        c, h = lstm_model.initial_state
        training_dict[c] = state.c
        training_dict[h] = state.h
        
        temp_loss, state, _ = sess.run([lstm_model.cost, lstm_model.final_state, lstm_model.train_op],
                                       feed_dict=training_dict)
        train_loss.append(temp_loss)
        
        # Print status every 10 gens
        if iteration_count % 10 == 0:
            summary_nums = (iteration_count, epoch+1, ix+1, num_batches+1, temp_loss)
            print('Iteration: {}, Epoch: {}, Batch: {} out of {}, Loss: {:.2f}'.format(*summary_nums))
        
        # Save the model and the vocab
        if iteration_count % save_every == 0:
            # Save model
            model_file_name = os.path.join(full_model_dir, 'model')
            saver.save(sess, model_file_name, global_step=iteration_count)
            print('Model Saved To: {}'.format(model_file_name))
            # Save vocabulary
            dictionary_file = os.path.join(full_model_dir, 'vocab.pkl')
            with open(dictionary_file, 'wb') as dict_file_conn:
                pickle.dump([vocab2ix, ix2vocab], dict_file_conn)
        
        if iteration_count % eval_every == 0:
            for sample in prime_texts:
                print(test_lstm_model.sample(sess, ix2vocab, vocab2ix, num=10, prime_text=sample))
                
        iteration_count += 1
```

Plot loss over time.
```{code-cell}
plt.plot(train_loss, 'k-')
plt.title('Sequence to Sequence Loss')
plt.xlabel('Generation')
plt.ylabel('Loss')
plt.show()
```

## Stacking LSTM Layers

As we did before in RNN chapter, we can stack simple LSTM layers into a more complex model.

### Code

Here we implement an LSTM model on all a data set of Shakespeare works.
We will stack multiple LSTM models for a more accurate representation of Shakespearean language. We will also use characters instead of words.

```{code-cell}
import os
import re
import string
import requests
import numpy as np
import collections
import random
import pickle
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.python.framework import ops
ops.reset_default_graph()
```

Start a session.
```{code-cell}
sess = tf.Session()
```

Set RNN Parameters.
```{code-cell}
num_layers = 3  # Number of RNN layers stacked
min_word_freq = 5  # Trim the less frequent words off
rnn_size = 128  # RNN Model size, has to equal embedding size
epochs = 10  # Number of epochs to cycle through data
batch_size = 100  # Train on this many examples at once
learning_rate = 0.0005  # Learning rate
training_seq_len = 50  # how long of a word group to consider
save_every = 500  # How often to save model checkpoints
eval_every = 50  # How often to evaluate the test sentences
prime_texts = ['thou art more', 'to be or not to', 'wherefore art thou']
```

Download/store Shakespeare data.
```{code-cell}
data_dir = 'temp'
data_file = 'shakespeare.txt'
model_path = 'shakespeare_model'
full_model_dir = os.path.join(data_dir, model_path)
```

Declare punctuation to remove, everything except hyphens and apostrophes.
```{code-cell}
punctuation = string.punctuation
punctuation = ''.join([x for x in punctuation if x not in ['-', "'"]])
```

Make Model Directory.
```{code-cell}
if not os.path.exists(full_model_dir):
    os.makedirs(full_model_dir)
```

Make data directory.
```{code-cell}
if not os.path.exists(data_dir):
    os.makedirs(data_dir)
    print('Loading Shakespeare Data')
```

Check if file is downloaded.
```{code-cell}
if not os.path.isfile(os.path.join(data_dir, data_file)):
    print('Not found, downloading Shakespeare texts from www.gutenberg.org')
    shakespeare_url = 'http://www.gutenberg.org/cache/epub/100/pg100.txt'
    # Get Shakespeare text
    response = requests.get(shakespeare_url)
    shakespeare_file = response.content
    # Decode binary into string
    s_text = shakespeare_file.decode('utf-8')
    # Drop first few descriptive paragraphs.
    s_text = s_text[7675:]
    # Remove newlines
    s_text = s_text.replace('\r\n', '')
    s_text = s_text.replace('\n', '')
    
    # Write to file
    with open(os.path.join(data_dir, data_file), 'w') as out_conn:
        out_conn.write(s_text)
else:
    # If file has been saved, load from that file
    with open(os.path.join(data_dir, data_file), 'r') as file_conn:
        s_text = file_conn.read().replace('\n', '')
```

Clean text.
```{code-cell}
print('Cleaning Text')
s_text = re.sub(r'[{}]'.format(punctuation), ' ', s_text)
s_text = re.sub('\s+', ' ', s_text).strip().lower()
```

Split up by characters.
```{code-cell}
char_list = list(s_text)
```

Build word vocabulary function.
```{code-cell}
def build_vocab(characters):
    character_counts = collections.Counter(characters)
    # Create vocab --> index mapping
    chars = character_counts.keys()
    vocab_to_ix_dict = {key: (inx + 1) for inx, key in enumerate(chars)}
    # Add unknown key --> 0 index
    vocab_to_ix_dict['unknown'] = 0
    # Create index --> vocab mapping
    ix_to_vocab_dict = {val: key for key, val in vocab_to_ix_dict.items()}
    return ix_to_vocab_dict, vocab_to_ix_dict
```

Build Shakespeare vocabulary.
```{code-cell}
print('Building Shakespeare Vocab by Characters')
ix2vocab, vocab2ix = build_vocab(char_list)
vocab_size = len(ix2vocab)
print('Vocabulary Length = {}'.format(vocab_size))
```

Sanity Check.
```{code-cell}
assert(len(ix2vocab) == len(vocab2ix))
```

Convert text to word vectors.
```{code-cell}
s_text_ix = []
for x in char_list:
    try:
        s_text_ix.append(vocab2ix[x])
    except KeyError:
        s_text_ix.append(0)
s_text_ix = np.array(s_text_ix)
```

Define LSTM RNN Model.
```{code-cell}
class LSTM_Model():
    def __init__(self, rnn_size, num_layers, batch_size, learning_rate,
                 training_seq_len, vocab_size, infer_sample=False):
        self.rnn_size = rnn_size
        self.num_layers = num_layers
        self.vocab_size = vocab_size
        self.infer_sample = infer_sample
        self.learning_rate = learning_rate
        
        if infer_sample:
            self.batch_size = 1
            self.training_seq_len = 1
        else:
            self.batch_size = batch_size
            self.training_seq_len = training_seq_len
        
        self.lstm_cell = tf.contrib.rnn.BasicLSTMCell(rnn_size)
        self.lstm_cell = tf.contrib.rnn.MultiRNNCell([self.lstm_cell for _ in range(self.num_layers)])
        self.initial_state = self.lstm_cell.zero_state(self.batch_size, tf.float32)
        
        self.x_data = tf.placeholder(tf.int32, [self.batch_size, self.training_seq_len])
        self.y_output = tf.placeholder(tf.int32, [self.batch_size, self.training_seq_len])
        
        with tf.variable_scope('lstm_vars'):
            # Softmax Output Weights
            W = tf.get_variable('W', [self.rnn_size, self.vocab_size], tf.float32, tf.random_normal_initializer())
            b = tf.get_variable('b', [self.vocab_size], tf.float32, tf.constant_initializer(0.0))
        
            # Define Embedding
            embedding_mat = tf.get_variable('embedding_mat', [self.vocab_size, self.rnn_size],
                                            tf.float32, tf.random_normal_initializer())
                                            
            embedding_output = tf.nn.embedding_lookup(embedding_mat, self.x_data)
            rnn_inputs = tf.split(axis=1, num_or_size_splits=self.training_seq_len, value=embedding_output)
            rnn_inputs_trimmed = [tf.squeeze(x, [1]) for x in rnn_inputs]
        
        decoder = tf.contrib.legacy_seq2seq.rnn_decoder
        outputs, last_state = decoder(rnn_inputs_trimmed,
                                      self.initial_state,
                                      self.lstm_cell)
        
        # RNN outputs
        output = tf.reshape(tf.concat(axis=1, values=outputs), [-1, rnn_size])
        # Logits and output
        self.logit_output = tf.matmul(output, W) + b
        self.model_output = tf.nn.softmax(self.logit_output)
        
        loss_fun = tf.contrib.legacy_seq2seq.sequence_loss_by_example
        loss = loss_fun([self.logit_output],[tf.reshape(self.y_output, [-1])],
                [tf.ones([self.batch_size * self.training_seq_len])],
                self.vocab_size)
        self.cost = tf.reduce_sum(loss) / (self.batch_size * self.training_seq_len)
        self.final_state = last_state
        gradients, _ = tf.clip_by_global_norm(tf.gradients(self.cost, tf.trainable_variables()), 4.5)
        optimizer = tf.train.AdamOptimizer(self.learning_rate)
        self.train_op = optimizer.apply_gradients(zip(gradients, tf.trainable_variables()))
        
    def sample(self, sess, words=ix2vocab, vocab=vocab2ix, num=20, prime_text='thou art'):
        state = sess.run(self.lstm_cell.zero_state(1, tf.float32))
        char_list = list(prime_text)
        for char in char_list[:-1]:
            x = np.zeros((1, 1))
            x[0, 0] = vocab[char]
            feed_dict = {self.x_data: x, self.initial_state:state}
            [state] = sess.run([self.final_state], feed_dict=feed_dict)

        out_sentence = prime_text
        char = char_list[-1]
        for n in range(num):
            x = np.zeros((1, 1))
            x[0, 0] = vocab[char]
            feed_dict = {self.x_data: x, self.initial_state:state}
            [model_output, state] = sess.run([self.model_output, self.final_state], feed_dict=feed_dict)
            sample = np.argmax(model_output[0])
            if sample == 0:
                break
            char = words[sample]
            out_sentence = out_sentence + char
        return out_sentence
```

Define LSTM Model.
```{code-cell}
lstm_model = LSTM_Model(rnn_size,
                        num_layers,
                        batch_size,
                        learning_rate,
                        training_seq_len,
                        vocab_size)
```

Tell TensorFlow we are reusing the scope for the testing.
```{code-cell}
with tf.variable_scope(tf.get_variable_scope(), reuse=True):
    test_lstm_model = LSTM_Model(rnn_size,
                                 num_layers,
                                 batch_size,
                                 learning_rate,
                                 training_seq_len,
                                 vocab_size,
                                 infer_sample=True)
```

Create model saver.
```{code-cell}
saver = tf.train.Saver(tf.global_variables())
```

Create batches for each epoch.
```{code-cell}
num_batches = int(len(s_text_ix)/(batch_size * training_seq_len)) + 1
```

Split up text indices into subarrays, of equal size.
```{code-cell}
batches = np.array_split(s_text_ix, num_batches)
```

Reshape each split into [batch_size, training_seq_len].
```{code-cell}
batches = [np.resize(x, [batch_size, training_seq_len]) for x in batches]
```

Initialize all variables.
```{code-cell}
init = tf.global_variables_initializer()
sess.run(init)
```

Train model.
```{code-cell}
train_loss = []
iteration_count = 1
for epoch in range(epochs):
    # Shuffle word indices
    random.shuffle(batches)
    # Create targets from shuffled batches
    targets = [np.roll(x, -1, axis=1) for x in batches]
    # Run a through one epoch
    print('Starting Epoch #{} of {}.'.format(epoch+1, epochs))
    # Reset initial LSTM state every epoch
    state = sess.run(lstm_model.initial_state)
    for ix, batch in enumerate(batches):
        training_dict = {lstm_model.x_data: batch, lstm_model.y_output: targets[ix]}
        # We need to update initial state for each RNN cell:
        for i, (c, h) in enumerate(lstm_model.initial_state):
                    training_dict[c] = state[i].c
                    training_dict[h] = state[i].h
        
        temp_loss, state, _ = sess.run([lstm_model.cost, lstm_model.final_state, lstm_model.train_op],
                                       feed_dict=training_dict)
        train_loss.append(temp_loss)
        
        # Print status every 10 gens
        if iteration_count % 10 == 0:
            summary_nums = (iteration_count, epoch+1, ix+1, num_batches+1, temp_loss)
            print('Iteration: {}, Epoch: {}, Batch: {} out of {}, Loss: {:.2f}'.format(*summary_nums))
        
        # Save the model and the vocab
        if iteration_count % save_every == 0:
            # Save model
            model_file_name = os.path.join(full_model_dir, 'model')
            saver.save(sess, model_file_name, global_step=iteration_count)
            print('Model Saved To: {}'.format(model_file_name))
            # Save vocabulary
            dictionary_file = os.path.join(full_model_dir, 'vocab.pkl')
            with open(dictionary_file, 'wb') as dict_file_conn:
                pickle.dump([vocab2ix, ix2vocab], dict_file_conn)
        
        if iteration_count % eval_every == 0:
            for sample in prime_texts:
                print(test_lstm_model.sample(sess, ix2vocab, vocab2ix, num=10, prime_text=sample))
                
        iteration_count += 1
```

Plot loss over time.
```{code-cell}
plt.plot(train_loss, 'k-')
plt.title('Sequence to Sequence Loss')
plt.xlabel('Generation')
plt.ylabel('Loss')
plt.show()
```

## Your turn! 🚀

Practice the Long-Short Term Memory Networks by following this TBD.

## Acknowledgments

Thanks to [Nick](https://github.com/nfmcclure) for creating the open-source project [tensorflow_cookbook](https://github.com/nfmcclure/tensorflow_cookbook) and [Sebastian Raschka](https://github.com/rasbt) for creating the open-source project [stat453-deep-learning-ss20](https://github.com/rasbt/stat453-deep-learning-ss20). They inspire the majority of the content in this chapter.

---

```{bibliography}
:filter: docname in docnames
```