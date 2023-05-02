import { describe, expect, test } from "vitest";
import { mount } from '@vue/test-utils';

import ICCheckboxGroup from '../src/components/ICCheckboxGroup/ICCheckboxGroup.vue';

describe('ICCheckboxGroup', () => {
  test('should be able to render', () => {
    const wrapper = mount(ICCheckboxGroup, {
      props: {
        title: 'Test title',
      }
    });

    expect(wrapper.get('span')).toBeTruthy();
    expect(wrapper.text()).toContain('Test title');
  });

  test('should be able to select all', () => {
    const wrapper = mount(ICCheckboxGroup, {
      props: {
        title: 'Test title',
      }
    });

    expect(wrapper.vm.allSelected).toBeFalsy();
    expect(wrapper.vm.title).toEqual('Test title');

    expect(wrapper.find('span').text()).toContain('Marcar tudo');
  });

  test('should be able to ubselect all', () => {
    const wrapper = mount(ICCheckboxGroup, {
      props: {
        title: 'Test title',
        allSelected: true,
      }
    });

    expect(wrapper.vm.allSelected).toBeTruthy();
    expect(wrapper.vm.title).toEqual('Test title');

    expect(wrapper.find('span').text()).toContain('Desmarcar tudo');
  });

  test('should be able to click event in span', async () => {
    const wrapper = mount(ICCheckboxGroup, {
      props: {
        title: 'Test title'
      }
    });

    await wrapper.get('span').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('marker');
  })
});
