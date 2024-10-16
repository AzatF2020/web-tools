import { useEffect, useState } from 'react';
import { BaseButton } from '@/core/components/BaseButton';
import { BaseInput } from '@/core/components/BaseInput';
import { BaseCheckbox } from './core/components/BaseCheckbox';
import styles from './app.module.css';

function App() {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <div style={{ padding: '1rem' }}>
      <BaseButton variant="primary" label="Кнопка" />
      <BaseInput className={styles.input_base} placeholder="Что-то для теста" />
      <BaseCheckbox
        value="test"
        checked={checked}
        onChange={() => setChecked((isChecked) => (isChecked = !isChecked))}
      />
    </div>
  );
}

export default App;
