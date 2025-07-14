import "./Link.css";

export default function Link(props) {
  return (
    <a href={props.href} target="_blank">
      <span>>>></span>
      <span>{props.text}</span>
    </a>
  );
}
