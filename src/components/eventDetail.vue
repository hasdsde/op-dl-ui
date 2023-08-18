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
                        <q-badge class="float-left q-mr-xs">原石:40</q-badge>
                        <span class=" q-pr-md">名字</span>
                    </q-item-label>
                    <q-item-label caption>
                        抓小动物
                    </q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-item-label caption style="width: 60px" class="text-right">
                        7天3小时
                    </q-item-label>
                    <q-btn outline color="primary" dense size="sm" label="点击完成"/>
                </q-item-section>
            </q-item>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>
import {DialogConfirm} from "components/commonResults";

function testShow() {
    DialogConfirm("确定要删除吗?").onOk(() => {
        console.log("点击了确定")
    })
}
</script>

<style scoped>

</style>

