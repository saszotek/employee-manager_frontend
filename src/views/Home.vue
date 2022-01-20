<template>
<!-- <Navbar/> -->
<!-- <NavbarLogged/> -->
<HomeDashboard/>
</template>

<script>
// @ is an alias to /src
import HomeDashboard from '../components/HomeDashboard.vue'
// import Navbar from '../components/Navbar.vue'
// import NavbarLogged from '../components/NavbarLogged.vue'

export default {
  name: 'Home',
  components: {
    HomeDashboard
    // Navbar
    // NavbarLogged
  }
}
</script>

<style scoped>

</style>
