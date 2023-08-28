<template>
  <div class="our-customers-section section-container">
    <div class="container-page">
      <div class="headline-container">
        <TextBlock 
            :hat="hatText"
            :headline="headlineText"
          />
      </div>
      <div class="cards-container">
        <CardList v-for="card in customerData" :key="card.id" :item="card" />
      </div>
    </div>
  </div>  
</template>

<script>
import CardList from "./../components/cards/CardList";
import TextBlock from "./../components/blocks/TextBlock";

export default {
  name: "CustomersSection",
  components: {
    CardList,
    TextBlock
  },
  props: {
    hatText: String,
    headlineText: String,
    customerData: Array
  },
};
</script>

<style scoped>
.our-customers-section {
  text-align: center;

}

.headline-container {
  margin-bottom: 20px;
  text-align: center;

}

.hat {
  font-size: 18px;
  color: var(--main-orange-color);
  margin-bottom: 8px;
}

.headline {
  font-size: 40px;
  margin: 0;
  color:var(--main-black-color);
  margin-bottom: 80px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
@media (max-width: 767px) {
  .cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
}
</style>
