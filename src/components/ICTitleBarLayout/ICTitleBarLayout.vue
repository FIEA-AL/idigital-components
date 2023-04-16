<template>
    <div class="title-bar">
        <div class="information">
            <div class="details">
                <h1 :class="parentRouter ? 'have-parent' : ''">{{title}}</h1>
                <h4 class="hidden-mobile">{{subtitle}}</h4>
            </div>
        </div>
        <a class="link" v-if="showLink" :href="link" target="_blank">
            <i class="isax isax-link-1"></i>
            <h5>{{titleLink}}</h5>
        </a>
        <div class="actions">
            <slot></slot>
        </div>
    </div>
    
</template>
<script lang="ts" src="./ICTitleBarLayout.ts"></script>
<style scoped lang="css" src="./ICTitleBarLayout.css"></style>
