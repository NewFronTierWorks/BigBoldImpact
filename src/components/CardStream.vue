<template>
  <v-carousel hide-delimiters height="100%">
    <v-carousel-item v-for="(card, i) in cardList" :key="i">
      <v-card :loading="loading" class="mx-auto pa-3 my-12" max-width="420">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-card-title>
          <h2>Useful Resource</h2>
          <v-spacer></v-spacer>
          <v-btn :href="card.webLink" color="orange" dark target="_blank"
            >Visit Them</v-btn
          >
        </v-card-title>
        <a :href="card.webLink" target="_blank">

        <v-img
          class="mx-auto my-5"
          width="61.8%"
          aspect-ratio="1"
          contain
          :src="card.imageUrl"
          :alt="card.title"
        ></v-img>
        </a>

          <h1>{{ card.title }}</h1>
        <v-card-text class="mt-3"><h3>{{ card.description }}</h3></v-card-text>

      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import cardList from "../data/resourceCards.json";

export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  computed: {
    cardList() {
      return cardList;
    },
  },
};
</script>