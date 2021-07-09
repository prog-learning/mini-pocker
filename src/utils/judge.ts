import { Card } from '../types';

export const judge = (array: Card[]) => {
  /* ストレートフラッシュ（色がすべて一緒） */
  const anyColor = array[0].color;
  const matchColor = array.filter((card) => card.color === anyColor);
  if (matchColor.length === 5) return 5;

  /* ストレート（数字に重複がない） */
  const numbers = array.map((card) => card.num);
  const setNumbers = new Set(numbers);
  if (setNumbers.size === 5) return 4;

  /* フルハウス（数字が2種類） */
  if (setNumbers.size === 2) return 3;

  /* スリーカード（数字が3種類かつ同じ数字が3つ） */
  let count = {};
  for (var i = 0; i < array.length; i++) {
    const elm = array[i].num;
    count[elm] = (count[elm] || 0) + 1;
  }
  if (Math.max.apply(null, Object.values(count)) === 3 && setNumbers.size === 3)
    return 2;

  /* ツーペア（数字が3種類） */
  if (setNumbers.size === 3) return 1;

  /* 役なし（数字が4種類） */
  if (setNumbers.size === 4) return 0;

  return 100;
};

export const judgeResult = (judgeNum: number) => {
  if (judgeNum === 5) return 'ストレートフラッシュ';
  if (judgeNum === 4) return 'ストレート';
  if (judgeNum === 3) return 'フルハウス';
  if (judgeNum === 2) return 'スリーカード';
  if (judgeNum === 1) return 'ツーペア';
  if (judgeNum === 0) return '役なし（ワンペア）';
  if (judgeNum === 100) return 'Error: 想定していない役';
};
