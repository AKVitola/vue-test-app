<template>
  <form @submit="submitForm">
    <div v-if="this.$route.name === 'firstPage'">
      <article
        v-for="question in $store.getters.firstPageQuestions"
        v-bind:key="question.code"
        class="question-box"
        :id="question.code"
      >
        <section v-if="question.type === 'dropdown'">
          <label class="question-label">
            <span v-if="question.is_required" class="required">*</span>
            {{ question.name }}
          </label>

          <p v-if="question.public_description !== ''" class="question-description">
            {{ question.public_description }}
          </p>

          <select
            v-model="selected"
            class="dropdown"
            :required="question.is_required"
            :id="question.code"
          >
            <option
              v-for="(item, key) in question.choices"
              v-bind:key="key"
              :value="getChoiceValue(item)"
            >
              {{ getChoiceValue(item) }}
            </option>
          </select>
        </section>
      </article>
    </div>

    <div v-if="this.$route.name === 'secondPage'">
      <article
        v-for="question in $store.getters.secondPageQuestions"
        v-bind:key="question.code"
        class="question-box"
        :id="question.code"
      >
        <section v-if="question.type === 'radiogroup'">
          <p class="question-label">
            <span v-if="question.is_required" class="required">*</span>
            {{ question.name }}
          </p>

          <p v-if="question.public_description !== ''" class="question-description">
            {{ question.public_description }}
          </p>
          <div
            v-for="(item, key) in question.choices"
            v-bind:key="key"
            class="input-wrap"
          >
            <input
              type="radio"
              :v-model="getChoiceValue(item)"
              :required="question.is_required"
              :name="question.code"
              :id="question.code + '-' + getChoiceValue(item)"
            />

            <label :for="question.code" class="radio-label">
              {{ getChoiceValue(item) }}
            </label>
          </div>
        </section>
      </article>
    </div>
  </form>
</template>

<script>
export default {
  name: "QuestionComponent",
  //   data() {
  //     return {
  //       surveyAnswers: {
  //         research_telephone_surveys: "",
  //         research_online_group_discussions: "",
  //         research_online_diaries_studies: "",
  //         research_webcam_surveys: "",
  //         research_mobile_app_tests: "",
  //         research_tasks_studies: "",
  //         research_personal_interviews: "",
  //         research_personal_interviews_home: "",
  //         research_focus_groups: "",
  //         research_product_tests: "",
  //         research_food_tasting: "",
  //         research_mystery_shopping: "",
  //       },
  //     };
  //   },
  methods: {
    getChoiceValue(item) {
      const key = Object.keys(item)[0];

      return item[key];
    },
    submitForm(event) {
      event.preventDefault();

      //TODO form validation - check for emty fields
      //should validate also before going from first to second page
      //send the returned form valus to state or console log ?
    },
  },
};
</script>
