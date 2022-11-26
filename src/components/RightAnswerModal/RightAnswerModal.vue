<script setup lang="ts">
import BasicPromiseModal from "@/PromiseModal/BasePromiseModal/BasicPromiseModal.vue";
</script>

<template>
  <BasicPromiseModal>
    <header>That is the right answer! 🥳🥳</header>

    <template #actions="{ confirm }">
      <a
        role="button"
        target="_blank"
        href="https://t.me/rtabulov"
        @click="confirm"
        style="margin-bottom: var(--spacing)"
      >
        Contact me</a
      >
      <button @click="confirm">Close</button>
    </template>
  </BasicPromiseModal>
</template>
