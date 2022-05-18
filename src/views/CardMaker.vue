<template>
  <div class="Card-Maker">
    <v-card class="pa-3">
        <h1>Card Maker</h1>
        <canvas id="canvas" width="600" height="600"></canvas>
    </v-card>
    <v-card class="pa-3">
    <input type="text" v-model="exampleContent" />
    <br>
    <span>{{ exampleContent }}</span>
    <v-card-actions>
        <v-spacer></v-spacer>

    <v-btn @click="SaveImage">Save Image</v-btn>
    </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
    'exampleContent': 'Just Getting Started'
  }),
  methods: {
    updateCanvas: function (){
      var canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "black";
      ctx.font="30px Impact";
      ctx.fillText(this.exampleContent,50,100);
      ctx.fillStyle = "white";
      ctx.fillText("BIG BOLD IMPACT - NFTW",50,200);
    },
    SaveImage () {
        var canvas = document.getElementById('canvas');
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
        console.log(image)
        window.location.download="Image.png"
        window.location.href=image; // it will save locally
    }
  },
  watch: {
    exampleContent: function() {
      this.updateCanvas();
    }
  },
  mounted: function (){
    this.updateCanvas();
  }
}
</script>
<style scoped>
canvas{
  background: #c00000;
  width:600px;
  height:600px;
}
</style>