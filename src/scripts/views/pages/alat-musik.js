const AlatMusik = {
  async render() {
    return `
      <div class="container">
          <div class="title">
            <h1>Alat Musik di Indonesia berdasarkan Provinsi</h1>
          </div>
            <h2>Provinsi Jawa Tengah</h2>
          <div class="card-container-musik">
            <div class="card-content">
              <h3>Gamelan</h3>
              <img src="./images/alat-musik/alat-musik-jawa-tengah.png" alt="Gamelan">
            </div>
          </div>
        <div class="description-content">
            <p>Gamelan adalah musik ansambel tradisional Jawa dan Bali di Indonesia yang memiliki tangga nada pentatonis dalam sistem tangga nada slendro dan pelog. Terdiri dari instrumen musik perkusi yang digunakan pada seni musik karawitan.</p>
        </div>
      </div>
       `;
  },

  async afterRender() {
    // Implementasi setelah render di sini
  },
};

export default AlatMusik;
