<template>
  <main>
    <form class="login_form" @submit.prevent="login">
      <transition name="fade">
        <ErrorMessage :error-message="errorMessage"/>
      </transition>
      <input class="login_form_input" v-model="email" type="email" placeholder="Email">
      <input class="login_form_input" v-model="password" type="password" placeholder="Password">
      <button class="login_form_button">Login</button>
    </form>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from '@nuxtjs/composition-api';


const store = useStore();
const email = ref('')
const password = ref('')
const errorMessage = computed(() => store.state.auth.error)

const login = () => {
  store.dispatch('auth/login', { email: email.value, password: password.value });
};
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .login_form {
    width: 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px 40px 50px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .11);
    box-shadow: 0 0 12px rgba(0, 0, 0, .25);
    border-radius: 15px;

    &_input {
      border: 1px solid #dadada;
      border-radius: 5px;
      padding: 15px;
      margin: 10px;
      width: 100%;
      outline: none;
      font-size: 18px;
    }

    &_input::placeholder {
      font-size: 16px;
    }

    &_button {
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      text-transform: none;
      text-shadow: none;
      font-size: 18px;
      background: #3761de;
      user-select: none;
      text-decoration: none;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      color: #fff;
    }

    &_error {
      padding: 20px;
    }
  }
}
</style>
