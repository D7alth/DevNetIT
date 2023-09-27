<template>
  <div class="brandingShowcase section-container">
    <div class="container-page">
      <div class="columns">
        <div class="column col-md-12 col-6" v-if="!isDesktop">
          <div class="branding-image-container">
            <BrandingGallery 
            :featureGallery="featureGallery"
            alt="Branding Image2"
            />
          </div>
        </div>
        <div class="column col-md-12 col-6" v-if="isDesktop">
          <div class="branding-image-container">
            <BrandingGallery 
            :featureGallery="featureGallery"
            alt="Branding Image2"
            />
          </div>
        </div>
        <div class="column col-md-12 col-6 branding-text-box">
          <div class="text-box">
            <TextBlock 
              :hat="hatText"
              :headline="headlineText"
              :description="descriptionText"
            />
            <div class="cta-container" v-for="item in brandingIconList" :key="item.id">
              <div class="cta-icon">
               <img :src="item.iconUrl" :alt="item.iconTitle">
              </div>
              <div class="point-text">{{ item.iconTitle }}</div>
            </div>
            <div class="button-container">
            <a
              :href="button.Link"
              v-for="(button, index) in cta"
              :key="index"
              :class="[ 'btn-cta-fw-pd',
              button.Style === 'FIlled' ? 'btn-filled' :
              button.Style === 'Border' ? 'btn-bordered' :
              button.Style === 'Menu' ? 'btn-menu' : '']"
             
            >
            {{ button.Label }}
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextBlock from "./../components/blocks/TextBlock";
import BrandingGallery from "./../components/Gallery/BrandingGallery";

export default {
  name: "BrandingSection",
  props: {
    hatText: String,
    headlineText: String,
    descriptionText: String,
    brandingIconList: Array,
    cta: Array,
    featureGallery: Array
  },
  components: {
    TextBlock,
    BrandingGallery
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
  background-size: contain;
  background-repeat: no-repeat;

}
.icon-code{
  width: 36px; 
  height: 20px;
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
.branding-text-box{
  display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding-left: 30px;
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
.branding-text-box{
  display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding-left: 0px;
}
}

</style>
