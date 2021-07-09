import { Card } from '../types';
import { judge } from './judge';

describe('役の判定', () => {
  test('ストレートフラッシュ', () => {
    const testCards: Card[] = [
      { id: '123', color: 'red', num: 1 },
      { id: '123', color: 'red', num: 2 },
      { id: '123', color: 'red', num: 3 },
      { id: '123', color: 'red', num: 4 },
      { id: '123', color: 'red', num: 5 },
    ];
    expect(judge(testCards)).toBe(5);
  });

  test('ストレート', () => {
    const testCards: Card[] = [
      { id: '123', color: 'red', num: 1 },
      { id: '123', color: 'red', num: 2 },
      { id: '123', color: 'blue', num: 3 },
      { id: '123', color: 'red', num: 4 },
      { id: '123', color: 'yellow', num: 5 },
    ];
    expect(judge(testCards)).toBe(4);
  });

  test('フルハウス', () => {
    const testCards: Card[] = [
      { id: '123', color: 'blue', num: 1 },
      { id: '123', color: 'red', num: 1 },
      { id: '123', color: 'blue', num: 2 },
      { id: '123', color: 'red', num: 2 },
      { id: '123', color: 'yellow', num: 2 },
    ];
    expect(judge(testCards)).toBe(3);
  });

  test('スリーカード', () => {
    const testCards: Card[] = [
      { id: '123', color: 'blue', num: 1 },
      { id: '123', color: 'red', num: 1 },
      { id: '123', color: 'blue', num: 5 },
      { id: '123', color: 'red', num: 2 },
      { id: '123', color: 'yellow', num: 1 },
    ];
    expect(judge(testCards)).toBe(2);
  });

  test('ツーペア', () => {
    const testCards: Card[] = [
      { id: '123', color: 'blue', num: 1 },
      { id: '123', color: 'red', num: 1 },
      { id: '123', color: 'blue', num: 2 },
      { id: '123', color: 'red', num: 2 },
      { id: '123', color: 'yellow', num: 3 },
    ];
    expect(judge(testCards)).toBe(1);
  });

  test('役なし（ワンペア）', () => {
    const testCards: Card[] = [
      { id: '123', color: 'blue', num: 1 },
      { id: '123', color: 'red', num: 1 },
      { id: '123', color: 'blue', num: 4 },
      { id: '123', color: 'red', num: 2 },
      { id: '123', color: 'yellow', num: 3 },
    ];
    expect(judge(testCards)).toBe(0);
  });
});
