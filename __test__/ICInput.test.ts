import '@testing-library/jest-dom';
import { expect, describe, test } from 'vitest';
import { mount } from "@vue/test-utils";

import ICInput from '../src/components/ICInput/ICInput.vue';

describe('ICInput', () => {
  test('should be able to render', () => {
    const wrapper = mount(ICInput, {
      props: {
        id: 'test-input',
      }
    });

    expect(wrapper.get('input')).toBeTruthy();
  });

  test('should be able to render label for input', () => {
    const wrapper = mount(ICInput, {
      props: {
        id: 'test-input',
        text: 'test label'
      }
    });

    expect(wrapper.text()).toEqual('test label');
  });

  test('should be able to clink event in input', async () => {
    const wrapper = mount(ICInput, {
      props: {
        id: 'test-input',
      }
    });

    await wrapper.get('input').trigger('click');

    expect(wrapper.emitted()).toContain(MouseEvent);
  });

  test('should be able to disable input', () => {
    const wrapper = mount(ICInput, {
      props: {
        id: 'test-input',
        disabled: true
      }
    });

    console.log(wrapper.get('input'))
  });

  test('should be able to render all properties', () => {
    const wrapper = mount(ICInput, {
      props: {
        id: 'test-input',
        text: 'test label',
        modelValue: null,
        info: 'test info',
        error: 'test error',
        placeholder: 'test placeholder',
        invalid: true,
        disabled: false,
        readonly: true,
      }
    });


    expect(wrapper.vm.modelValue).toBeNull();
    expect(wrapper.vm.text).toEqual('test label');
    expect(wrapper.vm.info).toContain('test info');
    expect(wrapper.vm.error).toEqual('test error');
    expect(wrapper.vm.placeholder).toEqual('test placeholder');
    expect(wrapper.vm.invalid).toBeTruthy()
    expect(wrapper.vm.disabled).toBeFalsy();
    expect(wrapper.vm.readonly).toBeTruthy();
    expect(wrapper.vm.type).toEqual('text');
    expect(wrapper.vm.id).toEqual('test-input');
  });
});
