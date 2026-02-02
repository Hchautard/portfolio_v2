'use client';
import DynamicGrid from '@/app/components/dynamic-grid';
import Header from '@/app/components/header';
import SwitchDarkMode from '@/app/components/switch-dark-mode';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/*<Header />*/}
      <SwitchDarkMode />

      <main className="main-content" id="main">
        <section className="presentation-grid" id="home">
          <DynamicGrid />
        </section>
      </main>

      <footer className="home-footer">
        <p>
          © {new Date().getFullYear() ?? 2026} Hugo Chautard · Tous droits
          réservés
        </p>
      </footer>
    </div>
  );
}
