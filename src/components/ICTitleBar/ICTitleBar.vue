<template>
    <div class="title-bar">
        <div class="information">
            <div class="details">
                <h1 >{{title}}</h1>
                <h4 class="hidden-mobile">{{subtitle}}</h4>
            </div>
        </div>

        <div class="actions">
            <slot></slot>
        </div>
    </div>
    
</template>
<script lang="ts" src="./ICTitleBar.ts"></script>
<style scoped lang="css" src="./ICTitleBar.css"></style>
