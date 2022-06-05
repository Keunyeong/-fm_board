import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useResetRecoilState, useSetRecoilState } from 'recoil'

import { KickIcon } from '../../assets/svgs'
import Modal from '../../components/Modal/Modal'
import { getTeamInfo } from '../../firebase/firebase'
import { teamInfo } from '../../store/atom'

import styles from './login.module.scss'

const Login = () => {
  const nav = useNavigate()
  const [isModal, setIsModal] = useState(false)
  const [modalText, setModalText] = useState('비밀번호가 일치하지 않습니다. 다시 입력해 주세요.')
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
          setModalText('비밀번호가 맞지 않습니다.')
          setIsModal(true)
        }
      } else {
        setModalText('없는 이름 입니다.')
        setIsModal(true)
      }
    })
  }
  const handleModalCloseClick = () => {
    setIsModal(false)
  }
  return (
    <main className={styles.main}>
      {isModal && (
        <Modal>
          <div className={styles.modal}>
            <button className={styles.modalCloseBtn} type='button' onClick={handleModalCloseClick}>
              X
            </button>
            <div>{modalText}</div>
          </div>
        </Modal>
      )}
      <KickIcon />
      <form className={styles.loginBox} onSubmit={handleLoginSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor='teamName'>TEAM</label>
          <input type='text' name='teamName' value={loginTeamInfo.teamName} onChange={handleLoginInputChange} />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor='password'>PW</label>
          <input type='password' name='password' value={loginTeamInfo.password} onChange={handleLoginInputChange} />
        </div>
        <button type='submit'>TEAM IN</button>
      </form>
      <div className={styles.makeTeam}>▼ ▼ ▼ 아직 팀이 없다면 만드세요! ▼ ▼ ▼</div>
      <Link to='/signin' className={styles.linkBtn}>
        TEAM SET
      </Link>
    </main>
  )
}

export default Login
