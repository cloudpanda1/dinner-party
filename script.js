const promptEl = document.getElementById("prompt-para");
const themeDiv = document.getElementById("nav");
const promptNum = document.getElementById("prompt-num")

const prompts = [
  "Think you are various kitchen appliances.", 
  "Just got out of a coma that you were stuck in for 50 years.", 
  "Just got out of a walk-in freezer that you were stuck in all day.", 
  "You have a really short attention span.",
  "Think you are the host.",
  "Copy other peoples moods, behaviors, etc.",
  "Baymax or another robot.",
  "Start the party old and become incresingly young as time goes on.",
  "Become increaingly drunk as time goes on.",
  "Annoyed cat (without meowing)",
  "Humming bird that thinks the other people are flowers",
  "Scientist testing people's annoyance levels",
  "Think that everyone around you is an alien trying to destroy humanity.",
  "Think everything is part of a musical.",
  "Try to hypnotise people randomly and think it works even though it doesn't",
  "Gradually become more anxious as the party continues.",
  "Someone possessed by a demon.",
  "Angry at everything.",
  "Scared of everything and everyone.",
  "Obsessed with plants and convinced that everyone is trying to harm the plants.",
  "Attempt to sound as smart as possible.",
  "Sing everything you say.",
  "Think you're trapped in a movie.",
  "You're partially deaf",
  "You are obsessed with cats.",
  "Paranoid about being on time yet having no where to be.",
  "Addicted to all genres of music.",
  "You're very prone to injury and keep hurting yourself.",
  "You correct everyone for random reasons.",
  "In the middle of a sugar rush.",
  "Popular superhero.",
  "Owner of a monopoly.",
  "Wordle.",
  "Spontaneously combust / explode.",
  "Came back from the dead.",
  "You are a zombie.",
  "Switch between being very over heated to very cold.",
  "Pyromaniac.",
  "Trump supporter.",
  "COVID-20.",
  "Starting with 'a,' start each sentence in alphabetical order.",
  "Have a different emotion every time you talk.",
  "Make a weird face at the host whenever they're not looking at you.",
  "Show an unusual preference for words that contain q, x and z.",
  "Be a person who likes to secretly work out with various objects around the room when no one's looking.",
];

let length = prompts.length;

promptNum.textContent = length + ' prompts'

function generatePrompt() {
    let num = Math.floor(Math.random() * length);
    if (promptEl.textContent == prompts[num]) {
        generatePrompt();
    } else {
        promptEl.textContent = prompts[num];
        console.log("Prompt recorded successfully.");
    }
}

function changeTheme() {
    let element = document.body;
    element.classList.toggle("light-mode");
}

function submit() {
const thankspara = document.getElementById("thanks")
const input = document.getElementById("suggest-box")
     let feed = input.value
     let request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/936487697537728563/2aE6fiECNwziVb9ZljqOzrGr5wQXLtrRR4TUhQ1HvluC0uAGYzaDY0xxhTko-zPJfjIW");
      request.setRequestHeader('Content-type', 'application/json');
      let params = {
        username: "Dinner Party",
        content: `New suggestion: ${feed}`
      }
      if (input.value == '') {
        thankspara.innerHTML = '<i><p class="error">Please enter something into the text box.</p><i>'
      } else {
        request.send(JSON.stringify(params));
        input.value = ""
        thankspara.innerHTML = '<i><p>Thank you for your feedback!</p><i>'
      }
}
