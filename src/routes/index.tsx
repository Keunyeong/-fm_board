import { Route, Routes } from 'react-router-dom'
import styles from './routes.module.scss'
import Login from './login'
import Team from './team'

const App = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </main>
  )
}

export default App
