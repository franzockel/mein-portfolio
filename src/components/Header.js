import "./Header.css";

import headerBackgroundLeftBottom from "../assets/header-background/header-left-bottom.svg";

export default function Header() {
  return (
    <header>
      <h1>
        Welcome
        <br /> to
        <br /> meine
        <br /> Spielwiese
      </h1>
      <div className="header-background-left-bottom">
        <img
          src={headerBackgroundLeftBottom}
          alt="Decorative Background Image"
        />
      </div>
    </header>
  );
}
