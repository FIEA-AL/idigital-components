import { defineComponent, useAttrs } from 'vue';

export default defineComponent({
  name: 'ICTextarea',
  emits: ['bet'],
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
    }
  },
  data() {
    return{
      $attrs: useAttrs()
    }
  }
});
