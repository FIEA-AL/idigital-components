import '@testing-library/jest-dom';
import { expect, describe, test, beforeEach } from 'vitest';
import { mount } from "@vue/test-utils";

import ICCheckbox from '../components/ICCheckbox/ICCheckbox.vue';

let wrapper = mount([]);

beforeEach(() => {
  wrapper = mount(ICCheckbox, {
    props: {
      labelText: 'Test label text',
    }
  })

  if (!wrapper.props().labelText) throw new Error('propotype labelText is required');
});

describe('ICCheckbox', () => {
  test('should be able to render', async () => {
    await wrapper.setProps({ labelText: 'Test label text' });

    expect(wrapper.text()).toContain('Test label text');
  });

  test('should be able to toggle check', async () => {
    await wrapper.setProps({ checked: false });

    expect(wrapper.props().checked).toBeFalsy();

    await wrapper.setProps({ checked: true });

    expect(wrapper.props().checked).toBeTruthy();
  });

  test('should be able to click event in check', async () => {
    await wrapper.get('input').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('clicked');
  });
});
