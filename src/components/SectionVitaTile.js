import "./SectionVitaTile.css";

export default function SectionVitaTile(props) {
  const processedJob = props.job.replace(/&shy;/g, "\u00AD");

  return (
    <div className="vita-tile">
      <div>
        <p className="add-info">{props.time}</p>
        <h4>{processedJob}</h4>
        <p className="add-info">{props.place}</p>
      </div>
      <p>{props.info}</p>
    </div>
  );
}
