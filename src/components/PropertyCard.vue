<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  tenants: {
    type: Array,
    required: false,
  },
  amount: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <div class="card_container">
    <img :src="image" alt="image du bien" class="image" />
    <div class="info">
      <h3 class="title">{{ name }}</h3>
      <div class="address">
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          aria-labelledby="locationIconTitle"
          stroke="#000"
          stroke-width="1"
          stroke-linecap="square"
          stroke-linejoin="miter"
          fill="none"
          color="#000"
        >
          <title id="locationIconTitle">Location</title>
          <path
            d="M12,21 C16,16.8 18,12.8 18,9 C18,5.6862915 15.3137085,3 12,3 C8.6862915,3 6,5.6862915 6,9 C6,12.8 8,16.8 12,21 Z"
          />
          <circle cx="12" cy="9" r="1" />
        </svg>
        <span
          >{{ address.number }} {{ address.street }} {{ address.postcode }}
          {{ address.city }}</span
        >
      </div>
    </div>

    <div class="tenants">
      <span>{{ status }}</span>
      <span v-if="tenants.length > 0">{{ tenants.length }} locataires</span>
    </div>
    <div>
      <span>{{ amount }} (CC)/ mois</span>
    </div>
  </div>
</template>

<style scoped>
.card_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 1rem;
  margin: 2rem 10%;
}
.image {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
}
.title {
  font-weight: 600;
  font-size: 1.2rem;
}
.address {
  display: flex;
  align-items: center;
}
.tenants {
  display: flex;
  flex-direction: column;
}
</style>
