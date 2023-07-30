```python
# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)

# Input data files are available in the read-only "../input/" directory
# For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory

import os
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))

# You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using "Save & Run All" 
# You can also write temporary files to /kaggle/temp/, but they won't be saved outside of the current session

#Installing dependencies
!pip install music21
!apt-get install -y lilypond
```

# <p style="background-color:#97BACB;font-
family:newtimeroman;color:#EBDDD0;font-size:120%;text-align:center;border-
radius:40px 40px;">LSTM'S ALBUM RELEASE</p>

<img src="https://github.com/KarnikaKapoor/Files/blob/main/music1.gif?raw=true">

<p style="font-family:newtimeroman;font-size:120%;color:#97BACB;">In one of my
previous notebooks, I created an RNN that generates lyrics. For such projects,
we feed the network a series of strings and the network predicts the next string
in the series based on the information it is trained on. This time I decided to
use the same principle on the music.
Full disclosure I am not a musician. However, I know a tiny bit of music theory
and play the ukulele for fun. Nonetheless, If you are a musical novice, don't
shy away dive right into this notebook. </p>

<a id='top'></a>
<div class="list-group" id="list-tab" role="tablist">
 <p style="font-family:newtimeroman;color:#97BACB#97BACB;font-size:120%;text-
align:center;border-radius:40px 40px;">TABLE OF CONTENTS</p>

