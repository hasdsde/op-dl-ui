<!-- 表单页面，:active激活当前窗口，chiild是v-for循环产生的，省略的很多内容 -->
<template>
  <q-list bordered padding class="rounded-borders op-font">
    <q-item
        v-for="menu in menus"
        clickable
        v-ripple
        :to="menu.link"
        :active="link === menu.link"
        active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon :name="menu.icon"/>
      </q-item-section>
      <q-item-section>{{ menu.desc }}</q-item-section>
    </q-item>
  </q-list>

</template>

<script setup>
import {ref, watch} from 'vue'
import {useRouter} from "vue-router/dist/vue-router";
import {menu} from "src/ts/models";


const props = defineProps(['currentMenu'])
let menus = ref(menu)//从其他文件获取的菜单数据
let link = ref()
let $router = useRouter()
//当系统发现当前路由改变时，就替换到link中，高亮就生效了
watch(() => $router.currentRoute.value.path, (newValue, oldValue) => {
  link.value = $router.currentRoute.value.path.replace("/", '')
}, {immediate: true})
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: #F2C037
</style>