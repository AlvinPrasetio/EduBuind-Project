import adatData from '../../../DATA/adat.json';

const Adat = {
  async render() {
    const adatList = adatData.adat;
    return `
    <div class="container">
      <div class="title">
        <h1>Adat Istiadat dan Tradisi di Indonesia berdasarkan Provinsi</h1>
      </div>
      ${adatList.map((adat) => `
        <h2>Provinsi ${adat.province}</h2>
        <div class="card-container">
            <div class="card-content">
              <h3>${adat.name}</h3>
                <img src="${adat.pictureId}" alt="${adat.name}">
            </div>
        </div>
        <div class="description-content">
            <p>${adat.description}</p>
        </div>
      `).join('')}
    </div>
        `;
  },

  async afterRender() {
    // Implementasi setelah render di sini
  },
};

export default Adat;
