import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastAlert() {
  const notify = () => {
    toast("'삼성전자'에서 내부자 거래가 발생했습니다.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handler = (e) => {
    if (e.isComposing) return;
    if (e.key === "\\") {
      notify();
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handler);

    return () => {
      window.removeEventListener("keyup", handler);
    };
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default ToastAlert;
