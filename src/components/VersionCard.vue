<template>
    <q-card class="my-card op-font" push>
        <q-card-section class="q-pb-sm">
            <div class="row items-center no-wrap">
                <div class="col">
                    <div class="text-h5 text-primary">
                        仿若无因飘落的轻雨
                        <q-badge outline align="top" color="blue">
                            V4.0
                        </q-badge>
                    </div>
                    <div class="text-subtitle3 text-grey">
                        08/16-09/27 (40天3小时)
                    </div>
                    <div></div>
                </div>

                <div class="col-auto">
                    <q-btn color="grey-7" round flat icon="more_vert">
                        <q-menu cover auto-close>
                            <q-list>
                                <q-item clickable>
                                    <q-toggle
                                            v-model="autoExpanded"
                                            checked-icon="check"
                                            color="green"
                                            unchecked-icon="clear"
                                            label="自动展开"
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
                <q-expansion-item icon="explore" v-model="versionExpanded">
                    <template v-slot:header>
                        <q-item-section avatar>
                            <q-avatar icon="explore" color="black" text-color="white"/>
                        </q-item-section>

                        <q-item-section>
                            进度:20%
                            <div class="row items-center">
                                <q-badge class="q-mr-sm" color="blue" label="新地图"/>
                                <q-badge class="q-mr-sm" color="orange" label="新角色"/>
                            </div>
                            <q-linear-progress stripe rounded size="5px" :value="0.3" color="warning" class="q-mt-sm"/>
                        </q-item-section>
                    </template>
                    <PoolCard/>
                    <PoolCard/>
                    <event-card/>
                </q-expansion-item>
            </div>
        </q-card-actions>
    </q-card>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import PoolCard from "components/poolCard.vue";
import EventCard from "components/versionEventCard.vue";

const versionExpanded = ref(false)
const autoExpanded = ref(false)

</script>
<style scoped>

</style>

