<template>
    <div class="q-pa-md q-gutter-sm">

        <q-btn-toggle
                v-model="tab"
                spread
                class="my-custom-toggle"
                rounded
                toggle-color="brown"
                color="white"
                text-color="brown"
                :options="tabOption"/>

        <q-card>
            <q-separator/>

            <q-tab-panels v-model="tab" animated swipeable infinite>
                <q-tab-panel name="version">
                    <div class="text-h6 text-center">
                        <q-btn label="刷新订阅" color="brown"/>
                    </div>
                </q-tab-panel>

                <q-tab-panel name="versionEvent">
                    <div class="text-h6 text-center">
                        <q-btn label="刷新订阅" color="brown"/>
                    </div>
                </q-tab-panel>

                <q-tab-panel name="event">
                    <div class="text-h6 text-center">
                        <q-btn label="刷新订阅" color="brown"/>
                    </div>
                </q-tab-panel>
                <q-tab-panel name="private">
                    <div class="text-h6 text-center">暂不可用</div>
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const tab = ref('private')
const tabOption = [
    {"label": "版本", "value": "version"},
    {"label": "版本信息", "value": "versionEvent"},
    {"label": "活动", "value": "event"},
    {"label": "自定义", "value": "private"}
]
</script>

<style scoped>

</style>

