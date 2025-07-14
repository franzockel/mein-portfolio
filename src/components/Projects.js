import "./Projects.css";

import ProjectFabienHolzer from "./ProjectFabienHolzer";
import ProjectSchereSteinPapier from "./ProjectSchereSteinPapier";
import ProjectHack4theFuture from "./ProjectHack4theFuture";

export default function Projects() {
  return (
    <section className="section-projects">
      <div className="intro">
        <h2>Projekte</h2>
        <p>
          Was ich kann, zeigt sich am besten in echten Projekten. Hier kommt
          eine kleine Auswahl an Arbeiten, bei denen ich Design, Konzept und
          Code zum Leben erweckt habe – mal alleine, mal im Team, aber immer mit
          Herz, Hirn und einer ordentlichen Portion Leidenschaft. Bühne frei!
        </p>
      </div>
      <ProjectFabienHolzer />
      <ProjectSchereSteinPapier />
      <ProjectHack4theFuture />
    </section>
  );
}
