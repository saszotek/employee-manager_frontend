<template>
<Navbar/>
<div class="login-container">
  <div class="login-box">
    <div class="login-box-title">Log in</div>
    <div class="login-form">
      <Form @submit="submitForm" :validation-schema="schema">
        <div>
          <label for="username">Username</label>
          <Field name="username" type="text"/>
          <div class="error-message">
            <ErrorMessage name="username"/>
          </div>
        </div>
        <div>
          <label for="password">Password</label>
          <Field name="password" type="password"/>
          <div class="error-message">
            <ErrorMessage name="password"/>
          </div>
        </div>
        <div>
          <button :disabled="loading">Log in</button>
        </div>
        <div>
          <div v-if="message" role="alert">
            {{message}}
          </div>
        </div>
      </Form>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'LoginPage',
  components: {
    Navbar,
    Form,
    Field,
    ErrorMessage
  },
  data () {
    const schema = yup.object().shape({
      username: yup.string().required('Username is required!'),
      password: yup.string().required('Password is required!')
    })

    return {
      loading: false,
      message: '',
      schema
    }
  },
  methods: {
    submitForm (user) {
      this.loading = true
      this.$store.dispatch('auth/login', user).then(
        () => {
          this.$router.push('/manager')
        },
        (error) => {
          this.loading = false
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created () {
    if (this.loggedIn) {
      this.$router.push('/manager')
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}

.login-box {
  position: relative;
  margin-top: 120px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
}

.login-box-title {
  position: absolute;
  top: -55px;
  left: calc(50% - 150px);
  font-size: 40px;
  font-weight: bold;
  width: 300px;
  text-align: center;
}

.login-form {
  padding: 70px;
}

form div {
  display: flex;
  flex-direction: column;
}

form div:nth-child(2){
  padding: 20px 0;
}

label {
  padding-bottom: 8px;
  font-size: 20px;
}

input {
    padding: 6px 12px;
    font-size: 20px;
    line-height: 1.7;
    color: #555;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
  align-self: center;
  background-color: #111827;
  border: 3px solid transparent;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  padding: 15px 25px;
  transition-duration: .4s;
  transition-property: background-color, border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:hover {
  background-color: #fff;
  color: #111827;
  border: 3px solid #111827;
}

.error-message {
  height: 25px;
  margin-top: 10px;
  font-weight: bold;
}
</style>
