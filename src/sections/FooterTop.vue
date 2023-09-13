<template>
  <div class="footer-top">
    <br><br>
    <div class="container">
      <div class="columns">
        <div class="column col-md-12 col-6">
          <div class="footer-text-block">
            <TextBlock
              :hat="contactHat"
              :headline="contactHeadline"
              :description="contactDescription"
              headlineStyle="headline-large"
            />
          </div>
        </div>
        <div class="column col-md-12 col-2">
          <div class="footer-text">
            <h4>{{ phoneTitle }}</h4>
            <p>{{ phoneNumber }}</p>
          </div>
        </div>
        <div class="column col-md-12 col-2">
          <div class="footer-text">
            <h4>{{ emailTitle }}</h4>
            <p>{{ emailAddress }}</p>
          </div>
        </div>
        <div class="column  col-md-12 col-2">
          <div class="footer-text">
            <h4>{{ socialTitle }}</h4>
            <div class="social-icons">
              <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.link">
                <div class="icon-circle">
                  <img class="icon" :src="icon.iconUrl">
                </div>
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

export default {
  name: "FooterTop",
  components: {
    TextBlock,
  },
  props: {
    contactHat: String,
    contactHeadline: String,
    phoneTitle: String,
    phoneNumber: String,
    emailTitle: String,
    emailAddress: String,
    socialTitleText: String,
    socialIcons: Array
  },
};
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.hr-divisor{
  color:rgba(0, 0, 0, 0.16);
  margin-bottom: 60px;
  background-color:rgba(0, 0, 0, 0.16);
  width: 1200px;
}
.footer-top {
  background-color: var(--main-white-color);
  background-image: url('./../assets/backgrouds/FooterTop.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.column {
  padding: 0 10px;
}


.headline-large {
  font-size: 24px;
}

.footer-text-block {
  padding: 10px 0;
}

.footer-text {
  padding: 10px 0;
}

.footer-text h4 {
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
}

.footer-text p {
  font-size: 16px;
  color: #777;
  margin: 0;
}
.social-icons{
  display:flex;
}

.col-2{
  margin-top: 20px;
}
.container{
  width: 1200px;
}
@media (max-width: 767px) {
  .hr-divisor{
  color:rgba(0, 0, 0, 0.16);
  margin-bottom: 20px;
  background-color:rgba(0, 0, 0, 0.16);
  }
  .container{
    max-width: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }
  .hr-divisor{
  color:rgba(0, 0, 0, 0.16);
  margin-bottom: 10px;
  margin-top: 60px;
  background-color:rgba(0, 0, 0, 0.16);
  width: 100%;
}
.footer-text-block {
  padding: 0px 0;
}
.col-2{
  margin-top: 00px;
}
.columns{
  margin-bottom: 0px;
  padding-bottom: 20px;
}

}
</style>
