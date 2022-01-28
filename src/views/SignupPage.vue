<template>
<Navbar/>
<div class="login-container">
  <div class="login-box">
    <div class="login-box-title">Registration</div>
    <div class="login-form">
      <Form @submit="submitForm" :validation-schema="schema">
        <div v-if="!successful">
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
            <button :disabled="loading">Sign up</button>
          </div>
        </div>
        <div>
          <div v-if="message" class="message">
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
  name: 'SignupPage',
  components: {
    Navbar,
    Form,
    Field,
    ErrorMessage
  },
  data () {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required('Username is required!')
        .min(3, 'Must be at least 3 characters!')
        .max(20, 'Must be maximum 20 characters!'),
      password: yup
        .string()
        .required('Password is required!')
        .min(6, 'Must be at least 6 characters!')
        .max(20, 'Must be maximum 20 characters!')
    })

    return {
      successful: false,
      loading: false,
      message: '',
      schema
    }
  },
  methods: {
    submitForm (user) {
      this.message = ''
      this.successful = false
      this.loading = false

      this.$store.dispatch('auth/register', user).then(
        (data) => {
          this.message = data.message
          this.successful = true
          this.loading = false
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
          this.loading = false
        }
      )
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  mounted () {
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

select {
    padding: 6px 12px;
    font-size: 20px;
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
