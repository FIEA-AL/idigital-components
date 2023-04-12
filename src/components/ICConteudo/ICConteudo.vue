<template>
    <div class="my-tasks" >
        <div class="header">
            <h4>Minhas tarefas</h4>
            <div class="quantity">1</div>
        </div>
        <div class="body" id="homeTasks">
            <h2>Conteudo</h2>
        </div>
        <router-link class="link" to="/processes">
            <i class="isax isax-link-1"></i>
            <h5>Ver todas as tarefas</h5>
        </router-link>
    </div>
</template>
<!-- <script lang="ts">
import { defineComponent} from 'vue';

export default defineComponent({
    name: "MyTasks",
    // props: {
    //     tasks: {
    //         type: String,
    //         required: true
    //     }
    // },
});
</script>
<style scoped>
    .my-tasks{
        width: auto;
    }
    .my-tasks .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
    }
    .my-tasks .header h4 {
        color: var(--color-text-secondary);
        font-size: 16px;
    }
    .my-tasks .header .quantity {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 30px;
        height: 20px;
        padding: 8px;

        background: var(--accent-color);
        border-radius: 8px;
        color: white;
    }
    .my-tasks .body {
        display: flex;
        flex-direction: column;
        gap: 16px;

        flex: 1;
        overflow: auto;
        border: 1px solid var(--border-color);
        border-radius: 16px;

        padding: 24px;
    }

    .my-tasks .body::-webkit-scrollbar {
        width: 16px;

        border-radius: 0px 12px 12px 0;
        background-color: transparent;
    }

    .my-tasks .body::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 4px solid transparent;

        background-clip: content-box;
        background-color: var(--color-scrollbar);
    }

    .my-tasks .link {
        align-self: flex-end;

        margin-top: 8px;
        gap: 8px;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: var(--font-color);
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
    }
    .my-tasks .link:hover{
        opacity: 0.7;
    }

    @media only screen and (min-width: 768px) and (max-width: 1200px) {
        .my-tasks .body{
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style> -->
