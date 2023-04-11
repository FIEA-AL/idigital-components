<template>
    <div class="drawer-icon-filter" @click="$emit('change', true)">
        <i class="isax isax-filter-search"></i>
        <h4>Filtrar</h4>
    </div>
    <div class="right-drawer" :class="isOpen ? 'open' : ''">
        <div style="text-align:right; margin:5px">
            <i class="isax isax-close-circle" @click="$emit('change', false)"></i>
        </div>
        <slot>

        </slot>
    </div>
    <div class="drawer-mask" @click="$emit('change', false)" :class="isOpen ? 'open' : ''"></div>
</template>
<script lang="ts" src="./ICDrawerFilter.ts"></script>
<style scoped lang="css" src="./ICDrawerFilter.css"></style>

