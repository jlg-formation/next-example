import { ReactNode, useState, MouseEvent } from "react";
import LoadingCircle from "./LoadingCircle";

type Props = {
  action: () => Promise<void>;
  children?: ReactNode;
  icon: ReactNode;
  title?: string;
  className?: string;
};

export default function AsyncButton({
  children,
  action,
  icon,
  title,
  className,
}: Props) {
  const [isPending, setIsPending] = useState(false);
  const handleAction = async (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();

    try {
      setIsPending(true);
      await action();
    } catch (err) {
      console.log("err: ", err);
      throw err;
    } finally {
      setIsPending(false);
    }
  };

  return (
    <button
      title={title}
      className={className || "btn"}
      onClick={handleAction}
      disabled={isPending}
    >
      {isPending ? <LoadingCircle /> : icon}
      {children}
    </button>
  );
}
