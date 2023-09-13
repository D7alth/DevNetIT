<template>
  <div class="branding-gallery">
    <!-- Primeira Linha -->
    <div class="row">
      <div class="colunm-container">
      <div class="col-xs-12 col-md-7">
        <img :src="featureGallery[0] ? featureGallery[0].url : ''" alt="Image 1" class="img-full" />
      </div>
      <!-- Coluna para dispositivos móveis (100% em telas menores) -->
      <div class="col-xs-12 col-md-7">
        <img :src="featureGallery[1] ? featureGallery[1].url : ''" alt="Image 2" class="img-cropped" />
      </div>
    </div>
  </div>
    <!-- Segunda Linha -->
    <div class="row">
      <!-- Coluna única (100% em telas menores) -->
      <div class="col-xs-12 col-md-12">
        <img v-if="featureGallery.length > 2" :src="featureGallery[2] ? featureGallery[2].url : ''" alt="Image 3" class="img-full" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featureGallery: Array,
  },
};
</script>

<style scoped>
.branding-gallery {
  display: flex;
    flex-direction: column;
    padding: 0px;
    align-items: flex-start;
    align-content: center;
    justify-content: center;

}

.row {
  display: flex;
  flex-wrap: wrap; /* Para que as colunas se encaixem em telas menores */
  margin-left: -0.5rem; /* Compensar o margin padrão do Spectre */
  margin-right: -0.5rem; /* Compensar o margin padrão do Spectre */
  width: 100%;
}

.col {
  flex: 1;
  padding: 0.5rem; /* Espaçamento entre as colunas */
}

.colunm-container {
    display: flex;
    width: 100%;
}
.img-full {
  width: 100%;
  height: 240px;
  display: block;
  object-fit: cover;
  border-radius: 10px;
}

.img-cropped {
  width: 100%;
  height: 100%;
  padding-bottom: 0%;
  object-fit: cover;
  display: block;
  overflow: hidden;
  margin-left: 4px;
  border-radius: 10px;
}
.col-xs-12.col-md-12 {
    width: 100%;
    margin-top: 4px;
    object-fit: cover;
    border-radius: 10px;
}

/* Classes de colunas para dispositivos móveis */
@media (max-width: 767px) {
  .col-xs-12 {
    flex-basis: 100%; /* 100% de largura em telas menores */
  }
  .col-md-7,
  .col-md-5 {
    flex-basis: 50%; /* 100% de largura em telas menores */
  }
}
</style>