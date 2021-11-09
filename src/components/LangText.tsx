import React, { useEffect } from 'react';
import { LangOptions } from './App';

interface Props {
    en: JSX.Element;
    pt: JSX.Element;
    className: string
}

function LangText(props:Props) {

    return (
        <>
        <p className={props.className} lang={LangOptions.English} hidden>
            {props.en}
        </p>

        <p className={props.className} lang={LangOptions.Portuguese} hidden>
            {props.pt}
        </p>
        </>
        
    );
}

export default LangText;
