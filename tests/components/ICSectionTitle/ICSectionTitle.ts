import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ICSectionTitle',
    props: {
        title: {
            type: String,
            required: true,
        },
        extra: {
            type: String,
            default: ''
        }
    },
});