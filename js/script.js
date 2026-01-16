let name = prompt("Masukkan nama Anda:");
if (!name) {
  name = "Guest";
}

const helo = document.getElementById("helo");
helo.innerHTML = `Hi ${name}, Welcome To Website`;

const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const menuNavbar = document.querySelectorAll(".navbar .navbar-menu a");

menuNavbar.forEach((link) => {
  link.addEventListener("click", () => {
    menuNavbar.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

const joinBtn = document.getElementById("btn-join");
const modal = document.getElementById("joinModal");
const closeBtn = document.querySelector(".close-btn");

joinBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 90;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar-menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar-menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
});

const form = document.getElementById("Form-Message");
const resultBox = document.getElementById("resultBox");
const notif = document.getElementById("notif");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const pesan = document.getElementById("pesan").value;
  const jkInput = document.querySelector('input[name="jk"]:checked');

  if (!nama || !tanggal || !pesan || !jkInput) {
    alert("⚠️ Semua form wajib diisi!");
    return;
  }

  const jk = jkInput.value;
  const date = new Date();

  const formattedDate = date.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  resultBox.innerHTML = `
  <div class="result-content">
    <p><strong>Nama :</strong> ${nama}</p>
    <p><strong>Tanggal Lahir :</strong> ${tanggal}</p>
    <p><strong>Jenis Kelamin :</strong> ${jk}</p>
    <p><strong>Pesan :</strong>  <span class="message-text">${pesan}</span></p>

    <p class="time">${formattedDate}</p>
  </div>
`;
});
