import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import {
  about,
  aboutVideo,
  before,
  conferences,
  conferencesIntro,
  editorialLink,
  formText,
  freeProducts,
  heroFacts,
  ideaParagraphs,
  nav,
  programs,
  reviewsLink,
  today,
} from './content';

const heroPhoto = `${import.meta.env.BASE_URL}images/foto_1_blok.png`;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a className="logo" href="#top" onClick={() => setOpen(false)}>
        Наталья<br />Галюк-Каушене
      </a>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Открыть меню" type="button">
        <span />
        <span />
      </button>
      <nav className={open ? 'open' : ''} aria-label="Основная навигация">
        {nav.map(([id, title]) => (
          <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
            {title}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Section({ id, title, children, className = '' }: { id: string; title?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`section ${className}`}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="heroText">
            <p className="eyebrow">Наталья Галюк-Каушене</p>
            <h1>ЖИВУ как хочу!</h1>
            <ul className="factList">
              {heroFacts.map((fact) => <li key={fact}>{fact}</li>)}
            </ul>
            <a className="btn" href="#contact">СВЯЗАТЬСЯ СО МНОЙ</a>
          </div>
          <div className="heroPhoto">
            <img src={heroPhoto} alt="Наталья Галюк-Каушене" />
          </div>
        </section>

        <Section id="about" title="кто я?">
          <div className="aboutGrid">
            <div>{about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <a className="videoCard" href={aboutVideo} target="_blank" rel="noreferrer">
              <span>▶</span>
              <p>смотреть видео</p>
            </a>
          </div>
        </Section>

        <Section id="compare" className="compare">
          <div>
            <h3>Всего 3 года назад…</h3>
            <ul>{before.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3>А сегодня…</h3>
            <ul>{today.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </Section>

        <Section id="idea" title="моя главная идея сегодня">
          <div className="ideaText">{ideaParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </Section>

        <Section id="speaker" title="спикер международных конференций">
          <div className="introBlock">{conferencesIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <div className="speakerGrid">
            {conferences.map(([title, text], index) => (
              <article key={title}>
                <div className="thumb">{String(index + 1).padStart(2, '0')}</div>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <a className="btn small" href="#contact">ПРИГЛАСИТЬ КАК СПИКЕРА</a>
        </Section>

        <Section id="free" title="бесплатные продукты">
          <div className="freeGrid">
            {freeProducts.map(([title, text, cta]) => (
              <article key={title}>
                <h4>{title}</h4>
                <p>{text}</p>
                <a href="#contact">{cta}</a>
              </article>
            ))}
          </div>
        </Section>

        <Section id="personal" title="личные сессии">
          <div className="servicePanel">
            <p>Личный формат работы для тех, кто хочет разобрать свой запрос глубоко, честно и индивидуально: деньги, выбор, отношения, проявленность, масштаб, внутренние ограничения и разрешение жить как хочется.</p>
            <a className="btn small" href="#contact">ОСТАВИТЬ ЗАПРОС</a>
          </div>
        </Section>

        <Section id="groups" title="групповые сессии">
          <div className="servicePanel">
            <p>Групповой формат для работы с мышлением, денежными сценариями, архетипами, женской силой, ресурсом и поддержкой в круге людей с похожим запросом.</p>
            <a className="btn small" href="#contact">ОСТАВИТЬ ЗАПРОС</a>
          </div>
        </Section>

        <Section id="programs" title="курсы онлайн">
          <div className="programGrid">
            {programs.map((program, index) => (
              <article key={program.title}>
                <div className="programPic">{index + 1}</div>
                <p className="eyebrow">{program.format}</p>
                <h4>{program.title}</h4>
                <p>{program.duration}</p>
                <p>{program.price}</p>
                <p>{program.description}</p>
                <a href="#contact">{program.button}</a>
              </article>
            ))}
          </div>
        </Section>

        <section className="editorial" aria-label="Дополнительный фотоблок">
          <a className="photoLink" href={editorialLink} target="_blank" rel="noreferrer">открыть фотоматериал</a>
          <div>
            <p className="eyebrow">визуальная пауза</p>
            <h2>ЖИВУ как хочу!</h2>
          </div>
        </section>

        <Section id="contact" title="контакты" className="contact">
          <div>{formText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <form onSubmit={(event: FormEvent<HTMLFormElement>) => { event.preventDefault(); alert('Спасибо! Ваш запрос подготовлен.'); }}>
            <input placeholder="Имя" aria-label="Имя" />
            <input placeholder="Телефон" aria-label="Телефон" />
            <textarea placeholder="Сообщение" aria-label="Сообщение" />
            <button className="btn" type="submit">ОТПРАВИТЬ ЗАПРОС</button>
          </form>
        </Section>

        <Section id="reviews" title="отзывы">
          <a className="reviewsPanel" href={reviewsLink} target="_blank" rel="noreferrer">
            <span>▶</span>
            <p>Смотреть отзывы</p>
          </a>
        </Section>
      </main>
      <footer>
        <b>Наталья Галюк-Каушене</b>
        <p>Мастер-коуч (MCC ICF), денежный психолог, ментор.</p>
        <div><a href="#top">Наверх</a><a href="#contact">Контакты</a></div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
