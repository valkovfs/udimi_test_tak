<template>
  <div class="project_time">
    <div class="project_time_container">
      <p class="project_time-title">time this week</p>
      <p class="project_time-value">{{calculateTimeForWeek(time)}}</p>
    </div>
    <div class="project_time_container">
      <p class="project_time-title">this month</p>
      <p class="project_time-value">{{calculateTimeForMonth(time)}}</p>
    </div>
    <div class="project_time_container">
      <p class="project_time-title">total</p>
      <p class="project_time-value">{{calculateTotalTime(time)}}</p>
    </div>
  </div>
</template>

<script setup>
  import { calculateTotalTime, calculateTimeForMonth, calculateTimeForWeek } from '@/helpers/timeFormat';
  defineProps({
    time: Number
  })
</script>

<style lang="scss">
.project_time {
  &_container {
    display: flex;
    width: 200px;
    height: 25px;
    justify-content: space-between;
    align-items: center;
  }
}


</style>
