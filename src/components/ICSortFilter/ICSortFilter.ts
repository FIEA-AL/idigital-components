import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ICSortFilter',
    emits: ["clicked"],
    props: {
        name: {
            type: String,
            required: true,
        },
    },
 
});