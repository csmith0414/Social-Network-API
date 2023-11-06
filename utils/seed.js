// Import
const { User, Thought, Reaction } = require('../models');
const mongoose = require('mongoose');

const connection = require('../config/connection');

// Seed data
const userSeed = [
  {
    username: 'JonDoe',
    email: 'jdoe@gmail.com',
    thought: [],
  },
  {
    username: 'csmith',
    email: 'csmith@yahoo.com',
    thought: [],
  },
  {
    username: 'JaneJackson',
    email: 'jjackson@hotmail.com',
    thought: [],
  },
  {
    username: 'Bobby',
    email: 'bobhanks@gmail.com',
    thought: [],
  },
];

const thoughtSeed = 
    [{
        thoughtText: 'Is the Earth flat?',
        username: 'Bobby'
    },
    {
        thoughtText: 'PB&J sandwiches are the best sandwiches',
        username: 'JaneJackson'
    },
    {
        thoughtText: 'The best part of waking up is coffee in your cup',
        username: 'csmith'
    }
]

console.log(connection);

// Connects to server
connection.once('open', async () => {
  console.log('connected');

  // Adds seed data to database
  const users = userSeed;
  const thoughts = thoughtSeed;

// Drop existing users and thoughts
  await User.deleteMany({});
  await Thought.deleteMany({});
  
  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

  console.table(users, thoughts);
  console.info('Seeding complete successfully');
  process.exit(0);
});