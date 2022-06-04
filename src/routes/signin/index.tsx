import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { getTeamInfo, setTeamMemberData } from '../../firebase/firebase'
import { teamInfo } from '../../store/atom'
import { ITeamInfo } from '../../types/types.d'

import styles from './signin.module.scss'

const Signin = () => {
  const nav = useNavigate()
  const [team, setTeamInfo] = useRecoilState(teamInfo)
  useEffect(() => {
    if (team.teamName !== '') nav('/')
  }, [nav, team.teamName])
  const [signinTeamInfo, setSigninTeamInfo] = useState<ITeamInfo>({
    teamName: '',
    password: '',
    passwordConfirm: '',
    member: [],
  })
  const [isTeamName, setIsTeamName] = useState(false)
  const handleTeamInfoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isTeamName) {
      // eslint-disable-next-line no-alert
      alert('팀이름을 다시 입력해 주세요.')
      return
    }
    if (signinTeamInfo.teamName === '') return
    if (signinTeamInfo.password === '') return
    if (signinTeamInfo.password !== signinTeamInfo.passwordConfirm) {
      // eslint-disable-next-line no-alert
      alert('비밀번호가 일치하지 않습니다. 다시 입력해 주세요.')
    } else {
      setTeamMemberData(signinTeamInfo.teamName, signinTeamInfo)
      setTeamInfo(signinTeamInfo)
      nav('/team')
    }
  }
  const handleTeamInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget
    if (name === 'teamName') {
      value !== '' &&
        getTeamInfo(value).then((docSnap) => {
          if (docSnap.exists()) {
            setIsTeamName(true)
          } else {
            setIsTeamName(false)
          }
        })
    }
    setSigninTeamInfo((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <h1>팀 생성</h1>
      </div>
      <form className={styles.signinBox} onSubmit={handleTeamInfoSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor='teamName'>팀 이름</label>
          <input
            type='text'
            autoComplete='off'
            value={signinTeamInfo.teamName}
            name='teamName'
            onChange={handleTeamInfoChange}
          />
        </div>
        {isTeamName && <div className={styles.isName}>이미 존재하는 이름 입니다.</div>}
        <div className={styles.inputBox}>
          <label htmlFor='password'>비밀번호</label>
          <input
            type='password'
            autoComplete='off'
            name='password'
            value={signinTeamInfo.password}
            onChange={handleTeamInfoChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor='password'>비밀번호 확인</label>
          <input
            type='password'
            autoComplete='off'
            name='passwordConfirm'
            value={signinTeamInfo.passwordConfirm}
            onChange={handleTeamInfoChange}
          />
        </div>
        <button type='submit'>등 록</button>
      </form>
    </main>
  )
}

export default Signin
