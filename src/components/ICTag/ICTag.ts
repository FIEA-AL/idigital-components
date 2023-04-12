import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ICTag',
    props: {
        label: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: ''
        },
        darkText: {
            type: Boolean,
            default: false,
        }
    },
})