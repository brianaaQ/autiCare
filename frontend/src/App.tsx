import { useState } from "react";
import './App.css';

type Language = 'ro' | 'en';

const translations = {
  ro: {
    subtitle: 'Sprijin in fiecare zi, la fiecare pas',
    dashboard: 'Pagina principală',
    journal: 'Jurnal comportamental',
    routines: 'Rutine',
    insights: 'Analize si tipare',
    resources: 'Resurse',
    settings: 'Setări',
    welcome: 'Bine ati venit la autiCare!',
    intro:
      'Pasi mici, o intelegere mai buna, zile mai usoare.',
    overview: 'Spatiul tau de azi',
    overviewText:
      'Un loc in care poti oberva, organiza si intelege mai bine experientele de zi cu zi.',
    journalTitle: 'Jurnal comportamental',
    journalText:
      'Noteaza evenimente si contextul in care apar acestea.',
    routineTitle: 'Rutine vizuale',
    routineText: 'Organizeaza activitatile intr-un mod previzibil.',
    insightsTitle:'Analiza AI',
    insightsText: 'Exploreaza posibile tipare bazate pe observatiile tale.',
    progressTitle: 'Observatii si progrese.',
    progressText: 'Revino la inregistrarile tale si urmareste schimbarile.',
    quickActions: 'Incepe aici',
    newEntry: 'Adauga o observatie',
    viewRoutines: 'Exploreaza rutinele',
    noteTitle: 'Un spatiu liber, fara judecata.',
    noteText:
      'Fiecare observatie ne poate ajuta sa intelegem mai bine nevoile copilului. Te vom ajuta sa gasesti raspunsuri potrivite voua.',
    demo: 'Versiune demo',
    footer: 'Informatiile si sugestiile viitoare vor avea rol de sprijin, nu de diagnostic. Pentru astfel de cazuri va rugam sa apelati la specialistul desemnat.',
  },

  en: {
    subtitle: 'Support every day, every step of the way',
    dashboard: 'Dashboard',
    journal: 'Behavioral Journal',
    routines: 'Routines',
    insights: 'Insights & Patterns',
    resources: 'Resources',
    settings: 'Settings',
    welcome: 'Welcome to autiCare!',
    intro:
      'Small steps, better understanding, easier days.',
    overview: 'Your space for today',
    overviewText:
      'A place where you can observe, organize, and better understand your daily experiences.',
    journalTitle: 'Behavioral Journal',
    journalText:
      'Record events and the context in which they occur.',
    routineTitle: 'Visual Routines',
    routineText: 'Organize activities in a predictable way.',
    insightsTitle:'AI Insights',
    insightsText: 'Explore possible patterns based on your observations.',
    progressTitle: 'Observations and progress.',
    progressText: 'Return to your records and keep track of changes.',
    quickActions: 'Start here',
    newEntry: 'Add an observation',
    viewRoutines: 'Explore routines',
    noteTitle: 'A free space, without judgment.',
    noteText:
      'Every observation can help us better understand the child\'s needs. We will help you find answers that are right for you.',
    demo: 'Demo version',
    footer: 'The information and suggestions provided are intended to support, not diagnose. For such cases, please consult a designated specialist.',
  },
} as const;

const navigation = [
  { key: 'dashboard', icon: '⌂'},
  { key: 'journal', icon: '▤'},
  { key: 'routines', icon: '▦'},
  { key: 'insights', icon: '◉'},
  { key: 'resources', icon: '♡'},
  { key: 'settings', icon: '⚙'}
] as const;

type NavigationKey = (typeof navigation)[number]['key'];

