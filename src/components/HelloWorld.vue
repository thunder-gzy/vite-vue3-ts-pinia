<script setup lang="ts">
import Login from '@/pages/login.vue'
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
defineProps<{ msg: string }>()

const count = ref(0)
const userStore = useUserStore()
console.log(userStore)
onMounted(() => {
    console.log(count.value)
})
// userStore.updateName = 'gzy2'
const click = () => {
    count.value++
    // console.log(userStore)
    userStore.updateName('gzy2')
    // return {
    //     userStore,
    // }
}
</script>

<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>{{ userStore.name }}</h2>
        <h3>count: {{ count }}</h3>
        <button @click="click">点击我</button>
        <Login />
    </div>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
