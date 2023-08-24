<template>
  <div class="hero section-container-hero" id="hero">
    <div class="container-page-carousel">
      <div class="hero-body hero-lg">
        <div class="highlight-box-container">
          <HeroBox
            headline="About us"
            description="I have a degree in Systems Information and over 10 years of experience in system developing,8 of these years using .NET, ASP.NET, MVC versions 4/5, C #, Azure platform, WEBSERVICE."
            button1Text="Get in Touch"
            button2Text="Discover More"
            :imageSource="imageSource"
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
  data(){
    return{
      imageSource: require("@/assets/image-hero.png"),
    }
  }
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
