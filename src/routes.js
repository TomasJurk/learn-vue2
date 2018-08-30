import AppShowData from './components/AppShowData';
import AppForm from './components/AppForm';
import AppSingleData from './components/AppSingleData'

export default [
    { path: '/', component: AppShowData },
    { path: '/add', component: AppForm },
    { path: '/data/:id', component: AppSingleData }
]