* [1. IMPORTING LIBRARIES](#1)

* [2. LOADING DATA](#2)

* [3. DATA EXPLORATION](#3)

* [4. DATA PREPREPROCESSING](#4)

* [5. MODEL BUILDING](#5)

* [6. EVALUATING MODELS](#6)

* [7. CONCLUSION](#7)

* [8. END](#8)


<a id="1"></a>
# <p style="background-color:#97BACB;font-
family:newtimeroman;color:#EBDDD0;font-size:120%;text-align:center;border-
radius:40px 40px;">IMPORTING LIBRARIES</p>

```python
#Importing Libraries
import tensorflow 
import numpy as np 
import pandas as pd 
from collections import Counter
import random
import IPython
from IPython.display import Image, Audio
import music21
from music21 import *
import matplotlib.pyplot as plt 
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
import tensorflow.keras.backend as K
from tensorflow.keras.optimizers import Adamax
import seaborn as sns
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
%matplotlib inline
import sys
import warnings
warnings.filterwarnings("ignore")
warnings.simplefilter("ignore")
np.random.seed(42)
```

<a id="2"></a>
# <p style="background-color:#97BACB;font-
family:newtimeroman;color:#EBDDD0;font-size:120%;text-align:center;border-
radius:40px 40px;">LOADING DATA</p>

For this project, I will be using MIDI files of classical piano music. The
dataset includes various artists. I will be working with Frédéric Chopin's
compositions.

* First of all, I make a list of all the songs in the Chopin folder parsed as
music21 stream.

* Then I will be creating a function to extract chords and notes out of the data
creating a corpus.

**Laoding and parsing data**

```python
#Loading the list of chopin's midi files as stream 
filepath = "../input/classical-music-midi/chopin/"
#Getting midi files
all_midis= []
for i in os.listdir(filepath):
    if i.endswith(".mid"):
        tr = filepath+i
        midi = converter.parse(tr)
        all_midis.append(midi)
```

Next, I get the components out of these streams of MIDI files. The midi files
only have the piano included as mentioned in the dataset. So the components of
the file would be either piano chords or piano notes.

**Note:** The musical notes are the building blocks of the music. It pertains to
a pitch associated with a specific audio vibration. Western music utilizes
twelve musical notes.

**Chord:** A group of notes that sound good together is a chord.

The music21 stream that was created in the above cell contains both, chords and
notes, we will extract them in the form of notes and obtain a series of notes in
the musical composition.

**The function to get the notes:**

```python
#Helping function        
def extract_notes(file):
    notes = []
    pick = None
    for j in file:
        songs = instrument.partitionByInstrument(j)
        for part in songs.parts:
            pick = part.recurse()
            for element in pick:
                if isinstance(element, note.Note):
                    notes.append(str(element.pitch))
                elif isinstance(element, chord.Chord):
                    notes.append(".".join(str(n) for n in element.normalOrder))

    return notes
#Getting the list of notes as Corpus
Corpus= extract_notes(all_midis)
print("Total notes in all the Chopin midis in the dataset:", len(Corpus))
```

So we have our data in the form of a corpus. A list of strings, if you will.
Each string indicates a musical note. Let us explore this data corpus.

<a id="3"></a>
# <p style="background-color:#97BACB;font-
family:newtimeroman;color:#EBDDD0;font-size:120%;text-align:center;border-
radius:40px 40px;">DATA EXPLORATION</p>

**In this section, I will be:**
* Exploring the data Corpus
* Examine all the notes in the Corpus
* Simplifying our Corpus to Built a working model

**Let us have a look at the first 50 values in our corpus**

```python
print("First fifty values in the Corpus:", Corpus[:50])
```

All these values indicate the notes, as mentioned above.

**Printing the music sheet**

```python
#First Lets write some functions that we need to look into the data
def show(music):
    display(Image(str(music.write("lily.png"))))
    
def chords_n_notes(Snippet):
    Melody = []
    offset = 0 #Incremental
    for i in Snippet:
        #If it is chord
        if ("." in i or i.isdigit()):
            chord_notes = i.split(".") #Seperating the notes in chord
            notes = [] 
            for j in chord_notes:
                inst_note=int(j)
                note_snip = note.Note(inst_note)            
                notes.append(note_snip)
                chord_snip = chord.Chord(notes)
                chord_snip.offset = offset
                Melody.append(chord_snip)
        # pattern is a note
        else: 
            note_snip = note.Note(i)
            note_snip.offset = offset
            Melody.append(note_snip)
        # increase offset each iteration so that notes do not stack
        offset += 1
    Melody_midi = stream.Stream(Melody)   
    return Melody_midi

Melody_Snippet = chords_n_notes(Corpus[:100])
show(Melody_Snippet)
```

**Playing the above sheet music**

*As I could not play a midi file on the Kaggle interface, I have created a
".wav" filetype of the same outside of this code. I am using it to create an
audio interface. Let us have a listen to the data corpus.*

```python
#to play audio or corpus
print("Sample Audio From Data")
IPython.display.Audio("../input/music-generated-lstm/Corpus_Snippet.wav") 
```

**Examine all the notes in the Corpus**

```python
#Creating a count dictionary
count_num = Counter(Corpus)
print("Total unique notes in the Corpus:", len(count_num))
```

```python
#Exploring the notes dictionary
Notes = list(count_num.keys())
Recurrence = list(count_num.values())
#Average recurrenc for a note in Corpus
def Average(lst):
    return sum(lst) / len(lst)
print("Average recurrenc for a note in Corpus:", Average(Recurrence))
print("Most frequent note in Corpus appeared:", max(Recurrence), "times")
print("Least frequent note in Corpus appeared:", min(Recurrence), "time")
```

Clearly, there are some very rare notes in the melody; some so rare that it was
played only once in the whole data. This would create a lot of problems. (I did
run into most of them while writing this piece)
To spare us the error reports, let us have a look at the frequency of the notes.
And for simplicity, I shall be eliminating some of the least occurring notes. I
am sure Chopin wouldn't mind me messing with his masterpiece for science or
would he? Either way, I may never know!

```python
# Plotting the distribution of Notes
plt.figure(figsize=(18,3),facecolor="#97BACB")
bins = np.arange(0,(max(Recurrence)), 50) 
plt.hist(Recurrence, bins=bins, color="#97BACB")
plt.axvline(x=100,color="#DBACC1")
plt.title("Frequency Distribution Of Notes In The Corpus")
plt.xlabel("Frequency Of Chords in Corpus")
plt.ylabel("Number Of Chords")
plt.show()
```

I have decided, I will be taking out the notes that were played less than 100
times. I mean, if Chopin liked them he would have played it a lot more often. So
I create a list of rare notes in the next section.

```python
#Getting a list of rare chords
rare_note = []
for index, (key, value) in enumerate(count_num.items()):
    if value < 100:
        m =  key
        rare_note.append(m)
        
print("Total number of notes that occur less than 100 times:", len(rare_note))
```

```python
#Eleminating the rare notes
for element in Corpus:
    if element in rare_note:
        Corpus.remove(element)

print("Length of Corpus after elemination the rare notes:", len(Corpus))
```

Finally! This is the cleaned data Corpus that I will be using for the music
generation.
In the next section, I will be preprocessing this Corpus for the training model.

The workflow for this project involves,

<p style="background-color:#EBDDD0;font-family:newtimeroman;color:#444160;text-
align:center;font-size:120%;">Loading Data ➡️ Preprocessing ➡️ Building Mapping
Dictionary ➡️ Building Model ➡️ Generating Music</p>

As I have loaded and explored the data,  I will proceed further by pre-
processing the text.


<a id="4"></a>
# <p style="background-color:#97BACB;font-
family:newtimeroman;color:#EBDDD0;font-size:120%;text-align:center;border-
radius:40px 40px;">DATA PREPROCESSING</p>

Notes are basically sound waves. In music, we have certain specific combinations
of Frequency and Wavelength standardized as said notes. Our Corpus has the name
of that note. As we parsed the data at the time of loading we took the help of
the music21 library (by nice people at MIT); The library fetches Frequency,
Wavelength, duration etc for the given notes.



**In this section, I will be performing the following:**

**Creating a dictionary:** Creating a dictionary to map the notes and their
indices. We have the note's name as a string the Corpus. For the computer, these
names are just a symbol. So we create a dictionary to map each unique note in
our Corpus to a number. And vice versa to retrieve the values at the time of
prediction. This will be used to encode and decode the information going in and
getting out of the RNN.

**Encoding and Splitting the corpus:** Encoding and splitting the corpus into
smaller sequences of equal length: At this point, the Corpus contain notes. We
will encode this corpus and create small sequences of equal lengths of features
and the corresponding targets. Each feature and target will contain the mapped
index in the dictionary of the unique characters they signify.

**Assigning X and y:** The labels are then resized and normalized. Whereas the
targets are one-hot encoded. Ready to be sent to the RNN for the training, but
before that let us built the RNN model.

**Splitting Train and Seed datasets** To create music we will need to send some
input to the RNN. For that, we will set aside a part of the data as seeds. We
could have trained it all but I am no musician to come up with an input seed
value.

**Creating a list of sorted unique characters**

```python
# Storing all the unique characters present in my corpus to bult a mapping dic. 
symb = sorted(list(set(Corpus)))

L_corpus = len(Corpus) #length of corpus
L_symb = len(symb) #length of total unique characters

#Building dictionary to access the vocabulary from indices and vice versa
mapping = dict((c, i) for i, c in enumerate(symb))
reverse_mapping = dict((i, c) for i, c in enumerate(symb))

print("Total number of characters:", L_corpus)
print("Number of unique characters:", L_symb)
```

**Encoding and Splitting the Corpus as Labels and Targets**

```python
#Splitting the Corpus in equal length of strings and output target
length = 40
features = []
targets = []
for i in range(0, L_corpus - length, 1):
    feature = Corpus[i:i + length]
    target = Corpus[i + length]
    features.append([mapping[j] for j in feature])
    targets.append(mapping[target])
    
    
L_datapoints = len(targets)
print("Total number of sequences in the Corpus:", L_datapoints)
```

```python
# reshape X and normalize
X = (np.reshape(features, (L_datapoints, length, 1)))/ float(L_symb)
# one hot encode the output variable
y = tensorflow.keras.utils.to_categorical(targets) 
```

**Splitting Train and Seed datasets**

```python
#Taking out a subset of data to be used as seed
X_train, X_seed, y_train, y_seed = train_test_split(X, y, test_size=0.2, random_state=42)
```

<a id="5"></a>
# <p style="background-color:#97BACB;font-
family:newtimeroman;color:#EBDDD0;font-size:120%;text-align:center;border-
radius:40px 40px;">MODEL BUILDING</p>

I will be employing an LSTM for this project.

**Following steps are involved in the model building**

* Initialising the Model
* Defining by adding layers
* Compiling the Model
* Training the Model

**Building the Model**

```python
#Initialising the Model
model = Sequential()
#Adding layers
model.add(LSTM(512, input_shape=(X.shape[1], X.shape[2]), return_sequences=True))
model.add(Dropout(0.1))
model.add(LSTM(256))
model.add(Dense(256))
model.add(Dropout(0.1))
model.add(Dense(y.shape[1], activation='softmax'))
#Compiling the model for training  
opt = Adamax(learning_rate=0.01)
model.compile(loss='categorical_crossentropy', optimizer=opt)

```

```python
#Model's Summary               
model.summary()
```

```python
#Training the Model
history = model.fit(X_train, y_train, batch_size=256, epochs=200)
```

<a id="6"></a>
# <p style="background-color:#97BACB;font-
family:newtimeroman;color:#EBDDD0;font-size:120%;text-align:center;border-
radius:40px 40px;">EVALUATING MODELS</p>

Now that I have my model trained on the MIDI files of piano music, let us see
how it performs.

**To evaluate my model, I shall be having a look at:**
* The performance of the model via Learning Curves
* The melody created

**Plotting the learning curve for the loss function**

```python
#Plotting the learnings 
history_df = pd.DataFrame(history.history)
fig = plt.figure(figsize=(15,4), facecolor="#97BACB")
fig.suptitle("Learning Plot of Model for Loss")
pl=sns.lineplot(data=history_df["loss"],color="#444160")
pl.set(ylabel ="Training Loss")
pl.set(xlabel ="Epochs")
```

**Generating the Melody**

A function to obtain the generated music

```python
def Malody_Generator(Note_Count):
    seed = X_seed[np.random.randint(0,len(X_seed)-1)]
    Music = ""
    Notes_Generated=[]
    for i in range(Note_Count):
        seed = seed.reshape(1,length,1)
        prediction = model.predict(seed, verbose=0)[0]
        prediction = np.log(prediction) / 1.0 #diversity
        exp_preds = np.exp(prediction)
        prediction = exp_preds / np.sum(exp_preds)
        index = np.argmax(prediction)
        index_N = index/ float(L_symb)   
        Notes_Generated.append(index)
        Music = [reverse_mapping[char] for char in Notes_Generated]
        seed = np.insert(seed[0],len(seed[0]),index_N)
        seed = seed[1:]
    #Now, we have music in form or a list of chords and notes and we want to be a midi file.
    Melody = chords_n_notes(Music)
    Melody_midi = stream.Stream(Melody)   
    return Music,Melody_midi


#getting the Notes and Melody created by the model
Music_notes, Melody = Malody_Generator(100)
show(Melody)
```

This sure looks like music! To check if it sounds like music we have to listen
to the MIDI file. Playing midi is crumblesome. I have saved and converted a few
generated melodies to ".wav" format outside of this notebook. So let us have a
listen.

**Melody Generated Sample 1**

```python
#To save the generated melody
Melody.write('midi','Melody_Generated.mid')
#to play audio or corpus
IPython.display.Audio("../input/music-generated-lstm/Melody_Generated 2.wav")
```

**Melody Generated Sample 2**

```python
#to play audio or corpus
IPython.display.Audio("../input/music-generated-lstm/Melody_Generated_1.wav")
```

<a id="7"></a>
# <p style="background-color:#97BACB;font-
family:newtimeroman;color:#EBDDD0;font-size:120%;text-align:center;border-
radius:40px 40px;">CONCLUSION</p>
<p style="font-family:newtimeroman;font-size:120%;color:#97BACB">On inspecting
the generated melody, I am quite satisfied. Unlike the lyrics project, The music
doesn't have to hold true to the grammatical syntax. On the question, is it a
good musical composition; is it artsy? Did our LSTM create a masterpiece? I
don't know! I am not a connoisseur of music. I used a basic RNN and it worked
alright.</p>

<img src="https://github.com/KarnikaKapoor/Files/blob/main/music2.gif?raw=true">


<p style="font-family:newtimeroman;font-size:120%;color:#97BACB">So I decided to
let the model have the fame it deserved. I am releasing the album! It is out on
my blog. Don't forget to get your copy!</p>

**Album** [Down The Uncanny Valley: Album
Release](https://karnikakapoor.blogspot.com/2021/10/down-uncanny-valley.html)

**Some Useful Resources:**

[The Unreasonable Effectiveness of Recurrent Neural
Networks](http://karpathy.github.io/2015/05/21/rnn-effectiveness/)

[MuseNet](https://openai.com/blog/musenet/)

[Lyrics Generator](https://www.kaggle.com/karnikakapoor/lyrics-generator-rnn)


**<span style="color:#DBACC1;"> If you liked this Notebook, please do
upvote.</span>**

**<span style="color:#DBACC1;"> If you have any questions, feel free to
comment!</span>**

**<span style="color:#DBACC1;"> Best Wishes!</span>**

<a id="8"></a>
# <p style="background-color:#97BACB;font-
family:newtimeroman;color:#EBDDD0;font-size:120%;text-align:center;border-
radius:40px 40px;">END</p>
