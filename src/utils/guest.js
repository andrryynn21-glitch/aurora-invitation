export function getGuestName() {
  const params = new URLSearchParams(window.location.search);

  return params.get("to") || "Nama Tamu";
}
