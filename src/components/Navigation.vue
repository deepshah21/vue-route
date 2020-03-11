<template>
  <nav id= "nav">
    <p class="logo">Vue school Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
        <router-link :to="{ name: 'details', params: { id: destination.id } }">
          {{ destination.name }}
        </router-link>
      </li>
      <li class="links">
        <router-link to="/user">Dashboard</router-link>
      </li>
      <li class="links">
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/brazil">Brazil</router-link>|
    <router-link to="/panama">Panama</router-link> -->
  </nav>
</template>

<script>
import routedata from "@/routedata.js";
export default {
  data() {
    return {
      destinationId: this.$route.params.id,
      destinations: routedata.destinations
    };
  }
};
</script>
<style scoped>
#nav {
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a.vue-school-active-class {
  color: #ab26ab;
}
</style>
