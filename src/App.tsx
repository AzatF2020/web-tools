import { BaseButton } from '@/core/components/BaseButton';
import { BaseInput } from '@/core/components/BaseInput';
import styles from './app.module.css';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <BaseButton variant="primary" label="Нажми на меня" />
      <BaseInput className={styles.input_base} placeholder="Что-то для теста" />
    </div>
  );
}

export default App;
