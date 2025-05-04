import { createRouter,createWebHistory } from "vue-router"
import TaskInput from '../components/TaskInput.vue'
import TaskList from '../components/TaskList.vue'

const routes=[
    {
        path:'/',name:'home',component:TaskInput
    },
    {
        path:'/create',name:'create',component:TaskInput
    },
    {
        path:'/list',name:'list',component:TaskList
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router