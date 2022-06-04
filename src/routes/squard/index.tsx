import styles from './squard.module.scss'
import SquardBoard from './squardBoard'

const Squard = () => {
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <h1>스쿼드 보드</h1>
      </div>
      <div className={styles.board}>
        <SquardBoard />
      </div>
    </main>
  )
}

export default Squard
