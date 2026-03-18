// ==========================
// SUPABASE CONNECTION
// ==========================
const SUPABASE_URL = "https://qubcvsruvwsomjigcuti.supabase.co";
const SUPABASE_KEY = "sb_publishable_s6r5CGbxtfGo0QJc6vLLFA_WGwiEAEZ";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ==========================
// ADD LOVED ONE
// ==========================
async function addLovedOne() {
  const name = document.getElementById("name").value;
  const year = document.getElementById("year").value;
  const county = document.getElementById("county").value;

  if (!name) return alert("Enter name");

  const { error } = await supabaseClient
    .from("memorials")
    .insert([{ name, year, county }]);

  if (error) {
    alert("Error saving");
    console.error(error);
  } else {
    alert("Saved successfully ❤️");
    loadMemorials();
  }
}

// ==========================
// LOAD MEMORIALS
// ==========================
async function loadMemorials() {
  const { data, error } = await supabaseClient
    .from("memorials")
    .select("*")
    .order("created_at", { ascending: false });

  const container = document.getElementById("memorialList");
  container.innerHTML = "";

  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.year} - ${item.county}</p>
      <button onclick="openMemorial('${item.id}')">View</button>
    `;

    container.appendChild(div);
  });
}

// ==========================
// OPEN MEMORIAL PAGE
// ==========================
function openMemorial(id) {
  localStorage.setItem("memorial_id", id);
  window.location.href = "memorial.html";
}

// ==========================
// LOAD SINGLE MEMORIAL
// ==========================
async function loadMemorialPage() {
  const id = localStorage.getItem("memorial_id");

  const { data } = await supabaseClient
    .from("memorials")
    .select("*")
    .eq("id", id)
    .single();

  document.getElementById("memorialName").innerText = data.name;

  loadMessages();
}

// ==========================
// CONDOLENCE WALL
// ==========================
async function sendMessage() {
  const text = document.getElementById("messageInput").value;
  const memorial_id = localStorage.getItem("memorial_id");

  if (!text) return;

  await supabaseClient
    .from("messages")
    .insert([{ text, memorial_id }]);

  document.getElementById("messageInput").value = "";
  loadMessages();
  showAppreciation("🕯️ Your candle has been lit");
}

// ==========================
// LOAD MESSAGES
// ==========================
async function loadMessages() {
  const memorial_id = localStorage.getItem("memorial_id");

  const { data } = await supabaseClient
    .from("messages")
    .select("*")
    .eq("memorial_id", memorial_id)
    .order("created_at", { ascending: false });

  const container = document.getElementById("messages");
  container.innerHTML = "";

  data.forEach(msg => {
    const p = document.createElement("p");
    p.innerText = msg.text;
    container.appendChild(p);
  });
}

// ==========================
// FAMILY CHAT (REALTIME)
// ==========================
function subscribeToMessages() {
  const memorial_id = localStorage.getItem("memorial_id");

  supabaseClient
    .channel("messages")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
        filter: `memorial_id=eq.${memorial_id}`
      },
      payload => {
        loadMessages();
      }
    )
    .subscribe();
}

// ==========================
// BEAUTIFUL POPUP
// ==========================
function showAppreciation(text) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = text;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);
}

// ==========================
// MUSIC TOGGLE FIX
// ==========================
function toggleMusic() {
  const audio = document.getElementById("bgMusic");

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// ==========================
// INIT
// ==========================
if (document.getElementById("memorialList")) {
  loadMemorials();
}

if (document.getElementById("memorialName")) {
  loadMemorialPage();
  subscribeToMessages();
}
