import { add, wrapperExists } from "./PromiseModalsWrapper/store";
import type { Component } from "./types";

export function createPromiseModal<P, R>(
  component: Component,
  unmountDelay?: number
): (params: P) => Promise<R> {
  return function modalFunction(params: P): Promise<R> {
    if (!wrapperExists.value) {
      throw new Error("PromiseModalsWrapper instance not found");
    }

    return add<P, R>(component, params, unmountDelay);
  };
}
