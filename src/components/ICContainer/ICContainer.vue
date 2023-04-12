<template>
   <div class="my-tasks" >
        <div class="header">
            <slot name="header"></slot>
           
        </div>
        <div class="body" id="homeTasks">
            <slot></slot>
        </div>
        <router-link class="link" to="/processes">
            <i class="isax isax-link-1"></i>
            <slot name="footer"></slot>

        </router-link>
    </div>
</template>


