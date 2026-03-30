// js/memorial-features.js
// Symbolic candles & flowers with counters for memorials

const candleTypes = [
  { id: "white",   name: "White Candle",   emoji: "🕯️", meaning: "Peace, purity, and eternal light for the soul" },
  { id: "red",     name: "Red Candle",     emoji: "❤️🕯️", meaning: "Deep love, respect, and strength" },
  { id: "yellow",  name: "Yellow Candle",  emoji: "💛🕯️", meaning: "Hope, warm memories, and friendship" },
  { id: "pink",    name: "Pink Candle",    emoji: "🌸🕯️", meaning: "Compassion, grace, and gentle remembrance" },
  { id: "blue",    name: "Blue Candle",    emoji: "🌊🕯️", meaning: "Calm, serenity, and emotional healing" }
];

const flowerTypes = [
  { id: "white_lily",     name: "White Lily",     emoji: "🌷", meaning: "Purity and restored innocence of the soul (common in Kenyan funerals)" },
  { id: "red_rose",       name: "Red Rose",       emoji: "🌹", meaning: "Deep love and respect" },
  { id: "white_rose",     name: "White Rose",     emoji: "⚪🌹", meaning: "Innocence, humility, and eternal love" },
  { id: "pink_carnation", name: "Pink Carnation", emoji: "🌸", meaning: "Remembrance, gratitude, and compassion" },
  { id: "marigold",       name: "Marigold",       emoji: "🌼", meaning: "New beginnings and the warmth of memories" },
  { id: "gladiolus",      name: "Gladiolus",      emoji: "🌺", meaning: "Strength of character and moral integrity" }
];

// Load counters (total candles + flowers)
async function loadCounters(memorialId) {
  if (!memorialId) return;

  // Candles
  const { data: candles } = await window.supabaseClient
    .from('candles')
    .select('type')
    .eq('memorial_id', memorialId);

  const totalCandles = candles ? candles.length : 0;

  // Flowers
  const { data: flowers } = await window.supabaseClient
    .from('flowers')
    .select('type')
    .eq('memorial_id', memorialId);

  const totalFlowers = flowers ? flowers.length : 0;

  // Update the UI counters
  window.updateCountersUI(totalCandles, totalFlowers);
}

// Light a candle
async function lightCandle(memorialId, typeId) {
  if (!memorialId) return alert("Memorial ID is missing");

  const { error } = await window.supabaseClient
    .from('candles')
    .insert({ memorial_id: memorialId, type: typeId });

  if (error) {
    alert("Could not light the candle. Please try again.");
  } else {
    alert(`🕯️ You lit a ${typeId} candle in their honor. Thank you!`);
    loadCounters(memorialId);   // Refresh counters
  }
}

// Send a flower
async function sendFlower(memorialId, typeId) {
  if (!memorialId) return alert("Memorial ID is missing");

  const { error } = await window.supabaseClient
    .from('flowers')
    .insert({ memorial_id: memorialId, type: typeId });

  if (error) {
    alert("Could not send the flower. Please try again.");
  } else {
    alert(`🌸 You sent ${typeId.replace('_', ' ')} in their honor. Thank you!`);
    loadCounters(memorialId);   // Refresh counters
  }
}

// Make everything available to HTML
window.candleTypes = candleTypes;
window.flowerTypes = flowerTypes;
window.lightCandle = lightCandle;
window.sendFlower = sendFlower;
window.loadCounters = loadCounters;

console.log('✅ Candle & Flower features with counters loaded');
