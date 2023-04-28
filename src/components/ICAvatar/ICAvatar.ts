import { defineComponent } from 'vue';
export default defineComponent({
    name: "ICAvatar",
    props: {
        picture: {
            type: String,
            default: ''
        },
        variant: {
            type: String,
           
        },
       
    },
    computed: {
        variantStatus(): string{
            switch (this.variant) {
                case 'smaller':
                    return "smaller";
                case 'small':
                    return "small";
                case 'regular':
                    return "regular";
                case 'large':
                    return "large";
                default:
                    return "regular"
            }
        },
        variantIconSize(): string{
            switch (this.variant) {
                case 'smaller':
                    return "icon-smaller";
                case 'small':
                    return "icon-small";
                case 'regular':
                    return "icon-regular";
                case 'large':
                    return "icon-large";
                default:
                    return "icon-regular"
            }
        },
  
    }
});