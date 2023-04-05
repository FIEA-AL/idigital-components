<template>
  <main>
    <h1>Ambiente de Testes</h1>
    <Button
                        id="save-form-password"
                        text="Mudar senha"
                        :max-width="true"
                        :submit="true"
                    />  
                    <br>
                    <AddButton text="teste" link="teste" />
                    <br>

                    <dButton 
      id="btnSave"
                    text="Salvar"
                    type="submit"
      />
    </main>

</template>

<script >
import Button from "../src/components/ICButton/Button.vue";
import AddButton from "../src/components/ICAddbutton/AddButton.vue";
import dButton from "../src/components/ICDbutton/Dbutton.vue";

export default{
  name:'App',
  components:{
    Button,
    AddButton,
    dButton
  }
}
</script>


<script setup lang="ts"></script>
<style scoped lang="scss"></style>