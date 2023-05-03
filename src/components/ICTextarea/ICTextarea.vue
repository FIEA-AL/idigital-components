<template>
    <label class="inpContainer" :for="id">
      <span class="inpError" v-if="error && invalid">{{ error }}</span>
      <textarea
        :id="id"
        :name="id"
        :type="type"
        :value="modelValue"
        :invalid="invalid"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :error="error"
        v-bind="$attrs"
        @input="(event:any) => $emit('keyup', event)"
      />

      <div class="txtContainer">
        <span class="inpLabel">{{ text }}</span>
        <span class="inpInfo" v-if="info">{{ info }}</span>
      </div>
    </label>
  </template>


<script lang="ts" src="./ICTextarea"></script>

<style scoped lang="css" src="./ICTextarea.css"></style>