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
  "You correct everyone for random reasons.",];

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
      request.open("POST", "https://discord.com/api/webhooks/934987074979905626/xgTLWn2ePzD9OvgJl9y0ZuKTib83BVrQk4q_M1VKrX9QLI4UU7ZPNHZv_9WMSjQ_C4GW");
      request.setRequestHeader('Content-type', 'application/json');
      let params = {
        username: "Dinner Party",
        content: `New suggestion: ${feed}`
      }
      if (input.value == '') {
        thankspara.innerHTML = '<p class="error">Please enter something into the text box.</p>'
      } else {
        request.send(JSON.stringify(params));
        input.value = ""
        thankspara.innerHTML = '<p>Thank you for your feedback!</p>'
      }
}
