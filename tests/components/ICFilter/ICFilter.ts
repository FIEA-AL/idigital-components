import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ICFilter',
    emits: ["clicked"],
    props: {
        text: {
            type: String,
            required: true,
        },    
        icon:{
            type:String
        }
    },

});