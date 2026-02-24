import './App.css';

const App = () => {
    return (
        <>
            {/* Skip link for accessibility */}
            <a href="#hakkimda" className="skip-link">
                Ana içeriğe atla
            </a>

            {/* Header and Navigation */}
            <header className="portfolio-header">
                <h1>Kevser Aslan</h1>
                <nav aria-label="Ana Menü">
                    <ul className="nav-links">
                        <li><a href="#hakkimda">Hakkımda</a></li>
                        <li><a href="#projeler">Projelerim</a></li>
                        <li><a href="#iletisim">İletişim</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className="portfolio-main">
                {/* Hakkımda Bölümü */}
                <section id="hakkimda">
                    <h2>Hakkımda</h2>
                    <div className="about-content">
                        <figure className="about-figure">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
                                alt="Kevser Aslan profil fotoğrafı"
                            />
                            <figcaption>Kevser Aslan - Web Geliştiricisi</figcaption>
                        </figure>

                        <div className="about-text">
                            <p>
                                Merhaba! Ben Kevser Aslan. Bilgisayar Mühendisliği öğrencisiyim ve modern web
                                teknolojileri üzerine çalışmalar yapıyorum. Erişilebilir, kullanıcı dostu ve
                                performanslı web uygulamaları geliştirmek en büyük tutkum.
                            </p>

                            <ul className="tech-list" aria-label="Kullandığım Teknolojiler">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Projelerim Bölümü */}
                <section id="projeler">
                    <h2>Projelerim</h2>
                    <div className="projects-grid">

                        {/* Proje 1 */}
                        <article className="project-card">
                            <img
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=400"
                                alt="E-Ticaret Paneli Ekran Görüntüsü"
                                className="project-img"
                            />
                            <div className="project-info">
                                <h3>Admin Dashboard</h3>
                                <p>Modern ve duyarlı bir yönetim paneli arayüzü. Veri görselleştirme ve tablo yönetimi içerir.</p>
                                <ul className="tech-list" aria-label="Dashboard Projesi Teknolojileri">
                                    <li>React</li>
                                    <li>Chart.js</li>
                                </ul>
                            </div>
                        </article>

                        {/* Proje 2 */}
                        <article className="project-card">
                            <img
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=400"
                                alt="Kişisel Blog Ekran Görüntüsü"
                                className="project-img"
                            />
                            <div className="project-info">
                                <h3>Markdown Blog</h3>
                                <p>Geliştiriciler için Markdown destekli hızlı ve SEO dostu kişisel blog sistemi.</p>
                                <ul className="tech-list" aria-label="Blog Projesi Teknolojileri">
                                    <li>Vite</li>
                                    <li>TypeScript</li>
                                </ul>
                            </div>
                        </article>

                    </div>
                </section>

                {/* İletişim Bölümü */}
                <section id="iletisim">
                    <h2>İletişim</h2>
                    <div className="contact-container">
                        {/* The exactly requested contact form block */}
                        <form action="#" method="POST" noValidate>
                            <fieldset>
                                <legend>İletişim Formu</legend>

                                <div className="form-group">
                                    <label htmlFor="name">Ad Soyad:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        minLength={2}
                                        aria-describedby="name-error"
                                    />
                                    <small id="name-error" className="error-msg" role="alert"></small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">E-posta:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        aria-describedby="email-error"
                                    />
                                    <small id="email-error" className="error-msg" role="alert"></small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Konu:</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        aria-describedby="subject-error"
                                    >
                                        <option value="">-- Seçiniz --</option>
                                        <option value="is">İş Teklifi</option>
                                        <option value="soru">Soru</option>
                                        <option value="oneri">Öneri</option>
                                    </select>
                                    <small id="subject-error" className="error-msg" role="alert"></small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Mesajınız:</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        minLength={10}
                                        aria-describedby="message-error"
                                    ></textarea>
                                    <small id="message-error" className="error-msg" role="alert"></small>
                                </div>

                                <button type="submit">Gönder Düğmesi 🚀</button>
                            </fieldset>
                        </form>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="portfolio-footer">
                <p>&copy; {new Date().getFullYear()} Kevser Aslan. Tüm hakları saklıdır.</p>
                <div className="social-links">
                    <a href="#" aria-label="GitHub Profilim">GitHub</a>
                    <a href="#" aria-label="LinkedIn Profilim">LinkedIn</a>
                    <a href="#" aria-label="Twitter Profilim">Twitter</a>
                </div>
            </footer>
        </>
    );
};

export default App;
