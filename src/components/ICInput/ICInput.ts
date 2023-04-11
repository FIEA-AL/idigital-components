import { defineComponent, PropType } from 'vue';
// import { IErrorField } from '../../../interfaces/IStep';
// export interface IErrorField {
//     id: string,
//     message: string
// }

export default defineComponent({
    name: 'ICInput',
    emits: ['update:modelValue'],
    props: {
        id: {
            type: String,
            required: true,
        },
        labelText: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: "",
        },
        modelValue: {
            type: String,
            default: "",
        },
        // error: {
        //     type: Object as PropType<IErrorField|null>,
        //     default: null,
        // },
    },
    methods: {
        handleChangeInput(event: any){
            this.$emit('changed', event.target.value);
        },
    },
    data(){
        return {
            isFocused: false,
            showPassword: false,
        }
    },
});