import { modalsData, rejectModal } from "./PromiseModalsWrapper/store";

export function closeAllModals(reason: unknown, unmountDelay?: number) {
  Object.getOwnPropertySymbols(modalsData.value).forEach((id) =>
    rejectModal(id, reason, unmountDelay)
  );
}
