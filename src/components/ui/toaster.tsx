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
    <ToastProvider data-oid="5gq8.9m">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="f9rltdw">
            <div className="grid gap-1" data-oid="jn8_lqt">
              {title && <ToastTitle data-oid="-5755wu">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="e90df9u">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="_z3njni" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="oy4xhby" />
    </ToastProvider>
  );
}
