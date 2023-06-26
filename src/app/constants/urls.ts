import {environment} from "../../environments/environment.fin_prj";

const {API} = environment;

const auth = `${API}/auth`
const cars = `${API}/cars`
const users = `${API}/users`

const urls = {
  auth: {
    login: auth,
    refresh:`${auth}/refresh`,
    register: users,
    me: `${auth}/me`
  },
  cars: {
    full: cars,
    byId: (id: number): string => `${cars}/${id}`
  }
}


export {
  urls
}
