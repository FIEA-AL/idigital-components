<template>
   <div class="my-tasks" >
        <div class="header">
            <slot name="header"></slot>
           
        </div>
        <div class="body" id="homeTasks">
            <slot></slot>
        </div>
       
        <slot name="footer"></slot>

    </div>
</template>


