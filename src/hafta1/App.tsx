import MainLayout from './layouts/MainLayout'
import './App.css'

function App() {
  return (
    <MainLayout>
      <div className="hero">
        <h1 className="hero-title">Web Tasarımı ve Programlama</h1>
        <h2 className="hero-subtitle">LAB-1 Hello Project</h2>

        <div className="personal-info">
          <p><strong>Ad Soyad:</strong> Kevser Aslan</p>
          <p><strong>Öğrenci No:</strong> 235541020</p>
          <p><strong>Kısa Tanıtım:</strong> Merhaba! Bu proje ile Vite, React ve TypeScript dünyasına ilk adımımı atıyorum.</p>
        </div>

        <button className="cta-button" onClick={() => alert('Kodlama devam ediyor!')}>
          Projeyi İncele
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
