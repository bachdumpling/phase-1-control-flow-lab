function scuberGreetingForFeet(someValue){
  if(someValue <= 400) {
    return 'This one is on me!'
  }

  else if(someValue <= 2000) {
    return 'That will be twenty bucks.'
  }

  else if(someValue <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }

  else if(someValue > 2500) {
    return 'No can do.'
  }
};

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  let reply;

  switch(tip) {
    case tip = 'generous':
      reply = ('Thank you so much.');
      break;
    case tip = 'not as generous':
      reply = ('Thank you.');
      break;
    case tip = 'thanks for everything':
      reply = ('Bye.');
      break;
  }
  return reply;
}