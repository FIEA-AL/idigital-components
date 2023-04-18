<template>
    <div class="slcContainer">
      <label class="slcInput" :for="id">
        <span class="slcError" v-if="error && invalid">{{ error }}</span>
        <input
          readonly
          ref="slcInp"
          v-bind="$attrs"
          :id="id"
          :name="id"
          :value="modelValue"
          :invalid="invalid"
          :disabled="disabled"
          :placeholder="placeholder"
          :error="error"
          @focus="showDropdown = true"
          @blur="showDropdown = false"
          @change="(event:any) => $emit('update:modelValue', event.target.value)"
        />
        <div class="txtContainer">
          <span class="slcLabel">{{ text }}</span>
          <span class="slcInfo" v-if="info">{{ info }}</span>
        </div>
      </label>
      <div class="slcDropdown" v-if="showDropdown">
        <div
          :key="index"
          :class="[{ opSelected: op!.value === modelValue }, 'slcOption']"
          @mousedown="(event:any) => $emit('update:modelValue', op!.value)"
          v-for="(op, index) in options"
        >
          {{ op!.name }}
        </div>
      </div>
    </div>
  </template>
<style scoped lang="css" src="./ICSelect.css"></style>

  <script lang="ts">
  export default {
    inheritAttrs: false,
  };
  </script>

  <script setup lang="ts">
  import { useAttrs, ref } from "vue";
  const showDropdown = ref(false);
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
    options: {
      type: Array<any>,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  });
  </script>

