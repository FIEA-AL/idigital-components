<template>
    <div class="pagination" v-if="totalPages > 0 || totalItems > itemsPerPage">
        <div class="page" v-for="index in totalPages ? totalPages : Math.ceil(totalItems / itemsPerPage)"
            :key="index" :class="itemActive == index ? 'active' : ''"
            @click="() => $emit('clickedPage', index)"
            >
            {{ index }}
        </div>
    </div>
</template>


<script lang="ts" src="./ICPagination.ts"></script>
<style scoped lang="css" src="./ICPagination.css"></style>

