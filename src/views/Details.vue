<template>
<Navbar/>
<div class="details-container">
    <div class="details-box">
        <div class="buttons-wrapping">
            <div class="record-buttons">
                <div>
                    <router-link to="/manager"><span>Back</span></router-link>
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
                        <div class="info-label">Name</div>
                        <div class="input-wrapping">
                            <div class="half-border"></div>
                            <p>{{employee.name}}</p>
                        </div>
                    </div>
                    <div class="label-wrapping">
                        <div class="info-label">Email</div>
                        <div class="input-wrapping">
                            <div class="half-border"></div>
                            <p>{{employee.email}}</p>
                        </div>
                    </div>
                    <div class="label-wrapping">
                        <div class="info-label">Department</div>
                        <div class="input-wrapping">
                            <div class="half-border"></div>
                            <p>{{employee.department.name}}</p>
                        </div>
                    </div>
                    <div class="label-wrapping">
                        <div class="info-label">Job title</div>
                        <div class="input-wrapping">
                            <div class="half-border"></div>
                            <p>{{employee.title.name}}</p>
                        </div>
                    </div>
                </div>
                <div class="details-info-right">
                    <div class="label-wrapping">
                        <div class="info-label">Surname</div>
                        <div class="input-wrapping">
                            <div class="half-border"></div>
                            <p>{{employee.surname}}</p>
                        </div>
                    </div>
                    <div class="label-wrapping">
                        <div class="info-label">Phone</div>
                        <div class="input-wrapping">
                            <div class="half-border"></div>
                            <p>{{employee.phone}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import http from '../http-common.js'

export default {
  name: 'Details',
  components: {
    Navbar
  },
  data () {
    return {
      id: 0,
      employee: null
    }
  },
  methods: {
    async getEmployee () {
      await http.get('/employee/find/' + this.id)
        .then((response) => {
          this.employee = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getEmployee()
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

.input-wrapping p {
    padding: 0 0 7px 7px;
    font-size: 20px;
    letter-spacing: 0.5px;
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
    top: calc(70% + 20px);
    left: calc(100% - 65px);
}

.record-buttons div {
    padding-bottom: 25px;
}

.record-buttons div:last-child {
    padding-bottom: 0;
}

a{
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

a span{
  position: relative;
  z-index: 2;
}

a:after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #000;
  transition: all .35s;
}

a:hover{
  color: #fff;
}

a:hover:after{
  width: 100%;
}
</style>
