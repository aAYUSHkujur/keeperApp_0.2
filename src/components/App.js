import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <div>
        {notes.map((notes) => (
          <Note key={notes.key} title={notes.title} content={notes.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
