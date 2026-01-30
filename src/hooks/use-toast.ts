import * as React from "react";

export type ToastActionElement = React.ReactNode;

export type ToastProps = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type State = { toasts: ToastProps[] };

let memoryState: State = { toasts: [] };
const listeners: Array<(state: State) => void> = [];

function emit() {
  listeners.forEach((l) => l(memoryState));
}

export function toast(props: Omit<ToastProps, "id">) {
  const id = Math.random().toString(36).slice(2);
  memoryState = {
    toasts: [
      {
        ...props,
        id,
        open: true,
      },
    ],
  };
  emit();
  return { id };
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const i = listeners.indexOf(setState);
      if (i > -1) listeners.splice(i, 1);
    };
  }, []);

  return { toasts: state.toasts, toast };
}
