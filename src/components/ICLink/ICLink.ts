import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ICLink',
    props: {
        showLink: {
            type: Boolean,
            default: false,
        },
        link: {
            type: String,
            default: "",
        },
        titleLink: {
            type: String,
            default: "",
        },
       
    },
});