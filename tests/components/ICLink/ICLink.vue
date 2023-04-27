<template>
    <div class="title-bar">
 
        <a class="link" v-if="showLink" :href="link" target="_blank">
            <i class="isax isax-link-1"></i>
            <h5>{{titleLink}}</h5>
        </a>
        <div class="actions">
            <slot></slot>
        </div>
    </div>
    
</template>
<script lang="ts" src="./ICLink.ts"></script>
<style scoped lang="css" src="./ICLink.css"></style>
