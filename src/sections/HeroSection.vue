<template>
  <div class="hero section-container-hero" id="hero">
    <div class="container-page-carousel">
      <div class="hero-body hero-lg">
        <div class="highlight-box-container">
          <HeroBox
            :headline="headlineText"
            :description="descriptionText"
            :ctaHero="ctaHero"
            :imageSource="imageSourcePath"
            :width="width"
            :height="height"
            :margin="margin"
            :padding="padding"
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
    ctaHero: Array,
    imageSourcePath: String,
    width: String,
    height: String,
    margin: String,
    padding: String,
  },
}
</script>

<style scoped>
.hero{
  background-image: url('./../assets/backgrouds/Hero.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
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
