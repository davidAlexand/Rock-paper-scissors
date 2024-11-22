('use strict');
import { Play } from './play.js';
const gameHand = new Play();
document.querySelector('.check').addEventListener('click', function () {
  let rock = Math.trunc(Math.random() * 5) + 1;
  let paper = Math.trunc(Math.random() * 5) + 1;
  let scisors = Math.trunc(Math.random() * 5) + 1;
  let result = gameHand.game(rock, paper, scisors);
  document.querySelector('.message').textContent = result;
});
