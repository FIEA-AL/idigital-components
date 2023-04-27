<template>
  
    <div class="right-drawer" :class="isOpen ? 'open' : ''">
        <div style="text-align:right; margin:5px">
            <i class="isax isax-close-circle" @click="close"></i>
        </div>
        
            <slot name="header"></slot>
            <slot></slot>
            <slot name="footer"></slot>
    </div>
    <div class="drawer-mask" :class="mask ? 'open' : ''"></div>
</template>
<script lang="ts" src="./ICDrawerFilter.ts"></script>
<style scoped lang="css" src="./ICDrawerFilter.css"></style>

