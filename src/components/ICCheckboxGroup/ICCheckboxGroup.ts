import { defineComponent } from 'vue';
import ICButton from '../ICButton/ICButton.vue';

export default defineComponent({
    name: "CheckboxGroup",
    emits: ['marker'],
    props: {
        title: {
            type: String,
            required: true,
        },
        withShortcut: {
            type: Boolean,
            default: false
        },
        allSelected: {
            type: Boolean,
            default: false
        }
    },
    components: { ICButton }
});