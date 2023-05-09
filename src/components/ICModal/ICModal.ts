import { defineComponent,ref } from 'vue';

export default defineComponent({
    name: "ICModal",
    emits: [ 'close', 'delete'],
    props: {
        show: {
            type: Boolean,
            default: false
        },
    },
    

    
});