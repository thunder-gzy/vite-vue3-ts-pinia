<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMouse } from '@vueuse/core'
import request from '@/utils/axios'
import API from '@/api'
const init = async () => {
    const petId = 1
    const url = `http://127.0.0.1:4523/mock/914177/pet/${petId}`
    const result = await API.getPetSer(petId)
    console.log(result)
}
onMounted(() => {
    init()
})
const { x, y } = useMouse()
</script>

<template>
    <div>
        <h1>Index首页</h1>
        <div class="box">
            <p>Mouse x:{{ x }}</p>
            <p>Mouse y:{{ y }}</p>
        </div>
    </div>
</template>

<style lang="scss">
.box {
    color: red;
}
</style>
