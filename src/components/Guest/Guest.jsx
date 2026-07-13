import "./Guest.css";
import { getGuestName } from "../../utils/guest.js";

function Guest() {
  const guest = getGuestName();

  return (
    <div className="guest-card">
      <p>Kepada Yth.</p>

      <h3>{guest}</h3>
    </div>
  );
}

export default Guest;
