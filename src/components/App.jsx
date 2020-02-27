import React from "react";
import Entry from "./Entry";
import Info from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Info.map(EntryGenerator)}</dl>
    </div>
  );
}

function EntryGenerator(info) {
  return (
    <Entry
      key={info.id}
      name={info.name}
      emoji={info.emoji}
      details={info.meaning}
    />
  );
}

export default App;
