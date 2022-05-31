import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { teamList } from '../../store/atom'
import { IPlayerInfo } from '../../types/types.d'
import styles from './team.module.scss'

// const PLAYERINFO = {
//   name: '이근영',
//   position: 'FW',
//   backNum: '19',
// }

const Team = () => {
  const [playerList, setPlayerList] = useRecoilState(teamList)
  const [playerInfo, setPlayerInfo] = useState<IPlayerInfo>({ num: 0, name: '', position: '' })

  const handleInputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget
    const { value } = e.currentTarget
    setPlayerInfo((prev) => ({ ...prev, [name]: value }))
  }
  const handleAddPlayerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPlayerList((prev) => [...prev, playerInfo])
  }
  const handleDeletePlayerBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { num } = e.currentTarget.dataset
    setPlayerList((prev) => prev.filter((item) => Number(item.num) !== Number(num)))
  }

  const PlayerList = playerList.map((item, index) => {
    const key = `playerList${index}`
    return (
      <li key={key} className={styles.li}>
        <div>{item.num}</div>
        <div>{item.name}</div>
        <div>{item.position}</div>
        <button type='button' data-num={item.num} onClick={handleDeletePlayerBtnClick}>
          X
        </button>
      </li>
    )
  })
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <h1>팀 빌딩</h1>
      </div>
      <div className={styles.formBox}>
        <div>
          <h2>선수 추가</h2>
        </div>
        <form action='submit' onSubmit={handleAddPlayerSubmit} className={styles.form}>
          <label htmlFor='num'>등번호</label>
          <input type='number' name='num' value={playerInfo.num} onChange={handleInputNameChange} />
          <label htmlFor='name'>이름</label>
          <input type='text' name='name' value={playerInfo.name} onChange={handleInputNameChange} />
          <label htmlFor='position'>포지션</label>
          <input type='text' name='position' value={playerInfo.position} onChange={handleInputNameChange} />
          <button type='submit'>선수 추가</button>
        </form>
      </div>
      <ul className={styles.playerList}>
        <li className={styles.liHead}>
          <div>BackNumber</div>
          <div>Name</div>
          <div>Position</div>
          <div>Delete</div>
        </li>
        {PlayerList}
      </ul>
    </main>
  )
}

export default Team
