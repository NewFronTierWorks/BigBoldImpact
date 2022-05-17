<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-btn to="/" plain x-large>

        <v-img
          alt="Big Bold Impact"
          class="shrink mr-2"
          contain
          src="https://nftw.mypinata.cloud/ipfs/QmNw1Ww7PSSViKBxadXYvF6TNaL7FB4eu41WWJbUpyT62W"
          transition="scale-transition"
          width="100"
        />
        </v-btn>

      </div>
      <v-spacer></v-spacer>
      <v-btn color="pink" to="/playroom">Get Started Here<v-icon class="ml-2">mdi-head-lightbulb-outline</v-icon></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        href="https://NewFronTierWorks.com"
        target="_blank"
        text
        class="d-none d-sm-flex"
      >
        <span class="mr-2">NFTW</span>
        <v-icon >mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer dark app>
      <v-btn
        to="/privacy-policy"
        text
        class=""
      >
        <span class="mr-2">Privacy Policy</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        href="https://NewFronTierWorks.com"
        target="_blank"
        text
        class=""
      >
        <span class="mr-2">&copy; 2022 NFTW</span>
        <v-icon >mdi-open-in-new</v-icon>
      </v-btn>

    </v-footer>
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

<style>

h1, h2 {	font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif; text-transform: uppercase;
}
.v-card__text, .v-card__title {
  word-break: normal !important;
}
</style>