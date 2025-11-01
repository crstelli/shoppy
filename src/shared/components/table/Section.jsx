import { SectionItem } from "./SectionItem";

function Section({ sections, gridCols }) {
  return (
    <div
      className="mx-auto grid w-full rounded-md px-10 py-4"
      style={{
        gridTemplateColumns: gridCols,
      }}
    >
      {sections.map((el) => (
        <SectionItem key={el}>{el}</SectionItem>
      ))}
    </div>
  );
}

export { Section };
