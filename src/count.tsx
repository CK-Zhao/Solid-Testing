import { createSignal, Component } from 'solid-js';

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div role='button' onClick={() => setCount(count() + 1)}>
      Count: {count()}
    </div>
  );
};
