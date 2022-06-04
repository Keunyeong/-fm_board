import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { teamInfo } from '../../store/atom'
import { IPlayerInfo } from '../../types/types.d'

import styles from './team.module.scss'

const Team = () => {
  const nav = useNavigate()
  const [team, setTeam] = useRecoilState(teamInfo)
  const [playerInfo, setPlayerInfo] = useState<IPlayerInfo>({ num: '', name: '', position: '' })

  useEffect(() => {
    if (team.teamName === null) nav('/')
  }, [nav, team.teamName])

  const handleInputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget
    const { value } = e.currentTarget
    setPlayerInfo((prev) => ({ ...prev, [name]: value }))
  }
  const handleAddPlayerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (playerInfo.name === '') return
    if (playerInfo.position === '') return
    if (playerInfo.num === '') return
    const numArr = team.member.map((item) => Number(item.num))
    if (numArr.includes(Number(playerInfo.num))) return
    setTeam((prev) => ({ ...prev, member: [...prev.member, playerInfo] }))
  }
  const handleDeletePlayerBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { num } = e.currentTarget.dataset
    setTeam((prev) => ({ ...prev, member: prev.member.filter((item) => item.num !== num) }))
  }

  const PlayerList = team.member.map((item, index) => {
    const key = `playerList${index}`
    return (
      <li key={key} className={styles.li}>
        <div>{index + 1}</div>
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
        <h1>TEAM</h1>
        {team.member.length >= 11 && <Link to='/squard'>스쿼드</Link>}
      </div>
      <div className={styles.formBox}>
        <div className={styles.formHead}>
          <h2>선수 등록</h2>
        </div>
        <form action='submit' onSubmit={handleAddPlayerSubmit} className={styles.form}>
          <div>
            <div>
              <label htmlFor='num'>등번호</label>
              <input type='number' name='num' value={playerInfo.num} onChange={handleInputNameChange} min={0} />
            </div>
            <div>
              <label htmlFor='name'>이름</label>
              <input type='text' name='name' value={playerInfo.name} onChange={handleInputNameChange} />
            </div>
            <div>
              <label htmlFor='position'>포지션</label>
              <input type='text' name='position' value={playerInfo.position} onChange={handleInputNameChange} />
            </div>
          </div>

          <button type='submit'>등록</button>
        </form>
      </div>
      <div className={styles.liHead}>
        <div>Num</div>
        <div>BackNum</div>
        <div>Name</div>
        <div>Position</div>
        <div>Delete</div>
      </div>
      <ul className={styles.playerList}>{PlayerList}</ul>
    </main>
  )
}

export default Team
