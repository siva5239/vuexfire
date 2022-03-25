import { createRouter, createWebHistory } from 'vue-router';
import AddData from '@/components/AddData'
// import HelloWorld from '@/components/HelloWorld'
import Getdata from '@/components/Getdata'

const routes = [
{
    path: '/',
    name: 'AddData',
    component: AddData
},
{
    path: '/getdata',
    name: 'Getdata',
    component: Getdata
}];
const router=createRouter({
    history: createWebHistory(),
    routes})
export default router