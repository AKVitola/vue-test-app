<template>
  <div class="container">
    <header class="header">
      <img class="logo" alt="Exercise logo" src="../assets/project_logo.svg" />
    </header>

    <article class="survey-intro" v-if="this.$route.name !== 'finalPage'">
      <SurveyIntro />
    </article>

    <router-view />

    <SurveyNavigation />
  </div>
</template>

<script>
import SurveyIntro from "./SurveyIntro.vue";
import SurveyNavigation from "./SurveyNavigation";
import "../style.css";

export default {
  name: "SurveyComponent",
  components: {
    SurveyIntro,
    SurveyNavigation,
  },
};
</script>
