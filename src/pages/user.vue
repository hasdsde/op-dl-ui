<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner class="bg-brown text-white text-center op-font">
      本地账户
      <template v-slot:action>
        <!--        <q-btn flat color="white" label="OK"/>-->
      </template>
    </q-banner>

    <div>
      <q-card class="q-mt-md" v-for="configs in configList">
        <q-card-section>
          <div class="text-h6 op-font">{{ configs.label + configs.name }}</div>
        </q-card-section>

        <q-separator/>

        <q-card-actions vertical class="op-font">

          <!--     运行函数方法     -->
          <q-item tag="label" v-ripple v-for="config in configs.children"
                  @click="runConfigHandler(configs.name,config.name)">

            <q-item-section>
              <q-item-label>{{ config.label }}({{ config.name }})</q-item-label>
              <q-item-label caption>{{ config.info }}</q-item-label>
            </q-item-section>

            <!--      开关      -->
            <q-item-section avatar v-if="config.status!=null">
              <q-toggle color="brown" v-model="config.status"
                        @update:model-value="updateConfig(configs.name,config.name,config.status)" val="friend"/>
            </q-item-section>
          </q-item>


        </q-card-actions>
      </q-card>
    </div>
  </div>


</template>

<script lang="ts" setup>
import {ref} from "vue";
import {loadConfig, runConfigHandler, updateConfig} from "src/ts/config";

let configList = ref(loadConfig())


</script>

<style scoped>

</style>

