import { Controlled as CodeMirror } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { MdOutlineContentCopy } from "react-icons/md";
import { useRef } from "react";

function Editor({ lang, img, value, onChange }) {
    const codeLine = useRef();

    const handleOnChange = (editor, data, value) => {
        onChange(value);
    }

    const handleOnClick = (lang) => {
      let text = codeLine.current.props.value;
      navigator.clipboard.writeText(text)
       .then(() => {
        alert(`${lang} Text Copied To Clipboard..`);
       })
       .catch((err) => {
        console.log(err);
       })
    };

  return (
    <>
      <div className="h-72 w-1/3 border-2 border-inherit rounded-lg">
        <div className="h-10 w-full border-2 border-inherit rounded-lg text-lg pl-5 pt-1 bg-slate-900 text-white flex">
          <img src={img} alt="Logo" className="h-7 w-7" />
          <div className="pl-2">{lang}</div>
          <MdOutlineContentCopy className="ml-96 text-lg my-1" type="button" onClick={() => handleOnClick(lang)}/>
        </div>

        <div>
          <CodeMirror
            className="controlled-editor border-2 border-inherit rounded-2xl"
            ref={codeLine}
            options={{ theme: "material", lineNumbers: true }}
            value={value}
            onBeforeChange={handleOnChange}
          />
        </div>

      </div>
    </>
  );
}

export default Editor;