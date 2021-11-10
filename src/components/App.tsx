import React, { useEffect } from 'react';
import LangText from './LangText';
import {Container, Nav} from 'react-bootstrap';
import Intro from './Intro';
import MyNav from './MyNav';
import AboutMe from './AboutMe';

enum LangOptions {
  English = 'en',
  Portuguese = 'pt'
}

function App() {

  //Changes website's lang
  //Multilingual elements are hidden by default (check
  //'LangText' element definition).
  //This method will only display the elements from current selected language.

  const changeLanguage = (arg:LangOptions) => {
    const displayedElements = document.querySelectorAll(`[lang=${arg}]`) as NodeListOf<HTMLElement>;

    for (let i = 0; i < displayedElements.length; i++){
      displayedElements[i].hidden = false;
    }
  }
  //Language is set by default as English
  useEffect(() => {
    changeLanguage(LangOptions.English);
  });
  
  return (
    <Container fluid className='bg-light'>
      {/* <MyNav/> */}
      <Intro/>
      <AboutMe/>
    </Container>
  );
}

export {LangOptions};
export default App;
