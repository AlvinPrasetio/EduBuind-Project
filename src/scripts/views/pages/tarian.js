import tarianData from '../../../DATA/tarian.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian; // Ambil semua data tarian dari array

    return `
      <div class="container">
        <div class="title">
            <h1>Tarian di Indonesia berdasarkan Provinsi</h1>
        </div>
        ${tarianList.map((tarian) => `
          <h2>Provinsi ${tarian.province}</h2>
          <div class="card-container">
              <div class="card-content">
                <h3>${tarian.name}</h3>
                  <img src="${tarian.pictureId}" alt="${tarian.name}">
              </div>
          </div>
          <div class="description-content">
              <p>${tarian.description}</p>
          </div>
        `).join('')}
      </div>
    `;
  },

  async afterRender() {
    // Implementasi setelah render di sini
  },
};

export default TarianPage;
