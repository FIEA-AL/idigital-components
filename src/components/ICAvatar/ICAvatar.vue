<template>
    <!-- <div v-if="picture == ''"> -->
        <br>
        <br>
        <br>
        <br>
      
        
        <i class="isax isax-user" :class="variantIconSize" style="position: absolute;
left: 22.27%;
right: 20.9%;
top: 8.33%;
bottom: 9.13%;

border: 1.5px solid #121212;"></i>
        <br>
        <br>
        <br>    
        <br>
        <img :src="picture ? picture : '/src/no_photo_user.png'" alt="Photo of user" :class="variantStatus">

    <!-- </div> -->
    
    <!-- <div v-else> -->
            <!-- <img :src="picture ? picture : '/src/no_photo_user.png'" alt="Photo of user" :class="variantStatus"> -->
    <!-- </div>  -->
  
</template>

<style scoped lang="css" src="./ICAvatar.css"></style>
<script lang="ts" src="./ICAvatar.ts"></script>
