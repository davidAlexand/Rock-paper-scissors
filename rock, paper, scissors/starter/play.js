import { Images } from './images.js';
var hand = new Images();
export class Play {
  game(rock, paper, scisors) {
    let result = '';
    if (rock > scisors) {
      result = 'win rock';
      hand.view('.rightRock');
      hand.opacity('.leftScisors');
      hand.block('.leftPaper,.rightScisors,.leftRock,.rightPaper');
    } else if (paper > rock) {
      result = 'win paper';
      hand.view('.leftPaper');
      hand.opacity('.rightRock');
      hand.block('.leftRock ,.leftScisors,.rightScisors,.rightPaper');
    } else if (scisors > paper) {
      result = 'win scisors';
      hand.view('.leftScisors');
      hand.opacity('.rightPaper');
      hand.block('.leftPaper,.leftRock,.rightScisors,.rightRock');
    } else if (rock > scisors || rock >= 3) {
      console.log('rock');
      result = 'Draw Rock';
      hand.view('.leftRock ,.rightRock ');
      hand.block('.leftScisors,.leftPaper,.rightScisors,.rightPaper');
    } else if (paper > rock || paper > 1) {
      console.log('paper');
      result = 'Draw Paper';
      hand.view('.leftPaper,.rightPaper');
      hand.block('.leftRock ,.leftScisors,.rightRock,.rightScisors');
    } else if (scisors > paper || scisors >= 1) {
      console.log('scissors');
      result = 'Draw scissors';
      hand.view('.leftScisors,.rightScisors');
      hand.block('.leftRock ,.leftPaper ,.rightRock,.rightPaper');
    }
    return result;
  }
}
