<template>
    <div class="modal-container" :class="show ? 'show' : ''">
        <div class="modal">
            <h2>{{ title }}</h2>
            <h3>{{ description }}</h3>
            <div class="modal-actions">
                <button @click="$emit('close')" type="button"
                    class="btn-close">
                    Fechar
                </button>
                <button class="btn-submit" @click="$emit('delete')">
                    {{ buttonText }}
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ICConfirmDelete.ts"></script>
<style scoped lang="css" src="./ICConfirmDelete.css"></style>