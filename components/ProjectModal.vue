<template>
  <div class="modal">
    <div class="modal_background" @click="closeModal"></div>

    <form @submit.prevent="save">
      <div class="modal_content">
        <transition name="fade">
          <ErrorMessage :error-message="errorMessage" />
        </transition>
        <input class="modal_content_input" id="name" v-model="name">
        <div>
          <button class="modal_button" type="submit">Save</button>
          <button class="modal_button" type="button" @click="closeModal">Close</button>
        </div>
      </div>
    </form>

  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, computed, reactive } from 'vue'
import { useStore } from '@nuxtjs/composition-api';

const store = useStore()
const errorMessage = computed(() => store.state.projects.errorMessage)

const props = defineProps({
  project: Object,
  saveProject: Function,
  closeModal: Function
})

const id = ref(props.project.id)
const name = ref(props.project.name)

const save = async () => {
  await props.saveProject({ id: id.value, name: name.value });
  if (!store.state.projects.errorMessage) {
    await props.closeModal();
  }
}

onMounted(() => {
  name.value = props.project.name
})
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  &_background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    background-color: white;
    padding: 1rem;
    border-radius: 5px;

    &_input {
      border: 1px solid #dadada;
      border-radius: 5px;
      padding: 15px;
      margin: 10px;
      outline: none;
    }
  }

  &_error {
    margin: 10px;
    border-radius: 5px;
    background-color: red;
    padding: 3px;
    text-align: center;

    &_text {
      color: #fff;
      font-weight: bold;
    }
  }
  &_button {
    margin: 10px;
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
    color: #fff
  }
}
</style>
