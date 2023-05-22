import '@testing-library/jest-dom';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from "vitest";

import ICMultiSelect from '../components/ICMultiSelect/ICMultSelect.vue';

let wrapper = mount([]);

beforeEach(() => {
  wrapper = mount(ICMultiSelect, {
    props: {
      id: 'test id',
      options: [{ name: 'test name', value: 1 }, { name: 'test name', value: 2 }]
    }
  });

  if (!wrapper.props().id) throw new Error('propotype id is required');
  if (!wrapper.props().options) throw new Error('propotype options is required');
});

describe('ICMultiSelect', () => {
  test('should be able to render', async () => {
    await wrapper.setProps({
      id: 'test id',
      options: [{ name: 'test name', value: 1 }, { name: 'test name', value: 2 }]
    });

    expect(wrapper.props().options).toEqual([{ name: 'test name', value: 1 }, { name: 'test name', value: 2 }]);
    expect(wrapper.html()).toBeTruthy();
  });

  test('should be able to render all properties', async () => {
    await wrapper.setProps({
      id: 'test id',
      options: [{ name: 'test name', value: 1 }, { name: 'test name', value: 2 }],
      text: 'test text',
      info: 'test info',
      error: 'test error',
      placeholder: 'test placeholder',
      invalid: false,
      modelValue: 'test model value',
      disabled: true,
      readonly: false,
    });

    expect(wrapper.props().id).toEqual('test id');
    expect(wrapper.props().options).toEqual([{ name: 'test name', value: 1 }, { name: 'test name', value: 2 }]);
    expect(wrapper.props().text).toEqual('test text');
    expect(wrapper.props().info).toEqual('test info');
    expect(wrapper.props().error).toEqual('test error');
    expect(wrapper.props().placeholder).toEqual('test placeholder');
    expect(wrapper.props().modelValue).toEqual('test model value');
    expect(wrapper.props().invalid).toBeFalsy();
    expect(wrapper.props().disabled).toBeTruthy();
    expect(wrapper.props().readonly).toBeFalsy();
  });

  test('should be able to click event input', async () => {
    await wrapper.setProps({
      id: 'test id',
      options: [{ name: 'test name', value: 1 }, { name: 'test name', value: 2 }]
    })

    await wrapper.find('input').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
  });

  test('should be able to verification exist element in array', async () => {
    await wrapper.setProps({
      id: 'test id',
      options: [{ name: 'test name', value: 1 }, { name: 'test name', value: 2 }],
    });

    function exists(array: any[], value: string | number): boolean {
      array = array.filter((item) => item.value == value);

      if (array[0]) return true
      else return false;
    }

    expect(exists(wrapper.props().options, 1)).toBeTruthy();
    expect(exists(wrapper.props().options, 3)).toBeFalsy();
  });

  test('should be able to verification exist element in array, remove item and add text', async () => {
    await wrapper.setProps({
      id: 'test id',
      options: [{ name: 'test name', value: 1 }, { name: 'test name2', value: 2 }, { name: 'test name3', value: 3 }],
    });

    let selectItems: any[] = [];
    selectItems = wrapper.props().options;
    let defaultText = '';

    function exists(array: any[], value: string | number): boolean {
      array = array.filter((item) => item.value == value);

      if (array[0]) return true
      else return false;
    }

    function selectIten(item: any) {
      if (defaultText == 'Selecione') defaultText = ''

      if (!defaultText && !selectItems[0]) {
        defaultText = item.name
        selectItems.push(item)

      } else if (exists(selectItems, item.value)) {
        removeIten(item);
      } else {
        selectItems.push(item);
        defaultText += `, ${item.name}`.trim();
      }
    }

    function removeIten(item: any) {
      selectItems = selectItems.filter(el => el.value != item.value);

      if (selectItems.length > 1) defaultText = selectItems.map(el => el.value != item.value ? el.name : ' ').join(', ').trim();

      if (selectItems.length == 1) defaultText = selectItems[0].name;

      if (!selectItems[0]) defaultText = 'Selecione';
    }

    selectIten({ name: 'test name4', value: 4 });

    expect(selectItems).toEqual([
      { name: 'test name', value: 1 }, { name: 'test name2', value: 2 },{ name: 'test name3', value: 3 }, { name: 'test name4', value: 4 }
    ]);

    selectIten({ name: 'test name4', value: 4 });

    expect(selectItems).toEqual([
      { name: 'test name', value: 1 }, { name: 'test name2', value: 2 },{ name: 'test name3', value: 3 }
    ]);
  });
});
