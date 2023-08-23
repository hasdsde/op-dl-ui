<template>
    <q-card>
        <q-card-section class="q-pt-xs q-pb-none">
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-avatar size="32px" font-size="20px">
                        <img src="src/assets/icon/wish.png"/>
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label>
                        <span class=" q-pr-sm" :class="'text-'+pool.img">{{ pool.name }}</span>
                        <!-- <q-badge class="float-left ">新角色</q-badge>-->
                    </q-item-label>
                    <q-item-label caption>
                        {{ pool.other }}
                    </q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-item-label caption style="width: 50px" class="text-right">
                        {{ getVersionLeftTime(pool.endTime) }}
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
import {getVersionLeftLine, getVersionLeftTime} from "components/version";

const props: any = defineProps(['pool'])
const pool: any = ref(props.pool)
</script>

<style scoped>

</style>

