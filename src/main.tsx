import { useState } from 'react';
import type { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { about, before, conferences, freeProducts, heroFacts, idea, nav, programs, reviews, today } from './content';

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
              {heroFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <a className="btn" href="#contact">СВЯЗАТЬСЯ СО МНОЙ</a>
          </div>
          <div className="heroPhoto">
            <img src={heroPhoto} alt="Наталья Галюк-Каушене" />
          </div>
        </section>

        <Section id="about" title="кто я?">
          <div className="aboutGrid">
            <div>
              {about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="videoCard"><span>▶</span><p>визитка / видео</p></div>
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
          <p className="quote">{idea}</p>
        </Section>

        <Section id="speaker" title="спикер международных конференций">
          <div className="speakerGrid">
            {conferences.map((item, index) => (
              <article key={item}>
                <div className="thumb">{String(index + 1).padStart(2, '0')}</div>
                <h4>{item}</h4>
              </article>
            ))}
          </div>
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

        <Section id="programs" title="онлайн-программы">
          <div className="programGrid">
            {programs.map(([title, type, text], index) => (
              <article key={title}>
                <div className="programPic">{index + 1}</div>
                <p className="eyebrow">{type}</p>
                <h4>{title}</h4>
                <p>{text}</p>
                <a href="#contact">УЗНАТЬ ПОДРОБНОСТИ</a>
              </article>
            ))}
          </div>
        </Section>

        <section className="editorial" aria-label="Визуальная пауза">
          <img src={heroPhoto} alt="Наталья Галюк-Каушене" />
          <div>
            <p className="eyebrow">Наталья Галюк-Каушене</p>
            <h2>ЖИВУ как хочу!</h2>
          </div>
        </section>

        <Section id="contact" title="связаться со мной" className="contact">
          <p>Оставьте контакты, чтобы получить бесплатный продукт, записаться на программу или задать вопрос.</p>
          <form onSubmit={(event) => { event.preventDefault(); alert('Спасибо! Форма подготовлена для подключения отправки.'); }}>
            <input placeholder="Ваше имя" aria-label="Ваше имя" />
            <input placeholder="Телефон / Telegram / email" aria-label="Контакт" />
            <textarea placeholder="Ваш вопрос" aria-label="Ваш вопрос" />
            <button className="btn" type="submit">ОТПРАВИТЬ</button>
          </form>
        </Section>

        <Section id="reviews" title="отзывы">
          <div className="videoRow">
            {reviews.map((review) => <div className="reviewVideo" key={review}>▶<span>{review}</span></div>)}
          </div>
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
