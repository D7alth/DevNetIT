<template>
  <div class="exit-popup">
    <div class="popup-content">
      <slot></slot>
    </div>
    <div class="popup-overlay" @click="closePopup"></div>
  </div>
</template>

<script>
export default {
  name: 'ExitPopup',
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
};
</script>

<style>
.exit-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.popup-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.popup-content {
  background-color: var(--main-black-color);
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  z-index: 99999;
  width: 700px;
}
</style>
