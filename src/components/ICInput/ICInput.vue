<template>
  <label class="inpContainer" :for="id">
    <span class="inpError" v-if="error && invalid">{{ error }}</span>
    <input
    data-testid="test"
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

<style scoped lang="css" src="./ICInput.css"></style>

<script lang="ts" src="./ICInput.ts"></script>
