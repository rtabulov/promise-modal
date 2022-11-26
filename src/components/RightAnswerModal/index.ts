import { createPromiseModal } from "@/PromiseModal";

import RightAnswerModal from "./RightAnswerModal.vue";

export const openRightAnswerModal = createPromiseModal<{}, boolean>(
  RightAnswerModal
);
