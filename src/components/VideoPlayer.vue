<template>
 
    <v-card class="pa-5 text-center" height="100%">
        <v-card-title>
            <h1>{{episode}}</h1>
        </v-card-title>
        <v-card-subtitle>
            <br>
            <h2>{{videoTitle}}</h2>
        </v-card-subtitle>
        <v-card-text>
            <video width="100%" height="100%" controls>
                <source src="https://nftw.mypinata.cloud/ipfs/QmcVrzFSBMfs3TLZRFHgo7UPvXefhpKV3vhfXcgZeKrfDf" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </v-card-text>
    </v-card>

</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      episode: "Episode 1",
      videoTitle: "Episode 1 - NFTs Are More Than Just Expensive JPGs, or Are They?"
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>