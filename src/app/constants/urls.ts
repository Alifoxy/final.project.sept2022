import {environment} from "../../environments/environment.fin_prj";

const {API} = environment;

const auth = `${API}/auth`
const students = `${API}/students`
const users = `${API}/users`

const urls = {
  auth: {
    login: auth,
    refresh:`${auth}/refresh`,
    register: users,
    me: `${auth}/me`
  },
  students: {
    full: students,
    byId: (id: number): string => `${students}/${id}`
  }
}


export {
  urls
}
