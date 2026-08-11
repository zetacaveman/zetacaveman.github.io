const publications = [
  {
    year: "2026",
    title:
      "Organizational Control Layer: Governance Infrastructure at the Execution Boundary of LLM Agent Systems",
    authors: (
      <>
        Tianyu Shi, <strong>Yang Mo</strong>, Yiou Liu, Zhuonan Hao, Yin Wang,
        Wenzhuo Hu, Nan Yu, Meng Zhou, and Jiangbo Yu
      </>
    ),
    venue: "arXiv preprint, 2026",
    links: [
      ["arXiv", "https://arxiv.org/abs/2606.04306"],
      ["pdf", "https://arxiv.org/pdf/2606.04306"],
      ["code", "https://github.com/SHITIANYU-hue/amai_ocl"],
    ],
  },
  {
    year: "2024",
    title: "The structure of simply colored coalgebras",
    authors: <><strong>Yang Mo</strong></>,
    venue:
      "Higher Structures in Topology, Geometry, and Physics, Contemporary Mathematics 802, 49–74, 2024",
    links: [
      ["journal", "https://doi.org/10.1090/conm/802/16072"],
      ["arXiv", "https://arxiv.org/abs/2301.08462"],
      ["pdf", "https://arxiv.org/pdf/2301.08462"],
    ],
  },
  {
    year: "2022",
    title:
      "Pathlike Co/Bialgebras and their Antipodes with Applications to Bi- and Hopf Algebras Appearing in Topology, Number Theory and Physics",
    authors: <>Ralph M. Kaufmann and <strong>Yang Mo</strong></>,
    venue: "SIGMA 18 (2022), 053, 42 pages",
    links: [
      ["journal", "https://doi.org/10.3842/SIGMA.2022.053"],
      ["arXiv", "https://arxiv.org/abs/2104.08895"],
      ["pdf", "https://arxiv.org/pdf/2104.08895"],
    ],
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="site-name" href="#top">Yang Mo</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="intro" id="top">
        <h1>Yang Mo</h1>
        <p className="subtitle">Mathematics and computer science</p>

        <div className="intro-text" id="about">
          <p>
            I am interested in algebraic topology, coalgebras, and the theory and
            infrastructure of autonomous agent systems. My recent work spans both
            pure mathematics and the governance of LLM-based agents.
          </p>
          <p>
            This is a minimal personal-page template. Add a short paragraph here
            about your current position, education, and the questions you are
            working on now.
          </p>
        </div>

        <p className="quick-links">
          <a href="#publications">Publications</a>
          <span>·</span>
          <a href="https://arxiv.org/search/?query=Mo%2C+Yang&searchtype=author" target="_blank" rel="noreferrer">arXiv</a>
          <span>·</span>
          <a href="mailto:yangmo@example.com">Email</a>
        </p>
      </section>

      <section id="research">
        <h2>Research</h2>

        <div className="research-item">
          <h3>Algebra, topology, and coalgebras</h3>
          <p>
            I study algebraic structures that appear in topology and related
            areas, with particular interest in colored and pathlike coalgebras,
            bialgebras, and antipodes.
          </p>
        </div>

        <div className="research-item">
          <h3>Autonomous agents and governance</h3>
          <p>
            I also work on reliable multi-agent systems. A current direction is
            governance at the boundary between an agent&apos;s proposed action and
            its execution in the external world.
          </p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <ul className="project-list">
          <li>
            <a href="https://github.com/SHITIANYU-hue/amai_ocl" target="_blank" rel="noreferrer">
              Organizational Control Layer
            </a>
            <span>
              Model-agnostic infrastructure for policy enforcement and escalation
              before an LLM agent&apos;s action is executed.
            </span>
          </li>
          <li>
            <span className="project-title">Research notes and expository work</span>
            <span>
              Add links here to software, lecture notes, or small projects that
              are useful but do not need a full publication entry.
            </span>
          </li>
        </ul>
      </section>

      <section id="publications">
        <h2>Publications</h2>

        <ol className="publication-list">
          {publications.map((paper) => (
            <li key={paper.title}>
              <article>
                <p className="paper-title">{paper.title}</p>
                <p className="paper-authors">{paper.authors}</p>
                <p className="paper-venue">{paper.venue}</p>
                <p className="paper-links">
                  {paper.links.map(([label, href], index) => (
                    <span key={label}>
                      {index > 0 && " · "}
                      <a href={href} target="_blank" rel="noreferrer">{label}</a>
                    </span>
                  ))}
                </p>
              </article>
              <span className="paper-year">{paper.year}</span>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:yangmo@example.com">yangmo@example.com</a>
          <span className="editor-note"> (replace with your address)</span>
        </p>
      </section>

      <footer>
        <p>Last updated August 2026.</p>
      </footer>
    </main>
  );
}
