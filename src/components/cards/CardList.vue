<template>
  <div class="card" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="logo-container">
      <img class="logo" :src="item.logoSrc" :alt="item.logoAlt" />
    </div>
    <div class="text-container" :class="{ 'hover': hover }">
      <div class="hat">{{ item.hatText }}</div>
      <h2 class="headline">{{ item.headlineText }}</h2>
      <p class="description">{{ item.descriptionText }}</p>
      <router-link class="more-link" :to="`/customers/${item.id}`">{{ item.moreText }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: {
    item: Object,
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
.card {
  width: 280px;
  border: 1px solid var(--variant-dark-white-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  background: white;
  margin-bottom: 40px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.card:hover {
  background: linear-gradient(to bottom, var(--main-orange-color), var(--main-yellow-color));
  box-shadow: 0 2px 4px rgba(0, 0, 10px, 0.5);
  border: none;
}

.card:hover .text-container .white-text {
  color: var(--main-white-color);
}
.card:hover .text-container {
  color: var(--main-white-color); 
}

.logo-container {
  position: relative;
  margin-top: -40px;
  margin-bottom: 20px;
  border: 1px solid var(--variant-dark-white-color);
  border-radius: 8px;
  overflow: hidden;
  width: 100px;
  height: 100px;
}

.logo {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.text-container {
  text-align: left;
  padding: 0 10px;
  min-height: 140px;
  color: var(--main-grey-color);
  transition: color 0.3s;
}

.hat {
  font-size: 16px;
  color: var(--main-yellow-color);
  margin-bottom: 8px;
}

.headline {
  font-size: 20px;
  margin-bottom: 20px;
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
  color: white;
}
</style>