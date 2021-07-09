export type CardColor = 'red' | 'blue' | 'yellow';
export type CardNumber = 1 | 2 | 3 | 4 | 5;

export type Card = {
  id: string;
  color: CardColor;
  num: CardNumber;
};
