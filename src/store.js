/* eslint-disable */
import {
    getField,
    updateField
} from 'vuex-map-fields';
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    testMessage: "testing ,bro",
    testObject: {
        name: "Ivan",
        age: 25,
        hobby: "Drive cars and travel with the subway"
    },
    testArray: [{
            name: "Ivan",
            age: 25,
            hobby: "Drive cars and travel with the subway"
        },
        {
            name: "Joro",
            age: 21,
            hobby: "Drink water"
        },
        {
            name: "Mishu",
            age: 24,
            hobby: "streaming games"
        },
    ],

    mapTestMessage: "Map testing ,bro",
    mapTestObject: {
        name: "Ivan",
        age: 25,
        hobby: "Drive cars and travel with the subway"
    },
    mapTestArray: [{
            name: "Ivan",
            age: 25,
            hobby: "Drive cars and travel with the subway"
        },
        {
            name: "Joro",
            age: 21,
            hobby: "Drink water"
        },
        {
            name: "Mishu",
            age: 24,
            hobby: "streaming games"
        },
    ],
}
const getters = {
    getField,
    getTestMessage(state) {
        return state.testMessage;
    },
    getTestObject(state) {
        return state.testObject;
    },
    getTestArray(state) {
        return state.testArray;
    }
}
const mutations = {
    updateField,
    changeText(state, text) {
        state.testMessage = text.target.value;
    },
    changeObject(state, {
        key: key,
        value: text
    }) {
        state.testObject[key] = text.target.value;
    },
    changeArray(state, {
        key: key,
        value: text,
        index: index
    }) {
        state.testArray[index][key] = text.target.value;
    }
}
const actions = {
    increment: ({
        commit
    }) => commit('increment'),
    decrement: ({
        commit
    }) => commit('decrement'),
    incrementIfOdd({
        commit,
        state
    }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },

}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})