import { atom } from 'recoil'
import { IPlayerInfo } from '../types/types.d'

export const teamList = atom<IPlayerInfo[]>({
  key: 'teamList',
  default: [],
})
