(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const l="theme";function c(){const a=localStorage.getItem(l);return a==="light"||a==="dark"?a:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function o(a){document.documentElement.dataset.theme=a,localStorage.setItem(l,a);const e=document.querySelector("[data-theme-toggle]");e&&(e.setAttribute("aria-label",`Switch to ${a==="dark"?"light":"dark"} mode`),e.setAttribute("aria-pressed",String(a==="light")))}function d(){const e=(document.documentElement.dataset.theme??"dark")==="dark"?"light":"dark";return o(e),e}function p(){o(c());const a=document.querySelector("[data-theme-toggle]");a&&a.addEventListener("click",()=>{d()})}function v(){const a=document.querySelectorAll("[data-reveal]");if(!("IntersectionObserver"in window)){a.forEach(s=>s.classList.add("is-visible"));return}const e=new IntersectionObserver(s=>{s.forEach(n=>{if(n.isIntersecting){const t=n.target,i=Number(t.dataset.revealDelay??0);window.setTimeout(()=>t.classList.add("is-visible"),i),e.unobserve(t)}})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});a.forEach(s=>e.observe(s))}function u(){const a=document.querySelectorAll("[data-skill-level]");if(a.length===0)return;const e=new IntersectionObserver(s=>{s.forEach(n=>{if(n.isIntersecting){const t=n.target,i=t.dataset.skillLevel||"0";t.style.setProperty("--skill-level",`${i}%`),t.classList.add("is-filled"),e.unobserve(t)}})},{threshold:.4});a.forEach(s=>e.observe(s))}function h(){const a=document.querySelectorAll(".nav__link[href^='#']");if(a.length===0)return;const e=Array.from(a).map(n=>{var r;const t=(r=n.getAttribute("href"))==null?void 0:r.slice(1);if(!t)return null;const i=document.getElementById(t);return i?{link:n,section:i}:null}).filter(n=>n!==null),s=()=>{const n=window.innerHeight*.3;let t=null;for(const{section:i}of e){const r=i.getBoundingClientRect();if(r.top-n<=0&&r.bottom>n){t=i.id;break}}for(const{link:i,section:r}of e)r.id===t?i.classList.add("is-active"):i.classList.remove("is-active")};window.addEventListener("scroll",s,{passive:!0}),s()}function _(){const a=document.querySelector("[data-nav-toggle]"),e=document.querySelector("[data-nav]");!a||!e||(a.addEventListener("click",()=>{const s=e.classList.toggle("is-open");a.setAttribute("aria-expanded",String(s))}),e.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>{e.classList.remove("is-open"),a.setAttribute("aria-expanded","false")})}))}const g=[{title:"Nebula UI",description:"A composable design system powering 30+ internal tools with accessible primitives and theming.",tags:["TypeScript","React","Design Systems"],link:"#",repo:"#"},{title:"Pulse Analytics",description:"Real-time event pipeline processing 1B+ events/day with sub-second dashboards for product teams.",tags:["Node.js","Kafka","PostgreSQL"],link:"#",repo:"#"},{title:"Lumen Editor",description:"Collaborative markdown editor with CRDT-backed sync, offline support, and AI-assisted writing.",tags:["WebSockets","CRDT","Rust"],link:"#",repo:"#"},{title:"Atlas Maps",description:"Vector tile renderer with smooth WebGL transitions and dynamic theming for storytelling maps.",tags:["WebGL","TypeScript","Maps"],link:"#"}],f=[{name:"TypeScript",level:95},{name:"React / Next.js",level:92},{name:"Node.js",level:88},{name:"CSS / Design",level:90},{name:"PostgreSQL",level:80},{name:"Rust",level:65}],m=[{label:"GitHub",href:"https://github.com",icon:"GH"},{label:"LinkedIn",href:"https://linkedin.com",icon:"IN"},{label:"Twitter",href:"https://twitter.com",icon:"TW"},{label:"Email",href:"mailto:hello@example.com",icon:"@"}];function b(){return`
    <header class="nav">
      <div class="container nav__inner">
        <a href="#hero" class="nav__brand" aria-label="Home">
          <img class="nav__logo" src="./logo2.png" alt="" width="200" height="100" />
        </a>
        <button class="nav__toggle" data-nav-toggle aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav__links" data-nav aria-label="Primary">
          <a class="nav__link" href="#about">About</a>
          <a class="nav__link" href="#projects">Projects</a>
          <a class="nav__link" href="#skills">Skills</a>
          <a class="nav__link" href="#contact">Contact</a>
          <button class="theme-toggle" data-theme-toggle aria-label="Toggle theme" aria-pressed="false">
            <svg class="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
            </svg>
            <svg class="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  `}function k(){return`
    <section id="hero" class="hero">
      <div class="hero__bg" aria-hidden="true"></div>
      <div class="container hero__inner">
        <div class="hero__content">
          <p class="eyebrow" data-reveal>👋 Hello, I'm</p>
          <h1 class="hero__title" data-reveal data-reveal-delay="80">
            Building <em>delightful</em> web products with code &amp; design.
          </h1>
          <p class="hero__subtitle" data-reveal data-reveal-delay="160">
            Full-stack engineer specializing in fast, accessible, and beautifully designed digital experiences — from design systems to data pipelines.
          </p>
          <div class="hero__cta" data-reveal data-reveal-delay="240">
            <a class="btn btn--primary" href="#projects">
              View my work
              <span class="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a class="btn btn--ghost" href="#contact">Get in touch</a>
          </div>
          <div class="hero__partner" data-reveal data-reveal-delay="320">
            <span class="hero__partner-badge" aria-hidden="true">P</span>
            <span><strong>Open to work</strong> — Available for freelance</span>
          </div>
        </div>
        <div class="hero__visual" data-reveal data-reveal-delay="160" aria-hidden="true">
          <div class="hero__visual-head">
            <span class="hero__visual-title">Project Insights</span>
            <span class="hero__visual-pill">Last 30 days</span>
          </div>
          <div class="hero__visual-stats">
            <div class="hero__stat">
              <div class="hero__stat-label">Total commits</div>
              <div class="hero__stat-value">284K<span class="hero__stat-delta">↗ +12.5%</span></div>
            </div>
            <div class="hero__stat">
              <div class="hero__stat-label">Stars earned</div>
              <div class="hero__stat-value">1,847<span class="hero__stat-delta">↗ +8.2%</span></div>
            </div>
            <div class="hero__stat">
              <div class="hero__stat-label">Deployments</div>
              <div class="hero__stat-value">892<span class="hero__stat-delta">↗ +21.1%</span></div>
            </div>
          </div>
          <div class="hero__chart">
            <svg viewBox="0 0 400 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="currentColor" stop-opacity="0.18" />
                  <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,90 C40,85 60,80 90,75 C130,68 160,72 200,55 C240,40 270,45 310,30 C350,15 380,20 400,10 L400,120 L0,120 Z" fill="url(#lineFill)" />
              <path d="M0,90 C40,85 60,80 90,75 C130,68 160,72 200,55 C240,40 270,45 310,30 C350,15 380,20 400,10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  `}function y(){return`
    <section id="about" class="section">
      <div class="container">
        <header class="section__header" data-reveal>
          <span class="section__kicker">01 — About</span>
          <h2 class="section__title">Engineer by craft, designer by curiosity.</h2>
        </header>
        <div class="about__grid">
          <div class="about__media" data-reveal>
            <div class="about__avatar">
              <img src="./avatar.jpg" alt="Jaime Ramirez avatar" width="1024" height="1024" />
            </div>
            <div class="about__deco" aria-hidden="true"></div>
          </div>
          <div class="about__copy" data-reveal data-reveal-delay="120">
            <p>
              I'm a developer who lives at the intersection of design and engineering. For the past five
              years I've helped startups and product teams ship interfaces that feel as good as they look —
              from design systems and component libraries to full-stack apps and data pipelines.
            </p>
            <p>
              I care deeply about the small details: the way a button springs back, the way a page
              transitions, the way a chart reveals itself. The best software respects your time and attention.
            </p>
            <ul class="about__list">
              <li><span aria-hidden="true">✦</span> Based in the cloud, working globally</li>
              <li><span aria-hidden="true">✦</span> Open-source contributor &amp; mentor</li>
              <li><span aria-hidden="true">✦</span> Currently exploring WebGL and Rust</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `}function w(){return`
    <section id="projects" class="section section--alt">
      <div class="container">
        <header class="section__header" data-reveal>
          <span class="section__kicker">02 — Projects</span>
          <h2 class="section__title">Selected work I'm proud of.</h2>
          <p class="section__lede">A handful of products I've designed, built, and shipped to real users.</p>
        </header>
        <div class="cards">${g.map((e,s)=>`
      <article class="card" data-reveal data-reveal-delay="${s*80}">
        <div class="card__thumb" aria-hidden="true">
          <span class="card__index">0${s+1}</span>
        </div>
        <div class="card__body">
          <h3 class="card__title">${e.title}</h3>
          <p class="card__desc">${e.description}</p>
          <ul class="card__tags">
            ${e.tags.map(n=>`<li>${n}</li>`).join("")}
          </ul>
          <div class="card__links">
            ${e.link?`<a class="card__link" href="${e.link}">Live ↗</a>`:""}
            ${e.repo?`<a class="card__link" href="${e.repo}">Code ↗</a>`:""}
          </div>
        </div>
      </article>
    `).join("")}</div>
      </div>
    </section>
  `}function S(){return`
    <section id="skills" class="section">
      <div class="container">
        <header class="section__header" data-reveal>
          <span class="section__kicker">03 — Skills</span>
          <h2 class="section__title">My toolbox, sharpened daily.</h2>
        </header>
        <ul class="skills">${f.map((e,s)=>`
      <li class="skill" data-reveal data-reveal-delay="${s*60}">
        <div class="skill__head">
          <span class="skill__name">${e.name}</span>
          <span class="skill__pct">${e.level}%</span>
        </div>
        <div class="skill__bar" data-skill-level="${e.level}">
          <span class="skill__fill"></span>
        </div>
      </li>
    `).join("")}</ul>
      </div>
    </section>
  `}function L(){return`
    <section id="contact" class="section section--cta">
      <div class="container">
        <div class="cta" data-reveal>
          <span class="section__kicker">04 — Contact</span>
          <h2 class="cta__title">Have an idea? <span class="gradient-text">Let's build it together.</span></h2>
          <p class="cta__lede">
            I'm always open to interesting projects, and friendly conversations about
            software, design, or life.
          </p>
          <a class="btn btn--primary btn--lg" href="mailto:hello@example.com">
            Say hello
            <span class="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <div class="socials">${m.map((e,s)=>`
      <a class="social" href="${e.href}" data-reveal data-reveal-delay="${s*80}" target="_blank" rel="noopener">
        <span class="social__icon" aria-hidden="true">${e.icon}</span>
        <span class="social__label">${e.label}</span>
        <span class="social__arrow" aria-hidden="true">→</span>
      </a>
    `).join("")}</div>
      </div>
    </section>
  `}function $(){return`
    <footer class="footer">
      <div class="container footer__inner">
        <p>© ${new Date().getFullYear()} Jaime Ramirez. Crafted with care.</p>
        <a href="#hero" class="footer__top">Back to top ↑</a>
      </div>
    </footer>
  `}function I(){const a=document.getElementById("app");if(!a)throw new Error("Missing #app root element");a.innerHTML=[b(),`<main>${k()}${y()}${w()}${S()}${L()}</main>`,$()].join(""),p(),v(),u(),h(),_()}document.getElementById("app")&&I();
