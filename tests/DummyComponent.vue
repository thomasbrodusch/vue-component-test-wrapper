<template>
    <div class="dummy-component">
        <span class="message">{{ message }}</span>
        <child-dummy-component />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ChildDummyComponent from './ChildDummyComponent.vue';

const message = ref('Hello World!');

onMounted(() => {
    message.value = 'Good Bye!';
});
</script>
