<template>
  <div class="container" 
        :style="{ backgroundImage: loaded ? 'url(https://live.staticflickr.com/7288/8714898402_d7ae7aeda8_c.jpg)' : 'none' }">
    <div class="quotes">
      <transition-group name="quote-list" tag="ul">
        <li v-for="quote in quotes" :key="quote.id" class="quote-item">{{ quote.text }}</li>
      </transition-group>
    </div>
    <div class="text">
      <div v-if="!loaded">Loading background...</div>
      <p><span class="highlight">Terry Pratchett</span><br/>Sir Terence David John Pratchett 
        (28 April 1948 – 12 March 2015) was an English author, humorist, and satirist, best known 
        for the Discworld series of 41 comic fantasy novels published between 1983 and 2015.</p>
      <button @click="fetchQuote">{{ label }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [],
      texts: [
        "Got a quote with a bit of bite?",
        "Spare a quote for a wandering mind?",
        "A wise word, if you please?",
        "Care to share a thought that sparkles?",
        "Have you a phrase both sharp and sly?",
        "Words of wisdom, or at least mischief?",
        "A snippet of genius, lightly salted?",
        "Toss me a phrase worth stealing?",
        "A quote, a quip, or a cosmic truth?",
        "Something quotable, preferably with teeth?",
        "A saying so sharp it needs a scabbard?",
        "Got any words that might make Death chuckle?",
        "A phrase to make the universe blink?",
        "Share a quote before reality notices?"
      ],
      label: null,
      loaded: false
    }
  },

  created() {
    this.label = this.texts[0];
  },

  mounted(){
    const img = new Image();
    img.src = "https://live.staticflickr.com/7288/8714898402_d7ae7aeda8_c.jpg";
    img.onload = () => {
      this.loaded = true;
    };
  },

  methods: {
    async fetchQuote() {
      try {
        const response = await fetch("http://localhost:3000/joke");
        const data = await response.json();
        if (data && data.quote) {
          this.quotes.unshift({ id: Date.now(), text: data.quote });
          this.changeQuote();
        }
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    },
    changeQuote() {
      let newLabel;
      do {
        const randomIndex = Math.floor(Math.random() * this.texts.length);
        newLabel = this.texts[randomIndex];
      } while (newLabel === this.label);
      this.label = newLabel;
  
    }
  }
};
</script>

<style>
body {
  height: 100vh;           
  margin: 0 !important;              
  display: flex;          
  justify-content: center; 
  align-items: flex-start;     
  background: linear-gradient(262deg, #fff 18%, #201F1C);
}
.container {
  /*background-image: url('https://live.staticflickr.com/7288/8714898402_d7ae7aeda8_c.jpg');*/
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top -80px left 0px;
  display: flex;
  justify-content: space-between;
  min-width: 780px;
  max-width: 1084px;
}
.quotes {
  text-align: center;
  width: 50%;
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  min-height: 900px;
}
.text {
  padding: 20px 50px;
  text-align: center;
  width: 48%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  max-height: 600px;
}
.text p {
  color: #fff;
  text-align: left;
}
.highlight {
  font-size: 2em; 
  font-weight: bold; 
}
ul {
  list-style-type: none;
  font-style: italic;
  margin: 50px;
  padding: 25px;
  background: linear-gradient(186deg, #ffff, #BBC5CA);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 525px;
  overflow-y: auto;
}
.quote-item {
  margin: 10px 5px 30px;
  font-size: 18px;
  color: #222;
}
button {
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  background-color: #FAFBFB;
  border: 1px solid #222;
  border-radius: 7px;
  color: #222;
  transition: all 0.3s ease;
}
button:hover {
  background-color: #626265; 
  color: #FAFBFB; 
  border-color: #222; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); 
}
.quote-list-enter-active {
  transition: appear 0.5s ease-in-out, opacity 2s ease;
}
.quote-list-move,
.quote-list-leave-active {
  transition: transform 0.5s ease-in-out, opacity 2s ease;
}
.quote-list-enter-from, 
.quote-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.quote-list-enter-to {
  opacity: 1;
  transform: translateY(0); 
}

</style>