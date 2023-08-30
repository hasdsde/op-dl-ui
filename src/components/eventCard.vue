<template>
  <q-card class="my-card op-font q-mt-md" push>
    <q-card-section class="q-pb-none q-pt-sm">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6 col">
            <span class="vertical-top " :class="'text-'+event.event.eventTag[0].tag.icon">{{
                event.event.title
              }}</span>
            <q-badge class="q-mr-sm vertical-top" v-if="event.event.coPlay" color="primary" outline label="多人"/>
            <span v-for="tag in event.event.eventTag">
              <q-badge class="q-mr-sm vertical-top" :color="tag.tag.icon" outline :label="tag.tag.name"/>
            </span>
            <div class="text-subtitle3 float-right vertical-bottom text-grey ">
              <span class="text-subtitle2">{{ getEventLeftTime(event.event.startTime, event.event.endTime) }}</span>
            </div>
          </div>

          <div></div>
        </div>

        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="more_vert">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable>
                  <q-toggle
                      v-model="eventExpand"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      label="自动展开"
                      @update:model-value="handleEventExpand"
                  />
                </q-item>
                <q-item clickable>
                  <q-item-section>查看</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-actions class="q-pt-none">
      <div style="width: 100%">
        <q-expansion-item icon="explore" v-model="eventExpand">
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar icon="explore" color="black" text-color="white"/>
            </q-item-section>

            <q-item-section>
              进度:30%
              <div class="row items-center">
                <q-badge class="q-mr-sm" color="blue" :label="'原石：'+event.event.primogems"/>
                <q-badge class="q-mr-sm" color="orange" :label="event.event.award"/>
              </div>
              <q-linear-progress stripe rounded size="5px" :value="0.3" color="warning" class="q-mt-sm"/>
            </q-item-section>
          </template>
          <event-detail v-for="detail in event.event.eventDetail" :detail="detail"/>
        </q-expansion-item>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>

import EventDetail from "components/eventDetail.vue";
import {ref} from "vue";
import {getEventLeftTime} from "../ts/version";
import {getConfig, updateConfig} from "src/ts/config";

const event: any = defineProps(['event']);
const eventExpand: any = ref(false)
loadConfig()


function loadConfig() {
  eventExpand.value = getConfig("event", "autoExpandEventCard")
  console.log(eventExpand.value)
}

function handleEventExpand() {
  updateConfig("event", "autoExpandEventCard", eventExpand.value)
}
</script>
<style scoped>

</style>

