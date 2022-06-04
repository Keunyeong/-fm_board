import styles from './squardBoard.module.scss'

const SquardBoard = () => {
  return (
    <div className={styles.board}>
      <div className={styles.field}>
        <div className={styles.player}>9</div>
        <div className={styles.player}>10</div>
      </div>
      <div className={styles.field}>
        <div className={styles.player}>7</div>
        <div className={styles.player}>8</div>
        <div className={styles.player}>6</div>
        <div className={styles.player}>11</div>
      </div>
      <div className={styles.field}>
        <div className={styles.player}>2</div>
        <div className={styles.player}>3</div>
        <div className={styles.player}>5</div>
        <div className={styles.player}>4</div>
      </div>
      <div className={styles.field}>
        <div className={styles.player}>1</div>
      </div>
    </div>
  )
}

export default SquardBoard
