import { createPromiseModal } from "@/PromiseModal";

import WrongAnswerModal from "./WrongAnswerModal.vue";

export const openWrongAnswerModal = createPromiseModal<{}, boolean>(
  WrongAnswerModal
);
