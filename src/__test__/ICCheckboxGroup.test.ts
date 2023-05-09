import '@testing-library/jest-dom';
import { describe, expect, test } from "vitest";
import { mount } from '@vue/test-utils';

import ICCheckboxGroup from '../components/ICCheckboxGroup/ICCheckboxGroup.vue';

let wrapper = mount([]);

beforeEach(() => {
  wrapper = mount(ICCheckboxGroup, {
    props: {
      title: 'Test title',
    }
  });

  if (!wrapper.props().title) throw new Error('propotype title is required');
})

describe('ICCheckboxGroup', () => {
  test('should be able to render', () => {
    expect(wrapper.get('span')).toBeTruthy();
    expect(wrapper.text()).toContain('Test title');
  });

  test('should be able to select all', () => {
    expect(wrapper.props().allSelected).toBeFalsy();
    expect(wrapper.props().title).toEqual('Test title');

    expect(wrapper.find('span').text()).toContain('Marcar tudo');
  });

  test('should be able to ubselect all', async () => {
    await wrapper.setProps({ allSelected: true });

    expect(wrapper.props().allSelected).toBeTruthy();
    expect(wrapper.props().title).toEqual('Test title');

    expect(wrapper.find('span').text()).toContain('Desmarcar tudo');
  });

  test('should be able to click event in span', async () => {
    await wrapper.get('span').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('marker');
  })
});
