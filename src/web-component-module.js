import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import HelloMessage from "./components/HelloMessage";

class XSearch extends HTMLElement {
    // connectedCallback() {
    //   ReactDOM.render(
    //     <>
    //       <p className='px-4 paragraph'>This is a web component</p>
    //       <HelloMessage />
    //       <Button />
    //     </>
    //   );
    // }
    connectedCallback() {
      ReactDOM.render(
        <button onClick={() => alert("one million dollars!")}>
          Hold the world ransom for...
        </button>,
        this
      );
    }
  }
  customElements.define('x-search', XSearch);