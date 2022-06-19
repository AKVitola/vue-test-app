<template>
  <article
    v-for="question in $store.getters.firstPageQuestions"
    v-bind:key="question.code"
    class="question-box"
  >
    <label class="question-label">
      <span class="required">*</span>
      {{ question.name }}
    </label>
    <p class="question-description">{{ question.public_description }}</p>
    <select name="choices" id="public_description" class="dropdown" required>
      <option v-for="(item, key) in question.choices" v-bind:key="key" :value="key">
        {{ item }}
      </option>
    </select>
  </article>
</template>

<script>
export default {
  name: "FirstPage",
  methods: {
    isDropdown() {
      //check the question type and use the method in v-show for the conainaing div
    },

    //what to do with isRequired ? Should not use hard coded
  },
};
</script>
