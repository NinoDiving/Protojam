export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2021 Wild X'mas</p>
      <nav aria-label="Lien vers Github">
        <ul className="footer-links">
          <li>
            <a
              href="https://github.com/NinoDiving/Protojam"
              target="_blank"
              rel="noreferrer"
              aria-label="Lien vers le dépôt Github de Protojam"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
