export type User = {
  email: string
  password: string
  address: string
  hobbies: string[]
  birthday: string
  luckNumber: number
  sex: string
  education: string
  visible: boolean
  avatar: string
}

export type SignUser = Pick<User, 'email' | 'password'>
