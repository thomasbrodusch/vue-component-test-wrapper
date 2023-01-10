<template>
    <div class="child-dummy-component">
        {{ message }}
    </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello World from child component!');
</script>
