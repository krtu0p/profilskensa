<template>
  <div class="home">
    <h1>SMK NEGERI 1 DENPASAR</h1>
  </div>

  <div class="struktur">
    <div class="struktur-title">
      <h1>STRUKTUR ORGANISASI SMK NEGERI 1 DENPASAR</h1>
    </div>
    <img
        src="@/images/background/Organizational%20Chart%20Whiteboard.png"
        alt="Struktur Organisasi"
    />
  </div>

  <div class="keahlian">
    <div class="content-wrapper">
      <h1>KONSENTRASI KEAHLIAN SMK NEGERI 1 DENPASAR</h1>
      <div class="card-container">
        <!-- Card 1: Teknik Informatika -->
        <div class="card">
          <div class="icon-circle">
            <img src="@/images/jurusan/RPL.png" alt="Informatikan Icon" />
          </div>
          <h2>TEKNIK INFORMATIKA</h2>
          <p>KOMPETENSI MELIPUTI:</p>
          <ul>
            <li>Rekayasa Perangkat Lunak</li>
            <li>Teknik Komputer Jaringan</li>
            <li>Desain Komunikasi Visual</li>
            <li>Teknik Audio Visual</li>
            <li>Produksi Film</li>
          </ul>
          <button class="lebih-lengkap">LEBIH LENGKAP</button>
        </div>

        <!-- Card 2: Teknik Bangunan -->
        <div class="card">
          <div class="icon-circle">
            <img src="@/images/jurusan/DPIB.png" alt="Bangunan Icon" />
          </div>
          <h2>TEKNIK BANGUNAN</h2>
          <p>KOMPETENSI MELIPUTI:</p>
          <ul>
            <li>Desain Permodelan Informasi Bangunan</li>
            <li>Teknik Konstruksi Perumahan</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
          <button class="lebih-lengkap">LEBIH LENGKAP</button>
        </div>

        <!-- Card 3: Teknik Mesin -->
        <div class="card">
          <div class="icon-circle">
            <img src="@/images/jurusan/TPM.png" alt="Mesin Icon" />
          </div>
          <h2>TEKNIK MESIN</h2>
          <p>KOMPETENSI MELIPUTI:</p>
          <ul>
            <li>Teknik Permesinan</li>
            <li>Teknik Pengelasan</li>
            <li>Teknik Kendaraan Ringan</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
          <button class="lebih-lengkap">LEBIH LENGKAP</button>
        </div>

        <!-- Card 4: Teknik Elektronika -->
        <div class="card">
          <div class="icon-circle">
            <img src="@/images/jurusan/TITL.png" alt="Elektronika Icon" />
          </div>
          <h2>TEKNIK ELEKTRONIKA</h2>
          <p>KOMPETENSI MELIPUTI:</p>
          <ul>
            <li>Teknik Instalasi Tenaga Listrik</li>
            <li>Teknik Pendingin Tata Udara</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
          <button class="lebih-lengkap">LEBIH LENGKAP</button>
        </div>
      </div>
    </div>
  </div>

  <!-- News section -->
  <div class="news">
    <h1>Berita Terbaru</h1>
    <div class="card-container">
      <!-- Card 1: News 1 -->
      <div class="card">
        <h2>News Title 1</h2>
        <p>News description 1</p>
      </div>

      <!-- Card 2: News 2 -->
      <div class="card">
        <h2>News Title 2</h2>
        <p>News description 2</p>
      </div>

      <!-- Card 3: News 3 -->
      <div class="card">
        <h2>News Title 3</h2>
        <p>News description 3</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* Reset margin and padding */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: Arial, sans-serif;
  overflow-y: auto;
}

/* HOME SECTION */
.home {
  background-image: url("@/images/background/homebackground.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.home h1 {
  font-size: 4rem;
  font-family: "Quattrocento", serif;
  font-weight: 800;
  margin: 0;
}

/* STRUKTUR SECTION */
.struktur {
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0;
}

.struktur-title {
  background: #456cb5;
  padding: 20px 0;
  width: 60%;
}

.struktur-title h1 {
  font-size: 2rem;
  color: white;
  margin: 0;
}

.struktur img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  width: 80%;
  object-fit: cover;
}

/* KEAHLIAN SECTION */
.keahlian {
  padding: 20px 0;
  background: #fff;
  text-align: center;
}

/* Content wrapper that defines a common width */
.content-wrapper {
  width: 60%;
  margin: 0 auto;
}

.keahlian h1 {
  background: #456cb5;
  font-size: 2rem;
  color: #fff;
  padding: 15px 0;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
}

.card-container {
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  overflow-x: auto;
}

/* Card styles */
.card {
  flex: 1 1 300px;
  max-width: 300px;
  min-height: 500px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  margin: 10px;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .card {
    flex: 1 1 100%;
    max-width: 100%;
    min-height: auto;
  }

  .home h1 {
    font-size: 2.5rem;
  }

  .struktur-title h1 {
    font-size: 1.5rem;
  }

  .keahlian h1 {
    font-size: 1.5rem;
  }

  .card h2 {
    font-size: 1.2rem;
  }

  .card p {
    font-size: 0.9rem;
  }

  .card ul li {
    font-size: 0.85rem;
  }

  .lebih-lengkap {
    font-size: 0.8rem;
  }
}

/* Media query for very small screens */
@media (max-width: 480px) {
  .card {
    padding: 15px;
  }

  .home h1 {
    font-size: 2rem;
  }

  .struktur-title h1 {
    font-size: 1.2rem;
  }

  .keahlian h1 {
    font-size: 1.2rem;
  }

  .card h2 {
    font-size: 1rem;
  }

  .card p {
    font-size: 0.8rem;
  }

  .card ul li {
    font-size: 0.75rem;
  }

  .lebih-lengkap {
    font-size: 0.7rem;
    padding: 8px 12px;
  }
}

/* Background colors for each card */
.card:nth-child(1) {
  background-color: #71A6B7;
}
.card:nth-child(2) {
  background-color: #7293B7;
}
.card:nth-child(3) {
  background-color: #4E6F93;
}
.card:nth-child(4) {
  background-color: #325071;
}

/* Icon circle container */
.icon-circle {
  width: 120px;
  height: 120px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 auto 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Icon image styling */
.icon-circle img {
  max-width: 90px;
  max-height: 90px;
}

/* Card headings */
.card h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
}

/* Card paragraph styling */
.card p {
  margin: 0 0 10px 0;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
}

/* Card list styling */
.card ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.card ul li {
  font-size: 0.95rem;
  margin: 8px 0;
  text-align: center;
}

/* "LEBIH LENGKAP" button style */
.lebih-lengkap {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 10px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  align-self: center;
}

.news {
  background-color: #f7f7f7;
  padding: 20px;
  margin-top: 20px;
}

.news h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
}

.news .card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.news .card {
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  width: calc(33.33% - 20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.news .card h2 {
  font-size: 18px;
  margin-bottom: 10px;
  color: black;
}

.news .card p {
  font-size: 14px;
  color: #666;
}
</style>
