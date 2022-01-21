<template>
<!-- <Navbar/> -->
<NavbarLogged/>
<div class="manager-container">
  <div class="search-container">
    <div class="input-wrapper">
      <input type="text" placeholder="Search by Surname" v-model="searchSurname">
    </div>
  </div>
  <div class="manager-box">
    <div class="manager-tables">
      <div class="manager-title-container">
        <div class="manager-title">
          Manage employees
        </div>
      </div>
      <div class="manager-records">
        <div class="record record-main">
          <div class="border-half half-none"></div>
          <div class="record-info">
            <div>
              Name
            </div>
            <div>
              Surname
            </div>
            <div>
              Email
            </div>
            <div>
              Department
            </div>
            <div>
              Job Title
            </div>
          </div>
          <div class="record-buttons"></div>
        </div>
        <div class="record" v-for="employee in filteredEmployees" :key="employee.id">
          <div class="border-half"></div>
          <div class="record-info">
            <div>
              {{employee.name}}
            </div>
            <div>
              {{employee.surname}}
            </div>
            <div>
              {{employee.email}}
            </div>
            <div>
              {{employee.department.name}}
            </div>
            <div>
              {{employee.title.name}}
            </div>
          </div>
          <div class="record-buttons">
            <div>
              <router-link :to="{name: 'Details', params: {id: employee.id}}"><span>Details</span></router-link>
            </div>
            <div>
              <router-link :to="{name: 'Edit', params: {id: employee.id}}"><span>Edit</span></router-link>
            </div>
            <div>
              <button @click="deleteEmployee(employee.id)"><span>Delete</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import Navbar from '../components/Navbar.vue'
import NavbarLogged from '../components/NavbarLogged.vue'
import http from '../http-common.js'

export default {
  name: 'Manager',
  components: {
    // Navbar
    NavbarLogged
  },
  data () {
    return {
      employees: [],
      searchSurname: ''
    }
  },
  methods: {
    async getEmployees () {
      await http.get('/employee/all')
        .then((response) => {
          this.employees = response.data
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    async deleteEmployee (id) {
      await http.delete('/employee/delete/' + id)
        .then((response) => {
          console.log(response)
          location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getEmployees()
  },
  computed: {
    filteredEmployees () {
      return this.employees.filter(employee => employee.surname.includes(this.searchSurname))
    }
  }
}
</script>

<style scoped>
.manager-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 120px;
  background-color: #f5f5f5;
}

.manager-box {
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  background-color: #fff;
}

.manager-tables {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 60px 60px 60px;
}

.manager-title {
  padding-bottom: 25px;
  font-size: 30px;
  letter-spacing: 1.5px;
  font-weight: bold;
}

.manager-records {
  display: flex;
  flex-direction: column;
  padding: 25px 10px 10px 10px;
}

.record {
  position: relative;
  display: flex;
  padding: 20px 0;
  font-size: 15px;
}

.border-half {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  border-radius: 0 0 0 7px;
}

.record-info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.record-info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.record-info div {
  padding: 0 5px 0 5px;
  /* border-right: 1px solid #000; */
  text-align: center;
  width: 250px;
}

.record-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
}

.record-buttons div {
  padding: 0 10px 0 10px;
}

.record-main {
  font-weight: bold;
  letter-spacing: 1.5px;
  /* font-size: 15px; */
}

.half-none {
  border-left: none;
  border-radius: 0;
}

.record-buttons div{
  flex-grow: 1;
}

a, button{
  display: block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
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

.search-container {
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-wrapper {
  width: 250px;
}

.input-wrapper input {
  height: 30px;
  width: 100%;
  widows: 400px;
  padding: 15px;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  border-radius: 7px;
  font-size: 15px;
}
</style>
