import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button',
    emits: ['click'],
    props: {
        text: {
            type: String,
            required: true,
        },
        submit: {
            type: Boolean,
            default: false,
        },
        variant: {
            type: String,
            default: "solid"
        },
        maxWidth: {
            type: Boolean,
            default: false,
        },
        removeMargin: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    }
});