import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ICDrawerFilter',
    emits: ['change'],
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        }
    }
});