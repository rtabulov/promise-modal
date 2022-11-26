import { createPromiseModal } from "@/PromiseModal";

import AskModal from "./AskModal.vue";
import type { AskModalParams } from "./types";

export const openAskModal = createPromiseModal<AskModalParams, boolean>(
  AskModal
);
