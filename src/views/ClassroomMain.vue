<template>
    <v-container fluid style="height: 100%">
            <v-row class="align-stretch text-center" height="100%">
                <v-col cols="12" lg="8" md="12" sm="12">
                    <video-player dark="dark"></video-player>
                 
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12">
                    <card-stream></card-stream>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue'
import CardStream from '../components/CardStream.vue'

  export default {
      components: {
          VideoPlayer,
          CardStream
      },
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