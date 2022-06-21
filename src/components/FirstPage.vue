<template>
  <h1 class="page-title">
    {{ $store.getters.firstPageTitle }}
  </h1>

  <p class="page-subtitle" v-html="$store.getters.firstPageSubtitle" />

  <QuestionComponent/>
</template>

<script>
import QuestionComponent from "./QuestionComponent";

export default {
  name: "FirstPage",
  components: {
    QuestionComponent
  }
};
</script>
