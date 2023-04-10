<template>
    <button :type="submit ? 'submit' : 'button'"
        :class="`${variant} ${maxWidth ? 'max-width': ''} ${removeMargin ? 'remove-margin': ''}`"
        :disabled="disabled"
        @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script lang="ts" src="./ICButton.ts"></script>
<style scoped lang="css" src="./ICButton.css"></style>
