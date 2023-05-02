// import '@testing-library/jest-dom';
import { expect, describe, test } from 'vitest';
import { mount } from "@vue/test-utils";
import { render, screen } from '@testing-library/vue';

import ICCheckbox from '../src/components/ICCheckbox/ICCheckbox.vue';

describe('ICCheckbox', () => {
  test('should be able to render', () => {
    const wrapper = mount(ICCheckbox, {
      props: {
        labelText: 'Test label text',
      }
    })

    expect(wrapper.text()).toContain('Test label text');

    expect(wrapper.get('input')).toBeTruthy();
  });

  test('should be able to toggle check', () => {
    const wrapper = mount(ICCheckbox, {
      props: {
        labelText: 'Test label text',
        checked: true
      }
    });

    expect(wrapper.vm.checked).toBeTruthy();

    const wrapper2 = mount(ICCheckbox, {
      props: {
        labelText: 'Test label text',
      }
    });

    expect(wrapper2.vm.checked).toBeFalsy();
  });

  test('should be able to click event in check', async () => {
    const wrapper = mount(ICCheckbox, {
      props: {
        labelText: 'Test label text',
      }
    });

    await wrapper.get('input').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('clicked');
  });
});
