
const baseUrl = "mysql://lego12:lego12@owu.linkpc.net:3306/lego12";


const auth = `${baseUrl}/auth`
const students = `${baseUrl}/orders`
const users = `${baseUrl}/users`

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
