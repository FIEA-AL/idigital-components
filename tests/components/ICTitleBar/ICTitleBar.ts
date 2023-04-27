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
    },
});