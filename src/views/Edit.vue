<template>
<Navbar/>
<div class="details-container">
    <form @submit.prevent="submitForm">
        <div class="details-box">
            <div class="buttons-wrapping">
                <div class="record-buttons">
                    <div>
                        <button><span>Save</span></button>
                    </div>
                    <div>
                        <router-link to="/manager"><span>Back</span></router-link>
                    </div>
                    <div>
                        <button @click="deleteEmployee(); goManagerPage()"><span>Delete</span></button>
                    </div>
                </div>
            </div>
            <div class="details-inside-wrapping">
                <div class="details-title">
                    <p>{{employee.name}} {{employee.surname}}</p>
                </div>
                <div class="details-info-wrapping">
                    <div class="details-info-left">
                        <div class="label-wrapping">
                            <div class="info-label"><label for="name">Name</label></div>
                            <div class="input-wrapping">
                                <div class="half-border"></div>
                                <input type="text" id="name" v-model="formEdit.name"/>
                            </div>
                        </div>
                        <div class="label-wrapping">
                            <div class="info-label"><label for="email">Email</label></div>
                            <div class="input-wrapping">
                                <div class="half-border"></div>
                                <input type="text" id="email" v-model="formEdit.email"/>
                            </div>
                        </div>
                        <div class="label-wrapping">
                            <div class="info-label"><label for="departmentId">Department</label></div>
                            <div class="input-wrapping">
                                <div class="half-border"></div>
                                <select id="departmentId" v-model="departmentId">
                                    <option v-for="department in departments" :key="department.id">{{department.name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="label-wrapping">
                            <div class="info-label"><label for="titleId">Job title</label></div>
                            <div class="input-wrapping">
                                <div class="half-border"></div>
                                <select id="titleId" v-model="titleId">
                                    <option v-for="title in titles" :key="title.id">{{title.name}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="details-info-right">
                        <div class="label-wrapping">
                            <div class="info-label"><label for="surname">Surname</label></div>
                            <div class="input-wrapping">
                                <div class="half-border"></div>
                                <input type="text" id="surname" v-model="formEdit.surname"/>
                            </div>
                        </div>
                        <div class="label-wrapping">
                            <div class="info-label"><label for="phone">Phone</label></div>
                            <div class="input-wrapping">
                                <div class="half-border"></div>
                                <input type="text" id="phone" v-model="formEdit.phone"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import http from '../http-common.js'

export default {
  name: 'Edit',
  components: {
    Navbar
  },
  data () {
    return {
      id: 0,
      employee: null,
      departments: [],
      titles: [],
      formEdit: {
        name: '',
        email: '',
        phone: '',
        surname: '',
        login: '',
        password: ''
      },
      departmentId: null,
      titleId: null,
      departmentIdOld: null,
      titleIdOld: null
    }
  },
  methods: {
    async deleteEmployee () {
      await http.delete('/employee/delete/' + this.id)
        .then((response) => {
          console.log(response)
          location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    async getEmployee () {
      await http.get('/employee/find/' + this.id)
        .then((response) => {
          this.employee = response.data
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    async getDepartments () {
      await http.get('/department/all')
        .then((response) => {
          this.departments = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    async getTitles () {
      await http.get('/title/all')
        .then((response) => {
          this.titles = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    goManagerPage () {
      this.$router.push('/manager')
    },
    setDefaultValues () {
      this.departmentId = this.employee.department.name
      this.titleId = this.employee.title.name
      this.formEdit.name = this.employee.name
      this.formEdit.surname = this.employee.surname
      this.formEdit.email = this.employee.email
      this.formEdit.phone = this.employee.phone
      this.formEdit.login = this.employee.login
      this.formEdit.password = this.employee.password
      this.departmentIdOld = this.employee.department.id
      this.titleIdOld = this.employee.title.id
    },
    async submitForm () {
      await http.put('/employee/update/' + this.id, this.formEdit)
      this.setDepartment()
      await http.delete('/department/delete/' + this.departmentIdOld + '/employee/' + this.id)
      this.setTitle()
      await http.delete('/title/delete/' + this.titleIdOld + '/employee/' + this.id)
      await http.post('/department/add/' + this.departmentId + '/employee/' + this.id)
      await http.post('/title/add/' + this.titleId + '/employee/' + this.id)
      this.goManagerPage()
    },
    setDepartment () {
      for (let i = 0; i < this.departments.length; i++) {
        if (this.departmentId === this.departments[i].name) {
          this.departmentId = this.departments[i].id
        }
      }
    },
    setTitle () {
      for (let i = 0; i < this.titles.length; i++) {
        if (this.titleId === this.titles[i].name) {
          this.titleId = this.titles[i].id
        }
      }
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getEmployee()
    this.getDepartments()
    this.getTitles()
  },
  mounted () {
    this.setDefaultValues()
  }
}
</script>

<style scoped>
.details-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
}

.details-box {
    position: relative;
    margin-top: 120px;
    border: 1px solid #000;
    border-radius: 7px;
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
    background-color: #fff;
}

.details-inside-wrapping {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 60px 50px 60px;
}

.details-title{
    padding-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1.5px;
}

.details-info-wrapping {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: 100%;
}

.label-wrapping {
    padding: 25px;
}

.info-label {
    padding: 0 0 10px 7px;
    letter-spacing: 1.5px;
    font-weight: bold;
    font-size: 25px;
}

.input-wrapping {
    position: relative;
}

.input-wrapping input, select {
    margin: 0 0 2px 7px;
    font-size: 20px;
    letter-spacing: 0.5px;
    border: none;
    width: 100%;
    height: 100%;
}

.input-wrapping select:hover {
  cursor: pointer;
}

.input-wrapping input:focus, select:focus {
    outline: none;
}

.half-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 105%;
    height: 50%;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    border-radius: 0 0 0 7px;
}

.buttons-wrapping {
    position: absolute;
    top: calc(60% + 20px);
    left: calc(100% - 65px);
}

.record-buttons div {
    padding-bottom: 25px;
}

.record-buttons div:last-child {
    padding-bottom: 0;
}

a, button{
  display: block;
  width: 130px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-decoration: none;
  color: #000;
  border: 1px solid #000;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all .35s;
  background-color: #fff;
}

a span, button span{
  position: relative;
  z-index: 2;
}

a:after, button:after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #000;
  transition: all .35s;
}

a:hover, button:hover{
  color: #fff;
  cursor: pointer;
}

a:hover:after, button:hover:after{
  width: 100%;
}
</style>
