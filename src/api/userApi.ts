import { AxiosResponse } from 'axios';
import BaseApi from './baseApi.js';

class UserApi extends BaseApi {
  constructor() {
    super('users');
  }

  login(data: { email: string; password: string }) {
    return this.axiosPublic.post(`${this.endpoint}/login`, data);
  }

  register(data: any) {
    return this.axiosPublic.post(`${this.endpoint}/register`, data);
  }

  updatePassword(data: any) {
    return this.axiosWithAuth.put(`${this.endpoint}/password`, data)
  }

  updateUser(data: any) {
    return this.axiosWithAuth.put(`${this.endpoint}`, data);
  }

  override delete(id: string): Promise<AxiosResponse<unknown>> {
    console.log('no functionality to delete a user since it\'s just me');
    throw new Error('user delete disabled');
  }
}

export default new UserApi();
