<template>
  <header>
    <button class="logout_button" @click="logout()">Logout</button>
  </header>
</template>

<script setup>
import { useStore } from '@nuxtjs/composition-api';
const store = useStore()
const logout = () => {
  store.dispatch('auth/logout')
  window.location.reload()
  }
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: flex-end;
    height: 40px;
    border: 1px solid black;

  }
  .logout_button {
    background-color: #f2f5fa;
    border: none;
    cursor: pointer;
    margin-right: 20px;
    font-size: 18px;
  }
</style>
