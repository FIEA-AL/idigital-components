import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test } from "vitest";
import { mount } from '@vue/test-utils';

import ICInputimagem from '../components/ICInputImage/ICInputImage.vue';

let wrapper = mount([]);

beforeEach(() => {
  wrapper = mount(ICInputimagem, {
    props: {
      label: 'Test label',
    }
  });

  if (!wrapper.props().label) throw new Error('propotype label is required');
});

describe('ICCheckboxGroup', () => {
  test('should be able to render', async () => {
    await wrapper.setProps({ label: 'Test label' });

    expect(wrapper.get('label')).toBeTruthy();
    expect(wrapper.text()).toContain('Test label');
  });

  test('should be able to click event in input', async () => {
    await wrapper.get('input').trigger('click');

    expect(wrapper.emitted()).toContain(MouseEvent);
  });

  test('should be able to click event in image', async () => {
    await wrapper.get('div').trigger('click');

    expect(wrapper.emitted()).toContain(MouseEvent);
  });

  test('should be able to placeholder image', async () => {
    await wrapper.setProps({ placeholder: 'Test placeholder' });

    expect(wrapper.text()).toContain('Test placeholder');
  });
});
