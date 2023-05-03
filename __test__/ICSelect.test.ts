import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test } from "vitest";
import { mount } from '@vue/test-utils';

import ICSelect from '../src/components/ICSelect/ICSelect.vue';

let wrapper = mount([]);

beforeEach(() => {
  wrapper = mount(ICSelect, {
    props: {
      id: 'test id',
      options: [{ name: 'test name', value: 1 }, { name: 'test name', value: 2 }]
    }
  });

  if (!wrapper.props().id) throw new Error('propotype id is required');
  if (!wrapper.props().options) throw new Error('propotype options is required');
});

describe('ICCheckboxGroup', () => {
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
      text: 'test text',
      info: 'test info',
      error: 'test error',
      placeholder: 'test placeholder',
      invalid: false,
      disabled: true,
      readonly: false,
    });

    expect(wrapper.props().id).toEqual('test id');
    expect(wrapper.props().options).toEqual([{ name: 'test name', value: 1 }, { name: 'test name', value: 2 }]);
    expect(wrapper.props().text).toEqual('test text');
    expect(wrapper.props().info).toEqual('test info');
    expect(wrapper.props().error).toEqual('test error');
    expect(wrapper.props().placeholder).toEqual('test placeholder');
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

    expect(wrapper.emitted()).toHaveProperty('click')
  });
});
