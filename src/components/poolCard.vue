<template>
  <q-card>
    <q-card-section class="q-pt-xs q-pb-none">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar icon="token" :color="pool.img" size="lg" text-color="white"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <span class=" q-pr-sm" :class="'text-'+pool.img">{{ pool.name }}</span>
            <div v-for="tag in pool.poolTag" class="float-left">
              <q-badge class="float-left" :label="tag.tag.name" :color="tag.tag.icon"/>
            </div>
          </q-item-label>
          <q-item-label caption>
            {{ pool.other }}
          </q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption class="text-right">
            {{ getEventLeftTime(pool.startTime, pool.endTime) }}
          </q-item-label>
          <q-linear-progress :value="getVersionLeftLine(pool.startTime,pool.endTime)" color="primary"
                             size="7px"
                             class="q-mt-md"/>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {getEventLeftTime, getVersionLeftLine} from "src/ts/version";

const props: any = defineProps(['pool'])
const pool: any = ref(props.pool)
</script>

<style scoped>

</style>

