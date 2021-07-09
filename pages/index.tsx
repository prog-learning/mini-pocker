import Router from 'next/router';
import { VFC } from 'react';

const Home: VFC = () => {
  return (
    <div>
      <h1>MINI POKER</h1>
      <button onClick={() => Router.push('/game')}>Game Start</button>
    </div>
  );
};

export default Home;
