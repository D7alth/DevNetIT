<template>
  <div class="footer-bottom section-container">
    <div class="container-page">
      <div class="container">
        <div class="columns">
          <div class="column col-md-12 col-6">
            <div class="footer-text-block">
              <img class="img-responsive img-logo" :src="logoUrl" alt="" srcset="">
              <TextBlock
                :description="descriptionText"
              />
            </div>
          </div>
          <div class="column col-md-12 col-2">
            <div class="footer-text">
              <h4>{{ contactHeadline }}</h4>
              <p>{{ contactDescription }}</p>
            </div>
          </div>
          <div v-for="(item, index) in footerPoints" :key="index" class="column col-md-12 col-2">
            <div class="footer-text">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
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
  name: "FooterBottom",
  components: {
    TextBlock,
  },
  props: {
    descriptionText: String,
    contactHeadline: String,
    contactDescription: String,
    logoUrl: String,
    footerPoints: Array
  },
};
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.hr-divisor{
  color:rgba(0, 0, 0, 0.16);
  margin-bottom: 60px;
  background-color:rgba(0, 0, 0, 0.16);
}
.footer-bottom {
  background-color: var(--main-black-color);
}

.column {
  padding: 0 10px;
}

.headline-large {
  font-size: 24px; 
}

.footer-text-block {
  padding: 10px 0;
  padding-right: 50px;
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

.social-icons {
  display: flex;
}

.col-2 {
  margin-top: 20px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery-item {
  width: calc(33.33% - 16px);
  margin: 8px;
}

.gallery-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
}

</style>