import { clientModel } from '../interface/client.model'

export function client(): clientModel {
  const client: clientModel = {
    name: 'Erik QA',
    email: 'erikmenini@gmail.com',
    phone: '5184862436',
    address: 'New York, NY, USA'
  }
  return client
}