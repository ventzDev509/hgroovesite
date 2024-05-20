import toast, { Toaster } from "react-hot-toast"; // Importing toast notifications

function Success_toast(message) {

  toast.success(message, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
    duration: 4000,
    id: "clipboard",
  });
 
}
export default Success_toast;
