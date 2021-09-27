function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  
  console.log(string.toLowerCase());
}

function sayHiToGrandma (response) {
  const cant = "I can't hear you!";
  const yes = "YES INDEED!";
  const love = "I love you, too.";
  if (response.toLowerCase(response) === response) {
    return cant;
  }
  else if (response.toUpperCase(response) === response) {
    return yes;
  }
  else if ("I love you, Grandma." === response) {
    return love
  }
}