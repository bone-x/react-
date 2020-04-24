import styles from './index.less';
import { Button } from 'antd-mobile';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <div className={styles.divs}></div>
      </ul>
      <Button loading>loading button</Button>
    </div>
  );
}
