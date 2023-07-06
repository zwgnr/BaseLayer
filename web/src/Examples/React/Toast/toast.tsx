import { ToastPotionProps, toastPotion } from "@/potions/toastPotion";
import {
  Portal,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastPlacements,
  ToastProvider,
  Toast as ToastRoot,
  ToastTitle,
} from "@ark-ui/react";
import { X } from "lucide-react";
import type { ReactNode } from "react";

interface ToastProps extends ToastPotionProps {
  children: ReactNode;
}

export const Toast = ({ children, intent }: ToastProps) => {
  const { root, group, title, description } = toastPotion({
    intent,
  });
  return (
    <ToastProvider>
      <Portal>
        <ToastPlacements>
          {(placements) =>
            placements.map((placement) => (
              <ToastGroup
                key={placement}
                placement={placement}
                className={group()}
              >
                {(toasts) =>
                  toasts.map((toast) => (
                    <ToastRoot
                      className={root({ className: "w-72" })}
                      key={toast.id}
                      toast={toast}
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <ToastTitle className={title()} />
                          <ToastDescription className={description()} />
                        </div>
                        <div className="absolute right-0 top-0 p-4">
                          <ToastCloseTrigger asChild>
                            <button>
                              <X />
                            </button>
                          </ToastCloseTrigger>
                        </div>
                      </div>
                    </ToastRoot>
                  ))
                }
              </ToastGroup>
            ))
          }
        </ToastPlacements>
      </Portal>
      {children}
    </ToastProvider>
  );
};
