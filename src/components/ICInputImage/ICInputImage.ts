import { defineComponent,ref  } from 'vue';


export default defineComponent({
    name: 'ICInputImage',
    emits: ['change'],
    props: {
        label: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: 'Faça o upload do arquivo'
        },
        picture: {
            type: String,
            default: '',
        }
    },
    setup(props, { emit }) {
        const pictureUrl = ref(props.picture);
    
        const handleChangeFile = (event:any) => {
          const file = event.target.files[0];
          pictureUrl.value = URL.createObjectURL(file);
          emit('change', pictureUrl.value);
        };
        return {
            pictureUrl,
            handleChangeFile
          };
}});