<template>
<nav>
    <div class="nav-left">
        <h2>Employee Manager</h2>
    </div>
    <div class="nav-right">
        <div class="nav-link" v-if="!$store.state.auth.status.loggedIn">
            <router-link to="/">Home</router-link>
        </div>
        <div class="nav-link">
            <router-link to="/manager">Manage</router-link>
        </div>
        <div class="nav-link" v-if="$store.state.auth.status.loggedIn">
            <router-link :to="{name: 'Details', params: {id: currentUser.id}}">{{currentUser.username}}</router-link>
        </div>
        <div class="nav-link" v-if="$store.state.auth.status.loggedIn">
            <router-link to="/" @click.prevent="logout">Logout</router-link>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      currentRouterName: ''
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    currentRouteName () {
      return this.$route.name
    }
  },
  mounted () {
    if (!this.currentUser) {
      this.currentRouterName = this.currentRouteName
      if (this.currentRouterName === 'SignupPage') {
        this.$router.push('/signup')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
nav {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    width: 100%;
    /* background-color: #0c0c0c; */
    background-color: #222;
}

.nav-left {
    margin-left: 30px;
}

.nav-right {
    display: flex;
    justify-content: flex-end;
    height: 100%;
}

.nav-left h2 {
    color: #fff;
    font-size: 30px;
    letter-spacing: 2px;
}

.nav-link {
    margin: 50px 25px 40px 25px;
    padding-bottom: 5px;
    border-bottom: 5px solid #222;
}

.nav-link:hover {
    border-bottom: 3px solid #fff;
}

.nav-right a {
    padding: 15px 3px 0 3px;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    letter-spacing: 1.5px;
}
</style>
