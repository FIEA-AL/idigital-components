<template>
    <div class="modal-container" :class="show ? 'show' : ''">
        <div class="modal">
            <div class="header">
                <slot name="header"></slot>
            </div>
        <div class="body" id="homeTasks">
            <slot></slot>
        </div>
        
        <slot name="footer" ></slot>

        </div>
    </div>
</template>

<script lang="ts" src="./ICModal.ts"></script>
<style scoped lang="css" src="./ICModal.css"></style>