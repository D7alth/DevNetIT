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
        <div class="card-image">
          <img :src="card.logoSrc" :alt="card.logoAlt" />
        </div>
        <div class="text-container">
          <div class="card-hat" :class="{ 'white-text': card.hover }">
            <p class="card-hat hat">{{ card.hatText }}</p>
          </div>
          <div class="card-header card-headline-slide" :class="{ 'white-text': card.hover }">
            <p class="card-title">{{ card.headlineText }}</p>
          </div>
          <div class="card-body" :class="{ 'white-text': card.hover }">
            <p class="description">{{ card.descriptionText }}</p>
          </div>
          <div class="card-footer">
            <router-link class="more-link" :to="`/projects/${card.id}`">More</router-link>
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
background: linear-gradient(to bottom, var(--main-orange-color), var(--main-yellow-color));
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
margin-bottom: 42px;
}

.more-link {
font-size: 12px;
color: var(--main-black-color);
text-decoration: none;
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

.hover {
color: var(--main-white-color);
}

.swiper-slide{
  padding-top: 10px;
}
.card-image {
  margin-top: -40px;
  text-align: center;
}
.card-image > img{
width: 100px;
}
.custom-carousel {
  height: 330px;
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
.card-headline-slide{
font-size: 20px;
margin-bottom: 20px;
color: var(--main-black-color);
}
@media (max-width: 767px) {

.swiper-slide{
  padding-top: 20px;
}
.card {
  width: 80%;
  border: 1px solid var(--main-grey-color);
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
width: 280px;
}
}
</style>
