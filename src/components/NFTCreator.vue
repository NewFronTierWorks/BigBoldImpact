<template>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="(card, i) in QAcardList" :key="i">
      <v-card :loading="loading" class="mx-auto pa-3 my-12" max-width="420">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

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
import questionAnswerCards from "../data/questionAnswerCards.json";

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
    QAcardList() {
      return questionAnswerCards;
    },
  },
};
</script>