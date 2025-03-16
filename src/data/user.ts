import { userModel } from '../interface/user.model'

export function activeUser(): userModel {
  const activeUser: userModel = {
    name: 'Erik Menini Arimathea',
    company: 'Test Solutions',
    email: 'erikmenini@gmail.com',
    phone: '5184862436',
    OTPAuth: '112233'
  }
  return activeUser
}


  