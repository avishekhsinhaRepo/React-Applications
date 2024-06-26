import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";
export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
        <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConcept key={index} title={concept.title} description={concept.description} image={concept.image} />
        ))}
      </ul>
    </Section>
  );
}
