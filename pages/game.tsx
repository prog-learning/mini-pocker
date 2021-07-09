import { useState, VFC } from 'react';
import Router from 'next/router';
import { Card } from '../src/types';
import { shuffle } from '../src/utils/shuffle';
import { HandCards } from '../src/components/HandCards';
import { nanoid } from 'nanoid';
import { judge, judgeResult } from '../src/utils/judge';
import { Box } from '@fower/react';
import { createCards } from '../src/utils/createCards';

const Game: VFC = () => {
  const [round, setRound] = useState(0); // ラウンド
  const [betTime, setBetTime] = useState(true); // 準備中の判定
  const [cards, setCards] = useState<Card[]>([]); // 山札
  const [handCards, setHandCards] = useState<Card[]>([]); // 手札
  const [drowCount, setDrowCount] = useState(0); // 引き直した回数
  const [judged, setJudged] = useState(false); // 判定
  const [point, setPoint] = useState(10); // 持ち点
  const [bet, setBet] = useState(1); // 賭ける点

  /* BETする */
  const incrementBet = () => {
    if (bet < point) {
      setBet((prev) => prev + 1);
    }
  };
  const decrementBet = () => {
    if (bet > 1) {
      setBet((prev) => prev - 1);
    }
  };

  /* カードの生成 */
  const dealCards = () => {
    const cards = createCards();
    setCards(cards);
    setHandCards(cards.slice(0, 5));
  };

  /* ラウンドの開始 */
  const startRound = () => {
    if (round > 0) {
    }
    setBetTime(false);
    dealCards();
    setPoint((prev) => prev - bet);
    setRound((prev) => prev + 1);
  };

  const prepRound = () => {
    if (point < 1) return alert('game over');
    setBetTime(true);
    setBet(1);
    setHandCards([]);
    setDrowCount(0);
    setJudged(false);
  };

  const changeCard = (cardId: string) => {
    if (drowCount < 2) {
      const newCards = handCards.filter((card) => card.id !== cardId);
      newCards.push(cards[drowCount + 5]);
      setDrowCount((prev) => prev + 1);
      setHandCards(newCards);
    }
    if (drowCount === 1) {
      setJudged(true);
    }
  };

  const judgeRound = () => {
    setJudged(true);
    setPoint(bet * judge(handCards) + point);
  };

  console.log(cards);
  console.log(drowCount);

  return (
    <div>
      <Box as='h1' toCenter>
        GAME ON!!
      </Box>
      <button onClick={() => Router.push('/')}>Go Home</button>
      <Box>POINT: {point}</Box>
      <Box>BET: {bet}</Box>
      {betTime && (
        <>
          <button onClick={incrementBet}>+</button>
          <button onClick={decrementBet}>-</button>
        </>
      )}
      {betTime ? (
        <button onClick={startRound}>
          {round > 0 ? 'nextRound' : 'startRound'}
        </button>
      ) : (
        <button onClick={prepRound}>prepRound</button>
      )}
      {!betTime && drowCount < 2 && (
        <button onClick={judgeRound}>judgeRound</button>
      )}
      <HandCards handCards={handCards} changeCard={changeCard} />
      {judged && (
        <Box toCenter column border={2} borderBlue700 roundedMedium p={12}>
          <h3>{judgeResult(judge(handCards))}</h3>
          <p>{point}P</p>
        </Box>
      )}
    </div>
  );
};

export default Game;
