/* eslint-disable no-return-await */
import { initializeApp } from 'firebase/app'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { ITeamInfo } from '../types/types.d'

const firebaseConfig = {
  apiKey: 'AIzaSyBDwt1blmkDY7KPSecOzIxsB0YzmWVcuHo',
  authDomain: 'fm-board.firebaseapp.com',
  projectId: 'fm-board',
  storageBucket: 'fm-board.appspot.com',
  messagingSenderId: '963621103031',
  appId: '1:963621103031:web:86752e0ee01d9d58eeb432',
  measurementId: 'G-WBZFFF6WQ2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const setTeamMemberData = async (teamName: string, teamInfo: ITeamInfo) =>
  await setDoc(doc(db, 'team', teamName), teamInfo)
export const getTeamInfo = async (teamName: string) => await getDoc(doc(db, 'team', teamName))
