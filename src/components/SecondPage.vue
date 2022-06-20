<template>
  <h1 class="page-title">
    {{ $store.getters.secondPageTitle }}
  </h1>

  <QuestionComponent />

</template>

<script>
import QuestionComponent from "./QuestionComponent";

export default {
  name: "SecondPage",
  components: {
    QuestionComponent
  }
};
</script>
