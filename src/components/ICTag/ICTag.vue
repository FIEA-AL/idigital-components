<template>
    <div class="tag" :class="status">
        <div class="tag-label" :class="darkText ? 'dark-text' : ''">{{ label }}</div>
    </div>
</template>
<script lang="ts" src="./ICTag.ts"></script>
<style scoped lang="css" src="./ICTag.css"></style>