export default function ModalNotification({notification}) {

  return (
    <div style={{ display: notification.show ? "inline-block": "none", backgroundColor: notification.color, position: notification.position, top:"1rem", right:"1rem",  padding: "1.25rem", maxHeight: "5rem", zIndex: "100", minWidth: "22.75rem"}} className="modal-notification">
        <div style={{display: "flex", alignItems: "center", gap: "1.875rem", justifyContent:"space-between"}}>
            <div>
                <p style={{color: "var(--logo-dark)", fontSize:"1rem", fontWeight:"500", padding: "0px", margin: "0px"}}>{notification.status}</p>
                <span style={{ color: "var(--logo-dark)", fontSize:"1rem", fontWeight:"500"}}>{notification.text}</span>
            </div>
        
            <img src="./notification.svg" alt="notificacion" style={{ height: "2.5rem", width:"2.5rem"}}/>   
        </div>
    </div>
  )
}
