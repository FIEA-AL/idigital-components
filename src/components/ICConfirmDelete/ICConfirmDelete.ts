import { defineComponent } from 'vue';
// import IService from './IService';

export default defineComponent({
    name: "DropdownService",
    emits: [ 'close', 'delete'],
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: "Exclusão"
        },
        description: {
            type: String,
            default: "Essa ação não é reversível"
        },
        buttonText: {
            type: String,
            default: "Excluir"
        },
        redirectTo: {
            type: String,
            default: "/"
        },
        // service: {
        //     type: Object as PropType<IService>,
        //     required: true
        // }
    },
    methods: {
        close(){
            this.$emit('close');
        },
    }
});