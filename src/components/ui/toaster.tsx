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
    <ToastProvider data-oid="ng2127-">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="qxgx-7a">
            <div className="grid gap-1" data-oid="lxrgm9j">
              {title && <ToastTitle data-oid=":49v51y">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="k2ax_qm">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="tgmrzja" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="jwylwp_" />
    </ToastProvider>
  );
}
