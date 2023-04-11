<template>
    <div class="checkbox" @click="$emit('clicked')">
        <input type="checkbox" :checked="checked" />
        <label>{{ labelText }}</label>
    </div>
</template>
<script lang="ts" src="./ICCheckbox.ts"></script>
<style scoped lang="css" src="./ICCheckbox.css"></style>

 