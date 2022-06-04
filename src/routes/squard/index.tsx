import styles from './squard.module.scss'
import SquardBoard from './squardBoard'

const Squard = () => {
  return (
    <main className={styles.main}>
      <div>
        <h1>스쿼드 보드</h1>
      </div>
      <div>
        <SquardBoard />
      </div>
    </main>
  )
}

export default Squard
