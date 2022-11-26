import { markRaw, type Ref, ref } from "vue";

import type { Component } from "../types";

export const wrapperExists = ref(false);

interface ModalData<P, R> {
  component: Component;
  params: P;
  promiseResolve: (value: R) => void;
  promiseReject: (error: unknown) => void;
  unmountDelay?: number;
}

export const modalsData: Ref<Record<symbol, ModalData<any, any>>> = ref({});

export function add<P, R>(
  component: Component,
  params: P,
  unmountDelay?: number
): Promise<R> {
  return new Promise<R>((resolve, reject) => {
    modalsData.value[Symbol()] = {
      component: markRaw(component),
      params,
      promiseResolve: resolve,
      promiseReject: reject,
      unmountDelay,
    };
  });
}

export function resolveModal(
  id: symbol,
  result: unknown,
  unmountDelay?: number
) {
  modalsData.value[id].promiseResolve(result);
  unmountModal(id, unmountDelay);
}

export function rejectModal(id: symbol, error: unknown, unmountDelay?: number) {
  modalsData.value[id].promiseReject(error);
  unmountModal(id, unmountDelay);
}

function unmountModal(id: symbol, delay?: number) {
  const unmount = () => delete modalsData.value[id];
  if (delay) {
    setTimeout(unmount, delay);
  } else {
    unmount();
  }
}
