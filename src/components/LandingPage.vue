<template>
  <v-container fluid style="height: 100%;">
    <v-layout fill-height>
      <v-row class="text-center" height="100%">
        <v-col cols="12" sm="12">
          <v-img
            src="https://nftw.mypinata.cloud/ipfs/QmNw1Ww7PSSViKBxadXYvF6TNaL7FB4eu41WWJbUpyT62W"
            class="my-3"
            contain
            height="61.8%"
          />
        </v-col>

        <v-col class="mb-4" cols="12" sm="12">
          <h1 class="display-2 font-weight-bold mb-3">
            Welcome to <br>BIG BOLD IMPACT!
          </h1>
          <v-btn dark color="blue" to="/classroom">Enter</v-btn>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'LandingPage',

   
  }
</script>
