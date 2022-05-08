<template>
  <v-carousel hide-delimiters height="100%">
    <v-carousel-item v-for="(card, i) in cardList" :key="i">
      <v-card :loading="loading" class="mx-auto my-12" max-width="420">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-card-title>
          {{ card.title }}
          <v-spacer></v-spacer>
          <v-btn :href="card.webLink" color="orange" dark target="_blank"
            >Check it out</v-btn
          >
        </v-card-title>
        <v-card-subtitle class="mt-3">{{ card.description }}</v-card-subtitle>
        <a :href="card.webLink" target="_blank">

        <v-img
          class="mx-auto"
          width="61.8%"
          aspect-ratio="1"
          contain
          :src="card.imageUrl"
          :alt="card.title"
        ></v-img>
        </a>

        <v-card-text>
          <h3>{{ card.questionText }}</h3>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>


        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip
              class="mx-auto"
              v-for="(answer, i) in card.answerArray"
              :key="i"
            >
              {{ answer }}
            </v-chip>
          </v-chip-group>
        </v-card-text>

      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import cardList from "../data/card.json";

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