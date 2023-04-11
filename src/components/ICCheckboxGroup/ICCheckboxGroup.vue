<template>
    <div class="checkbox-group">
        <div class="header">
            <small class="title">{{title}}</small>
            <span class="marker" @click="$emit('marker')">
                {{ allSelected ? 'Desmarcar tudo' : 'Marcar tudo' }}
            </span>
        </div>
        <div class="checkboxs">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" src="./ICCheckboxGroup.ts"></script>
<style scoped lang="css" src="./ICCheckboxGroup.css"></style>
