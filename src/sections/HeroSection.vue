<template>
  <div class="hero section-container-hero" id="hero">
    <div class="container-page-carousel">
      <div class="hero-body hero-lg">
        <div class="highlight-box-container">
          <HeroBox
            :headline="headlineText"
            :description="descriptionText"
            :button1Text="button1Text"
            :button2Text="button2Text"
            :imageSource="imageSourcePath"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBox from "./../components/blocks/HeroBox"

export default {
  name: 'HeroSection',
  components: {
    HeroBox
  },
  props: {
    headlineText: String,
    descriptionText: String,
    button1Text: String,
    button2Text: String,
    imageSourcePath: String,
  },
}
</script>

<style scoped>
.hero{
  background-image: url('./../assets/backgrouds/Hero.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.section-container-hero{
  display: flex;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-top:40px;
 padding-bottom: 20px;
}
</style>
