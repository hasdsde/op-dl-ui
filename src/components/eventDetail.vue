<template>
  <q-card>
    <q-menu
        touch-position
        context-menu
        @before-show="testShow"
    >
    </q-menu>
    <q-card-section class="q-pt-xs q-pb-none">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="32px" font-size="20px" class="text-white" icon="motion_photos_on" :color="detail.detail.icon">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <q-badge class="float-left q-mr-xs" :color="detail.detail.icon">原石：{{ detail.detail.primogems }}</q-badge>
            <span class=" q-pr-md">{{ detail.detail.title }}</span>
          </q-item-label>
          <q-item-label caption>
            {{ detail.detail.award }}
          </q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption style="width: 80px" class="text-right">
            {{ getEventLeftTime(detail.detail.startTime, detail.detail.endTime) }}
          </q-item-label>
          <q-btn outline color="primary" dense size="sm" label="点击完成"/>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import {DialogConfirm} from "src/ts/commonResults";
import {getEventLeftTime} from "../ts/version";

var detail = defineProps(['detail']);


function testShow() {
  DialogConfirm("确定要删除吗?").onOk(() => {
    console.log("点击了确定")
  })
}
</script>

<style scoped>

</style>

