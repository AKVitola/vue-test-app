<template>
  <div class="container">
    <header class="header">
      <img class="logo" alt="Exercise logo" src="../assets/project_logo.svg" />
    </header>

    <router-view />

    <SurveyNavigation />
  </div>
</template>

<script>
import SurveyNavigation from "./SurveyNavigation";
import "../style.css";

export default {
  name: "SurveyComponent",
  components: {
    SurveyNavigation,
  },
};
</script>
