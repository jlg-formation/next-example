import { ReactNode, useState } from "react";
import LoadingCircle from "./LoadingCircle";

type Props = {
  action: () => Promise<void>;
  children?: ReactNode;
  icon: ReactNode;
};

export default function AsyncButton({ children, action, icon }: Props) {
  const [isPending, setIsPending] = useState(false);
  const handleAction = async () => {
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
    <button className="btn" onClick={handleAction} disabled={isPending}>
      {isPending ? <LoadingCircle /> : icon}
      {children}
    </button>
  );
}
