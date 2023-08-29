<template>
  <div class="q-pa-md main" style="height: 100vh;">
    <!--   背景图片   -->
    <!--    <BackgroundImg />-->
    <div class="column justify-center" style="height: 90vh;">
      <div class="col-auto row justify-center">
        <q-card class="col-auto shadow-10 text-h5"
                style="background-color: rgb(255,255,255);padding: 50px;width: 400px">
          <q-card-section class="row justify-between">
            <p class="op-font">登录</p>
            <q-btn icon="close" dense rounded flat to="/"/>
          </q-card-section>

          <q-card-section class="op-font">
            <q-input rounded ref="usernameRef" v-model="name" label="用户名"
                     :lazy-rules="true"
                     :rules="[(val) => (val.length > 0) || '输入值为空']"/>
          </q-card-section>

          <q-card-section class="op-font">
            <q-input rounded ref="passwordRef" v-model="password" label="密码" lazy-rules
                     :rules="[(val) => (val && val.length > 0) || '输入值为空']" type="password"/>
          </q-card-section>

          <q-card-section>
            <q-btn-group rounded>
              <q-btn @click="handleLogin" color="primary" style="width: 205px;"
                     label="登录"/>
              <q-btn @click="handleRegister" color="secondary" label="注册"/>
            </q-btn-group>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {api} from 'boot/axios'
import {CommonFail, CommonSuccess, CommonWarn} from 'src/ts/commonResults'
import {useRouter} from 'vue-router'


const $router = useRouter()

// 账号 密码 确认密码 三件套
const usernameRef = ref(null)
const passwordRef = ref(null)
const passwordConformRef = ref(null)


const name = ref('')
const password = ref('')
const registerMode = ref(false)


// 重置输入框
function clearAll() {
  name.value = ''
  password.value = ''

}


// 注册
function handleRegister() {
  CommonWarn('不可用')
}

//登录
async function handleLogin() {
  await api.post('/login', {
    'name': name.value,
    'password': password.value
  }).then((res: any) => {
    if (res.code == '200') {
      localStorage.setItem('token', res.data.token)
      CommonSuccess('登录成功')
      $router.push('/')
    } else {
      CommonFail('登录失败')
    }
  })
}


</script>


<style scoped>
.main {
  background-image: url('../../../op-dl-ui/src/assets/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
