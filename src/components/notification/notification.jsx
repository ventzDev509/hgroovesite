import addNotification from "react-push-notification";
import notif from "../../assets/medias/n.jpg";
function AddNotification() {
  const onclickTo = () => {
    addNotification({
      title: "HGroove",
      subtitle: "This is a subtitle",
      message: "Trouble boy new song ",

      duration: 5000,
      native: true,
      icon: notif,
    });
  };
  return (
    <>
      <div>
        <button onClick={onclickTo}>notification</button>
      </div>
    </>
  );
}
export default AddNotification;
