import { IPlayerInfo, ITeamInfo } from '../types/types.d'
import { atom } from 'recoil'

export const teamList = atom<IPlayerInfo[]>({
  key: 'teamList',
  default: [],
})
export const teamInfo = atom<ITeamInfo>({
  key: 'teamInfo',
  default: {
    teamName: '',
    password: 'string',
    passwordConfirm: 'string',
    member: [],
  },
})
