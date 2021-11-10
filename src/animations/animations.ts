import anime from 'animejs';


enum LearnMoreBtnOptions {
  MouseIn,
  MouseOut
}

const learnMoreBtnAnim = (arg:LearnMoreBtnOptions) => {
  if (arg === LearnMoreBtnOptions.MouseIn){
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

  else if (arg === LearnMoreBtnOptions.MouseOut){
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


export {learnMoreBtnAnim, LearnMoreBtnOptions};