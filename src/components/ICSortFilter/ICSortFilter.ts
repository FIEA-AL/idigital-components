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
    methods: {
        clicked(): void{
            this.$emit('clicked');
        }
    }
});