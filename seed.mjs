// seed.mjs
import mongoose from 'mongoose';
import connectDB from './config/db.mjs';
import PlayerModel from './app/models/player.mjs';
import dotenv from 'dotenv';

const players = [
  {
    idTeam: '665d3b5646b637bf83328410',
    idStyle: '665cf060dc918a998e2cc0b3',
    name: 'Jalen Johnson',
    position: 'SF',
    med: 72,
    age: 19,
    contractLength: 1,
    salary: 6,
    rating: 4.0,
  },
  {
    idTeam: '665d3b5646b637bf83328410',
    idStyle: '665cf060dc918a998e2cc0b3',
    name: 'Sharife Cooper',
    position: 'PG',
    med: 70,
    age: 20,
    contractLength: 1,
    salary: 6,
    rating: 3.8,
  },
  {
    idTeam: '665d3b5646b637bf83328410',
    idStyle: '665cf060dc918a998e2cc0b3',
    name: 'Tre Mann',
    position: 'PG',
    med: 69,
    age: 20,
    contractLength: 1,
    salary: 6,
    rating: 3.7,
  },
  {
    idTeam: '665d3b5646b637bf83328410',
    idStyle: '665cf060dc918a998e2cc0b3',
    name: 'Isaiah Todd',
    position: 'PF',
    med: 68,
    age: 19,
    contractLength: 1,
    salary: 6,
    rating: 3.6,
  },
  {
    idTeam: '665d3b5646b637bf83328410',
    idStyle: '665cf060dc918a998e2cc0b3',
    name: 'Josh Christopher',
    position: 'SG',
    med: 67,
    age: 19,
    contractLength: 1,
    salary: 6,
    rating: 3.5,
  },
  {
    idTeam: '665d3b5646b637bf83328410',
    idStyle: '665cf060dc918a998e2cc0b3',
    name: 'Daishen Nix',
    position: 'PG',
    med: 66,
    age: 19,
    contractLength: 1,
    salary: 6,
    rating: 3.4,
  },
  {
    idTeam: '665d3b5646b637bf83328410',
    idStyle: '665cf060dc918a998e2cc0b3',
    name: 'Herb Jones',
    position: 'SF',
    med: 65,
    age: 22,
    contractLength: 1,
    salary: 6,
    rating: 3.3,
  },
  {
    idTeam: '665d3b5646b637bf83328410',
    idStyle: '665cf060dc918a998e2cc0b3',
    name: 'Jeremiah Robinson-Earl',
    position: 'PF',
    med: 64,
    age: 20,
    contractLength: 1,
    salary: 6,
    rating: 3.2,
  },
  {
    idTeam: '665d3b5646b637bf83328410',
    idStyle: '665cf060dc918a998e2cc0b3',
    name: 'Joel Ayayi',
    position: 'SG',
    med: 63,
    age: 22,
    contractLength: 1,
    salary: 6,
    rating: 3.1,
  },
  {
    idTeam: '665d3b5646b637bf83328410',
    idStyle: '665cf060dc918a998e2cc0b3',
    name: 'B.J. Boston',
    position: 'SG',
    med: 62,
    age: 19,
    contractLength: 1,
    salary: 6,
    rating: 3.0,
  },
];

dotenv.config();

const seedDB = async () => {
  await connectDB();
  try {
    await PlayerModel.insertMany(players);
    console.log('Players inserted');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
