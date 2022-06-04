export interface IPlayerInfo {
  num: string
  name: string
  position: string
}

export interface ITeamInfo {
  teamName: string
  password: string
  passwordConfirm: string
  member: IPlayerInfo[]
}
