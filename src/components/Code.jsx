import { useState } from "react";
import Editor from "./Editor";
import Output from "./Output";

function Code() {
    const [HTML, setHTML] = useState('');
    const [CSS, setCSS] = useState('');
    const [JS, setJS] = useState('');

  return (
    <>
      <div className="flex">
        <Editor
          lang="HTML"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
          value={HTML}
          onChange={setHTML}
        />
        <Editor
          lang="CSS"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png"
          value={CSS}
          onChange={setCSS}
        />
        <Editor
          lang="JS"
          img="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"
          value={JS}
          onChange={setJS}
        />
      </div>

      <Output html={HTML} css={CSS} js={JS}/>
    </>
  );
}

export default Code;
