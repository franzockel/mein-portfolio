import "./Footer.css";

export default function Footer() {
  function handleClick(buttonElement) {
    const container = buttonElement.closest(
      ".impressum-container, .datenschutz-container"
    );
    const textDiv = container.querySelector(".text-container");
    const arrow = buttonElement.querySelector(".arrow");
    const isOpen = textDiv.classList.contains("open");

    if (isOpen) {
      textDiv.style.maxHeight = textDiv.scrollHeight + "px";

      requestAnimationFrame(() => {
        textDiv.style.maxHeight = "0px";
        textDiv.classList.remove("open");
        arrow.classList.remove("rotate");
      });
    } else {
      textDiv.classList.add("open");
      const scrollHeight = textDiv.scrollHeight;
      textDiv.style.maxHeight = scrollHeight + "px";
      arrow.classList.add("rotate");
    }

    textDiv.classList.toggle("show");
    arrow.classList.toggle("rotate");
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="impressum-container">
          <button onClick={(e) => handleClick(e.currentTarget)}>
            <span>Impressum</span> <span className="arrow">></span>
          </button>
          <div className="text-container impressum-text-container">
            <p>
              Franziska Hövelmanns <br />
              Oberbilker Allee 301
              <br />
              40227 Düsseldorf
              <br />
              <br />
              <strong>Kontakt</strong> <br />
              E-Mail: franziska@hoevelmanns.de
              <br />
              <br />
              <strong>
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </strong>
              <br />
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
              <br />
              <br />
              <em>
                Quelle: Angepasst basierend auf einer Vorlage von e-recht24.de
              </em>
            </p>
          </div>
        </div>
        <div className="datenschutz-container">
          <button onClick={(e) => handleClick(e.currentTarget)}>
            <span>Datenschutzerklärung</span> <span className="arrow">></span>
          </button>
          <div className="text-container impressum-text-container">
            <p>
              <strong>1. Datenschutz auf einen Blick</strong> <br />
              <br />
              <strong>Allgemeine Hinweise</strong>
              <br />
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
              <br />
              <br />
              <strong>Datenerfassung auf dieser Website</strong>
              <br />
              <br />
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten finden Sie weiter unten
              unter „Verantwortliche Stelle“.
              <br />
              <br />
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden erhoben, wenn Sie uns diese mitteilen, z.B.
              durch das Versenden einer E-Mail an die angegebene Adresse.
              <br />
              <br />
              <strong>Welche Daten werden erfasst?</strong>
              <br />
              Beim Besuch der Website werden automatisch einige technische
              Informationen wie die Browserbreite erfasst, um das Layout
              anzupassen. Es werden keine personenbezogenen Daten gespeichert
              oder analysiert.
              <br />
              <br />
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Die wenigen automatisch erfassten technischen Daten dienen
              ausschließlich der fehlerfreien Darstellung der Website auf Ihrem
              Endgerät.
              <br /> <br />
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              <br />
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten sowie ggf. ein Recht
              auf Berichtigung oder Löschung. Sie können sich hierzu jederzeit
              an uns wenden.
              <br />
              <br />
              <strong>2. Hosting</strong> <br />
              <br />
              <strong>Externes Hosting</strong>
              <br />
              Diese Website wird bei GitHub Pages gehostet. Der Anbieter
              speichert technische Zugriffsdaten (z.B. IP-Adresse) zur sicheren
              Bereitstellung der Website. Es findet keine individuelle
              Auswertung oder Weiterverarbeitung durch uns statt.
              <br /> <br />
              <strong>Hoster:</strong>
              <br />
              GitHub, Inc.
              <br />
              88 Colin P. Kelly Jr. Street
              <br />
              San Francisco, CA 94107
              <br />
              United States
              <br />
              <br />
              <strong>3. Allgemeine Hinweise und Pflichtinformationen</strong>
              <br />
              <br />
              <strong>Datenschutz</strong>
              <br />
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre
              personenbezogenen Daten behandeln wir vertraulich und entsprechend
              den gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
              <br /> <br />
              <strong>Hinweis zur verantwortlichen Stelle</strong>
              <br />
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:{" "}
              <br />
              Franziska Hövelmanns
              <br />
              Oberbilker Allee 301
              <br />
              40227 Düsseldorf
              <br />
              E-Mail: franziska@hoevelmanns.de
              <br /> <br />
              <strong>Speicherdauer</strong>
              <br />
              Ihre personenbezogenen Daten werden gelöscht, sobald der Zweck der
              Speicherung entfällt und keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
              <br /> <br />
              <strong>Rechtsgrundlagen</strong>
              <br />
              Da auf dieser Website keine personenbezogenen Daten verarbeitet
              werden, außer im Rahmen der technischen Bereitstellung, stützen
              wir uns auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              sicherer und funktionaler Darstellung der Website).
              <br /> <br />
              <strong>Empfänger von personenbezogenen Daten</strong>
              <br />
              Es werden keine personenbezogenen Daten an Dritte weitergegeben.
              <br /> <br />
              <strong>Ihre Rechte</strong>
              <br />
              <ul>
                <li>
                  <strong>Auskunft</strong> über Ihre gespeicherten Daten
                </li>
                <li>
                  <strong>Berichtigung oder Löschung</strong> Ihrer Daten
                </li>
                <li>
                  <strong>Widerruf</strong> einer erteilten Einwilligung
                </li>
                <li>
                  <strong>Beschwerderecht</strong> bei einer Aufsichtsbehörde
                </li>
              </ul>
              <br /> <br />
              <strong>4. Eingesetzte Tools</strong>
              <br /> <br />
              <strong>Schriftarten</strong>
              <br />
              Diese Website verwendet lokal eingebundene Schriftarten. Es werden
              keine Daten an Dritte wie z.B. Google Fonts übermittelt.
              <br /> <br />
              <em>
                Quelle: Angepasst basierend auf einer Vorlage von e-recht24.de
              </em>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
