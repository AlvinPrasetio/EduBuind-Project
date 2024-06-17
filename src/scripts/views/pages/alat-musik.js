import alatMusikData from '../../../DATA/musik.json';

const alatMusik = {
  async render() {
    const alatMusikList = alatMusikData.musik; // Ambil semua data tarian dari array

    return `
      <div class="container">
        <div class="title">
            <h1>Tarian di Indonesia berdasarkan Provinsi</h1>
        </div>
        ${alatMusikList.map((musik) => `
          <h2>Provinsi ${musik.province}</h2>
          <div class="card-container">
              <div class="card-content">
                <h3>${musik.name}</h3>
                  <img src="${musik.pictureId}" alt="${musik.name}">
              </div>
          </div>
          <div class="description-content">
              <p>${musik.description}</p>
          </div>
        `).join('')}
      </div>
    `;
  },

  async afterRender() {
    // Implementasi setelah render di sini
  },
};

export default alatMusik;
