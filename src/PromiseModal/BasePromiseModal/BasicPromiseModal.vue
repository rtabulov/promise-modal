<script setup lang="ts">
const emit = defineEmits<{ (e: "resolve", value: boolean): void }>();

const confirm = () => emit("resolve", true);
const decline = () => emit("resolve", false);
</script>

<template>
  <dialog open>
    <article>
      <slot></slot>

      <div class="grid">
        <slot name="actions" :confirm="confirm" :decline="decline">
          <button @click="confirm">Yes</button>
          <button @click="decline">No</button>
        </slot>
      </div>
    </article>
  </dialog>
</template>
