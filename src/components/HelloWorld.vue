<template>
    <div class="hello">
        <h1>---------------</h1>
        <h1>{{ mapTestMessage }}</h1>
        <!-- <input :value="getTestMessage"
            @input="updateProperty"
            placeholder="edit me"> -->
        <input v-model="mapTestMessage"
            placeholder="edit me">
        <p>Message is: {{ mapTestMessage }}</p>

        <h1>object ---------------</h1>
        <input :value="getTestObject.name"
            @input="updateObject($event, 'name')"
            placeholder="edit me">
        <p>Name is: {{ getTestObject.name }}</p>
        <input :value="getTestObject.age"
            @input="updateObject($event, 'age')"
            placeholder="edit me">
        <p>Age is: {{ getTestObject.age }}</p>
        <input :value="getTestObject.hobby"
            @input="updateObject($event, 'hobby')"
            placeholder="edit me">
        <p>Hobby is: {{ getTestObject.hobby }}</p>

        <h1>Arrray ---------------</h1>
        <!-- <div v-for="(item, index) in getTestArray"
            :key="index">
            <input :value="item.name"
                @input="updateArray($event, 'name',index)"
                placeholder="edit me">
            <p>Name is: {{ item.name }}</p>
            <input :value="item.age"
                @input="updateArray($event, 'age',index)"
                placeholder="edit me">
            <p>Age is: {{ item.age }}</p>
            <input :value="item.hobby"
                @input="updateArray($event, 'hobby',index)"
                placeholder="edit me">
            <p>Hobby is: {{ item.hobby }}</p>
            <h3>end row-------- </h3>

        </div> -->
        <br />
        <br />
        <br />
        <h1>With library ---------------</h1>

        <h1>object ---------------</h1>
        <input v-model="mapTestObject.name"
            placeholder="edit me">
        <p>Name is: {{ mapTestObject.name }}</p>
        <input v-model="mapTestObject.age"
            placeholder="edit me">
        <p>Age is: {{ mapTestObject.age }}</p>
        <input v-model="mapTestObject.hobby"
            placeholder="edit me">
        <p>Hobby is: {{ mapTestObject.hobby }}</p>

        <h1>Arrray ---------------</h1>
        <div v-for="(item2, index2) in mapTestArray"
            :key="index2">
            <input v-model="item2.name"
                placeholder="edit me">
            <p>Name is: {{ item2.name }}</p>
            <input v-model="item2.age"
                placeholder="edit me">
            <p>Age is: {{ item2.age }}</p>
            <input v-model="item2.hobby"
                placeholder="edit me">
            <p>Hobby is: {{ item2.hobby }}</p>
            <h3>end row-------- </h3>

        </div>

    </div>
</template>

<script>
/* eslint-disable */

import { mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields';
import { mapMultiRowFields } from 'vuex-map-fields';

export default {
    name: 'HelloWorld',
    props: {
    },
    computed: {
        ...mapGetters([
            'getTestMessage',
            'getTestObject',
            'getTestArray',
        ]),
        ...mapFields([
            'mapTestMessage',
            'mapTestObject',
        ]),
        ...mapMultiRowFields([
            'mapTestArray',
        ]),
    },
    created() {

    },
    methods: {
        updateProperty(text) {
            this.$store.commit('changeText', text)
        },
        updateObject(text, key) {
            this.$store.commit('changeObject', { key: key, value: text })
        },
        updateArray(text, key, index) {
            this.$store.commit('changeArray', { key: key, value: text, index: index })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
