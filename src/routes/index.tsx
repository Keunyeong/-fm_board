import { Route, Routes } from 'react-router-dom'
import Login from './login'
import Team from './team'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/team' element={<Team />} />
    </Routes>
  )
}

export default App
