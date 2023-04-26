<template>
  <div class="error" v-if="errorMessage">
    <p class="error_text">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
  defineProps({
    errorMessage: String
  })
</script>

<style lang="scss">
.error {
  margin: 10px;
  border-radius: 5px;
  background-color: red;
  padding: 2px 10px;
  text-align: center;

  &_text {
    color: #fff;
    font-weight: bold;
  }
}
</style>
