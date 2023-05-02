import { describe, expect, test } from "vitest";
import { mount } from '@vue/test-utils';

import ICInputimagem from '../src/components/ICInputImage/ICInputImage.vue';

describe('ICCheckboxGroup', () => {
  test('should be able to render', () => {
    const wrapper = mount(ICInputimagem, {
      props: {
        label: 'Test label',
      }
    });

    expect(wrapper.get('label')).toBeTruthy();
    expect(wrapper.text()).toContain('Test label');
  });

  test('should be able to click event in input', async () => {
    const wrapper = mount(ICInputimagem, {
      props: {
        label: 'Test label'
      }
    });

    await wrapper.get('input').trigger('click');

    expect(wrapper.emitted()).toContain(MouseEvent);
  });

  test('should be able to click event in image', async () => {
    const wrapper = mount(ICInputimagem, {
      props: {
        label: 'Test label'
      }
    });

    await wrapper.get('div').trigger('click');

    expect(wrapper.emitted()).toContain(MouseEvent);
  });

  test('should be able to placeholder image', () => {
    const wrapper = mount(ICInputimagem, {
      props: {
        label: 'Test label',
        placeholder: 'Test placeholder'
      }
    });

    expect(wrapper.text()).toContain('Test placeholder');
  });
});
