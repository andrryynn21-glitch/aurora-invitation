import { useState } from "react";
import "./Gift.css";

import invitationData from "../../data/invitation";

function Gift() {
  const [copied, setCopied] = useState("");

  const copyNumber = (number) => {
    navigator.clipboard.writeText(number);

    setCopied(number);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <section className="gift">
      <p className="gift__label">DIGITAL GIFT</p>

      <h2>Wedding Gift</h2>

      <p className="gift__desc">
        Doa restu Anda adalah hadiah terindah bagi kami.
      </p>

      <div className="gift__card">
        <h3>{invitationData.gift.bank.name}</h3>

        <p className="gift__number">{invitationData.gift.bank.number}</p>

        <p>a.n {invitationData.gift.bank.owner}</p>

        <button onClick={() => copyNumber(invitationData.gift.bank.number)}>
          {copied === invitationData.gift.bank.number
            ? "Copied ✓"
            : "Copy Rekening"}
        </button>
      </div>

      <div className="gift__card">
        <h3>{invitationData.gift.ewallet.name}</h3>

        <p className="gift__number">{invitationData.gift.ewallet.number}</p>

        <p>a.n {invitationData.gift.ewallet.owner}</p>

        <button onClick={() => copyNumber(invitationData.gift.ewallet.number)}>
          {copied === invitationData.gift.ewallet.number
            ? "Copied ✓"
            : "Copy E-Wallet"}
        </button>
      </div>
    </section>
  );
}

export default Gift;
