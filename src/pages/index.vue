<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMouse } from '@vueuse/core'
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
