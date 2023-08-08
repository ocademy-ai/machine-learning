const databaseOperations = require('./dbOperations');

databaseOperations.createTable('courses', table => {
    table.string('id').unique().notNullable();
    table.string('title').notNullable();
    table.string('source').notNullable();
    table.string('description');
    table.string('objectives');
    table.string('syllabus');
    table.string('author');
    table.string('authorSrc');
    table.string('price');
    table.integer('cost');
    table.string('topic');
    table.integer('duration');
    table.string('platform');
    table.string('platformSrc')
    table.string('type');
    table.integer('cert');
    table.string('language');
    table.string('level');
    table.string('label');
    table.string('license');
    table.string('publishedAt');
    table.timestamps(true, true);
})

databaseOperations.insertRecord('courses', {
  title: "Deep Learning 2017",
  source: "https://uwaterloo.ca/data-analytics/teaching/deep-learning-2017",
  description: "Deep learning attempts to learn representations of data with multiple levels of abstraction. Deep learning usually refers to a set of algorithms and computational models that are composed of multiple processing layers. These methods have significantly improved the state-of-the-art in many domains including, speech recognition, classification, pattern recognition, drug discovery, and genomics.",
  // objectives: "You'll learn how to: * Set up your Jetson Nano and camera * Collect image data for classification models * Annotate image data for regression models * Train a neural network on your data to create your own models * Run inference on the Jetson Nano with the models you create Upon completion, you'll be able to create your own deep learning classification and regression models with the Jetson Nano.",
  // syllabus: "",
  author: "Ali Ghodsi",
  authorSrc: "https://www.linkedin.com/in/ali-ghodsi-525b0a61/",
  price: "free",
  cost: 0,
  topic: "deep learning",
  // duration: 480,
  platform: "University of Waterloo",
  platformSrc: "https://uwaterloo.ca",
  type: "self-paced	",
  cert: 0,
  language: "en_US",
  level: "advanced",
  label: "deep learning,video,machine learning,projects",
  // license: "",
  publishedAt: "2017-09-07",
})