const textBox = document.getElementById("text");
const cursor = document.querySelector(".cursor");
const typeSound = document.getElementById("typeSound");
const bgMusic = document.getElementById("bgMusic");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function typeLine(line, delay = 40) {
  for (let char of line) {
    textBox.innerHTML += char;
    try {
      typeSound.currentTime = 0;
      typeSound.play();
    } catch { }
    await sleep(delay);
  }
  textBox.innerHTML += "<br>";
}

async function countdownTrace() {
  for (let i = 10; i >= 0; i--) {
    await typeLine(`>> TRACE DETECTED: ${i}s`);
    await sleep(300);
  }
  await typeLine(">> Trace Blocked Successfully ✅");
}

async function startHack() {
  const username = document.getElementById("username").value.trim() || "neo";
  document.getElementById("login").style.display = "none";
  textBox.classList.remove("hidden");
  cursor.classList.remove("hidden");

  bgMusic.volume = 0.4;
  bgMusic.play();

  await typeLine(`> Login: ${username}`);
  await sleep(300);
  await typeLine(`> Password: ********`);
  await sleep(500);
  await typeLine("Access Granted ✅\n");
  await sleep(400);

  await typeLine("Initializing hacking sequence...");
  await typeLine("Connecting to secure matrix...");
  await sleep(300);
  await typeLine("Accessing webcam...");
  await typeLine("Device found: Logitech HD Cam");
  await typeLine("Capturing frames... Done.");
  await typeLine("Bypassing firewall...");
  await sleep(300);
  await typeLine("Injecting payload...");
  await typeLine("Payload delivered successfully ✅");
  await typeLine("Retrieving data packets...");
  await typeLine("Sniffing ports...");
  await typeLine("Encrypted passwords found.");
  await typeLine("Cracking hashes...");
  await typeLine("Hash cracked: ********");
  await sleep(500);

  await countdownTrace();

  await typeLine("\nSystem lockdown bypassed.");
  await typeLine("HACK COMPLETE. Logging out...");
  cursor.style.display = "none";
}

// MATRIX EFFECT
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 35);
