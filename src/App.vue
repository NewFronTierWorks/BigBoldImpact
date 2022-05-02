<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Big Bold Impact"
          class="shrink mr-2"
          contain
          src="https://nftw.mypinata.cloud/ipfs/QmNw1Ww7PSSViKBxadXYvF6TNaL7FB4eu41WWJbUpyT62W"
          transition="scale-transition"
          width="100"
        />

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://NewFronTierWorks.com"
        target="_blank"
        text
      >
        <span class="mr-2">NFTW</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
