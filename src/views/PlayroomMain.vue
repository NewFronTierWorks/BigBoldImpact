<template>
    <v-container fluid style="height: 100%">
            <v-row class="align-stretch text-center" height="100%">
                <v-col cols="12" lg="8" md="12" sm="12">
                    
                    <video-player 
                    :videoList="freeVideos"        
                    >
                    </video-player>
                    
                    {{currentVideo}}
                    
                    
                 
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12">
                    <v-card class="pa-3">
                        <h1>Build an NFT through Learning</h1>
                    <card-stream></card-stream>

                    </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue'
import CardStream from '../components/CardStream.vue'
import freeVideos from '../data/freeVideos.json'

  export default {
      components: {
          VideoPlayer,
          CardStream
      },
    data: () => ({
      loading: false,
      selection: 1,
      currentVideoIndex: 0
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
    computed: {
        freeVideos () {
            return freeVideos;
        },

    }
  }
</script>

<style scoped>

.v-card {background: pink;}
</style>