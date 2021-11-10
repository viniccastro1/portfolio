import anime from 'animejs';


enum learnMoreOptions {
  In,
  Out
}



const learnMoreAnimIn = () =>{
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

const learnMoreAnimOut = () =>{
  var tl = anime.timeline({});

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


export {learnMoreAnimIn, learnMoreAnimOut};