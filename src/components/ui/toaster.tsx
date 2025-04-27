import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider data-oid="jgfj4k2">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="c9b8zg_">
            <div className="grid gap-1" data-oid="e78qg1b">
              {title && <ToastTitle data-oid="m7ktkek">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="rme3j5m">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="txia4p2" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="9-1o59t" />
    </ToastProvider>
  );
}
