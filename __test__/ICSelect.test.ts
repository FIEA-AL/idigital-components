import { describe, expect, test } from "vitest";
import { mount } from '@vue/test-utils';

import ICSelect from '../src/components/ICSelect/ICSelect.vue';

describe('ICCheckboxGroup', () => {
  test('should be able to render', () => {
    const wrapper = mount(ICSelect, {
      props: {
        id: 'test id',
        options: [{name: 'test name', value: 1}, {name: 'test name', value: 2}]
      }
    });

    if (!wrapper.props().id) throw new Error('propotypel id is required');
    if (!wrapper.props().options) throw new Error('propotypel options is required');

    expect(wrapper.props().options).toEqual([{name: 'test name', value: 1}, {name: 'test name', value: 2}]);
    expect(wrapper.html()).toBeTruthy();
  });

  test('should be able to render all properties', () => {
    const wrapper = mount(ICSelect, {
      props: {
        id: 'test id',
        options: [{name: 'test name', value: 1}, {name: 'test name', value: 2}],
        text: 'test text',
        info: 'test info',
        error: 'test error',
        placeholder: 'test placeholder',
        invalid: false,
        disabled: true,
        readonly: false,
      }
    });

    if (!wrapper.props().id) throw new Error('propotype id is required');
    if (!wrapper.props().options) throw new Error('propotype options is required');

    expect(wrapper.props().id).toEqual('test id');
    expect(wrapper.props().options).toEqual([{name: 'test name', value: 1}, {name: 'test name', value: 2}]);
    expect(wrapper.props().text).toEqual('test text');
    expect(wrapper.props().info).toEqual('test info');
    expect(wrapper.props().error).toEqual('test error');
    expect(wrapper.props().placeholder).toEqual('test placeholder');
    expect(wrapper.props().invalid).toBeFalsy();
    expect(wrapper.props().disabled).toBeTruthy();
    expect(wrapper.props().readonly).toBeFalsy();
  });

  test('should be able to click event input', async() => {
    const wrapper = mount(ICSelect, {
      props: {
        id: 'test id',
        options: [{name: 'test name', value: 1}, {name: 'test name', value: 2}]
      }
    });

    if (!wrapper.props().id) throw new Error('propotype id is required');
    if (!wrapper.props().options) throw new Error('propotype options is required');

    await wrapper.find('input').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click')
  });
});
