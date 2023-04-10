<template>
  <main>
    <h1>Ambiente de Testes</h1>
    <ICButton
                        id="save-form-password"
                        text="Mudar senha"
                        :max-width="true"
                        :submit="true"
                    />  
                    <br>
                    <ICAddButton text="teste" link="teste" />
                    <br>

                    <dButton 
      id="btnSave"
                    text="Salvar"
                    type="submit"
      />
    </main>

</template>

<script >
import ICButton from "../src/components/ICButton/ICButton.vue";
import ICAddButton from "../src/components/ICAddbutton/ICAddButton.vue";

export default{
  name:'App',
  components:{
    ICButton,
    ICAddButton,
    
  }
}
</script>


<script setup lang="ts"></script>
<style scoped lang="scss"></style>