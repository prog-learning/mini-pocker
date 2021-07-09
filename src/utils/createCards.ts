import { nanoid } from 'nanoid';
import { Card, CardColor, CardNumber } from '../types';

const shuffle = (array: Card[]) => {
  for (let i = array.length; 1 < i; i--) {
    const k = Math.floor(Math.random() * i);
    [array[k], array[i - 1]] = [array[i - 1], array[k]];
  }
  return array;
};

export const createCards = () => {
  const cards: Card[] = [];

  for (let num: CardNumber = 1; num < 6; num++) {
    ['red', 'blue', 'yellow'].forEach((color: CardColor) => {
      cards.push({ id: nanoid(8), color, num });
    });
  }
  return shuffle(cards);
};
