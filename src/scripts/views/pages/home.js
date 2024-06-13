const HomePage = {
  async render() {
    return `
    <div class="maincontent">
      <article id="mission">
        <h2>OUR MISSION</h2>
          <p> Indonesia memiliki keberagaman budaya yang luar biasa, dari seni tradisional hingga kepercayaan adat. 
          Namun, semakin banyak yang kehilangan koneksi dengan warisan budaya ini karena kurangnya sumber daya pendidikan 
          yang relevan dan menarik. Oleh karena itu, kami ingin mengembangkan sebuah solusi yang memanfaatkan teknologi 
          untuk memperkenalkan budaya Indonesia secara menyeluruh dan menarik bagi semua kalangan.
          Sebagai tim yang peduli terhadap masa depan budaya Indonesia, kami percaya bahwa solusi inovatif ini akan 
          membantu membangkitkan kembali kecintaan dan pemahaman terhadap budaya bangsa, serta meningkatkan apresiasi 
          terhadap kekayaan budaya yang kita miliki. Dengan Perkembangan teknologi informasi dan komunikasi menawarkan 
          peluang baru untuk edukasi budaya. Website ini dapat menjadi media edukasi budaya yang efektif dan menarik.
          </p>
      </article>
      
    
    <article id="tim">
     <div class="team-section">
        <h2>Perkenalkan Tim Capstone EduBuind</h2>
        <div class="team-container">
            <div class="team-member">
                <img src="path_to_steven_image.jpg" alt="Muhammad Dzikri Mufarrij">
                <h3>Muhammad Dzikri Mufarrij</h3>
                <p class="role">Back-End Developer</p>
                <p>Membuat Integrasi Front-End ke Back-End.</p>
            </div>
            <div class="team-member">
                <img src="../../../public/images/about-us/Alvin_Prasetio.jpg" alt="Alvin Prasetio">
                <h3>Alvin Prasetio</h3>
                <p class="role">Front-End Developer</p>
                <p>Membangun halaman yang menarik dan interaktif.</p>
            </div>
            <div class="team-member">
                <img src="path_to_athaya_image.jpg" alt="Dicky Andrean">
                <h3>Dicky Andrean</h3>
                <p class="role">Front-End Developer</p>
                <p>Membangun halaman yang menarik dan interaktif.</p>
            </div>
        </div>
    </div>
    </article>
    </div>
      `;
  },

  async afterRender() {
    // Implementasi setelah render di sini
  },
};

export default HomePage;
