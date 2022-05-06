<template>
  <v-container fluid>
      <v-row class="text-center">
        <v-col cols="12" sm="12">
          <v-img
            src="https://nftw.mypinata.cloud/ipfs/QmNw1Ww7PSSViKBxadXYvF6TNaL7FB4eu41WWJbUpyT62W"
            class="my-3 mx-auto"
            contain
            width="61.8%"
          />
        </v-col>

        <v-col class="mb-4" cols="12" sm="12">
          <h1 class="mb-3">
            Welcome to <br>BIG BOLD IMPACT!
          </h1>
          <v-btn dark color="blue" @click="overlay = true">Enter</v-btn>
        </v-col>
        <v-overlay
          :z-index="zIndex"
          :value="overlay"
        >
          <v-card>
            <v-card-title><h2>Enter The Door</h2></v-card-title>
            <v-img
            src="https://nftw.mypinata.cloud/ipfs/QmNw1Ww7PSSViKBxadXYvF6TNaL7FB4eu41WWJbUpyT62W"
            class="my-3 mx-auto"
            contain
            width="200px"
          />

            <v-card-text>To Enter You Must Own the NFT</v-card-text>
          </v-card>
          <v-btn
            class="white--text mt-3"
            color="teal"
            @click="overlay = false"
          >
            Return
          </v-btn>
        </v-overlay>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'LandingPage',
    data: () => ({
      overlay: false,
      zIndex: 0,
    }),   
  }
</script>
