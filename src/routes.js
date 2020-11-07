import Home from './views/Home.svelte';
import Team from './views/TeamViewer.svelte';
import Info from './views/Info.svelte';

export const routes = [
    {
        name: '/',
        component:Home,
    },
    {
        name:'/teams',
        component: Team
    },
    {
        name:'/info',
        component: Info
    }
]