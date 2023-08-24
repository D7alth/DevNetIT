<template>
  <div class="text-block">
    <p class="hat">
      {{ hat }}
    </p>
    <h1 :class="['headline', headlineStyle]">
      {{ headline }}
    </h1>
    <p class="description">
      {{ description }}
    </p>
  </div>  

</template>

<script>
export default {
  name: "TextBlock",
  props: {
    hat: String,
    headline: String, 
    description: String,
    headlineStyle: String,
  },
};
</script>

<style>
@media (max-width: 768px) {
  .headline {
  font-size: 30px;  
  }
  .hat{
    font-size: 12px;
    margin: 0px;
    margin-top: 20px;
  }
  .description{
    font-size:16px;
  }
  .text-box{
    padding: 0px;
  }
  .branding-image{
    max-width: 100%;
  }
  .btn-cta{
    width: 100%;
    margin-top: 20px;
  }

}
</style>