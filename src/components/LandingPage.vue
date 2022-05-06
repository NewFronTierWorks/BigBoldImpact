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
          <v-btn dark color="blue" to="/classroom">Enter</v-btn>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'LandingPage',

   
  }
</script>
