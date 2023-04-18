<template>
    <div class="input-image">
        <label>{{label}}</label>
        <!-- <div class="preview" @click="($refs['input'] as any).click()">
            <div class="preview-icon">
                <img :src="picture" alt="Image of input" v-if="picture" />
                <i class="isax isax-image" v-else></i>
            </div>
            <div class="preview-text">
                <h4>{{ placeholder }}</h4>
                <p>PNG, JPEG ou WEBP. (5MB)</p>
            </div>
        </div> -->
        <input ref="input" type="file" name="file" class="file" accept="image/png, image/jpeg, image/webp" @change="handleChangeFile" />
    </div>
</template>

<script lang="ts" src="./ICInputImage.ts"></script>
<style scoped lang="css" src="./ICInputImage.css"></style>