import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { getTeamInfo } from '../../firebase/firebase'
import { teamInfo } from '../../store/atom'
import styles from './login.module.scss'

const Login = () => {
  const nav = useNavigate()
  const setTeamInfo = useSetRecoilState(teamInfo)
  const resetTeamInfo = useResetRecoilState(teamInfo)
  const [loginTeamInfo, setLoginTeamInfo] = useState({ teamName: '', password: '' })
  useEffect(() => {
    resetTeamInfo()
  }, [resetTeamInfo])
  const handleLoginInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setLoginTeamInfo((prev) => ({ ...prev, [name]: value }))
  }
  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getTeamInfo(loginTeamInfo.teamName).then((docSnap) => {
      if (docSnap.exists()) {
        const { teamName, password, passwordConfirm, member } = docSnap.data()
        if (loginTeamInfo.password === password) {
          setTeamInfo({ teamName, password, passwordConfirm, member })
          nav('/team')
        } else {
          // eslint-disable-next-line no-alert
          alert('비밀번호가 맞지 않습니다.')
        }
      } else {
        // eslint-disable-next-line no-alert
        alert('없는 아이디 입니다.')
      }
    })
  }
  return (
    <main className={styles.main}>
      <form className={styles.loginBox} onSubmit={handleLoginSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor='teamName'>팀이름</label>
          <input type='text' name='teamName' value={loginTeamInfo.teamName} onChange={handleLoginInputChange} />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor='password'>비밀번호</label>
          <input type='password' name='password' value={loginTeamInfo.password} onChange={handleLoginInputChange} />
        </div>
        <button type='submit'>TEAM IN</button>
      </form>
      <div className={styles.makeTeam}>아직 팀이 없다면 만드세요!</div>
      <Link to='/signin' className={styles.linkBtn}>
        TEAM SET
      </Link>
    </main>
  )
}

export default Login
