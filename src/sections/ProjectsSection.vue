<template>
  <div class="latest-projects-section section-container" id="projects">
    <div class="container-page-carousel">
      <div class="headline-container">
        <TextBlock :hat="hatText" :headline="headlineText" />
      </div>
      <div class="cards-container">
        <CardCarouselS1 :cards="projects" />
      </div>
      <div class="button-container">
          <a
            v-for="(button, index) in cta"
            :key="index"
            :class="[ 'btn-cta-fw',
            button.Style === 'FIlled' ? 'btn-filled' :
            button.Style === 'Border' ? 'btn-bordered' :
            button.Style === 'Menu' ? 'btn-menu' : '']"
            :href="button.Link"
          >
         {{ button.Label }}
          </a>
      </div>
    </div>
  </div>
</template>

<script>
import TextBlock from "@/components/blocks/TextBlock";
import CardCarouselS1 from "@/components/cards/CardCarouselS1.vue";

export default {
  name: "ProjectsSection",
  components: {
    TextBlock,
    CardCarouselS1,
  },
  props: {
    hatText: String,
    headlineText: String,
    cta: Array,
    projects: Array
  },
};
</script>


<style scoped>
.latest-projects-section {
  text-align: center;

  background-image: url('./../assets/backgrouds/Projects2.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.headline-container {
  margin-bottom: 20px;
  text-align: center;

}

.hat {
  font-size: 18px;
  color: var(--main-orange-color);
  margin-bottom: 8px;
}

.headline {
  font-size: 40px;
  margin: 0;
}

.carousel-container {
  position: relative;
}

.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s;
}

.carousel-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.carousel-counter {
  font-size: 14px;
  color: var(--main-grey-color);
}

.carousel-prev,
.carousel-next {
  font-size: 18px;
  color: var(--main-orange-color);
  background: none;
  border: none;
  cursor: pointer;
}

.cta-button-container {
  margin-top: 40px;
}

.cta-button {
  padding: 10px 20px;
  background-color: var(--main-orange-color);
  color: var(--main-white-color);
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: var(--main-yellow-color);
}
.button-container {
    text-align: center;
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
}

</style>
