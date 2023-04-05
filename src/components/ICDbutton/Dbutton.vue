<template>
    <button :class="[styleType, 'btn']" :disabled="disabled" v-bind="$attrs">
      <slot name="icon"></slot>
      {{ text }}
    </button>
  </template>


<script lang="ts" src="./Dbutton.ts"></script>
<style scoped lang="css" src="./Dbutton.css"></style>
