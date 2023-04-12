<template>
  <main>
    <h1>Ambiente de Testes</h1>
    <!-- <ICButton
                        id="save-form-password"
                        text="Mudar senha"
                        :max-width="true"
                        :submit="true"
                    />  
                    <br>
                    <ICAddButton text="teste" link="teste" />
                    <br>

    <ICCheckbox label-text="CheckBox"></ICCheckbox>
    <ICInputImage label="InputImage" placeholder="Faça o upload do ícone do serviço"
                        :picture="picture" @change="(value)=>picture = value"></ICInputImage>
                        <ICInput placeholder="Digite seu nome" id='1'></ICInput> -->

    <!-- <ICTextarea></ICTextarea>
                        <ICSelect
                        id="reference"
                    text="Referência"
                    error="Casa referência não pode ser vazia"
                    info="Verifique com seu gestor antes do preenchimento"
                    :options="options"
                        ></ICSelect>
                        <ICButton
                        id="save-form-password"
                        text="Mudar senha"
                        :max-width="true"
                        :submit="true"
                    />  
                    <br>
                    <ICAddButton text="teste" link="teste" />
                    <br>
                        <ICDrawerFilter :is-open=false @change="(value)=>showFilter = value"></ICDrawerFilter> -->
    <!-- <ICSortFilter name="Mais recente" @clicked="handleSortServices"/> -->

    <!-- <ICCheckboxGroup title="teste" :with-shortcut="true" :all-selected="true"></ICCheckboxGroup>  -->

    <ICSectionTitle title="teste"></ICSectionTitle>

    <!-- <ICConfirmDelete :show=true></ICConfirmDelete> -->
    <ICDivider></ICDivider>
    <div class="tags">
      <ICPagination
        :items-per-page="10"
        :total-items="0"
        :total-pages="20"
        :item-active="5"
        @clicked-page=""
      />
      <ICSpinner></ICSpinner>
      <ICContainer>
        <template #header>
          <h4>Minhas tarefas</h4>
        </template>
        <div>
          <p>My Content</p>
        </div>
        <template #footer>
          <h5>Ver todas as tarefas</h5>
        </template>
      </ICContainer>
    </div>
  </main>
</template>

<script>
import ICButton from "../src/components/ICButton/ICButton.vue";
import ICAddButton from "../src/components/ICAddbutton/ICAddButton.vue";
import ICCheckbox from "../src/components/ICCheckbox/ICCheckbox.vue";
import ICInputImage from "../src/components/ICInputImage/ICInputImage.vue";
import ICTextarea from "../src/components/ICTextarea/ICTextarea.vue";
import ICInput from "../src/components/ICInput/ICInput.vue";
import ICSelect from "../src/components/ICSelect/ICSelect.vue";
import ICSortFilter from "../src/components/ICSortFilter/ICSortFilter.vue";
import ICDrawerFilter from "../src/components/ICDrawerFilter/ICDrawerFilter.vue";
import ICCheckboxGroup from "../src/components/ICCheckboxGroup/ICCheckboxGroup.vue";
import ICSectionTitle from "../src/components/ICSectionTitle/ICSectionTitle.vue";
import ICConfirmDelete from "../src/components/ICConfirmDelete/ICConfirmDelete.vue";
import ICDivider from "../src/components/ICDivider/ICDivider.vue";
import ICPagination from "../src/components/ICPagination/ICPagination.vue";
import ICSpinner from "../src/components/ICSpinner/ICSpinner.vue";
import ICContainer from "../src/components/ICContainer/ICContainer.vue";

export default {
  name: "App",
  components: {
    ICButton,
    ICAddButton,
    ICCheckbox,
    ICInputImage,
    ICInput,
    ICTextarea,
    ICSelect,
    ICSortFilter,
    ICDrawerFilter,
    ICCheckboxGroup,
    ICSectionTitle,
    ICConfirmDelete,
    ICDivider,
    ICPagination,
    ICSpinner,
  },
};
</script>

<script setup lang="ts"></script>
<style scoped lang="scss"></style>
