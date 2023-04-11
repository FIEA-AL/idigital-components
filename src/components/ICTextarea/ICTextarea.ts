import { defineComponent, useAttrs } from "vue";

export default defineComponent({
  inheritAttrs: false,

  props: {
  modelValue: null,
  text: String,
  info: String,
  error: String,
  placeholder: String,
  invalid: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  type: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
    required: true,
  }},
  setup(props) {
  const $attrs = useAttrs();
  // código da lógica do componente
},
  
});

