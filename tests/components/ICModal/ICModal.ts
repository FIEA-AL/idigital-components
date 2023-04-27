import { defineComponent,ref } from 'vue';

export default defineComponent({
    name: "ICModal",
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
        value: {
            type: Boolean,
            default: false
        }
  
      
    },
    // setup(props, { emit }) {
    //     // const button = ref()
    //     const show = ref(props.show);
    //     const close = () => {
    //        show.value = false
    //     };
        
        
    //   return {
    //     show,
    //     close,
    //   }
    // methods: {
    //     close(){
    //         this.$emit('close');
    //     },
    // }

    
});