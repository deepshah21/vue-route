<template>
  <section>
    <h1>Experiences</h1>
    <h2>{{ experience.name }}</h2>
    <div class="experience-details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
      />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>
<script>
import routedata from "@/routedata.js";
export default {
  props: {
    id: {
      required: true
    },
    experienceSlug: {
      required: true
    }
  },
  computed: {
    destination() {
      let route_id;
      if (typeof this.id === "number") {
        route_id = this.id;
      } else {
        route_id = parseInt(this.id);
      }
      return routedata.destinations.find(
        destination => destination.id === route_id
      );
    },
    experience() {
      return this.destination.experiences.find(
        experience => experience.slug === this.experienceSlug
      );
    }
  }
};
</script>
<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experience-details {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>
