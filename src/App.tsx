import { BaseButton } from '@/core/components/BaseButton';
import { BaseInput } from '@/core/components/BaseInput';
import styles from './app.module.css';

function App() {
  return (
    <>
      <BaseButton variant="primary" label="Нажми на меня" size="sm" />
      <BaseInput className={styles.input_base} size="sm" />
    </>
  );
}

export default App;
