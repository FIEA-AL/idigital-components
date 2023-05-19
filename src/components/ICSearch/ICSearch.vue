<template>
  <div class="input-container">
    <input
      v-model="termoPesquisa"
      type="text"
      @input="filtrarOpcoes"
      @click="alternarDropdown(true)"
      @blur="lidarComBlur"
      @keydown.arrow-down="navegarDropdown"
      @keydown.arrow-up="navegarDropdown"
      @keydown.enter="selecionarValorAtual"
      class="search"
    />
    <i
      :class="['isax isax-search-normal', { 'focado': estaFocado }]"
      class="isax isax-search-normal"
    ></i>
    <ul v-if="exibirDropdown" class="dropdown">
      <li
        v-for="(opcao, indice) in opcoesFiltradas"
        :key="opcao.id"
        @click="selecionarOpcao(opcao)"
        :class="{ 'selected': indice === indiceOpcaoSelecionada }"
      >
        {{ opcao.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CampoPesquisa',
  props: {
    opcoes: {
      type: Array as PropType<{ id: number; label: string }[]>,
      required: true
    },
    opcaoSelecionada: {
      type: Object as PropType<{ id: number; label: string }>,
      default: null
    },
    isAsync: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    let estaFocado = ref(false);
    const termoPesquisa = ref('');
    const opcoesFiltradas = ref([] as { id: number; label: string }[]);
    const exibirDropdown = ref(false);
    const indiceOpcaoSelecionada = ref(-1);

    async function filtrarOpcoes() {
      exibirDropdown.value = true;

      if (props.isAsync) {
        opcoesFiltradas.value = [{ id: -1, label: 'Digite para buscar...' }];
      }

      // Simulando uma chamada assíncrona
      await new Promise((resolve) => setTimeout(resolve, 500));
      opcoesFiltradas.value = props.opcoes.filter(opcao =>
        opcao.label && opcao.label.toLowerCase().includes(termoPesquisa.value.toLowerCase())
      );
    }

    function selecionarOpcao(opcao: { id: number; label: string }) {
      emit('update:opcaoSelecionada', opcao);
      termoPesquisa.value = opcao.label;
      exibirDropdown.value = false;
    }

    function lidarComBlur() {
      estaFocado.value = false;
      setTimeout(() => {
        exibirDropdown.value = false;
      }, 150);
    }

    function alternarDropdown(exibir: boolean) {
      exibirDropdown.value = exibir;
      if (exibir) {
        filtrarOpcoes();
      }
    }

    function navegarDropdown(event: KeyboardEvent) {
      if (opcoesFiltradas.value.length === 0) {
        return;
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (indiceOpcaoSelecionada.value === opcoesFiltradas.value.length - 1) {
          indiceOpcaoSelecionada.value = 0;
        } else {
          indiceOpcaoSelecionada.value += 1;
        }
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (indiceOpcaoSelecionada.value === 0) {
          indiceOpcaoSelecionada.value = opcoesFiltradas.value.length - 1;
        } else {
          indiceOpcaoSelecionada.value -= 1;
        }
      }
    }

    function selecionarValorAtual() {
      if (indiceOpcaoSelecionada.value !== -1) {
        selecionarOpcao(opcoesFiltradas.value[indiceOpcaoSelecionada.value]);
      }
    }

    watch(() => props.opcaoSelecionada, (valor) => {
      if (!valor) {
        termoPesquisa.value = '';
      }
    });

    return {
      termoPesquisa,
      opcoesFiltradas,
      exibirDropdown,
      indiceOpcaoSelecionada,
      filtrarOpcoes,
      selecionarOpcao,
      lidarComBlur,
      alternarDropdown,
      navegarDropdown,
      selecionarValorAtual,
      estaFocado,
    };
  }
});
</script>

<style scoped lang="css" src="./ICSearch.css"></style>
