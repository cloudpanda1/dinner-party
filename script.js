const promptEl = document.getElementById("prompt-para");
const themeDiv = document.getElementById("nav");

const prompts = ["Test1", "Test2", "Test3", "Test4", "Test5"];

function generatePrompt() {
    let num = Math.floor(Math.random() * 5);
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
      request.open("POST", "https://discord.com/api/webhooks/934886422257737838/I_c9CbgkrL3S5NEgT5PQpOg4HA329Yk-OlSqfrh2fgUaBfFVRmB3MVrZEIzFmxWJYr9f");
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
