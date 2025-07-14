import "./SectionAbout.css";

import aboutImage from "../assets/about-image.png";

export default function SectionAbout() {
  return (
    <section className="section-about">
      <h2>
        Ciao, Kakao! <br />
        Ich bin Franzi...
      </h2>
      <div className="about-container">
        <div className="image-container">
          <img src={aboutImage} alt="Franzi's picture" />
        </div>

        <p>
          ...und Webdesign war bei mir Liebe auf den ersten Klick. Mit 12 habe
          ich aus Langeweile mal HTML und CSS ausprobiert – Spoiler: Es hat
          gefunkt. Damals wusste ich natürlich noch nicht, dass das mal mein Job
          wird. Aber mal ehrlich, wer denkt in dem Alter schon an Karriere, wenn
          man gerade versucht, eine fancy Website mit Regenbogenschrift und
          blinkenden Buttons zu basteln?
          <br />
          <br />
          Nach dem Abi hab ich dann ganz erwachsen Medien- und
          Kommunikationsdesign studiert. Webdesign? Klar, das war mein
          Highlight. Auch wenn uns da nur die Basics gezeigt wurden, hat’s mich
          sofort gepackt. Also ab in eine Designagentur. Zuerst nur
          Grafik-Gedöns, dann wurde die Agentur digital und ich habe mit
          Entwicklern zusammengearbeitet. Und das war mein Jackpot! Plötzlich
          konnte ich all das Zeug aus der Uni in echten Projekten anwenden, und
          das Beste: Ich hab richtig Blut geleckt. Jedes Projekt war ein neues
          Abenteuer zwischen Design und Code.
          <br />
          <br />
          Und dann... kam Corona. Die Zeit, in der alle Bananenbrot gebacken
          haben, hab ich genutzt, um meinen Traum wahrzumachen:
          Frontend-Entwicklung bei SuperCode. Das Beste? Schon während der
          Fortbildung haben die mich als Assistant Trainer haben wollen. Klar
          hab ich zugesagt! Was gibt’s Besseres, als zu sehen, wie bei den
          Leuten der Knoten im Kopf platzt, wenn sie ein komplexes Thema endlich
          verstehen und der Code läuft? Genau mein Ding.
          <br />
          <br />
          Nach acht Monaten wurde ich zum Main Trainer – eigener Kurs, eigene
          Verantwortung. Und als ob das nicht genug wäre, kam drei Monate später
          die Beförderung zum Art Director. Leitung der Designabteilung? Check!
          <br />
          <br />
          Was ich will? Ganz einfach: Design und Webentwicklung gehören für mich
          zusammen wie Pommes und Mayo – einzeln okay, aber zusammen einfach
          besser. <br />
          Und auf das nächste Projekt freu ich mich schon jetzt!
        </p>
      </div>
    </section>
  );
}
