import { Route, Routes } from 'react-router-dom'
import styles from './routes.module.scss'
import Login from './login'
import Team from './team'
import Squard from './squard'
import Signin from './signin'

const App = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/team' element={<Team />} />
        <Route path='/squard' element={<Squard />} />
      </Routes>
    </main>
  )
}

export default App
