import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ICInput',
  emits: ['input'],
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
    },
  },
  inheritAttrs: false,
});
