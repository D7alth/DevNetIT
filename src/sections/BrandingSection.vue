<template>
  <div class="brandingShowcase section-container">
    <div class="container-page">
      <div class="columns">
        <div class="column col-md-12 col-6" v-if="!isDesktop">
          <div class="branding-image-container">
            <img class="branding-image" src="./../assets/Branding-Showcase.png" alt="Branding Image" />
          </div>
        </div>
        <div class="column col-md-12 col-6" v-if="isDesktop">
          <div class="branding-image-container">
            <img class="branding-image" src="./../assets/Branding-Showcase.png" alt="Branding Image" />
          </div>
        </div>
        <div class="column col-md-12 col-6">
          <div class="text-box">
            <TextBlock 
              :hat="hatText"
              :headline="headlineText"
              :description="descriptionText"
            />
            <div class="cta-container">
              <div class="cta-icon">
                <i class="icon icon-flash"></i>
              </div>
              <div class="point-text">{{ pointText1 }}</div>
            </div>
            <div class="cta-container">
              <div class="cta-icon">
                <i class="icon icon-code"></i>
              </div>
              <div class="point-text">{{ pointText2 }}</div>
            </div>
            <button class="btn-filled btn-cta">{{ ctaButtonText }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextBlock from "./../components/blocks/TextBlock";
export default {
  name: "BrandingSection",
  props: {
    hatText: String,
    headlineText: String,
    descriptionText: String,
    pointText1: String,
    pointText2: String,
    ctaButtonText: String,
  },
  components: {
    TextBlock
  },
  computed: {
    isDesktop() {
      return window.innerWidth >= 768; 
    },
  },
};
</script>


<style scoped>
.brandingShowcase{
  background-image: url('./../assets/backgrouds/brandingSection.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.branding-image{
  max-width: 92%;
  text-align: left;
}

.text-box {
  text-align: left;
  padding: 0px 40px 0px 0px;
}

.cta-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.cta-icon {
  margin-right: 10px;
}

.point-text {
  font-size: 13px;
  color: var(--main-grey-color); 
}
.icon-flash{
  width: 22px; 
  margin-left: 10px;
  height: 37px;
  background-image: url('./../assets/icons/flash.svg');
  background-size: contain;
  background-repeat: no-repeat;

}
.icon-code{
  width: 36px; 
  height: 20px;
  background-image: url('./../assets/icons/code.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
.btn-cta{
  margin-top: 40px;
  width: 100%;
  border-radius: 50px;
}
.column{
  text-align: left;
}
@media (max-width: 767px) {
  .branding-image{
   max-width: 100%;
  }
  .text-box {
    padding:0px;
  }
  .btn-cta{
  margin-top: 12px;
  width: 100%;
  border-radius: 50px;
}
}

</style>
