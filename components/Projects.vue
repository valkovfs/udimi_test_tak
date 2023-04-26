<template>
  <main>
    <div class="projects_container" v-for="project in projects" :key="project.id">
      <div class="project_box" @click="editProject(project)" >
        <div class="project_box_info">
          <img class="project_box_info_logo" :src="project.logo_url" alt="">
          <p class="project_box_info_title"> {{ project.name }} </p>
          <p class="project_box_info_active" v-bind:class="{ green: project.is_active}"> Active </p>
        </div>
        <ProjectTimeSpent :time="project.spent_sec_all_time" />
      </div>
    </div>
    <ProjectModal v-if="showModal" :project="selectedProject" :save-project="saveProject" :close-modal="closeModal" />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onMounted, useStore } from '@nuxtjs/composition-api';
const store = useStore()
const projects = computed(() => store.state.projects.projects)
const selectedProject = ref(null)
const showModal = ref(false)
const editProject = (project) => {
  selectedProject.value = project
  showModal.value = true
}

const saveProject = async (project) => {
  await store.dispatch('projects/updateProject', { id: project.id, name: project.name })
}

const closeModal = () => {
  selectedProject.value = null
  showModal.value = false
  store.dispatch('projects/clearErrorMessage')
}


onMounted(() => {
  store.dispatch('projects/fetchProjects')
})
</script>

<style lang="scss" scoped>
  .projects_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .project_box {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border: 0.3px solid #dadada;
    width: 600px;
    height: 100px;
    margin: 10px;
    cursor: pointer;
    &_info {
      width: 400px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 20px;
      p {
        margin: 5px;
        font-weight: bold;
        overflow: hidden;
        hyphens: auto;
      }
      &_logo {
        width: 50px;
        height: 50px;
      }
      &_title {
        width: 170px;
        text-align: start;
        padding-left: 30px;
      }
      &_active {
      }
    }
    &_time {
      &_container {
        display: flex;
        width: 200px;
        height: 25px;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

.green {
  color: #2f941b;
}

.project_box_active_text {
  font-size: 18px;
}
</style>
