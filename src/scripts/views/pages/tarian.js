const TarianPage = {
  async render() {
    return `
      <div class="container">
        <div class="title">
            <h1>Tarian di Indonesia berdasarkan Provinsi</h1>
        </div>
        <h2>Provinsi Jawa Tengah</h2>
        <div class="card-container">
            <div class="card-content">
              <h3>Tari Gambyong</h3>
                <img src="./images/tarian/tari-gambyong-jawa-tengah.png" alt="Tari Gambyong">
            </div>
        </div>
        <div class="description-content">
            <p>Tari Gambyong merupakan salah satu bentuk tarian Jawa klasik yang berasal dari wilayah Surakarta dan biasanya dibawakan untuk pertunjukan atau menyambut tamu. Gambyong bukanlah satu tarian saja melainkan terdiri dari bermacam-macam koreografi, yang paling dikenal adalah Tari Gambyong Pareanom dan Tari Gambyong Pangkur.</p>
        </div>
      </div>
           `;
  },

  async afterRender() {
    // Implementasi setelah render di sini
  },
};

export default TarianPage;
