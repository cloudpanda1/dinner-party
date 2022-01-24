const promptEl = document.getElementById("prompt-para");
const themeDiv = document.getElementById("nav");

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
  "Obsessed with plants and convinced that everyone is trying to harm the plants."];

function generatePrompt() {
    let length = prompts.length;
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
      request.open("POST", "https://discord.com/api/webhooks/934973895608528947/1R0SO2OP7lyllpUzeu3hkVeD9l060mDHYFEpYUpgqas5KEztGd6BXjgcsu3027sqOVCs");
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
