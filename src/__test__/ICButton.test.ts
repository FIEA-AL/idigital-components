import '@testing-library/jest-dom';
import { mount } from '@vue/test-utils';
import { test, describe, expect, beforeEach } from 'vitest';

import ICButton from '../components/ICButton/ICButton.vue';

let wrapper = mount([]);

beforeEach(() => {
  wrapper = mount(ICButton, {
    props: {
      text: 'test text'
    }
  });

  if (!wrapper.props().text) throw new Error('propotype text is required');
})

describe('ICButton', () => {
  test('Should be able to render text', async () => {
    await wrapper.setProps({ text: 'Olá, mundo!' });

    expect(wrapper.text()).toContain('Olá, mundo!');
  });

  test('Should be able to render classe default', () => {
    expect(wrapper.classes()).toContain('solid');
  });

  test('Should be able to render attribute disabled', async () => {
    await wrapper.setProps({ disabled: true });

    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  test('Should be able to toggle type', async () => {
    expect(wrapper.attributes('type')).toEqual('button');

    await wrapper.setProps({ submit: true });

    expect(wrapper.attributes('type')).toEqual('submit');
  });

  test('Should be able to the click event', async () => {
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
  });

  test('should be able to toggle button max-width', async () => {
    await wrapper.setProps({ maxWidth: true });

    expect(wrapper.classes()[0]).toContain('max-width');
    expect(wrapper.classes()[1]).toContain('solid');
  });

  test('should be able to toggle button remove-margin', async () => {
    await wrapper.setProps({ removeMargin: true });

    expect(wrapper.classes()[0]).toContain('remove-margin');
    expect(wrapper.classes()[1]).toContain('solid');
  });

  test('should be able to render icon the button', async () => {

    await wrapper.setProps({ icon: 'icon-element' });

    expect(wrapper.find('i')).toBeTruthy();
  });
});
