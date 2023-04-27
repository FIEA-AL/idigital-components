import { mount } from '@vue/test-utils'
import { assert,test, describe, expect, it } from 'vitest'

import ICButton from "./components/ICButton/ICButton.vue";

describe('ICButton', () => {
  test('renderiza o texto corretamente', () => {
    const wrapper = mount(ICButton, {
      props: {
        text: 'Olá, mundo!'
      }
    })
    expect(wrapper.text()).toContain('Olá, mundo!')
  })
})
