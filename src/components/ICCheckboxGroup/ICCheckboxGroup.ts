import { defineComponent } from 'vue';
import IDCButton from '../buttons/IDCButton.vue';

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
    components: { IDCButton }
});