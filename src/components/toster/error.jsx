import toast, { Toaster } from "react-hot-toast"; // Importing toast notifications

function Error_toast(message) {
  toast.error(message, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
    duration: 4000,
    id: "clipboard",
  });

}
export default Error_toast;
