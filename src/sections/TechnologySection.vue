<template>
  <div class="technology-section section-container pt-6">
    <div class="container-page">
      <div class="container">
        <h2 class="section-title">{{ sectionTitle }}</h2>
        <div class="columns">
          <div class="column col-md-12 col-5">
            <p class="section-text">{{ sectionText }}</p>
          </div>
          <div class="column col-md-12 col-7">
            <hr class="section-divider" />
          </div>
        </div>
        <div class="logo-carousel">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(logo, index) in logos" :key="index">
                <div class="logo-container">
                  <img class="logo-image" :src="logo.url" alt="Logo" />
                  <div class="tooltip">{{ logo.label }}</div>
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
import Swiper from "swiper";

export default {
  name: "TechnologySection",
  props: {
    sectionTitle: String,
    sectionText: String,
    logos: Array
  },
  data() {
    return {
      swiper: null,
    };
  },
  mounted() {
    this.initializeSwiper();
  },
  unmounted() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  },
  methods: {
    initializeSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        speed: 1500,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.tooltip {
  display: none;
  position: absolute;
  top: 0px; /* Ajuste a posição vertical conforme necessário */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
  z-index: 999999999;
}

.logo-container:hover .tooltip {
  display: block;
}
.technology-section {
  text-align: center;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
}

.section-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-text {
  font-size: 16px;
  text-align: left;
}

.section-divider {
  border-top: 1px solid #ccc;
  margin: 0;
  width: 100%;
}

.logo-carousel {
  max-width: 100%;
  overflow: hidden;
  margin: 10px auto 0;
}

.swiper-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.swiper-slide {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 80px;
}

.logo-image {
  opacity: 0.6;
  max-width: 60px; 
}

.column {
  padding: 0px 20px 0px 0px;
}

@media (max-width: 768px) {
  .column {
    padding: 0px;
  }
}
</style>
