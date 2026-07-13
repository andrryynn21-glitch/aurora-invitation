import { useState } from "react";

import "./LuxuryGift.css";

import invitationData from "../../data/invitation";

function LuxuryGift() {
  const [copied, setCopied] = useState("");

  const copyNumber = (number, type) => {
    navigator.clipboard.writeText(number);

    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <section className="luxury-gift" data-aos="fade-up">
      <div className="luxury-gift__header">
        <span>WEDDING GIFT</span>

        <h2>Send Love</h2>

        <p>Doa dan kehadiran Anda adalah hadiah terindah bagi kami.</p>
      </div>

      <div className="luxury-gift__container">
        <div className="gift-card">
          <div className="gift-icon">✦</div>

          <h3>{invitationData.gift.bank.name}</h3>

          <p className="owner">a.n {invitationData.gift.bank.owner}</p>

          <h4>{invitationData.gift.bank.number}</h4>

          <button
            onClick={() => copyNumber(invitationData.gift.bank.number, "bank")}
          >
            {copied === "bank" ? "Copied ✓" : "Copy Number"}
          </button>
        </div>

        <div className="gift-card" data-aos="zoom-in">
          <div className="gift-icon">✦</div>

          <h3>{invitationData.gift.ewallet.name}</h3>

          <p className="owner">a.n {invitationData.gift.ewallet.owner}</p>

          <h4>{invitationData.gift.ewallet.number}</h4>

          <button
            onClick={() =>
              copyNumber(invitationData.gift.ewallet.number, "ewallet")
            }
          >
            {copied === "ewallet" ? "Copied ✓" : "Copy Number"}
          </button>
        </div>
      </div>

      <div className="qris-card">
        <h3>Scan QRIS</h3>

        <div className="qris-box">QRIS</div>

        <p>Silahkan scan untuk memberikan hadiah terbaik.</p>
      </div>
    </section>
  );
}

export default LuxuryGift;
