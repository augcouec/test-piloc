import { defineStore } from "pinia";

export const useHouses = defineStore("houses", {
  state: () => ({ houses: [] }),

  actions: {
    async getHouses() {
      const result = await fetch("/api/houses")
        .then((res) => res.json())
        .then((json) => {
          this.houses = json.houses;
        });
    },
  },
});
