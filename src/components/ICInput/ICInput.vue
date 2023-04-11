<template>
    <label class="inpContainer" :for="id">
      <span class="inpError" v-if="error && invalid">{{ error }}</span>
      <input
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
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <div class="txtContainer">
        <span class="inpLabel">{{ text }}</span>
        <span class="inpInfo" v-if="info">{{ info }}</span>
      </div>
    </label>
  </template>


<style scoped lang="css" src="./ICInput.css"></style>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { useAttrs } from "vue";
const $attrs = useAttrs();
defineProps({
  modelValue: null,
  text: String,
  info: String,
  error: String,
  placeholder: String,
  invalid: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  type: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
    required: true,
  },
});
</script>
