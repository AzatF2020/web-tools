import { useEffect, useState } from 'react';
import BaseButton from '@/core/components/BaseButton/ui/BaseButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <BaseButton label="Нажми на меня" onClick={() => console.log('hello world')} />
    </>
  );
}

export default App;
