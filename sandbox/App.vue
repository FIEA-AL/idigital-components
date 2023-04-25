<template>
 <main>
   <i class="isax isax-add"></i>

   <!-- <ICInputImage label="InputImage" placeholder="Faça o upload do ícone do serviço" :picture="" @change="(value)=> value"></ICInputImage> -->

    <!-- <ICButton variant="solid" :max-width="false" :remove-margin="false" icon="isax-add" ref="button" text="me clique 1" @click="onclick" ></ICButton>  
    <ICInput text="Nome" :invalid="true" error="Não foi possível" id="1"></ICInput>
    <ICInput
                    id="contact"
                    type="text"
                    :disabled="false"
                    :readonly="false"
                    placeholder="Digite seu número"
                    text="Telefone ou ramal"
                    error="Precisa ser um contato válido: 3103 ou 82912345678"
                    @keyup="digite"
                    />
                    <ICPagination 
        :items-per-page="10"
        :total-items="0"
        :total-pages="20"
        :item-active="5"
        @clicked-page="page"
      />

      <ICLink href="sdsd">Orquestra</ICLink>
      <ICSpinner ></ICSpinner>
      <ICTextarea id="1" @input="pegarvalor"></ICTextarea>
      <ICTitleBar subtitle="subtitulo" title="teste" link="https://ge.globo.com/" :show-link="true" :hiddenArrowBack="true"></ICTitleBar>
      <ICDivider></ICDivider>

      <ICSectionTitle title="teste" extra="extra section"></ICSectionTitle> 
 -->

      <!-- <ICConfirmDelete v-if="showPopup" :close="closePopup" ref="popup"></ICConfirmDelete>  -->
      <!-- <ICCheckbox label-text="CheckBox" :checked=true></ICCheckbox>
      <ICSelect
                    id="reference"
                    text="Referência"
                    error="Casa referência não pode ser vazia"
                    info="Verifique com seu gestor antes do preenchimento"
                    :options="[{name:'IEL',value:'IEL'},{name: 'FIEA', value: 'FIEA' },{ name: 'SESI', value: 'SESI' },{ name: 'SENAI', value: 'SENAI' },{ name: 'SESI SENAI', value: 'SESI SENAI' },{ name: '4', value: 'SISTEMA FIEA' }]"
                    :v-model="'IEL'"
                    ></ICSelect>
                    <ICSortFilter name="Mais recente" @clicked="handleSortServices"/>
                    <ICFilter text="Orquestra" icon="isax-link-1" @clicked="handleSortServices"/>
                    <ICDrawerFilter :is-open="false"></ICDrawerFilter>
                      
    <ICInputImage label="InputImage" placeholder="Faça o upload do ícone do serviço" :picture="picture" @change="(value)=>picture = value"></ICInputImage>
    <ICFilter text="Orquestra" icon="isax-link-1" @clicked="handleSortServices"/> -->
    <!-- <ICSortFilter name="Mais recente" @clicked="handleSortServices"/>
    <ICDrawerFilter :is-open="false"></ICDrawerFilter>



    <ICTitleBar
        title="titulo"
        subtitle="subtitulo"
      ></ICTitleBar>
      <ICModal :show="showPopup">
        <template #header>
          <h4>Minhas tarefas</h4>
        </template>
        <div>
          <p>My Content</p>
        </div>
        <template #footer>
          <ICButton text="close" @click="fecharpoup"></ICButton>
        </template>
      </ICModal>  -->
      <!-- <ICConfirmDelete v-if="showPopup" :close="closePopup" ref="popup"></ICConfirmDelete>  -->
    
