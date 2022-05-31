import { Link } from 'react-router-dom'
import styles from './login.module.scss'

const Login = () => {
  return (
    <main className={styles.main}>
      <Link to='/team' className={styles.linkBtn}>
        TEAM
      </Link>
    </main>
  )
}

export default Login
