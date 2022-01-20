<template>
<Navbar/>
<div class="login-container">
  <div class="login-box">
    <div class="login-form">
      <form @submit.prevent="submitForm">
        <div>
          <label for="login">Login</label>
          <input type="text" id="login" v-model="formLogin.login"/>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="formLogin.password"/>
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'LoginPage',
  components: {
    Navbar
  },
  data () {
    return {
      formLogin: {
        login: '',
        password: ''
      }
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
  margin-top: 120px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
}

.login-form {
  padding: 70px;
}

form div {
  display: flex;
  flex-direction: column;
}

form div:nth-child(2){
  padding: 30px 0;
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
</style>
