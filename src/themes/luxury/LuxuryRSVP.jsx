import { useState } from "react";

import "./LuxuryRSVP.css";

import invitationData from "../../data/invitation";

function LuxuryRSVP() {
  const [name, setName] = useState("");

  const [attendance, setAttendance] = useState("Hadir");

  const [message, setMessage] = useState("");

  const sendWhatsapp = () => {
    const text = `

Halo ${invitationData.couple.groom} & ${invitationData.couple.bride},


Saya ${name}

ingin mengkonfirmasi kehadiran.


Status:
${attendance}


Ucapan:
${message}


Terima kasih.

`;

    const url = `https://wa.me/${invitationData.whatsapp.number}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="luxury-rsvp" data-aos="fade-up">
      <div className="luxury-rsvp__header">
        <span>RSVP</span>

        <h2>Confirm Attendance</h2>

        <p>Mohon konfirmasi kehadiran Anda.</p>
      </div>

      <div className="luxury-rsvp__card" data-aos="zoom-in">
        <input
          type="text"
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        >
          <option>Hadir</option>

          <option>Tidak Hadir</option>
        </select>

        <textarea
          placeholder="Ucapan untuk pasangan"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button onClick={sendWhatsapp}>Kirim Konfirmasi</button>
      </div>
    </section>
  );
}

export default LuxuryRSVP;
