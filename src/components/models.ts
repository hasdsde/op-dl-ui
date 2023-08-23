import {ref} from "vue";

// 菜单数据
export let menu = ref([
    {link: 'todo', icon: 'task_alt', desc: '列表', id: 1,},
    {link: 'add', icon: 'add_circle', desc: '添加', id: 2,},
    {link: 'user', icon: 'account_circle', desc: '用户', id: 3,},
])

export class MenuItems {
    link: string | undefined;
    icon: string | undefined;
    desc: string | undefined;
    id: number | undefined;

}