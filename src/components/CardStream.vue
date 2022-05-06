<template>
                    <v-card class="pa-5 text-center" height="100%">
                        <v-card-title>
                            <h1>Join in the Learning</h1>
                        </v-card-title>
                        <v-card
                            :loading="loading"
                            class="mx-auto my-12"
                            max-width="420"
                        >
                            <template slot="progress">
                            <v-progress-linear
                                color="deep-purple"
                                height="10"
                                indeterminate
                            ></v-progress-linear>
                            </template>

                            <v-img
                            max-height="420"
                            class="mx-auto"
                            width="61.8%"
                            src="https://nftw.mypinata.cloud/ipfs/Qmd2vqZgoP2h7J3EnxSa7oUVfDk9RfLd6TSBo1nhmV9yLQ"
                            ></v-img>

                            <v-card-title>New FronTier Works</v-card-title>

                            <v-card-text>
                            <div>What in the world does NFTW mean?</div>
                            </v-card-text>

                            <v-divider class="mx-4"></v-divider>

                            <v-card-title>Choose Your Answer</v-card-title>

                            <v-card-text>
                            <v-chip-group
                                v-model="selection"
                                active-class="deep-purple accent-4 white--text"
                                column
                            >
                                <v-chip>New FronTier Works</v-chip>

                                <v-chip>Naked For The Win</v-chip>

                                <v-chip>Not For The Whimpy</v-chip>

                                <v-chip>No Free Time Wallace</v-chip>
                            </v-chip-group>
                            </v-card-text>

                            <v-card-actions>
                            <v-btn
                                color="deep-purple lighten-2"
                                text
                                @click="reserve"
                            >
                                Submit
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-card>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>