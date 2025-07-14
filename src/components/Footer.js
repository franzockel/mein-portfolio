import "./Footer.css";

import Link from "./Link.js";

export default function Footer() {
  let headline = "Lust auf ein Kennen&shy;lernen";
  const processedHeadline = headline.replace(/&shy;/g, "\u00AD");

  return (
    <footer>
      <div className="footer-container">
        <h2>{processedHeadline}?</h2>
        <div>
          <p>
            Wenn du jemanden suchst, der Design und Code mit Leidenschaft
            verbindet - let’s talk! Ich freue mich auf deine Nachricht und bin
            bereit für das nächste Abenteuer - vielleicht ja bei euch?
          </p>
          <Link
            text="Lass quatschen!"
            href="mailto:franziska@hoevelmanns.de?subject=Lass quatschen!"
          />
        </div>
      </div>
    </footer>
  );
}
