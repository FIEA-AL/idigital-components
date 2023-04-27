import { defineComponent } from 'vue';
export default defineComponent({
    name: "Pagination",
    emits: [ 'clickedPage'],
    props: {
        itemsPerPage: {
            type: Number,
            default: 5
        },
        totalItems: {
            type: Number,
            required: true
        },
        itemActive: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            default: null
        }
    }
});