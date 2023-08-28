<template>
  <div class="custom-carousel">
    <swiper
      :modules="modules"
      :slides-per-view="swiperSlidesPerView"
      :space-between="8"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(card, index) in cards" :key="index">
      <div class="card" @mouseover="card.hover = true" @mouseleave="card.hover = false">
        <div class="card-icon card-icon-circle">
          <i class="testimonial-icon icon"  :class="{ 'card-icon-white': card.hover }"></i>
        </div>
        <div class="text-container">
          <div class="card-body" :class="{ 'white-text': card.hover }">
            <p class="description">{{ card.descriptionText }}</p>
          </div>
          <div class="card-footer" :class="{ 'white-text': card.hover }">
           <p class="testimonial-name">{{ card.testimonialName }}</p>
           <button class="testimonial-office btn-gradient-disabled" :class="{ 'btn-white-bg': card.hover }">
              {{ card.testimonialOffice }}
            </button>
          </div>
        </div>
      </div>
    </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import "swiper/swiper-bundle.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    cards: Array,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
      hoveredCardIndex: -1, 
    };
  },
  computed: {
    swiperSlidesPerView() {
      if (window.innerWidth < 768) {
        return 1; 
      } else {
        return 4; 
      }
    },
  },
};
</script>

<style scoped>
.card {
width: 220px;
border: 1px solid var(--variant-dark-white-color);
border-radius: 8px;
display: flex;
flex-direction: column;
align-items: left;
text-align: left;
padding: 20px;
margin: 10px;
background: var(--main-white-color);
margin-bottom: 70px;
transition: background-color 0.3s, box-shadow 0.3s;
}
.card:hover {
background: linear-gradient(111deg, var(--main-orange-color), var(--main-yellow-color));
box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
border: none;
}

.card:hover .text-container .white-text {
color: var(--main-white-color);
}

.card:hover .text-container {
color: var(--main-white-color);
}
.text-container {
text-align: left;
padding: 0 10px;
min-height: 140px;
color: var(--main-grey-color);
transition: color 0.3s;
}
.description {
font-size: 14px;
color: var(--main-grey-color);
margin-bottom: 12px;
}
.card:hover .hat,
.card:hover .headline,
.card:hover .description,
.card:hover .more-link {
color: var(--main-white-color);
}
.white-text {
color: var(--main-white-color); 
}

.swiper-slide{
  padding-top: 0px;
}
.custom-carousel {
  height: 330px;
  margin-bottom: 70px;
}

.text-container {
text-align: left;
padding: 0 10px;
min-height: 140px;
color: var(--main-grey-color);
transition: color 0.3s;
}

.card .card-body, .card .card-footer, .card .card-header{
padding: 0px;
}

.testimonial-office{
  padding: 4px 20px;
  border-radius: 40px;
  border: none;
  font-size: 12px;
}
.testimonial-name{
  margin-bottom: 8px;
  font-size: 20px;
}
.card-footer{
  margin-top: 40px;
}
.btn-gradient-disabled{
  background-color: var(--main-yellow-color);
  border-radius: 50px;
  color: var(--main-white-color);
  padding: 6px 32px;
  border: none;
  cursor: unset;
}
.btn-white-bg {
  background-color: rgba(255, 255, 255, 0.174);
  color: var(--main-white-color);
}
.testimonial-icon{
  font-size: 30px;
}
.card-icon-circle{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px; 
  height: 40px;
  background-color:  #5332fb10;
  border-radius: 50%;
  transition: background-color 0.3s ease, padding 0.3s ease;
  cursor: pointer;
  margin-right: 8px;
  margin-bottom: 20px;
}
.card-icon-white{
  filter: brightness(0) invert(1);
}
@media (max-width: 768px) {
  .description{
    font-size: 12px;
  }
  .swiper-slide{
    padding-top: 0px;
  }
  .card {
    width: 80%;
    border: 1px solid var(--variant-dark-white-color);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    padding: 20px;
    margin: 0px;
    background: var(--main-white-color);
    margin-bottom: 40px;
    transition: background-color 0.3s, box-shadow 0.3s;
  }
  .custom-carousel {
  height: 230px;
  widows: 280px;
  }
}
</style>
