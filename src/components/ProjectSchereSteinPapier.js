import "./ProjectSchereSteinPapier.css";

import Link from "./Link";

import schereSteinPapierImage from "../assets/projects/schere-stein-papier-image.png";

export default function ProjectSchereSteinPapier() {
  return (
    <div className="project-schere-stein-papier">
      <img src={schereSteinPapierImage} alt="Teaser Schere Stein Papier" />
      <div>
        <p className="add-info">Figma + HTML + CSS + JavaScript</p>
        <h3>Schere, Stein, Papier</h3>
        <div>
          <p>
            Während meiner Fortbildung bei SuperCode stand eine Aufgabe auf dem
            Plan: Ein textbasiertes Spiel mit JavaScript entwickeln - konkret:
            „Schere, Stein, Papier“. Challenge accepted!
            <br />
            <br />
            Auch wenn das Spiel vorgegeben war, wollte ich mehr draus machen.
            Also hab ich nicht nur die JavaScript-Logik umgesetzt, sondern mir
            zusätzlich ein verspieltes Design überlegt, das dem Ganzen mehr
            Leben einhaucht.
            <br />
            <br />
            Im Fokus standen die Basics von JavaScript - Funktionen,
            Bedingungen, Events - aber für mich war klar: Wenn schon, denn
            schon. Und so wurde aus einer Übung ein kleines Projekt, das zeigt,
            wie viel Spaß auch simple Spiele machen können, wenn man Kreativität
            und Code zusammenbringt.
          </p>
          <Link
            text="Auf GitHub ansehen"
            href="https://github.com/franzockel/rock_paper_scissors"
          />
          <Link
            text="Im Brwoser ansehen"
            href="https://franzockel.github.io/rock_paper_scissors/
"
          />
        </div>
      </div>
    </div>
  );
}
