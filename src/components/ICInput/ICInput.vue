<template>
    <fieldset :class="error ? 'invalid' : ''">
        <label :for="id" :class="isFocused ? 'is-focused' : ''">{{ labelText }}</label>
        <div class="input-with-suffix" v-if="type == 'password'">
            <input
                :id="id" :type="showPassword ? 'text' : 'password'"
                :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                :placeholder="placeholder"
                @focus="isFocused = true" @blur="isFocused = false" />
            <div class="suffix" @click="showPassword = !showPassword">
                <i class="isax" :class="showPassword ? 'isax-eye' : 'isax-eye-slash'"></i>
            </div>
        </div>
        <input
            v-else
            :id="id" :type="type" :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            @focus="isFocused = true" @blur="isFocused = false"
        />
        <span class="error-text" v-if="error">{{ error.message }}</span>
    </fieldset>
</template>

<script lang="ts" src="./ICInput.ts"></script>
<style scoped lang="css" src="./ICInput.css"></style>
