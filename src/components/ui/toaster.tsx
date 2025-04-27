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
    <ToastProvider data-oid="3mnuw9_">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="3vu0j9h">
            <div className="grid gap-1" data-oid="3_5466z">
              {title && <ToastTitle data-oid="ln09p8o">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="f1rpv:o">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="i9_9lfs" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="4rgrzhr" />
    </ToastProvider>
  );
}
