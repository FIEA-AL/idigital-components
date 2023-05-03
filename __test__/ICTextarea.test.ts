import { beforeEach, describe, expect, test } from "vitest";
import { mount } from '@vue/test-utils';

import ICTextarea from '../src/components/ICTextarea/ICTextarea.vue';

let wrapper = mount([]);

beforeEach(() => {
  wrapper = mount(ICTextarea, {
    props: {
      id: 'test id',
      text: 'test text',
      info: 'test info',
      error: 'test error',
      placeholder: 'test placeholder',
      invalid: false,
      disabled: true,
      readonly: false,
      type: 'test type'
    }
  });

  if (!wrapper.vm.id) throw new Error('propotype id is required');
});

describe('ICCheckboxGroup', () => {
  test('should be able to render', () => {
    expect(wrapper.html()).toBeTruthy();
  });

  test('should be able to render all properties', async () => {
    await wrapper.setProps({
      id: 'test id',
      text: 'test text',
      info: 'test info',
      error: 'test error',
      placeholder: 'test placeholder',
      invalid: false,
      disabled: true,
      readonly: false,
      type: 'test type'
    });

    expect(wrapper.props().id).toEqual('test id');
    expect(wrapper.props().type).toEqual('test type');
    expect(wrapper.props().text).toEqual('test text');
    expect(wrapper.props().info).toEqual('test info');
    expect(wrapper.props().error).toEqual('test error');
    expect(wrapper.props().placeholder).toEqual('test placeholder');
    expect(wrapper.props().invalid).toBeFalsy();
    expect(wrapper.props().disabled).toBeTruthy();
    expect(wrapper.props().readonly).toBeFalsy();
  });

  test('should be able to click event input', async () => {
    await wrapper.find('textarea').trigger('click');

    expect(wrapper.emitted()).toContain(MouseEvent);
  });
});
