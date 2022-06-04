import styles from './squardBoard.module.scss'

const SquardBoard = () => {
  return (
    <div className={styles.board}>
      <div className={styles.field}>
        <div className={styles.player}>9번</div>
        <div className={styles.player}>10번</div>
      </div>
      <div className={styles.field}>
        <div className={styles.player}>7번</div>
        <div className={styles.player}>8번</div>
        <div className={styles.player}>6번</div>
        <div className={styles.player}>11번</div>
      </div>
      <div className={styles.field}>
        <div className={styles.player}>2번</div>
        <div className={styles.player}>3번</div>
        <div className={styles.player}>5번</div>
        <div className={styles.player}>4번</div>
      </div>
      <div className={styles.field}>
        <div className={styles.player}>1번</div>
      </div>
    </div>
  )
}

export default SquardBoard
