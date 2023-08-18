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
                        <span class="text-red q-pr-sm">角色1(火)</span>
                        <span class="text-primary  q-pr-sm">角色2(水)</span>
                        <!-- <q-badge class="float-left ">新角色</q-badge>-->
                    </q-item-label>
                    <q-item-label caption>
                        一些，四星，角色
                    </q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-item-label caption style="width: 50px" class="text-right">
                        14天3时
                    </q-item-label>
                    <q-linear-progress :value="0.4" size="10px" class="q-mt-md"/>
                </q-item-section>
            </q-item>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>

