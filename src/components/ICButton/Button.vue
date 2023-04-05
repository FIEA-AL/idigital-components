<template>
    <button :type="submit ? 'submit' : 'button'"
        :class="`${variant} ${maxWidth ? 'max-width': ''} ${removeMargin ? 'remove-margin': ''}`"
        :disabled="disabled"
        @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script lang="ts" src="./Button.ts"></script>
<style scoped lang="css" src="./Button.css"></style>
