import { useState } from "react";
import "./Guestbook.css";

function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || [],
  );

  function submitComment(e) {
    e.preventDefault();

    const newComment = {
      name,
      message,
    };

    const update = [...comments, newComment];

    setComments(update);

    localStorage.setItem("comments", JSON.stringify(update));

    setName("");
    setMessage("");
  }

  return (
    <section className="guestbook">
      <h2>Ucapan & Doa</h2>

      <form onSubmit={submitComment}>
        <input
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Tuliskan ucapan"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button>Kirim Ucapan</button>
      </form>

      <div className="guestbook__list">
        {comments.map((item, index) => (
          <div className="comment" key={index}>
            <h3>{item.name}</h3>

            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Guestbook;
