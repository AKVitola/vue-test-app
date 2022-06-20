import { createStore } from 'vuex'
import survey from "../../public/survey.json";

export default createStore({
    state: {
        surveyData: survey,
    },
    getters: {
        firstPageTitle(state) {
            return state.surveyData.data.pages[0].title;
        },
        firstPageSubtitle(state) {
            return state.surveyData.data.pages[0].subttitle;
        },
        firstPageQuestions(state) {
            return state.surveyData.data.pages[0].questions;
        },
        firstPageButtonText(state) {
            return state.surveyData.data.page_next_text;
        },
        completeButtonText(state) {
            return state.surveyData.data.complete_text;
        },
        prevButtonText(state) {
            return state.surveyData.data.page_prev_text;
        },
        secondPageTitle(state) {
            return state.surveyData.data.title;
        },
        secondPageQuestions(state) {
            return state.surveyData.data.pages[1].questions;
        },
        finalPageTitle(state) {
            return state.surveyData.data.completed_heading;
        },
        finalPageText(state) {
            return state.surveyData.data.completed_text;
        }
    },
    mutations: {},
    actions: {}
});