import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState("");

  const handleClick = (selectedTab) => {
    setSelectedTab(selectedTab);
    console.log(selectedTab);
  };
  return (
    <Section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton isSelected={selectedTab == "components"} onClick={() => handleClick("components")}>
          Components
        </TabButton>
        <TabButton isSelected={selectedTab == "jsx"} onClick={() => handleClick("jsx")}>
          JSX
        </TabButton>
        <TabButton isSelected={selectedTab == "props"} onClick={() => handleClick("props")}>
          Props
        </TabButton>
        <TabButton isSelected={selectedTab == "state"} onClick={() => handleClick("state")}>
          State
        </TabButton>
      </menu>

      {!selectedTab ? (
        <p>Select a tab to see the example code</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTab].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
