<template>
  <div class="columns">
    <div class="column col-md-12 col-6">
      <div class="highlight-box-container">
        <div class="highlight-Box ">
          <h1 class="headline">{{ headline }}</h1>
          <p class="description">{{ description }}</p>
          <div class="button-container">
            <button class="btn-filled">
              {{ button1Text }}
            </button>
            <button class="btn-bordered">
              {{ button2Text }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="column col-md-12 col-6">
      <div class="image-container">
        <img class="responsive-img" :src="imageSource" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBox',
  props: {
    headline: String,
    description: String,
    button1Text: String,
    button2Text: String,
    imageSource: String
  }
}
</script>

<style scoped>
.highlight-Box {

  text-align: left;

 
}

.headline {
  font-size: 60px;
  color: var(--main-black-color);
  margin-bottom: 10px;
}

.description {
  font-size: 20px;
  color: var(--main-grey-color);
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: start;
  margin-top: 20px;
}

.btn-filled {
  background: linear-gradient(45deg, var(--main-yellow-color), var(--main-orange-color));
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
.image-container {
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.responsive-img {
  max-width: 80%;
  max-height: 80%;
  margin-bottom: -28px;
}

.highlight-box-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 100%;
}
@media (max-width: 768px) {
  .highlight-box {
    padding: 10px;
  }

  .headline {
    font-size: 30px;
    text-align: center;
  }

  .description {
    font-size: 16px;
    text-align: center;
  }

  .button-container {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .btn-filled, .btn-bordered {
    width: 100%;
    margin: 5px 0;
  }
}
</style>
