import pakaianData from '../../../DATA/pakaian.json';

const Pakaian = {
  async render() {
    const pakaianList = pakaianData.pakaian;
    return `
    <div class="container">
      <div class="title">
        <h1>Pakaian Adat di Indonesia berdasarkan Provinsi</h1>
      </div>
      ${pakaianList.map((pakaian) => `
        <h2>Provinsi ${pakaian.province}</h2>
        <div class="card-container">
            <div class="card-content">
              <h3>${pakaian.name}</h3>
                <img src="${pakaian.pictureId}" alt="${pakaian.name}">
            </div>
        </div>
        <div class="description-content">
            <p>${pakaian.description}</p>
        </div>
      `).join('')}
    </div>
        `;
  },

  async afterRender() {
    // Implementasi setelah render di sini
  },
};

export default Pakaian;
