<template>
 
    <v-card class="pa-5 text-center" height="100%">
        <v-card-title>
            <h1>Episode {{currentVideo.episode}}</h1>
        </v-card-title>
        <v-card-subtitle>
            <br>
            <h2>{{videoTitle}}</h2>
        </v-card-subtitle>
        <v-card-text>
            <v-card dark>

                <video width="100%" height="100%" controls>
                    <source :src="'https://nftw.mypinata.cloud/ipfs/'+currentVideo.videoCID" :type="currentVideo.type">
                    Your browser does not support the video tag.
                </video>
            </v-card>

        </v-card-text>
        <!-- <v-card-actions>
            <v-btn 
                    v-for="(video, i) in videoList" 
                    :key="video.videoCID" 
                    color="deep-purple" 
                    class="mx-3"
                    x-large
                    dark
                    @click="currentVideoIndex = i"
                    >
                    {{video.episode}}
                    </v-btn>
        </v-card-actions> -->
    </v-card>

</template>

<script>
  export default {
      props: [
          'videoList',
          ],
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
        currentVideo () {
            return this.videoList[this.currentVideoIndex]
        }
    }
  }
</script>