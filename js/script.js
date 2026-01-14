let name = prompt('Masukkan nama Anda:');
if (!name) {
  name = "Guest";
}

const helo = document.getElementById("helo");
helo.innerHTML = `Hi ${name}, Welcome To Website`;

const form = document.getElementById("Form-Message");
const resultBox = document.getElementById("resultBox");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const pesan = document.getElementById("pesan").value;
  const jk = document.querySelector('input[name="jk"]:checked').value;

  const currentTime = new Date().toString().split("GMT")[0];

  resultBox.innerHTML = `
      <strong>Current time :</strong> ${currentTime}<br><br>
      <strong>Nama :</strong> ${nama}<br>
      <strong>Tanggal Lahir :</strong> ${tanggal}<br>
      <strong>Jenis Kelamin :</strong> ${jk}<br>
      <strong>Pesan :</strong> ${pesan}
    `;
});
