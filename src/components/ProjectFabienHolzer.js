import "./ProjectFabienHolzer.css";

import Link from "./Link";

export default function ProjectFabienHolzer() {
  return (
    <div className="project-fabien-holzer">
      <p className="add-info">Redesign</p>
      <h3>
        Fabien Holzer <br />
        Website Redesign
      </h3>
      <div>
        <p>
          Der Fotograf Fabien Holzer brauchte eine Bühne für seine
          beeindruckenden Werke - clean, modern und natürlich responsive.
          <br />
          <br />
          Also haben meine Kollegin und ich uns drangesetzt und ein komplett
          neues Konzept für seinen Webauftritt entwickelt. Ziel: Eine Website,
          die seine Bilder sprechen lässt und für Nutzer:innen einfach zu
          bedienen ist - egal ob auf dem großen Bildschirm oder unterwegs am
          Smartphone.
          <br />
          <br />
          Meine Aufgaben? Von Anfang an dabei: Kundenkontakt, Konzept, Design
          und die Kontrolle der technischen Umsetzung - alles im Doppelpack mit
          meiner Kollegin. Gemeinsam haben wir Fabien durch den gesamten Prozess
          begleitet und ihm eine Plattform geschaffen, die seinem Stil gerecht
          wird.
        </p>
        <Link
          key="Projekt Fabien ansehen"
          text="Website ansehen"
          href="https://fabienholzer.com/"
        />
      </div>
    </div>
  );
}
