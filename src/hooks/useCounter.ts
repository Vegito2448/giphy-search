import { useState } from 'react';

interface CounterProps {
  initialCounter: number;
}

export const useCounter = ({ initialCounter }: CounterProps) => {

  const [counter, setCounter] = useState(initialCounter);

  const increaseBy = (num: number) => {
    setCounter(prev => Math.max(prev + num, 0));
  };


  return ({
    // Properties
    counter,

    // Methods
    increaseBy

  });
};
