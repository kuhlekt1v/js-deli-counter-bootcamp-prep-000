function takeANumber(line, name){
  line.push(name);
  var position = line.length;
  return "Welcome, " + name + ". You are number " + position + " in line.";
} 

function nowServing(line){