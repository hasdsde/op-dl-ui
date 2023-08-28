<template>
  <div class="q-pa-md q-gutter-sm">
    <div>
      <version-card/>
    </div>
    <div>
      <event-card v-for="event in events" :event="event"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VersionCard from "components/VersionCard.vue";
import EventCard from "components/eventCard.vue";
import {api} from "boot/axios";
import {ref} from "vue";

loadEventCard()
const events = ref([])

function loadEventCard() {
  api.get("/current-event-with-tag-detail").then((res: any) => {
    events.value = res.data.Data
  })
}
</script>

<style scoped>

</style>

