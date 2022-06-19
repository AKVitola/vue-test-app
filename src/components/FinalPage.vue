<template>
  <h1 class="page-title" v-html="$store.getters.finalPageTitle" />
  <p class="page-subtitle">{{ $store.getters.finalPageText }}</p>
</template>

<script>
export default {
  name: "FinalPage",
};
</script>
