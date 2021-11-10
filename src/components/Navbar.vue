<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="">
      <h1><router-link :to="{ name: 'Home'}">Muso Ninja</router-link></h1>
      <div class="links">
        <button>Logout</button>
        <router-link class="btn" :to="{ name: 'Signup' }">Sign up</router-link>
        <router-link class="btn" :to="{ name: 'Login' }">Log in</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  background: white;
  margin-bottom: 60px;
  padding: 16px 10px;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a, button {
  margin-left: 16px;
  font-size: 14px;
}
nav img {
  max-height: 60px;
}
</style>
