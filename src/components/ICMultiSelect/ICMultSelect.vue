<template>
  <div class="container">
      <div class="select-btn">
        <label
          class="slcInput"
          :for="id"
          @click="selected"
        >
          <span class="slcError" v-if="error && invalid">{{ error }}</span>
          <div class="input-with-suffix">
            <input
              readonly
              v-bind="$attrs"
              :value="defaultText"
              :id="id"
              :name="id"
              :invalid="invalid"
              :disabled="disabled"
              :placeholder="placeholder"
              :error="error"
              @focus="showDropdown = true"
            >
            <i class="suffix isax isax-arrow-down-1" :class="showDropdown ? 'show' : ''" @click="selected"></i>
          </div>

          <div class="txtContainer">
            <span class="slcLabel">{{ text }}</span>
            <span class="slcInfo" v-if="info">{{ info }}</span>
          </div>
        </label>
      </div>

    <ul class="slcDropdown" v-if="showDropdown">
      <li class="item" :key="index"
        v-for="(option, index) in options"
        @click="selectIten(option)"
      >
        <span class="item-text">{{ option?.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { useAttrs, ref, watch } from 'vue';

let defaultText = ref('');
let selectItens = ref([]);

let showDropdown = ref(false);
const $attrs = useAttrs();
const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: null,
  text: String,
  info: String,
  error: String,
  placeholder: String,
  invalid: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: Boolean,
  options: {
    type: Array,
    required: true,
  },
  id: {
    type: String,
    required: true,
  }
});

function selected() {
  if (!document.getElementsByTagName('input')[0]?.disabled) {
    const selectOption = document?.querySelector('.select-btn');
    const items = document?.querySelectorAll('.item');

    selectOption?.classList.toggle('open');

    items?.forEach((item) => {
      item?.addEventListener('click', () => {
        item?.classList.toggle('checked');
      })
    });
  }
}

function exists(array: any[], value: string | number): boolean {
  array = array.filter((item) => item.value == value);

  if (array[0]) return true
  else return false;
}

function selectIten(item: any) {
  if (defaultText.value == 'Selecione') defaultText.value = ''

  if (!defaultText.value && !selectItens.value[0]) {
    defaultText.value = item.name
    selectItens.value.push(item)

  } else if (exists(selectItens.value, item.value)) {
    removeIten(item);
  } else {
    selectItens.value.push(item);
    defaultText.value += `, ${item.name}`.trim();
  }
}

function removeIten(item: any) {

  selectItens.value = selectItens.value.filter(el => el.value != item.value)

  if (selectItens.value.length > 1) defaultText.value = selectItens.value.map(el => el.value != item.value ? el.name : ' ').join(', ').trim();

  if (selectItens.value.length == 1) defaultText.value = selectItens.value[0].name;

  if (!selectItens.value[0]) defaultText.value = 'Selecione';
}

document.body.addEventListener('click', function (event) {
  if (
    !document.getElementsByTagName('input')[0]?.contains(event.target as Node) &&
    !document.getElementsByClassName('slcDropdown')[0]?.contains(event.target as Node) &&
    !document.getElementsByTagName('i')[0]?.contains(event.target as Node)
  ) {
    showDropdown.value = !showDropdown.value
  }
});


document.body.addEventListener('keydown', function (event) {
  if (event.key.toLowerCase() == 'tab') showDropdown.value = !showDropdown.value;
});

watch(selectItens, (n) => {
  emit('update:modelValue', selectItens);
}, { deep: true });

</script>

<style scoped>

.container {
  width: 100%;
  position: relative;
}

.select-btn {
  display: flex;
  flex-flow: column-reverse nowrap;

  justify-content: center;
  align-items: center;

  gap: 8px;
  width: 100%;
}

.input-with-suffix {
  display: flex;
  align-items: center;

  outline: none;
  appearance: none;

  width: 100%;
  padding: 0px 8px;

  border-style: solid;
  border-width: 2px;
  border-radius: 12px;
  border-color: var(--color-input-border);

  font-size: 16px;
  font-weight: 500;

  color: var(--color-input);
  background-color: var(--color-background);
}

.input-with-suffix > input {
  flex: 1;
  outline: none;
  border: none;

  font-size: 16px;
  font-weight: 500;
  color: var(--color-input);
  background-color: var(--color-background);

  padding: 12px 4px;
}

.input-with-suffix .suffix {
  transition: all .3s ease;
}
.select-btn.open .input-with-suffix .suffix.show {
  transform: rotate(-180deg);
}

.slcInput {
  display: flex;
  flex-flow: column-reverse nowrap;

  justify-content: space-between;

  gap: 8px;
  width: 100%;
}

.slcInfo {
  font-size: 12px;
  font-weight: 300;
}

.slcError {
  font-size: 12px;
  font-weight: 400;

  text-align: right;
  color: var(--color-input-invalid);
}

.txtContainer {
  display: flex;
  flex-flow: column;
}

input {
  outline: none;
  appearance: none;

  width: 100%;
  padding: 12px;

  border-style: solid;
  border-width: 2px;
  border-radius: 12px;
  border-color: var(--color-input-border);

  font-size: 16px;
  font-weight: 500;

  color: var(--color-input);
  background-color: var(--color-background);
  white-space: nowrap;
  width: 100%;
  overflow: hidden;

  text-overflow:    ellipsis;
}

input::placeholder {
  font-size: 14px;
  color: var(--color-input-placeholder);
}

.slcInput:hover {
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px var(--color-input-shadow));
  border-color: var(--color-input-hover-border);
}

.slcInput:focus {
  border-color: var(--color-input-focus-border);
}

input:focus+.txtContainer>.slcLabel {
  color: var(--color-input-focus);
}

input[invalid="true"] {
  border-color: var(--color-input-invalid-border);
}

input[invalid="true"]+.txtContainer>.slcLabel {
  color: var(--color-input-invalid);
}

.slcInput:disabled {
  color: var(--color-input-disabled);
  border-color: transparent;
  background-color: var(--color-input-disabled-background);
}

.slcInput:disabled+.txtContainer>.slcLabel {
  color: var(--color-input-disabled);
}

.slcDropdown {
  z-index: 9999;
  position: absolute;
  overflow-y: scroll;

  width: 100%;
  max-height: 152px;

  margin-top: 8px;
  border-radius: 12px;
  background-color: var(--color-background);
  filter: drop-shadow(0px 4px 4px var(--color-input-shadow));
}

.slcDropdown::-webkit-scrollbar {
  width: 16px;

  border-radius: 0px 12px 12px 0;
  background-color: var(--color-option-hover-background);
}

.slcDropdown::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 4px solid transparent;

  background-clip: content-box;
  background-color: var(--color-scrollbar);
}

.slcOption {
  width: 100%;
  padding: 10px 12px;
  cursor: pointer;
  color: var(--color-option);
  background-color: var(--color-option-background);
}


.select-btn.open ~ .slcDropdown {
  display: block;
}
.select-btn ~ .slcDropdown {
  display: none;
}

.slcDropdown .item {
  display: flex;
  align-items: center;
  list-style: none;
  height: 40px;
  cursor: pointer;
  transition: 0.3s;
  padding: 0 15px;
  border-radius: 8px;
}

.slcDropdown .item .checkbox:hover {
  background-color: var(--color-background);
}

.item .item-text {
  font-size: 14px;
  font-weight: 400;
  color: #333;
}

</style>

