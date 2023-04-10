import { defineComponent } from 'vue';

export default defineComponent({
    name: "ICAddButton",
    props: {
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true,
        },
        openExternally: {
            type: Boolean,
            default: false
        }
    },
   
});