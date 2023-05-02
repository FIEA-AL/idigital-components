import '@testing-library/jest-dom';
import { mount } from '@vue/test-utils';
import { test, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/vue'

import ICButton from '../src/components/ICButton/ICButton.vue';

describe('ICButton', () => {
  test('Should be able to render text', () => {
    const wrapper = mount(ICButton, {
      props: {
        text: 'Olá, mundo!'
      }
    });

    // console.log(wrapper.vm)

    expect(wrapper.text()).toContain('Olá, mundo!');
  });

  test('Should be able to render classe default', () => {
    const wrapper = mount(ICButton, { props: { text: '' }});

    expect(wrapper.classes()).toContain('solid');
  });

  test('Should be able to render attribute disabled', () => {
    const wrapper = mount(ICButton, {
      props: {
        text: '',
        disabled:true
      }
    });

    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  test('Should be able to toggle type', () => {
    const wrapper1 = mount(ICButton, { props: { text: '' }});

    expect(wrapper1.attributes('type')).toEqual('button');

    const wrapper2 = mount(ICButton, { props: { text: '', submit: true } });

    expect(wrapper2.attributes('type')).toEqual('submit');
  });

  test('Should be able to the click event', async () => {
    const wrapper = mount(ICButton, {props: { text: '' }});

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
  });

  test('should be able to toggle button max-width', () => {
    const wrapper = mount(ICButton, {
      props: {
        text: 'Test text',
        maxWidth: true
      }
    });

    expect(wrapper.classes()[0]).toContain('max-width');
    expect(wrapper.classes()[1]).toContain('solid');
  });

  test('should be able to toggle button remove-margin', () => {
    const wrapper = mount(ICButton, {
      props: {
        text: 'Test text',
        removeMargin: true
      }
    });

    expect(wrapper.classes()[0]).toContain('remove-margin');
    expect(wrapper.classes()[1]).toContain('solid');
  });
});
