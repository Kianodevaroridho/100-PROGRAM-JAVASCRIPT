let angka = Math.floor(Math.random() * 10) + 1;
function tebak() {
  let tebakan = parseInt(document.getElementById("tebakan").value);
  let pesan = tebakan === angka ? "Batul!" : "Salah, mohon coba lagi.";
  document.getElementById("hasil").textContent = pesan;
}