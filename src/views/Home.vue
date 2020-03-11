<template>
  <div class="home">
    <h1>
      All destinations
    </h1>
    <div class="destination">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link :to="{ name: 'details', params: { id: destination.id } }">
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link :to="destination.name">
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import routedata from "@/routedata.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: routedata.destinations
    };
  }
};
</script>
<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
</style>
