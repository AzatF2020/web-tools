import { BaseButton } from '@/core/components/BaseButton';
import { BaseInput } from '@/core/components/BaseInput';
import styles from './app.module.css';

function App() {
  return (
    <>
      <BaseButton variant="primary" label="Нажми на меня" />
      <BaseInput className={styles.input_base} />
    </>
  );
}

export default App;
