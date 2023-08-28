<template>
  <HeaderSection />
  <router-view/>
  <FooterTop
    contactHat="Contact"
    contactHeadline="Excited about the project?"
    phoneTitle="contact by phone"
    phoneNumber="(786) 483-0225"
    emailTitle="contact by email"
    emailAddress="tiago@devnetti.com"
    :socialTitle="socialTitle"
    :socialIcons="socialIcons"
  />
  <FooterBottom
    descriptionText="I have a degree in Systems Information and over 10 years of experience in system developing, 8 of these years using .NET, ASP.NET, MVC versions 4/5, C #, Azure platform, WEBSERVICE."
    contactHeadline="Office No 1"
    contactDescription="1234 North Avenue Luke Lane South Bend, IN 360001"
    galleryHeadline="Gallery"
    galleryCustomersHeadline="Gallery"
  /> 
  <ExitPopup v-if="isPopupVisible" @close="closePopup">
    <p class="headline-popup orange">Contact us</p>
    <p class="description-popup white">Helping you overcome your any kind
of technology challenges</p>
    <p class="email-label">Email</p>
    <a class="email-link" href="mailto:tiago@devnetti.com">tiago@devnetti.com</a>
    <p class="phone-label">Phone</p>
    <a class="phone-link" href="tel:(786) 483-0225">(786) 483-0225</a>
    <a href="tel:(786) 483-0225" class="btn-filled btn-cta-fw-popup">Estimate Projects</a>
  </ExitPopup>
</template>

<script>
import HeaderSection from './sections/HeaderSection.vue'
import FooterBottom from './sections/FooterBottom.vue';
import FooterTop from './sections/FooterTop.vue';
import ExitPopup from './components/popups/ExitPopup.vue';

export default {
  components:{
    HeaderSection,
    FooterBottom,
    FooterTop,
    ExitPopup
  },
  data() {
    return {
      isPopupVisible: false,
      socialTitle: "Connect with Us",
      socialIcons: 
      [
        { 
          className: "icon icon-twitter", 
          link: "https://twitter.com/" 
        },
        { 
          lassName: "icon icon-facebook", 
          link: "https://facebook.com/" 
        },
        { 
          className: "icon icon-instagram", 
          link: "https://instagram.com/" 
        },
      ],
    };
    
  },
  methods: {
    showPopup() {
      const popupShown = localStorage.getItem('popupShown');
      if (!popupShown) {
        localStorage.setItem('popupShown', 'true');
        this.isPopupVisible = true;
      }
    },
    closePopup() {
      this.isPopupVisible = false;
    }
  },
  mounted() {
    document.addEventListener('mouseleave', () => {
      this.showPopup();
    });
  }
}
</script>

<style>
:root{
  --main-orange-color: #FD5901;
  --main-yellow-color: #FB8706;
  --main-purple-color: #5532FB;
  --main-black-color: #01010F;
  --main-grey-color: #696a74;
  --main-white-color: #ffffff;
  --variant-light-grey-color: #adadad;
  --variant-dark-white-color: #dcdce0;
}
*{
  font-family: 'DM Sans', sans-serif;
}
.orange{
  color: var(--main-orange-color);
}
.bg-dark{
  background-color: var(--main-black-color) !important;
}
.container-page{
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-page-carousel{
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}
.section-container{
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
  padding-bottom:40px;
}
.btn-cta-fw{
  margin-top: 70px;
  width: 400px;
}

.ps-1{
  padding: 10px 20px;
}
.ps-2{
  padding: 10px 30px;
}
.ps-3{
  padding: 20px 40px;
}
.ps-4{
  padding: 20px 60px;
}

.pt-6{
  padding-top:50px;

}
.pb-6{
  padding-bottom:50px;
}

.img-logo{
  width: 200px; 
}

.icon-svg-gradient{
  display: inline-block;
  width: 30px; 
  height: 30px;
  background-size: cover;
}
.headline{
  font-size: 40px;
}
.btn-gradient{
  background: linear-gradient(45deg, var(--main-yellow-color), var(--main-orange-color));
  border-radius: 8px;
  color: var(--main-white-color);
  padding: 6px 32px;
  border: none;
  cursor: pointer;
}

.hat {
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--main-yellow-color);
}
.headline {
  font-size: 40px;
  margin-bottom: 20px;
  color: var(--main-black-color);
}
.headline-white{
  color: var(--main-white-color);
}
.description {
  font-size: 18px;
  margin-bottom: 20px;
  color:var(--main-grey-color);
}
.btn-filled {
  background: linear-gradient(45deg, var(--main-yellow-color), var(--main-orange-color));
  box-shadow: 0px 0px 10px var(--main-orange-color);
  border-radius: 56px;
  color: var(--main-white-color);
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

.btn-bordered {
  border: 2px solid var(--main-grey-color);
  border-radius: 56px;
  color: var(--main-grey-color);
  padding: 10px 20px;
  background: none;
  cursor: pointer;
  margin-left: 10px;
}

.btn-filled:hover {
  color: var(--main-white-color);
}

.btn-bordered:hover {
  color: var(--main-black-color);
}
.headline-popup{
  font-size: 60px;
  color: var(--main-orange-color);
  margin: 0px;
}
.description-popup{
  color: var(--main-white-color);
}
.email-label, .phone-label{
  margin: 0px;
  color: white;
}
.email-link, .phone-link{
  font-size: 20px;
  color: #ffffff61;
  margin-bottom: 18px;
}
.btn-cta-fw-popup{
  width: 100%;
  margin-top: 10px;
}
/* icons */
.icon-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px; 
  background-color: var(--variant-light-grey-color);
  border-radius: 50%; 
  transition: background-color 0.3s ease, padding 0.3s ease;
  cursor: pointer;
  margin-right: 8px;
}

.icon-circle:hover {
  background-color: var(--main-orange-color);
  padding: 10px;
}

.icon {
  font-size: 24px;
  position: relative;
  margin-bottom: -5px;
  margin-right: -5px;
  transition: color 0.3s ease; 
  background-repeat: no-repeat;
}


.icon:hover {
  color: var(--main-white-color);
}

.icon:hover {
  filter: brightness(0) invert(1);
}
.icon-twitter{
  background-image: url('./assets/icons/la_twitter.svg');
}
.icon-facebook{
  background-image: url('./assets/icons/facebook.svg');
}
.icon-pinterest{
  background-image: url('./assets/icons/bxl_pinterest-alt.svg');
}
.icon-instagram{
  background-image: url('./assets/icons/ant-design_instagram-filled.svg');
}
.testimonial-icon{
  background-image: url('./assets/icons/testimonial-icon.svg');
}

@media (max-width: 767px) {
  .text-box {
    padding-right: 0px;
  }
  .hat{
    font-size: 12px;
  }
  .headline{
    font-size:30px;
  }
  .description{
    font-size: 16px;
  }
  .container-page-carousel{
    max-width:100%;
    padding-left: 40px;
    padding-right: 40px;
  }
  .container-page{
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
  .btn-cta-fw{
  margin-top: 170px;
  width: 100%;
  }
  .pt-6{
    padding-top:30px;

  }
  .pb-6{
    padding-bottom:30px;
  }

}
</style>