export default function App() {
  const [language, setLanguage] = useState<Language>('ro');
  const [activePage, setActivePage] = useState<NavigationKey>('dashboard');
  const t = translations[language];

  const features = [
    {
      icon: '▤',
      title: t.journalTitle,
      description: t.journalText,
      color: 'lavender',
      page: 'journal' as const,
    },

    {
      icon: '▦',
      title: t.routineTitle,
      description: t.routineText,
      color: 'sage',
      page: 'routines' as const,
    },

    {
      icon: '◉',
      title: t.insightsTitle,
      description: t.insightsText,
      color: 'lavender',
      page: 'insights' as const,
    },

    {
      icon: '♡',
      title: t.resources,
      description: t.progressText,
      color: 'sage',
      page: 'resources' as const,
    },

  ];

  const pageTitles: Record<NavigationKey, string> = {
    dashboard: t.dashboard,
    journal: t.journal,
    routines: t.routines,
    insights: t.insights,
    resources: t.resources,
    settings: t.settings,
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a
          className="brand"
          href="#home"
          onClick={(event) =>{
            event.preventDefault();
            setActivePage('dashboard');
          }}
        >
          <span className="brand-mark">a.</span>
          <span className="brand-copy">
            <strong>AutiCare</strong>
            <small>{t.subtitle}</small>
          </span>
        </a>

        <div className="nav-label">
          {language === 'ro' ? 'MENIU' : 'MENU'}
        </div>

        <nav className="navigation" aria-label={t.dashboard}>
          {navigation.map((item) => (
            <button
              key={item.key}
              className={`nav-item ${
                activePage === item.key ? 'active' : ''
              }`}
              onClick={() => setActivePage(item.key)}
              type="button"
            >
              <span className="nav-icon" aria-hidden="true">
                {item.icon}
              </span>

              <span>{t[item.key]}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <span className="note-sparkle">*</span>
          <p>
            {language === 'ro'
              ? 'Fiecare pas conteaza.'
              : 'Every stsep counts.'}
          </p>

          <span>
            {language === 'ro'
              ? 'Progresul nu este mereu perfect.'
              : 'Progress is not always perfect.'}
          </span>
        </div>

        <div className="sidebar-bottom">
          <span className="avatar">A</span>
          <div className="profile-copy">
              <strong>
                {language === 'ro' ? 'Spatiul meu' : 'My space'}
              </strong>

              <small>{t.demo}</small>
          </div>
        </div>
      </aside>

      <main className="main-content" id="home">
          <header className="topbar">
              <div className="breadcrumb">
                <span>AutiCare</span>
                <span className="breadcrumb-divider">/</span>
                <strong>{pageTitles[activePage]}</strong>
              </div>

              <div className="topbar-actions">
                <span className="demo-badge">
                  <span className="status-dot"/>{t.demo}
                </span>

                <div className="language-switch" aria-label="Language">
                  <button 
                    type="button" 
                    className={language === 'ro' ? 'selected' : ''} 
                    onClick={() => setLanguage('ro')}
                    aria-pressed={language === 'ro'}>
                    RO
                  </button>

                  <button 
                    type="button"
                    className={language === 'en' ? 'selected' : ''}
                    onClick={() => setLanguage('en')}
                    aria-pressed={language === 'en'}
                    >
                    EN
                  </button>
                </div>
              </div>
          </header>

          {activePage === 'dashboard' ? (
            <>
            <section className="welcome-section">
              <div className="welcome-copy">
                <span className="eyebrow">
                  {language === 'ro'
                    ? 'UN NOU INCEPUT'
                    : 'A FRESH START'}
                </span>
                <h1>{t.welcome}<span>✿</span></h1>
                <p>{t.intro}</p>
              </div>
              
              <div className="welcome-art" aria-hidden="true">
                <span className="art-orbit orbit-one"/>
                <span className="art-orbit orbit-two"/>
                <span className="art-flower">✿</span>
                <span className="art-leaf">❧</span>
              </div>
            </section>

            <section className="overview-section">
              <div className="section-heading">
                <div>
                  <h2>{t.overview}</h2>
                  <p>{t.overviewText}</p>
                </div>
                <span className="section-sparkle">✳</span>
              </div>

              <div className="feature-grid">
                {features.map((feature) => (
                  <button 
                    type="button"
                    className="feature-card"
                    key={feature.page}
                    onClick={() => setActivePage(feature.page)}
                    >
                      <span className={'feature-icon ${feature.color}'}>
                        {feature.icon}
                      </span>
                      <span className="feature-title">
                        {feature.title}
                      </span>
                      <span className="feature-description">
                        {feature.description}
                      </span>
                      <span className="feature-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="bottom-grid">
              <div className="quick-actions panel">
                <h2>{t.quickActions}</h2>
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setActivePage('journal')}
                  >
                    <span>+</span>
                    {t.newEntry}
                </button>

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setActivePage('routines')}
                  >
                    <span>▦</span>
                    {t.viewRoutines}
                    <span className="button-arrow">→</span>
                </button>
              </div>

              <div className="reassurance-panel">
                <span className="reassurance-icon">♡</span>
                <div>
                  <h2>{t.noteTitle}</h2>
                  <p>{t.noteText}</p>
                </div>
                <span className="reassurance-flower" aria-hidden="true">
                  ✿
                </span>
              </div>
            </section>
          </>
          ) : (
            <section className="placeholder-page">
              <span className="placeholder-icon">
                {navigation.find((item) => item.key === activePage)?.icon}
              </span>
              <span className="eyebrow">AUTICARE</span>
              <h1>{pageTitles[activePage]}</h1>
              <p>
                {language === 'ro'
                  ? 'Această secțiune va fi construită în următoarea etapă.'
                  : 'This section will be built in the next stage.'}
              </p>
              <button
                type="button"
                className="primary-button"
                onClick={() => setActivePage('dashboard')}
              >
                {language === 'ro'
                  ? 'Înapoi la pagina principală'
                  : 'Back to dashboard'}
              </button>
            </section>
          )}
        
        <footer className="app-footer">{t.footer}</footer>
      </main>
    </div>

  );
}