import { ref } from "vue";

export default class AuthService {

  constructor() {
    this.jwt = ref('')
    this.error = ref('')
  }

  getError() {
    return this.error
  }
  getJwt() {
    return this.jwt
  }

  async login(email, password) {
    try {
      const res = await fetch('http://localhost:5000/auth/authentication', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const response = await res.json
      this.jwt = response.accessToken
      return true


    } catch (error) {
      console.log(error)
      return false
    }
  }
}
