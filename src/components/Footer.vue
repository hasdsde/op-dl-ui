<template>
  <q-tabs
      v-model="tab"
      class="bg-white text-black no-shadow" align="justify"
  >
    <q-route-tab v-for="menu in menus" active-class="active-link" :name="menu.link" :icon="menu.icon"
                 :to="menu.link"/>
  </q-tabs>
</template>

<script setup>
import {ref, watch} from 'vue'
import {useRouter} from "vue-router/dist/vue-router";
import {menu} from "src/ts/models";

const tab = ref()
const props = defineProps(['currentMenu'])
console.log(props.currentMenu)
let menus = ref(menu)//从其他文件获取的菜单数据
let link = ref()
let $router = useRouter()
//当系统发现当前路由改变时，就替换到link中，高亮就生效了
watch(() => $router.currentRoute.value.path, (newValue, oldValue) => {
  tab.value = $router.currentRoute.value.path.replace("/", '')
}, {immediate: true})
</script>

<style lang="sass">
.active-link
  color: brown
//background: #F2C037
</style>
