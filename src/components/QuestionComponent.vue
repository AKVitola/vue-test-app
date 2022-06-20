<template>
    <section>
        <div v-if="this.$route.name === 'firstPage'">
            <article v-for="question in $store.getters.firstPageQuestions" v-bind:key="question.code"
                class="question-box" :id="question.code">
                <section v-if="question.type === 'dropdown'">
                    <label class="question-label">
                        <span v-if="question.is_required" class="required">*</span>
                        {{ question.name }}
                    </label>

                    <p v-if="question.public_description !== ''" class="question-description">
                        {{ question.public_description }}
                    </p>

                    <select v-model="selected" class="dropdown" :required="question.is_required">
                        <option v-for="(item, key) in question.choices" v-bind:key="key" :value="getChoiceValue(item)">
                            {{ getChoiceValue(item) }}
                        </option>
                    </select>
                </section>
            </article>
        </div>

        <div v-if="this.$route.name === 'secondPage'">
            <article v-for="question in $store.getters.secondPageQuestions" v-bind:key="question.code"
                class="question-box" :id="question.code">
                <section v-if="question.type === 'radiogroup'">
                    <p class="question-label">
                        <span v-if="question.is_required" class="required">*</span>
                        {{ question.name }}
                    </p>

                    <p v-if="question.public_description !== ''" class="question-description">
                        {{ question.public_description }}
                    </p>
                    <div v-for="(item, key) in question.choices" v-bind:key="key" class="input-wrap">
                        <input type="radio" v-model="picked" :required="question.is_required"
                            :value="getChoiceValue(item)" name="radio-choice">
                        <label :for="getChoiceValue(item)" class="radio-label">
                            {{ getChoiceValue(item) }}
                        </label>
                    </div>
                </section>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: "QuestionComponent",
    methods: {
        getChoiceValue(item) {
            const key = Object.keys(item)[0];

            return item[key];
        }
    }
};
</script>