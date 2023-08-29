<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner class="bg-brown text-white text-center op-font">
      本地账户
      <template v-slot:action>
        <!--        <q-btn flat color="white" label="OK"/>-->
      </template>
    </q-banner>

    <div>
      <!--  用户设置    -->
      <q-card class="q-mt-md">
        <q-card-section>
          <div class="text-h6 op-font">用户设置</div>
        </q-card-section>

        <q-separator/>

        <q-card-actions vertical class="op-font">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>展示每日进度</q-item-label>
              <q-item-label caption>首页展示每日委托、树脂、等卡片</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="brown" v-model="versionDetailExpand" val="friend"/>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>更新Token</q-item-label>
              <q-item-label caption>Token使用次数有限，出错需要刷新</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>修改密码</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>退出登录</q-item-label>
            </q-item-section>
          </q-item>

        </q-card-actions>
      </q-card>
      <!--  版本设置    -->
      <q-card class="q-mt-md">
        <q-card-section>
          <div class="text-h6 op-font">版本设置</div>
        </q-card-section>

        <q-separator/>

        <q-card-actions vertical class="op-font">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>自动展开版本信息</q-item-label>
              <q-item-label caption>首页版本信息默认展开，可在版本卡片处设置</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="brown" v-model="versionDetailExpand" val="friend"/>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>显示未开始的版本</q-item-label>
              <q-item-label caption>首页默认展示多个版本</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="brown" v-model="versionDetailExpand" val="friend"/>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>展示卡池</q-item-label>
              <q-item-label caption>首页卡片展示卡池</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="brown" v-model="versionDetailExpand" val="friend"/>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>展示已完成的版本活动</q-item-label>
              <q-item-label caption>已完成的版本活动默认不展示</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="brown" v-model="versionDetailExpand" val="friend"/>
            </q-item-section>
          </q-item>
        </q-card-actions>
      </q-card>
      <!--   活动设置   -->
      <q-card class="q-mt-md">
        <q-card-section>
          <div class="text-h6 op-font">活动设置</div>
        </q-card-section>

        <q-separator/>

        <q-card-actions vertical class="op-font">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>自动展开活动信息</q-item-label>
              <q-item-label caption>首页活动信息默认展开，可在活动卡片处设置</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="brown" v-model="versionDetailExpand" val="friend"/>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>显示未开始的活动</q-item-label>
              <q-item-label caption>首页默认展示多个活动</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="brown" v-model="versionDetailExpand" val="friend"/>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>展示已完成的活动</q-item-label>
              <q-item-label caption>已完成的活动默认不展示</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="brown" v-model="versionDetailExpand" val="friend"/>
            </q-item-section>
          </q-item>
        </q-card-actions>
      </q-card>
      <!--  系统设置    -->
      <q-card class="q-mt-md">
        <q-card-section>
          <div class="text-h6 op-font">系统设置</div>
        </q-card-section>

        <q-separator/>

        <q-card-actions vertical class="op-font">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>清除数据</q-item-label>
              <q-item-label caption>清除登录信息以外所有数据</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>主题色</q-item-label>
              <q-item-label caption>brown</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>随机主题色</q-item-label>
              <q-item-label caption>每次开启应用随机更换主题色</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="brown" v-model="versionDetailExpand" val="friend"/>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>关于</q-item-label>
            </q-item-section>
          </q-item>

        </q-card-actions>
      </q-card>
    </div>
  </div>


</template>

<script lang="ts" setup>
import {ref} from "vue";

let versionDetailExpand = ref(false)
</script>

<style scoped>

</style>

