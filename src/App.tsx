import MainLayout from './layouts/MainLayout'
import './App.css'

function App() {
  return (
    <MainLayout>
      <div className="hero">
        <h1 className="hero-title">Modern Web Geliştirmeye Hoş Geldin</h1>
        <p className="hero-subtitle">
          Bu proje, hem mobil hem web uyumlu olacak şekilde, sıfırdan modern teknolojilerle,
          en iyi tasarım pratikleri eşliğinde adım adım inşa ediliyor.
        </p>
        <button className="cta-button" onClick={() => alert('Kodlama devam ediyor!')}>
          Şimdi Başla
        </button>
      </div>

      {/* Features / Modules */}
      <div className="features-grid">
        <div className="feature-card">
          <h3 className="feature-title">⚡ Hızlı Başlangıç</h3>
          <p className="feature-desc">
            Vite, React ve TypeScript tabanlı güçlü bir altyapı ile ışık hızında geliştirme deneyimi.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">📱 Mobil Uyumlu</h3>
          <p className="feature-desc">
            Tasarımımız tüm ekran boyutlarına uygun şekilde Responsive (Duyarlı) olarak kurgulandı.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">🎨 Modern Tasarım</h3>
          <p className="feature-desc">
            CSS değişkenleriyle karanlık tema (dark mode) odaklı, estetik ve profesyonel bir arayüz.
          </p>
        </div>
      </div>
    </MainLayout>
  )
}

export default App
