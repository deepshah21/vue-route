<template>
  <div>
    <h1>Welcome {{ user }}</h1>
    <p>
      <router-link
        :to="{
          name: 'invoices'
        }"
        >Invoices</router-link
      >
    </p>
    <button @click="logOut" class="btn">Log out</button>
  </div>
</template>
<script>
import routedata from "../routedata";
export default {
  data() {
    return {
      user: routedata.user
    };
  },
  methods: {
    logOut() {
      routedata.user = null;
      this.$router.push("/");
    }
  }
};
</script>