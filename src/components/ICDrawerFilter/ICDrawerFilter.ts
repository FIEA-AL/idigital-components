import { defineComponent,ref,watch } from 'vue';

export default defineComponent({
    name: 'ICDrawerFilter',
    emits: ['close'],
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        mask:{
            type: Boolean,
        }
    },
    setup(props){
        const isOpen = ref(props.isOpen)
        const mask = ref(props.mask)
        const close = ()=> {
            isOpen.value=false
            mask.value=false
        }
        return {
            isOpen,
            close,
            mask
            };
          }



    
});