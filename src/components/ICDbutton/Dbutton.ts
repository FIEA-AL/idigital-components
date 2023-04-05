import { defineProps, useAttrs } from "vue";

export default {
  inheritAttrs: false,
};

const $attrs = useAttrs();

defineProps({
  size: String,
  disabled: Boolean,
  text: { type: String, required: true },
  styleType: { type: String, default: "solid" },
});