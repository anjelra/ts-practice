import React from 'react';
import Greetings from './Greeting';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} hello`);
  };

  return (
    <Greetings name="hello" onClick={onClick} />
  );
}

export default App;
