

// ===== Uppgift 1: Lagnamn =====
const teamNameInput = document.querySelector("#team-name-input");
const changeNameBtn = document.querySelector("#change-name-btn");
const teamNameA = document.querySelector("#team-name-A");
const teamNameB = document.querySelector("#team-name-B");

// ===== Uppgift 2: Lägg till spelare =====
const playerNameInput = document.querySelector("#player-name-input");
const addPlayerBtn = document.querySelector("#add-player-btn");


// Uppgift 1: Byt namn på valt lag
function changeTeamName() {}

// Uppgift 2–5: Lägg till en spelare i valt lag (max 5 per lag)
function addPlayer() {}

// Ritar om båda lagens listor utifrån datan
function renderTeams() {}

// Uppgift 6-8
function leaveTeam() {}

function changeTeam() {}

function editPlayer() {}

// Tips:

// - Spelarens namn skrivs in i #player-name-input och läggs till med #add-player-btn.

// - Vilket lag spelaren hamnar i styrs av radioknapparna (name="team", value "A" eller "B").

//   Hämta det valda laget med: document.querySelector('input[name="team"]:checked').value

// - Struktur för en spelare finns som kommentar i index.html.

// - Lägg till klassen "full" på .team när laget har fem spelare.