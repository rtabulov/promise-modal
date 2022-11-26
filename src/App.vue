<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { PromiseModalsWrapper } from "./PromiseModal";

import { openAskModal } from "./components/AskModal";
import { openRightAnswerModal } from "./components/RightAnswerModal";
import { openWrongAnswerModal } from "./components/WrongAnswerModal";

const ask = async () => {
  const rightAnswer = await openAskModal({
    text: "Can I land this job?",
    confirmButtonText: "Sure",
    declineButtonText: "Nope",
  });

  if (rightAnswer) {
    openRightAnswerModal({});
  } else {
    const wantsToReconsider = await openWrongAnswerModal({});
    if (wantsToReconsider) {
      ask();
    }
  }
};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
      @click="ask"
    />

    <div class="wrapper">
      <HelloWorld msg="← click this" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <PromiseModalsWrapper />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
