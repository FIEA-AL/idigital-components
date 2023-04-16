import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TitleBarLayout',
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
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
        hiddenArrowBack: {
            type: Boolean,
            default: false,
        },
        parentRouter: {
            type: String,
            default: "",
        },
        customBackRoute: {
            type: String,
            default: "",
        }
    },
});