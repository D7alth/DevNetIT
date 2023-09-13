<template>
  <div class="cta-section section-container pt-6 pb-6">
    <div class="container-page">
      <TextBlock
        :hat="hatText"
        :headline="headlineText"
        headlineStyle = "headline-white"
      />
    
        <button :href="ctaButtonUrl" class="btn-filled btn-cta-fw-pd">
            {{ buttonText }}
        </button>

    </div>
  </div>  
</template>

<script>
import TextBlock from "./../components/blocks/TextBlock";

export default {
  name: "CtaSection",
  props: {
    hatText: String,
    headlineText: String,
    descriptionText: String,
    buttonText: String,
    ctaButtonUrl: String,
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
.cta-section{
  text-align:center;
  background-image: url('./../assets/backgrouds/cta.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
