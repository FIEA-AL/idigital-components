<template>
  <div v-if="picture == ''">
    <i  class="isax isax-user" :class="variantIconSize"></i>

  </div>
  <div v-else>
    <img
      :src="picture ? picture : '/src/no_photo_user.png'"
      alt="Photo of user"
      :class="variantStatus"
    />
  </div>
</template>

<style scoped lang="css" src="./ICAvatar.css"></style>
<script lang="ts" src="./ICAvatar.ts"></script>
