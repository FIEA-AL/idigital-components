import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ICCheckbox',
    emits: ['clicked'],
    props: {
        labelText: {
            type: String,
            required: true,
        },
        checked: {
            type: Boolean,
            default: false
        },
    },
});