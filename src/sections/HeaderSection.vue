<template>
  <header class="navbar bg-dark ps-4">
    <section class="navbar-section">
      <a href="/" class="navbar-brand mr-2"><img class="img-logo img-responsive" :src="logoUrl" alt="logo"></a>
    </section>
    <section class="navbar-center hide-sm">
      <router-link to="/" class="btn btn-link">Home</router-link>
      <a v-for="menuItem in menuItems" :key="menuItem.id" :href="menuItem.link" class="btn btn-link">{{ menuItem.label }}</a>
    </section>
    <section class="navbar-section hide-sm">
      <div class="cta-container">
        <div class="cta-icon">
          <img :src="iconUrl" :alt="iconTitle">
        </div>
        <a :href="buttonLink" style="color: white" class="point-text">{{ iconTitle }}</a>
      </div>
      <div class="button-container">
        <a
          class=" btn-filled"
          :href="buttonLink"
          style="color: white"
        >
       {{ buttonLabel }}
      </a>
      </div>
    </section>
    <section class="navbar-section" v-if="isMobile">
      <button class="icon-svg-gradient icon-menu btn-menu-link" @click="toggleMobileMenu"></button>
      <div class="mobile-overlay" v-show="showMobileMenu" @click="toggleMobileMenu"></div>
      <div class="mobile-menu" :class="{ active: showMobileMenu }">
        <ul class="menu">
          <div class="button-container menu-button-container">
        <a
          class="btn-menu btn-filled"
          :href="buttonLink"
          style="color: white"
        >
       {{ buttonLabel }}
      </a>
      </div>
          <li> <router-link to="/" @click="closeMobileMenu">Home</router-link></li>
          <li v-for="menuItem in menuItems" :key="menuItem.id">
            <a @click="closeMobileMenu" :href="menuItem.link" class="btn btn-link">{{ menuItem.label }}</a>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: {
    msg: String,
    logoUrl: String,
    menuItems: Array,
    menuIconList: Array,
    iconUrl: String,
    iconTitle: String,
    buttonLink: String,
    buttonLabel: String,
  },
  data() {
    return {
      showMobileMenu: false
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 768;
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    closeMobileMenu() {
      this.showMobileMenu = false;
    }
  }
};
</script>

<style scoped>
.menu-button-container{
  margin-bottom: 20px;
}
.btn-menu{
  margin: 0px;
}
.btn-menu-link{
  background-color: transparent;
  border: none;

}
.cta-container {
  display: flex;
  align-items: center; 
  margin-right: 20px;
}

.cta-icon {
  width: 21px; 
  height: 21px;
  margin-right: 10px;
}

.cta-text {
  display: flex;
  align-items: center;
}

.btn-link{
  color: var(--main-white-color);
}
.btn-link:hover{
  color: var(--main-orange-color);
}
.icon-phone{
  width: 21px; 
  height: 21px;
  background-image: url('./../assets/icons/phone.svg');
}

.icon-menu{
  background-image: url('./../assets/icons/menu.svg');
}
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 15, 0.7);
  z-index: 999;
  display: none;
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 15, 0.7);
  z-index: 999;
  display: none;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%; 
  width: 100%;
  height: 100%;
  background-color:  rgba(1, 1, 15, 1);
  z-index: 1000;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mobile-menu.active {
  right: 0;
}

.menu li {
  margin-bottom: 20px;
}
.menu a {
  font-size: 24px;
}
.menu a:hover {
  font-size: 24px;
  color: var(--main-orange-color);
}
.menu {
    background: transparent;
    box-shadow: 0 0 0;
    list-style: none;
    margin: 0;
    min-width: 100%;
    padding: 0.4rem;
    transform: translateY(0.2rem);
    z-index: 300;
    text-align: center;
    border: none;
}
</style>