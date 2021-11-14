import anime from 'animejs';


enum HoverOptions {
  MouseIn,
  MouseOut
}

const learnMoreBtnAnim = (hoverOption:HoverOptions) => {
  if (hoverOption === HoverOptions.MouseIn){
      let tl = anime.timeline({});

      tl
      .add({
        targets: '.learn-more-btn',
        backgroundColor: '#7B4289',
        duration: 100
      })
      .add({
        targets: '.learn-more-btn',
        color: '#fafafa',
        duration: 100
      },'-=100')
      .add({
        targets: '.lm-btn-darrow',
        backgroundColor: '#fafafa'
      }, '-=100')
      .add({
        targets: '.learn-more-btn',
        scale: 1.2,
      }, '-=1000');
  }

  else if (hoverOption === HoverOptions.MouseOut){
    let tl = anime.timeline({});

    tl
    .add({
      targets: '.learn-more-btn',
      backgroundColor: '#fafafa', 
      duration: 100
    })
    .add({
      targets: '.learn-more-btn',
      color: '#7B4289',
      duration: 100
    },'-=100')  
    .add({
      targets: '.lm-btn-darrow',
      backgroundColor: '#7B4289'
    },'-=100')
    .add({
      targets: '.learn-more-btn',
      scale: 1,
    },'-=1000');
  }
}

const showMoreBtnAnim = (hoverOption:HoverOptions, target:EventTarget) => {
  if (hoverOption === HoverOptions.MouseIn){
      let tl = anime.timeline({});

      tl
      .add({
        targets: target,
        backgroundColor: '#7B4289',
        duration: 100
      })
      .add({
        targets: target,
        color: '#fafafa',
        duration: 100
      },'-=100')
      .add({
        targets: target,
        scale: 1.1,
      }, '-=100');
  }

  else if (hoverOption === HoverOptions.MouseOut){
    let tl = anime.timeline({});

    tl
    .add({
      targets: target,
      backgroundColor: '#fafafa', 
      duration: 100
    })
    .add({
      targets: target,
      color: '#7B4289',
      duration: 100
    },'-=100')  
    .add({
      targets: target,
      scale: 1,
    },'-=100');
  }
}


export {learnMoreBtnAnim, showMoreBtnAnim, HoverOptions};