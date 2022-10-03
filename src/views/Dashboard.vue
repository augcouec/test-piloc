<script setup>
import Title from "../components/Title.vue";

import PropertyCard from "../components/PropertyCard.vue";
</script>

<template>
  <main>
    <div>
      <Title text="Tableau de bord" />
      <router-link to="/add"> Ajouter une propriétée</router-link>
    </div>
    <PropertyCard
      v-for="house in houses"
      :key="house.id"
      :image="house.image"
      :name="house.name"
      :address="house.address"
      :status="house.status"
      :tenants="house.tenants"
      :amount="house.amount"
    ></PropertyCard>
  </main>
</template>

<script>
export default {
  data() {
    return {
      houses: [],
    };
  },

  created() {
    fetch("/api/houses")
      .then((res) => res.json())
      .then((json) => {
        this.houses = json.houses;
      });
  },
};
</script>