<!-- <ICLink  :show-link="true" 
      titleLink="ICLINK"
      link="https://www.globo.com/"
      :hiddenArrowBack="true"
      ></ICLink>
      <ICTitleBar subtitle="subtitulo" title="teste" link="https://ge.globo.com/" :show-link="true" :hiddenArrowBack="true"></ICTitleBar>
      <ICSelect
                    id="reference"
                    text="Referência"
                    placeholder="isaque lemos"
                    error="Casa referência não pode ser vazia"
                    info="Verifique com seu gestor antes do preenchimento"
                    :options="[{name:'IEL',value:'IEL'},{name: 'FIEA', value: 'FIEA' },{ name: 'SESI', value: 'SESI' },{ name: 'SENAI', value: 'SENAI' },{ name: 'SESI SENAI', value: 'SESI SENAI' },{ name: '4', value: 'SISTEMA FIEA' }]"
                    :v-model="'IEL'"
                    ></ICSelect> -->
    <!-- <ICCheckboxGroup title="teste" :with-shortcut="false" :all-selected="false"></ICCheckboxGroup>  -->

    <!-- <ICButton text="me clique 2" @click="onclick2(event)"></ICButton> -->


    <!-- <ICButton
                        id="save-form-password"
                        text="Mudar senha"
                        :max-width="true"
                        :submit="true"
                    />  
                    <br>
                    <br>
                    invalid="true"

                        <ICInput placeholder="Digite seu nome" id='1'></ICInput> 

  <ICTextarea></ICTextarea>
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
                    <br>

    <ICCheckboxGroup title="teste" :with-shortcut="true" :all-selected="true"></ICCheckboxGroup> 

     <ICSectionTitle title="teste"></ICSectionTitle> 
    <ICButton
                        id="save-form-password"
                        text="Mudar senha"
                        :max-width="true"
                        :submit="true"
                    />  
    <ICDivider></ICDivider> -->
    <!-- <div class="tags">
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
    </div> -->

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


    <ICModal :show="showPopup">
        <template #header>
          <h4>Minhas tarefas</h4>
        </template>
        <div>
          <p>My Content</p>
        </div>
        <template #footer>
          <ICButton text="close" @click="fecharpoup"></ICButton>
        </template>
      </ICModal> 

      <ICDrawerFilter :is-open="true" :mask="true">
        <template #header>
          <h4>Minhas tarefas</h4>
        </template>
        <div>
          <p>My Content</p>
        </div>
        <template #footer>
          <h5>Ver todas as tarefas</h5>
        </template>
      </ICDrawerFilter>
      <ICButton variant="solid" :max-width="false" :remove-margin="false" icon="isax-add" ref="button" text="me clique 1" @click="onclick" ></ICButton>  
      <ICSelect
                    id="reference"
                    text="Referência"
                    error="Casa referência não pode ser vazia"
                    info="Verifique com seu gestor antes do preenchimento"
                    :options="[{name:'IEL',value:'IEL'},{name: 'FIEA', value: 'FIEA' },{ name: 'SESI', value: 'SESI' },{ name: 'SENAI', value: 'SENAI' },{ name: 'SESI SENAI', value: 'SESI SENAI' },{ name: '4', value: 'SISTEMA FIEA' }]"
                    ></ICSelect>

                    <ICCheckboxGroup title="teste"></ICCheckboxGroup>

  </main>
</template>

<script lang="ts">
import ICButton from "../src/components/ICButton/ICButton.vue";
import ICCheckbox from "../src/components/ICCheckbox/ICCheckbox.vue";
import ICInputImage from "../src/components/ICInputImage/ICInputImage.vue";
import ICTextarea from "../src/components/ICTextarea/ICTextarea.vue";
import ICInput from "../src/components/ICInput/ICInput.vue";
import ICSelect from "../src/components/ICSelect/ICSelect.vue";
import ICSortFilter from "../src/components/ICSortFilter/ICSortFilter.vue";
import ICDrawerFilter from "../src/components/ICDrawerFilter/ICDrawerFilter.vue";
import ICCheckboxGroup from "../src/components/ICCheckboxGroup/ICCheckboxGroup.vue";
import ICSectionTitle from "../src/components/ICSectionTitle/ICSectionTitle.vue";
import ICModal from "../src/components/ICModal/ICModal.vue";
import ICDivider from "../src/components/ICDivider/ICDivider.vue";
import ICPagination from "../src/components/ICPagination/ICPagination.vue";
import ICSpinner from "../src/components/ICSpinner/ICSpinner.vue";
import ICContainer from "../src/components/ICContainer/ICContainer.vue";
import ICTitleBar from "../src/components/ICTitleBar/ICTitleBar.vue";
import ICFilter from "../src/components/ICFilter/ICFilter.vue"
import ICLink from "../src/components/ICLink/ICLink.vue"

// import { defineComponent } from 'vue';
import { ref,onMounted,watch } from 'vue';

export default {
  name: "App",
  components: {
    ICButton,
    ICInput,
    ICCheckbox,
    ICInputImage,
    ICTextarea,
    ICSelect,
    ICSortFilter,
    ICDrawerFilter,
    ICCheckboxGroup,
    ICSectionTitle,
    ICModal,
    ICDivider,
    ICPagination,
    ICSpinner,
    ICTitleBar,
    ICFilter,
    ICLink,
    ICContainer
  },
  setup() {
    // const button = ref()
    const showPopup = ref(false);
    
    onMounted(() => {
      // console.log(popup.value.component)
    })
    const onclick = () => {
      showPopup.value=true
      console.log(showPopup.value)

    };
    const onclick2 = () => {
      alert('Button clicked! 2');
    }
    const digite = (event) => {
      console.log(event.target.value)
    };
    const page = (clickedPage) => {
      console.log(clickedPage)
    }
    const pegarvalor = (event) => {
      console.log(event.target.value)
    }
    const fecharpoup = () =>{
      showPopup.value=false
      console.log(showPopup.value)

    }

    
  return {
    onclick,
    onclick2,
    digite,
    page,
    // button,
    pegarvalor,
    showPopup,
    fecharpoup
    };
  }
};
// ICLINK,ICPROFILE,ICALERT

</script>

<style scoped lang="scss"></style>
