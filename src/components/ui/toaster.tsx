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
    <ToastProvider data-oid="2m:2ie8">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="5:zedtf">
            <div className="grid gap-1" data-oid="4ccgdrw">
              {title && <ToastTitle data-oid="qmsd13t">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="hrlh-mz">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="mq27fme" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="pn5pajr" />
    </ToastProvider>
  );
}
