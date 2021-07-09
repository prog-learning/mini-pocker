import { Box } from '@fower/react';
import { VFC } from 'react';
import { Card } from '../types';

type HandCardsProps = {
  handCards: Card[];
  changeCard: (cardId: string) => void;
};

export const HandCards: VFC<HandCardsProps> = ({ handCards, changeCard }) => {
  return (
    <Box toCenter>
      {handCards.map((card) => (
        <Box
          key={`${card.color}-${card.num}`}
          onClick={() => changeCard(card.id)}
          w={100}
          h={150}
          rounded={8}
          m={8}
          bgRed700={card.color === 'red'}
          bgBlue700={card.color === 'blue'}
          bgYellow700={card.color === 'yellow'}
          white
          toCenter
          text6XL
          fontBold
          cursorPointer
          transitionCommon
          easeInOut
          duration-500
          translateY-10
          scale-110--hover
          shadow--hover
        >
          {card.num}
        </Box>
      ))}
    </Box>
  );
};
