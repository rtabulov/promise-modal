<script setup lang="ts">
import BasicPromiseModal from "@/PromiseModal/BasePromiseModal/BasicPromiseModal.vue";
</script>

<template>
  <BasicPromiseModal>
    <header>
      That is the wrong answer! 🥲🥲 <br />
      DIdn't you like this example?
    </header>

    <template #actions="{ confirm, decline }">
      <button @click="confirm">Let me reconsider</button>
      <a
        role="button"
        target="_blank"
        href="https://t.me/rtabulov"
        style="margin-bottom: var(--spacing)"
        @click="decline"
      >
        Contact me</a
      >
    </template>
  </BasicPromiseModal>
</template>
