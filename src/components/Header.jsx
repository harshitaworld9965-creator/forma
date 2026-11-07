import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <a className="site-header__brand" href="#main-content">
          Afterhours
          <span className="sr-only"> — back to introduction</span>
        </a>

        <svg
          className="site-header__ornament"
          viewBox="0 0 240 48"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <g
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 30 C45 44 72 10 110 24" />
            <path d="M228 30 C195 44 168 10 130 24" />

            <path d="M50 30 C35 29 30 14 27 10 C43 11 51 20 50 30 Z" />
            <path d="M73 23 C64 16 65 7 68 4 C78 10 81 17 73 23 Z" />
            <path d="M88 22 C78 25 73 35 72 40 C85 38 93 30 88 22 Z" />

            <path d="M190 30 C205 29 210 14 213 10 C197 11 189 20 190 30 Z" />
            <path d="M167 23 C176 16 175 7 172 4 C162 10 159 17 167 23 Z" />
            <path d="M152 22 C162 25 167 35 168 40 C155 38 147 30 152 22 Z" />

            <path d="M120 24 C108 15 111 7 120 4 C129 7 132 15 120 24 Z" />
            <path d="M120 24 C109 15 100 19 102 27 C106 34 115 32 120 24 Z" />
            <path d="M120 24 C131 15 140 19 138 27 C134 34 125 32 120 24 Z" />
            <path d="M120 24 C111 30 114 39 120 44 C126 39 129 30 120 24 Z" />
          </g>

          <circle
            className="site-header__flower-center"
            cx="120"
            cy="24"
            r="3"
            fill="currentColor"
          />
        </svg>

        <nav className="site-header__nav" aria-label="Main navigation">
          <a className="site-header__link" href="#collection">
            Collection
          </a>

          <a className="site-header__link" href="#comfort">
            Comfort corner
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;