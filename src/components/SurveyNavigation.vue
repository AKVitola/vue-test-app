<template>
  <section class="button-conatainer">
    <button
      @click="navigatePrevious"
      :disabled="this.$route.name === 'firstPage'"
      class="button button-back"
    >
      <span class="chevron left-chevron">&lsaquo;</span>
      <span class="button-text" v-html="$store.getters.prevButtonText" />
    </button>

    <button
      @click="navigateNext"
      v-if="this.$route.name !== 'finalPage'"
      class="button button-next"
    >
      <span class="button-text">
        {{ nextButtonText($store) }}
      </span>
      <span class="chevron right-chevron">&rsaquo;</span>
    </button>
  </section>
</template>

<script>
import "../style.css";

export default {
  name: "SurveyNavigation",
  methods: {
    nextButtonText($store) {
      if (this.$route.name === "secondPage") {
        return $store.getters.completeButtonText;
      }

      return $store.getters.firstPageButtonText;
    },

    navigateNext() {
      if (this.$route.name === "firstPage") {
        return this.$router.push("/2");
      }

      return this.$router.push("/3");
    },

    navigatePrevious() {
      if (this.$route.name === "finalPage") {
        return this.$router.push("/2");
      }

      return this.$router.push("/");
    },
  },
};
</script>
