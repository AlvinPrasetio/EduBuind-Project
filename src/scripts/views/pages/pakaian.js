const Pakaian = {
  async render() {
    return `
    <div class="container">
      <div class="title">
        <h1>Pakaian Adat di Indonesia berdasarkan Provinsi</h1>
      </div>
    </div>
        `;
  },

  async afterRender() {
    // Implementasi setelah render di sini
  },
};

export default Pakaian;
