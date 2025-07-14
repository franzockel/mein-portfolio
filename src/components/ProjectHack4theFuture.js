import "./ProjectHack4theFuture.css";

import Link from "./Link";

import hack4thefutureImage from "../assets/projects/hack4thefuture-image.png";

export default function ProjectHack4theFuture() {
  return (
    <div className="project-hack4thefuture">
      <p className="add-info">Figma + HTML + CSS + JavaScript</p>
      <h3>Hack4theFuture</h3>
      <img src={hack4thefutureImage} alt="Teaser Hack4theFuture" />
      <div>
        <p>
          Während meiner Zeit bei SuperCode durfte ich ein echtes Herzensprojekt
          umsetzen: die Website für einen internationalen Hackathon, den wir
          gemeinsam mit zwei weiteren Bildungsträgern organisiert haben.
          <br />
          <br />
          Vorgegeben war nur der Name – der Rest lag bei uns. Ich habe ein
          Moodboard erstellt, das die visuelle Richtung vorgab und als Grundlage
          für das spätere Logo diente. Auf Basis der gelieferten Texte habe ich
          ein modernes, energiegeladenes Design entwickelt – und die komplette
          Website auch selbst programmiert. Natürlich responsive und so gebaut,
          dass sie auf allen Geräten eine gute Figur macht.
          <br />
          <br />
          Kleiner Hinweis am Rande: Die nachträgliche Ergänzung der
          Gewinner*innen wurde später von anderer Stelle eingepflegt – dabei hat
          das ursprüngliche Layout ein bisschen gelitten. Der Teil stammt also
          nicht aus meiner Hand. 😉
        </p>
        <Link
          key="Projekt Hack4theFuture ansehen"
          text="Website ansehen"
          href="https://www.hack4thefuture.eu/"
        />
      </div>
    </div>
  );
}
