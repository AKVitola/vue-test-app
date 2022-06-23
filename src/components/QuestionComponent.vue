<template>
  <form id="survey">
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
            :value="question.code"
            @input="processInput"
            class="dropdown"
            :required="question.is_required"
            :id="question.code"
            :name="question.code"
          >
            <option hidden />
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
              :value="getChoiceValue(item)"
              @input="processInput"
              type="radio"
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
  data() {
    return {
      //Could not work out a solution to generate these dynamically and not hardcode
      research_telephone_surveys: "",
      research_online_group_discussions: "",
      research_online_diaries_studies: "",
      research_webcam_surveys: "",
      research_mobile_app_tests: "",
      research_tasks_studies: "",
      research_personal_interviews: "",
      research_personal_interviews_home: "",
      research_focus_groups: "",
      research_product_tests: "",
      research_food_tasting: "",
      research_mystery_shopping: "",
    };
  },

  methods: {
    getChoiceValue(item) {
      const key = Object.keys(item)[0];

      return item[key];
    },

    processInput(event) {
      this[event.target.id] = event.target.value;
      console.log("Key " + event.target.id + " has value of " + event.target.value);
    },
  },
};
</script>
