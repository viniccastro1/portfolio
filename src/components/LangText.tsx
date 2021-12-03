import React, { useEffect } from "react";
import { LangOptions } from "./App";

interface Props {
  en: JSX.Element | string;
  pt: JSX.Element | string;
  className?: string;
}

function LangText(props: Props) {
  return (
    <>
      <div className={props.className} lang={LangOptions.English} hidden>
        {props.en}
      </div>

      <div className={props.className} lang={LangOptions.Portuguese} hidden>
        {props.pt}
      </div>
    </>
  );
}

export default LangText;
