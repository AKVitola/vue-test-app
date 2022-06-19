<template>
  <section>
    <h1 class="page-title">{{ $store.getters.pageTitle }}</h1>
    <p class="page-subtitle" v-html="$store.getters.pageSubtitle" />
  </section>
</template>

<script>
import "../style.css";

export default {
  name: "SurveyIntro",
};
</script>
