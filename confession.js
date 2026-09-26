const encryptedMessage = {
  ciphertext: "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",
  iv: "PjbJgJ8Bu7w6UTIz",
  salt: "PDxYPNXI2fzylW4/3HHfBw=="
};

const acceptedNames = new Set([
  "pat",
  "patrick",
  "fuertes",
  "patrickfuertes",
  "patrickpfuertes"
]);

const input = document.getElementById("nameInput");
const button = document.getElementById("enterButton");
const status = document.getElementById("status");
const lockScreen = document.getElementById("lockScreen");
const revealScreen = document.getElementById("revealScreen");
const message = document.getElementById("message");
const card = document.querySelector(".card");

function normalizeName(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}

function fromBase64(value) {
  const binary = atob(value);
  return Uint8Array.from(binary, char => char.charCodeAt(0));
}

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  return new Uint8Array(await crypto.subtle.digest("SHA-256", data));
}

async function unlock() {
  const normalized = normalizeName(input.value);

  if (!normalized) {
    showDenied("Please enter a name.");
    return;
  }

  if (!acceptedNames.has(normalized)) {
    showDenied("Access denied ❌");
    return;
  }

  button.disabled = true;
  input.disabled = true;
  status.textContent = "Verifying access...";
  status.className = "status checking";

  try {
    const keyBytes = await sha256("patrickfuertes");
    const key = await crypto.subtle.importKey(
      "raw",
      keyBytes,
      { name: "AES-GCM" },
      false,
      ["decrypt"]
    );

    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: fromBase64(encryptedMessage.iv) },
      key,
      fromBase64(encryptedMessage.ciphertext)
    );

    const decoded = new TextDecoder().decode(decrypted);
    reveal(decoded);
  } catch (error) {
    showDenied("Something went wrong. Please try again.");
    button.disabled = false;
    input.disabled = false;
  }
}

function showDenied(text) {
  status.textContent = text;
  status.className = "status denied";
  card.classList.remove("shake");
  void card.offsetWidth;
  card.classList.add("shake");
}

function reveal(text) {
  status.textContent = "Access granted ✓";
  status.className = "status granted";

  setTimeout(() => {
    lockScreen.classList.add("hidden");
    revealScreen.classList.remove("hidden");

    const paragraphs = text.split("\n");
    message.innerHTML = paragraphs
      .map(paragraph => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");

    requestAnimationFrame(() => {
      revealScreen.classList.add("visible");
    });
  }, 550);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

button.addEventListener("click", unlock);

input.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    unlock();
  }
});
