import '@testing-library/jest-dom';
import { expect, describe, test, beforeEach } from 'vitest';
import { mount } from "@vue/test-utils";

import ICInput from '../components/ICInput/ICInput.vue';

let wrapper = mount([]);

beforeEach(() => {
  wrapper = mount(ICInput, {
    props: {
      id: 'test-input',
    }
  });

  if (!wrapper.props().id) throw new Error('propotype id is required');
});

describe('ICInput', () => {
  test('should be able to render', () => {
    expect(wrapper.get('input')).toBeTruthy();
    expect(wrapper.html()).toBeTruthy();
  });

  test('should be able to render label for input', async () => {
    await wrapper.setProps({ text: 'test label' });

    expect(wrapper.text()).toEqual('test label');
  });

  test('should be able to clink event in input', async () => {
    await wrapper.get('input').trigger('click');

    expect(wrapper.emitted()).toContain(MouseEvent);
  });

  test('should be able to render all properties', async () => {
    await wrapper.setProps({
      id: 'test-input',
      text: 'test label',
      modelValue: null,
      info: 'test info',
      error: 'test error',
      placeholder: 'test placeholder',
      invalid: true,
      disabled: false,
      readonly: true,
    });

    if (!wrapper.props().id) throw new Error('propotype id is required');

    expect(wrapper.props().modelValue).toBeNull();
    expect(wrapper.props().text).toEqual('test label');
    expect(wrapper.props().info).toContain('test info');
    expect(wrapper.props().error).toEqual('test error');
    expect(wrapper.props().placeholder).toEqual('test placeholder');
    expect(wrapper.props().invalid).toBeTruthy()
    expect(wrapper.props().disabled).toBeFalsy();
    expect(wrapper.props().readonly).toBeTruthy();
    expect(wrapper.props().type).toEqual('text');
    expect(wrapper.props().id).toEqual('test-input');
  });
});
