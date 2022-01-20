<template>
<div id="header-container">
  <div id="header-title">
    <h1>Employee Manager</h1>
  </div>
  <div id="header-nav">
    <!-- <router-link to="/">Home</router-link> -->
    <router-link to="/manager">Manage</router-link>
    <router-link to="/login">Log In</router-link>
    <router-link to="/signup">Sign Up</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeDashboard'
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#header-container {
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#header-title {
    font-size: 45px;
    color: #0c0c0c;
}

#header-nav {
  display: flex;
}

#header-nav a {
    width: 160px;
    margin: 40px 20px;
    padding: 15px 0;
    text-align: center;
    font-weight: bold;
    color: #0c0c0c;
    font-size: 30px;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 15px;
    transition: all .45s;
}

#header-nav a:hover {
  color: #fff;
  background-color: #0c0c0c;
}
</style>
