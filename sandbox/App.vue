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

                        <ICTextarea></ICTextarea>
                        <ICSelect
                        id="reference"
                    text="Referência"
                    error="Casa referência não pode ser vazia"
                    info="Verifique com seu gestor antes do preenchimento"
                    :options="options"
                        ></ICSelect>
  </main>

</template>

<script >

import ICButton from "../src/components/ICButton/ICButton.vue";
import ICAddButton from "../src/components/ICAddbutton/ICAddButton.vue";
import ICCheckbox from "../src/components/ICCheckbox/ICCheckbox.vue";
import ICInputImage from "../src/components/ICInputImage/ICInputImage.vue";
import ICTextarea from  "../src/components/ICTextarea/ICTextarea.vue";
import ICInput from "../src/components/ICInput/ICInput.vue"
import ICSelect from "../src/components/ICSelect/ICSelect.vue"

export default{
  name:'App',
  components:{
    ICButton,
    ICAddButton,
    ICCheckbox,
    ICInputImage,
    ICInput,
    ICTextarea,
    ICSelect
    }
    
}

</script>


<script setup lang="ts"></script>
<style scoped lang="scss"></style>