<script setup lang="ts">
import BasicPromiseModal from "@/PromiseModal/BasePromiseModal/BasicPromiseModal.vue";
import type { AskModalParams } from "./types";

const props = defineProps<{ params: AskModalParams }>();
</script>

<template>
  <BasicPromiseModal>
    <header>{{ props.params.text }}</header>

    <template #actions="{ confirm, decline }">
      <button @click="confirm">
        {{ props.params.confirmButtonText }}
      </button>
      <button @click="decline">
        {{ props.params.declineButtonText }}
      </button>
    </template>
  </BasicPromiseModal>
</template>
