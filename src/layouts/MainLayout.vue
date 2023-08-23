<template>
    <q-layout view="hHh Lpr fFf">
        <q-header elevated class="bg-white">
            <q-toolbar>
                <q-btn
                        flat
                        dense
                        round
                        color="black"
                        icon="menu"
                        aria-label="Menu"
                        @click="toggleLeftDrawer"
                />

                <q-toolbar-title class="text-black op-font">
                    死线原神-{{ currentMenu.desc }}
                </q-toolbar-title>

                <div>user</div>
            </q-toolbar>
        </q-header>

        <q-drawer
                v-model="leftDrawerOpen"
                show-if-above
                bordered
        >
            <q-list>
                <Aside :currentMenu="currentMenu"/>
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>

        <q-footer class="shadow-1">
            <!--      目前用不到的      -->
            <!-- <Footer/>-->
        </q-footer>
    </q-layout>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {menu, MenuItems} from "components/models";
import {useRouter} from "vue-router/dist/vue-router";
import Aside from "components/Aside.vue";

const $router = useRouter()
//从其他文件获取的菜单
let menus = ref(menu)

let currentMenu = ref(new MenuItems());
watch(() => $router.currentRoute.value.path, (newValue, oldValue) => {
    findTitle()
    // console.log(positions)
}, {immediate: true})

function findTitle() {
    menus.value.forEach((item: any) => {
        if (item.link == $router.currentRoute.value.path.replace("/", '')) {
            currentMenu.value.link = item.link
            currentMenu.value.icon = item.icon
            currentMenu.value.desc = item.desc
            currentMenu.value.id = item.id
            return currentMenu
        }
    })
}

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
