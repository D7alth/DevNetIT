<template>
  <div class="ServicesSection section-container" id="services">
    <div class="container-page">
      <div class="columns">
        <div class="column col-md-12 col-6" v-if="isDesktop">
          <div class="text-box">
            <TextBlock 
              :hat="hatText"
              :headline="headlineText"
              :description="descriptionText"
            />
            <div class="hat hat-text-color">{{ hatText }}</div>
            <h2 class="headline headline-text-color">{{ headlineText }}</h2>
            <p class="description">{{ descriptionText }}</p>
          </div>
        </div>
        <div class="column col-md-12 col-6 services-column">
          <div class="columns">
            <div class="column col-md-12 col-6 column-gradient-orange">
              <div class="card">
                <div class="hedline-conteiner">
                  <div class="hat hat-color-1">{{ card1hat }}</div>
                    <div class="card-content">
                      <h3 class="card-headline card-headline-color-1">{{ card1headline }}</h3>
                      <p class="card-description card-description-color-1">{{ card1description }}</p>
                    </div>
                </div>
              </div>
            <div class="card">
                <div class="hedline-conteiner">
                  <div class="hat hat-color-1">{{ card2hat }}</div>
                    <div class="card-content">
                      <h3 class="card-headline card-headline-color-1">{{ card2headline }}</h3>
                      <p class="card-description card-description-color-1">{{ card2description }}</p>
                    </div>
                </div>
              </div>
            </div>
            <div class="column col-md-12 col-6 column-gradient-purple">
              <div class="card">
                <div class="hedline-conteiner">
                  <div class="hat hat-color-2">{{ card3hat }}</div>
                    <div class="card-content">
                      <h3 class="card-headline card-headline-color-1">{{ card3headline }}</h3>
                      <p class="card-description card-description-color-1">{{ card3description }}</p>
                    </div>
                </div>
              </div>
              <div class="card">
                <div class="hedline-conteiner">
                  <div class="hat hat-color-2">{{ card4hat }}</div>
                    <div class="card-content">
                      <h3 class="card-headline card-headline-color-1">{{ card4headline }}</h3>
                      <p class="card-description card-description-color-1">{{ card4description }}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextBlock from "./../components/blocks/TextBlock";

export default {
  name: "ServicesSection",
  props: {
    hatText: String,
    headlineText: String,
    descriptionText: String,
    card1hat: String, 
    card1headline: String,
    card1description: String,
    card2hat: String, 
    card2headline: String,
    card2description: String,
    card3hat: String, 
    card3headline: String,
    card3description: String,
    card4hat: String, 
    card4headline: String,
    card4description: String,
  },
  computed: {
    isDesktop() {
      return window.innerWidth >= 768;
    },
    components: {
    TextBlock
  },
  },
};
</script>
<style scoped>
.ServicesSection{
  background-image: url('./../assets/backgrouds/Services.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.services-column{
  min-height: 100%;
}
.hat-text-color {
  font-size: 18px;
  color:var(--main-orange-color);
  margin-bottom: 0px;
}
.headline{
  color: var(--main-white-color);
}
.hedline-conteiner{
  display: flex;
}

.description{
  font-size: 18px;
  color: var(--main-grey-color);
  margin-bottom: 0;
}

.card {
  padding: 20px;
  border-radius: 0px;
  border: none;
  text-align: left;
  background-color: transparent;
  min-height: 200px;
  justify-content: center;  
}

.card-gradient-1 {
  background: linear-gradient(to right, var(--main-yellow-color), transparent);
}

.card-gradient-2 {
  background: linear-gradient(to right, var(--main-purple-color), transparent);
}

.hat-color-1 {
  font-size: 18px;
  margin-right: 12px;
  color: var(--main-yellow-color);
  margin-bottom: 5px;
}

.hat-color-2 {
  font-size: 18px;
  margin-right: 12px;
  color: var(--main-purple-color);
  margin-bottom: 5px;
}
.text-box{
  text-align: left;  
  padding-right: 150px;
}
.card-headline-color-1 {
  font-size: 16px;
  color: var(--main-white-color);
  margin-bottom: 5px;
}

.card-headline-color-2 {
  font-size: 16px;
  color: var(--main-white-color);
  margin-bottom: 5px;
}

.card-description-color-1 {
  font-size: 14px;
  color: #ffffff87;
  margin-bottom: 0;
}

.card-description-color-2 {
  font-size: 14px;
  color: #ffffff87;
  margin-bottom: 0;
}

.column{
  padding: 0px;
  margin: 0px;
}
.column-gradient-orange{
  background: rgb(251,135,6);
  background: linear-gradient(180deg, rgba(251, 137, 6, 0.153) 0%, rgba(251, 137, 6, 0.03) 100%);
  border-radius: 20px 0px 0px 0px;

}
.column-gradient-purple{
  background: rgb(85,50,251);
background: linear-gradient(180deg, rgba(83, 50, 251, 0.151) 0%, rgba(85,50,251,0.03) 100%);
  border-radius: 0px 20px 0px 0px;

}

@media (max-width: 767px) {
  .text-box {
    padding-right: 0px;
  }
  .description{
    margin-bottom: 20px;
    font-size: 16px;
  }
  .column-gradient-orange{
    border-radius: 20px 20px 0px 0px;
  }
  .column-gradient-purple{
    border-radius: 0px 0px 20px 20px;
  }
  .hat-color-1 {
  font-size: 15px;
  margin-right: 12px;
  color: var(--main-yellow-color);
  margin-bottom: 5px;
  }

  .hat-color-2 {
  font-size: 15px;
  margin-right: 12px;
  color: var(--main-purple-color);
  margin-bottom: 5px;
  } 
  .hat-text-color {
  font-size: 12px;
  color: var(--main-orange-color);
  margin-bottom: 0px;
}
}
</style>
