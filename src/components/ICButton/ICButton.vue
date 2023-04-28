<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :class="[{ 'max-width': maxWidth, 'remove-margin': removeMargin }, variant]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <i v-if="icon" :class="[icon, 'isax']"></i>
    {{ text }}
  </button>
</template>

<script lang="ts" src="./ICButton.ts"></script>
<style scoped lang="css" src="./ICButton.css"></style>

