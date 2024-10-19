import { useEffect, useState } from 'react';
import { BaseButton } from '@/core/components/BaseButton';
import { BaseInput } from '@/core/components/BaseInput';
import { BaseCheckbox } from '@/core/components/BaseCheckbox';
import { RadioItem } from '@/core/components/RadioGroup';
import styles from './app.module.css';

function App() {
  const [checked, setChecked] = useState(true);
  const [checkedRadio, setCheckedRadio] = useState('');

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <div style={{ padding: '1rem' }}>
      <BaseButton variant="primary" label="Кнопка" />
      <BaseInput className={styles.input_base} placeholder="Что-то для теста" />
      <div style="display: flex">
        <BaseCheckbox
          value="test"
          checked={checked}
          onChange={() => setChecked((isChecked) => (isChecked = !isChecked))}
        />
        <RadioItem
          checked={checkedRadio === 'test'}
          value="test"
          onChange={(event) => setCheckedRadio(event.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
