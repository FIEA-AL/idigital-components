<template>
    <div class="sort-filter" @click="clicked">
        <!-- <i class="isax isax-arrow-3"></i> -->
        <i v-if="icon" :class="[icon, 'isax']"></i>
        <h4>{{text}}</h4>
    </div>
</template>


<style scoped lang="css" src="./ICFilter.css"></style>
<script lang="ts" src="./ICFilter.ts"></script>
