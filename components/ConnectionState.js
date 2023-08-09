import { useEffect, useState } from "react";
import ModalNotification from "./ModalNotification";

export default function ConnectionState({ modalPosition }) {
  const [networkState, setNetworkState] = useState({
    status: "ONLINE",
    color: "var(--logo-star)",
    text: "Connection recovered",
    show: false,
    position: modalPosition,
  });

  useEffect(() => {
    const w = window;

    const hideState = {
      status: "CONNECTION STABLE",
      color: "var(--logo-star)",
      text: "Connection STABLE",
      show: false,
      position: modalPosition,
    };

    w.addEventListener("online", (e) => {
      setNetworkState(hideState);

      const online = {
        status: "ONLINE",
        color: "var(--logo-star)",
        text: "Connection recovered",
        show: true,
        position: modalPosition,
      };

      setNetworkState(online);

      setTimeout(() => {
        setNetworkState(hideState);
      }, 3000);
    });

    w.addEventListener("offline", (e) => {
      setNetworkState(hideState);

      const offline = {
        status: "OFFLINE",
        color: "var(--main-carmine)",
        text: "Connection Lost",
        show: true,
        position: modalPosition,
      };

      setNetworkState(offline);

      setTimeout(() => {
        setNetworkState(hideState);
      }, 3000);
    });
  });

  return <ModalNotification notification={networkState} />;
}
