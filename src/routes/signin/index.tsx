import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal/Modal'

import { getTeamInfo, setTeamMemberData } from '../../firebase/firebase'
import { ITeamInfo } from '../../types/types.d'

import styles from './signin.module.scss'

const Signin = () => {
  const nav = useNavigate()
  const [isModal, setIsModal] = useState(false)
  const [isRegistrated, setIsRegistrated] = useState(false)
  const [modalText, setModalText] = useState('비밀번호가 일치하지 않습니다. 다시 입력해 주세요.')

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
      setModalText('팀이름을 다시 입력해 주세요.')
      setIsModal(true)
      return
    }
    if (signinTeamInfo.teamName === '') return
    if (signinTeamInfo.password === '') return
    if (signinTeamInfo.password !== signinTeamInfo.passwordConfirm) {
      setModalText('비밀번호가 일치하지 않습니다. 다시 입력해 주세요.')
      setIsModal(true)
    } else {
      setTeamMemberData(signinTeamInfo.teamName, signinTeamInfo)
      setModalText('팀이 등록 되었습니다. 다시 로그인해 주세요.')
      setIsModal(true)
      setIsRegistrated(true)
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
  const handleModalCloseClick = () => {
    setIsModal(false)
    if (isRegistrated) {
      nav('/')
    }
  }
  const handleSigninCancelClick = () => {
    nav('/')
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
            placeholder='팀 이름'
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
            placeholder='비밀번호'
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
            placeholder='비밀번호 확인'
          />
        </div>
        <button type='submit'>등 록</button>
        <button type='button' onClick={handleSigninCancelClick}>
          취 소
        </button>
      </form>
    </main>
  )
}

export default Signin
