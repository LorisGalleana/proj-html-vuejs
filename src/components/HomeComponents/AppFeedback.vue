<script>
export default {
    name: "AppFeedback",
    data() {
    return {
      displayValue: 0,
      targetValue: 280,
      duration: 4000, // Durata in millisecondi
      startTime: null
    };
  },
  mounted() {
    requestAnimationFrame(this.animateValue);
  },
  methods: {
    animateValue(timestamp) {
      if (!this.startTime) this.startTime = timestamp;
      const progress = timestamp - this.startTime;
      const increment = (this.targetValue / this.duration) * progress;
      this.displayValue = Math.min(Math.floor(increment), this.targetValue);
      
      if (progress < this.duration) {
        requestAnimationFrame(this.animateValue);
      } else {
        this.displayValue = this.targetValue; // Assicura che il valore finale sia esatto
      }
    }
  }
}
</script>

<template>
    <div class="container-fluid my-5">
        <div class="container d-flex mt-5">
            <div class="green-block">
                <div class="numbers">
                    <div class="project">
                        <div class="project-number counter">{{ displayValue }}</div>
                        <div>PROJECTS</div>
                    </div>
                    <div class="comment-satisfaction">
                        <div class="user-comments">
                            <div class="comment-number">+3,500</div>
                            <div>USERS'COMMENTS</div>
                        </div>
                        <div class="vertical-divisor"></div>
                        <div class="happy-clients">
                            <div class="client-number">100%</div>
                            <div>HAPPY CLIENTS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="white-block">
                <div class="internal-block">
                    <div class="internal-title">
                        <div>We <span class="text-color">Love</span> What</div>
                        <div>We Do</div>
                    </div>
                    <!--inizio linea divisore -->
                    <div class="full-line mb-4 d-flex gap-2">
                        <div class="short">
                        </div>
                        <div class="long">

                        </div>
                    </div>
                    <!-- fine linea divisore -->
                    <div class="internal-text">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove. Far far away, behind the word mountains. large language ocean. far from the countries Vokalia and Consonantia
                    </div>
                    <ul>
                        <li><div class="check"><i class="fa-solid fa-check"></i></div>far far away, behind the word mountains</li>
                        <li><div class="check"><i class="fa-solid fa-check"></i></div>large language ocean</li>
                        <li><div class="check"><i class="fa-solid fa-check"></i></div>far from the countries Vokalia and Consonantia</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.container-fluid {
    background-image: $gray-gradient;
    height: 500px;
    padding: 50px 0 1000px;
    
}
.green-block {
    background-image: url(/public/img/person-with-long-curly-hair-PZ99QM2-2x.jpg);
    background-size: cover;
    
    width: 100%;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -132px;
    box-shadow: -10px 11px 40px 0 rgba(20, 212, 153, .25);
    
    
}
.green-block::before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    background: $green-gradient;
    width: 100%;
    height: 100%;
    opacity: .8;
    border-radius: 10px;

    
}
.white-block {
    background-color: white;
    height: 600px;
    width: 100%;
    border-radius: 10px;
    position: relative;
    top: 50px;
    left: 65px;
    box-shadow: 0 3px 45px 0 rgba(0, 0, 0, .14);
    .internal-block {
    width: 80%;
    margin: 10% auto;
    }
    .internal-title {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .internal-text {
        margin-bottom: 20px;
    }
    
}

.numbers {
    position: relative;
    text-align: center;
    color: white;
    font-size: 22px;
}
.comment-satisfaction {
    display: flex ;
}
.project-number {
    font-size: 130px;
}
.comment-number, .client-number {
    font-size: 45px;
}
.project {
    margin-bottom: 20px;
}
.vertical-divisor {
    height: 70px;
    width: 2px;
    background-color: #DEDEDE;
    margin: 15px 45px;
}
.text-color {
    color: $green-text;
}
ul {
    list-style: none;
    padding: 0;
    li {
        display: flex;
        .check {
            padding-right: 10px;
            color: $green-text;
        }
    }
}
.counter {
  font-size: 130px;
}

</style>