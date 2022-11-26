<script lang="ts" setup>
import { onBeforeUnmount } from "vue";
import { modalsData, rejectModal, resolveModal, wrapperExists } from "./store";

if (wrapperExists.value) {
  console.error("PromiseModalsWrapper instance already exists");
}

wrapperExists.value = true;

onBeforeUnmount(() => {
  wrapperExists.value = false;
  modalsData.value = {};
});

const props = withDefaults(defineProps<{ unmountDelay?: number }>(), {
  unmountDelay: 0,
});
</script>

<template>
  <div>
    <component
      v-for="id in Object.getOwnPropertySymbols(modalsData)"
      :is="modalsData[id].component"
      :key="id"
      :params="modalsData[id].params"
      :onResolve="
        (result: unknown, unmountDelay?: number) =>
          resolveModal(
            id,
            result,
            unmountDelay || modalsData[id].unmountDelay || props.unmountDelay
          )
      "
      :onReject="
        (error: unknown, unmountDelay?: number) =>
          rejectModal(
            id,
            error,
            unmountDelay || modalsData[id].unmountDelay || props.unmountDelay
          )
      "
    />
  </div>
</template>
