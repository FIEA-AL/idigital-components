import { mount } from '@vue/test-utils'
import { assert,test, describe, expect, it} from 'vitest'

import ICButton from "../src/components/ICButton/ICButton.vue";
import ICDrawerFilter from "../src/components/ICDrawerFilter/ICDrawerFilter.vue";

describe('ICButton', () => {
  test('renderiza o texto corretamente', () => {
    const wrapper = mount(ICButton, {
      props: {
        text: 'Olá, mundo!'
      }
    })
    expect(wrapper.text()).toContain('Olá, mundo!')
  })

  test('renderiza a classe default', () => {
    const wrapper = mount(ICButton, {
      props: {
        text: 'Olá, mundo!',
      }
    })
    expect(wrapper.classes()).toContain('solid')

  })
  test('Renderiza a propriedade disabled', () => {
    const wrapper = mount(ICButton, {
      props: {
        text: 'Olá, mundo!',
        disabled:true
      }
    })
    expect(wrapper.attributes('disabled')).toBeDefined();

  })
})

describe('ICDrawerFilter', () => {

  test('Renderiza a propriedade disabled', () => {
    const wrapper = mount(ICDrawerFilter, {
      props: {
        isOpen:true
      }
    })
    expect(wrapper.find('button').classes()).toContain('abrir');


  })
  
})




