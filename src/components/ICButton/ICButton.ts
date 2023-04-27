import { defineComponent,onMounted, onUnmounted } from 'vue';

export default defineComponent({
    name: 'ICButton',
    emits: ['click'],
    props: {
        text: {
            type: String,
            required: true,
            default: 'button',
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
        },
        icon:{
            type:String
        }
    },
});