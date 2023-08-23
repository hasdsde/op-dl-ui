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
                    <q-avatar rounded size="32px" font-size="20px">
                        <img src="src/assets/icon/map.webp"/>
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label>
                        <div v-for="tag in versionEvent.versionEventTag">
                            <q-badge class="float-left q-mr-xs" :label="tag.tag.name"/>
                        </div>
                        <span class=" q-pr-md">{{ versionEvent.title }}</span>
                    </q-item-label>
                    <!--                    <q-item-label caption>-->
                    <!--                        {{ versionEvent.content }}-->
                    <!--                    </q-item-label>-->
                </q-item-section>
                <!--                <q-item-section side top>-->
                <!--                    <q-item-label caption style="width: 60px" class="text-right">-->
                <!--                        {{ getVersionLeftTime(versionEvent.endTime) }}-->
                <!--                    </q-item-label>-->
                <!--                    <q-linear-progress :value="getVersionLeftLine(versionEvent.startTime, versionEvent.endTime)"-->
                <!--                                       size="10px" class="q-mt-md"/>-->
                <!--                </q-item-section>-->
            </q-item>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>

import {DialogConfirm} from "components/commonResults";
import {ref} from "vue";

const prop = defineProps(['versionEvent'])
const versionEvent = ref(prop.versionEvent)
console.log(versionEvent)

function testShow() {
    DialogConfirm("确定要删除吗?").onOk(() => {
        console.log("点击了确定")
    })
}
</script>

<style scoped>

</style>

