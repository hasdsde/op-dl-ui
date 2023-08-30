<template>
  <q-card class="my-card op-font" push>
    <q-card-section class="q-pb-sm">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h5" :class="'text-'+version.img">
            {{ version.title }}
            <q-badge outline align="top" :color="version.img">
              {{ versionNum }}
            </q-badge>
          </div>
          <div class="text-subtitle3 text-grey">
            {{ versionTime }} ({{ versionLeftTime }})
          </div>
        </div>

        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="more_vert">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable>
                  <q-toggle
                      v-model="versionCardExpanded"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      label="自动展开"
                      @update:model-value="handleExpand"
                  />
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-actions class="q-pt-none">
      <div style="width: 100%">
        <q-expansion-item icon="explore" v-model="versionCardExpanded">
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar icon="explore" color="black" text-color="white"/>
            </q-item-section>

            <q-item-section>
              <div>
                版本要点:{{ versionEvents.length }}
              </div>
              <div class="row items-center">
                <div v-for="tag in version.versionTag">
                  <q-badge class="q-mr-sm" :color="tag.tag.icon" :label="tag.tag.name"/>
                </div>
              </div>
              <q-linear-progress stripe rounded size="5px" :value="versionLeftLine" :color="version.img"
                                 class="q-mt-sm"/>
            </q-item-section>
          </template>
          <div v-for="pool in pools">
            <PoolCard :pool="pool" class="no-shadow"/>
          </div>
          <div v-for="versionEvent in versionEvents">
            <event-card :versionEvent="versionEvent" class="no-shadow"/>
          </div>
        </q-expansion-item>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import PoolCard from "components/poolCard.vue";
import EventCard from "components/versionEventCard.vue";
import {api} from "boot/axios";
import {getVersionLeftLine, getVersionLeftTime, getVersionNum, getVersionTime} from "src/ts/version";
import {useQuasar} from "quasar";
import {getConfig, updateConfig} from "src/ts/config";

const $q = useQuasar()
const versionCardExpanded: any = ref(false)//版本自动展开
let version: any = ref({}) //版本信息
let versionTime: any = ref("Undefined")//版本开始和结束时间
let versionNum: any = ref("undefined")//版本号
let versionLeftTime: any = ref("undefined") //版本剩余时间
let versionLeftLine: any = ref(0) //版本进度条数字

let pools: any = ref([])
let versionEvents: any = ref([])
loadPage()

function loadPage() {
  getCurrentVersion()//获取当前版本信息
  getPools()
  getEvents()
  versionCardExpanded.value = getConfig("version", "autoExpandVersionCard")
}


function getCurrentVersion() {
  $q.loading.show({
    message: '加载主界面',
    boxClass: 'bg-grey-2 text-grey-9',
    spinnerColor: 'primary',
  })

  api.get("/current-version-with-tag").then((res: any) => {
    version.value = res.data.Data[0]
    versionTime.value = getVersionTime(version.value.startTime, version.value.endTime)
    versionLeftTime.value = getVersionLeftTime(version.value.endTime)
    versionNum.value = getVersionNum(version.value.num)
    versionLeftLine.value = getVersionLeftLine(version.value.startTime, version.value.endTime)
    $q.loading.hide()
  })
}

function getPools() {
  api.get("/current-pool-with-tag").then((res: any) => {
    pools.value = res.data.Data
  })
}

function getEvents() {
  api.get("/current-version-event-with-tag").then((res: any) => {
    versionEvents.value = res.data.Data
  })
}

//自动展开
function handleExpand() {
  updateConfig("version", "autoExpandVersionCard", versionCardExpanded.value)
}
</script>
<style scoped>

</style>

