<template>
  <div class="Card-Maker">
    <v-card class="pa-3 mx-auto my-2 text-center" width="500px">
        <h1>Card Maker</h1>
        <div class="mx-auto">

            <canvas id="canvas"  width="1000" height="1000"></canvas>
        </div>
    </v-card>
    <v-card class="pa-3 mx-auto my-2 text-center" width="500px">
    <v-text-field
            label="Custom Message"
            v-model="customMessage"
          ></v-text-field>
    <br>
    <v-card-actions>
        <v-spacer></v-spacer>

    <v-btn @click="addX">Add X</v-btn>
    <v-btn @click="addY">Add Y</v-btn>
    <v-btn @click="minusX">Minus X</v-btn>
    <v-btn @click="minusY">Minus Y</v-btn>
    <v-btn color="purple" dark @click="saveImage">Save Image</v-btn>
        <v-spacer></v-spacer>
    </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
    customMessage: 'Just Getting Started',
    count: 100,
    x: 400,
    y: 400,
  }),
  methods: {
    updateCanvas () {
      var canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "black";
      ctx.font="30px Impact";
      ctx.fillText(this.customMessage,50,100);
      ctx.fillStyle = "white";
      ctx.fillText("BIG BOLD IMPACT",50,200);
      ctx.fillStyle = "black";
      ctx.fillText("Official NFTW Generated",50,300);
        ctx.fillStyle = "yellow"
        ctx.lineWidth = 5;
        ctx.strokeStyle = "yellow"
    },
    saveImage () {
        var canvas = document.getElementById('canvas');
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
        console.log(image)
        window.location.href=image; // it will save locally
    },
    addWord () {
        var canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d');
          ctx.fillStyle = "yellow";
      ctx.fillText("BIG BOLD IMPACT - NFTW",50,this.count);
      console.log(this.count);
      this.count = this.count + 100;

    },
    addX () {
        this.x = this.x + 100;
        var canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d');
          ctx.fillStyle = "yellow";
      ctx.beginPath();
        ctx.arc(this.x, this.y, 100, 0, 2 * Math.PI);
        ctx.stroke();
    },
    addY () {
        this.y = this.y + 100;
        var canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d');
          ctx.fillStyle = "yellow";
      ctx.beginPath();
        ctx.arc(this.x, this.y, 100, 0, 2 * Math.PI);
        ctx.stroke();

    },
    minusX () {
        this.x = this.x - 100;
        var canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d');
          ctx.fillStyle = "yellow";
      ctx.beginPath();
        ctx.arc(this.x, this.y, 100, 0, 2 * Math.PI);
        ctx.stroke();
    },
    minusY () {
        this.y = this.y - 100;
        var canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d');
          ctx.fillStyle = "yellow";
      ctx.beginPath();
        ctx.arc(this.x, this.y, 100, 0, 2 * Math.PI);
        ctx.stroke();

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
  width:400px;
  height:400px;
}
</style>