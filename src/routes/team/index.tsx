import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './team.module.scss'

// const PLAYERINFO = {
//   name: '이근영',
//   position: 'FW',
//   backNum: '19',
// }

const Team = () => {
  const [name, setName] = useState('')
  const handleInputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setName(value)
  }
  const handleAddPlayerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(name)
  }
  return (
    <main className={styles.main}>
      <div>
        <h1>팀 빌딩</h1>
      </div>
      <div>
        <form action='submit' onSubmit={handleAddPlayerSubmit}>
          <input type='text' name='name' value={name} onChange={handleInputNameChange} />
        </form>
      </div>
    </main>
  )
}

export default Team
