import { useEffect, useState } from "react";

function Output({ html, css, js }) {
    const [mainCode, setMainCode] = useState('');

  const srcCode = `
     <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
     </html>
    `;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMainCode(srcCode);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

  return (
    <>
      <div className="h-80 mt-16 border-2 border-black rounded-lg px-3 mx-1">
         <iframe srcDoc={mainCode} title="Output" sandbox="allow-scripts" className="h-full w-full"/>
      </div>
    </>
  );
}

export default Output;