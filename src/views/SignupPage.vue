<template>
<Navbar/>
<div class="login-container">
  <div class="login-box">
    <div class="login-form">
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formLogin.name"/>
        </div>
        <div>
          <label for="login">Login</label>
          <input type="text" id="login" v-model="formLogin.login"/>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="formLogin.password"/>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="text" id="email" v-model="formLogin.email"/>
        </div>
        <div>
          <label for="phone">Phone</label>
          <input type="text" id="phone" v-model="formLogin.phone"/>
        </div>
        <div>
          <label for="departmentId">TRZEBA ZROBIC DEPARTMENT</label>
          <select id="departmentId" v-model="formLogin.departmentId">
            <option value="department2137">department2137</option>
            <option value="department3721">department3721</option>
          </select>
        </div>
        <div>
          <label for="titleId">TRZEBA ZROBIC TITLE</label>
          <select id="titleId" v-model="formLogin.titleId">
            <option value="titleDupaStasia">titleDupaStasia</option>
            <option value="titlePierdziJasia">titlePierdziJasia</option>
          </select>
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'SignupPage',
  components: {
    Navbar
  },
  data () {
    return {
      formLogin: {
        login: '',
        password: '',
        name: '',
        phone: '',
        email: '',
        departmentId: null,
        titleId: null
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
  padding: 55px;
}

form div {
  display: flex;
  flex-direction: column;
  padding: 15px 0;
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
</style>
