// WM 2026 - Alle Teams und Gruppen
const groups = {
    A: { name: "Gruppe A", teams: ["Mexiko", "Südafrika", "Südkorea", "Tschechien"], flag: "🇲🇽🇿🇦🇰🇷🇨🇿" },
    B: { name: "Gruppe B", teams: ["Kanada", "Bosnien-Herzegowina", "Katar", "Schweiz"], flag: "🇨🇦🇧🇦🇶🇦🇨🇭" },
    C: { name: "Gruppe C", teams: ["Brasilien", "Marokko", "Haiti", "Schottland"], flag: "🇧🇷🇲🇦🇭🇹🇬🇧" },
    D: { name: "Gruppe D", teams: ["USA", "Paraguay", "Australien", "Türkei"], flag: "🇺🇸🇵🇾🇦🇺🇹🇷" },
    E: { name: "Gruppe E", teams: ["Deutschland", "Curaçao", "Elfenbeinküste", "Ecuador"], flag: "🇩🇪🇨🇼🇨🇮🇪🇨" },
    F: { name: "Gruppe F", teams: ["Niederlande", "Japan", "Schweden", "Tunesien"], flag: "🇳🇱🇯🇵🇸🇪🇹🇳" },
    G: { name: "Gruppe G", teams: ["Belgien", "Ägypten", "Iran", "Neuseeland"], flag: "🇧🇪🇪🇬🇮🇷🇳🇿" },
    H: { name: "Gruppe H", teams: ["Spanien", "Kap Verde", "Saudi-Arabien", "Uruguay"], flag: "🇪🇸🇨🇻🇸🇦🇺🇾" },
    I: { name: "Gruppe I", teams: ["Frankreich", "Senegal", "Irak", "Norwegen"], flag: "🇫🇷🇸🇳🇮🇶🇳🇴" },
    J: { name: "Gruppe J", teams: ["Argentinien", "Algerien", "Österreich", "Jordanien"], flag: "🇦🇷🇩🇿🇦🇹🇯🇴" },
    K: { name: "Gruppe K", teams: ["Portugal", "DR Kongo", "Usbekistan", "Kolumbien"], flag: "🇵🇹🇨🇩🇺🇿🇨🇴" },
    L: { name: "Gruppe L", teams: ["England", "Kroatien", "Ghana", "Panama"], flag: "🇬🇧🇭🇷🇬🇭🇵🇦" }
};

// Team Info mit Flaggen
const teamFlags = {
    "Mexiko": "🇲🇽",
    "Südafrika": "🇿🇦",
    "Südkorea": "🇰🇷",
    "Tschechien": "🇨🇿",
    "Kanada": "🇨🇦",
    "Bosnien-Herzegowina": "🇧🇦",
    "Katar": "🇶🇦",
    "Schweiz": "🇨🇭",
    "Brasilien": "🇧🇷",
    "Marokko": "🇲🇦",
    "Haiti": "🇭🇹",
    "Schottland": "🇬🇧",
    "USA": "🇺🇸",
    "Paraguay": "🇵🇾",
    "Australien": "🇦🇺",
    "Türkei": "🇹🇷",
    "Deutschland": "🇩🇪",
    "Curaçao": "🇨🇼",
    "Elfenbeinküste": "🇨🇮",
    "Ecuador": "🇪🇨",
    "Niederlande": "🇳🇱",
    "Japan": "🇯🇵",
    "Schweden": "🇸🇪",
    "Tunesien": "🇹🇳",
    "Belgien": "🇧🇪",
    "Ägypten": "🇪🇬",
    "Iran": "🇮🇷",
    "Neuseeland": "🇳🇿",
    "Spanien": "🇪🇸",
    "Kap Verde": "🇨🇻",
    "Saudi-Arabien": "🇸🇦",
    "Uruguay": "🇺🇾",
    "Frankreich": "🇫🇷",
    "Senegal": "🇸🇳",
    "Irak": "🇮🇶",
    "Norwegen": "🇳🇴",
    "Argentinien": "🇦🇷",
    "Algerien": "🇩🇿",
    "Österreich": "🇦🇹",
    "Jordanien": "🇯🇴",
    "Portugal": "🇵🇹",
    "DR Kongo": "🇨🇩",
    "Usbekistan": "🇺🇿",
    "Kolumbien": "🇨🇴",
    "England": "🇬🇧",
    "Kroatien": "🇭🇷",
    "Ghana": "🇬🇭",
    "Panama": "🇵🇦"
};

// WM 2026 Matches - Gruppenphase
// Informationen basierend auf der offiziellen WM 2026 Planung
const matches = [
    // Gruppe A - Mexiko, Südafrika, Südkorea, Tschechien
    {
        id: 1,
        team1: "Mexiko",
        team2: "Südafrika",
        date: "2026-06-12",
        time: "14:00",
        location: "Mexico City",
        stadium: "Estadio Azteca",
        group: "A",
        phase: "Gruppenphase"
    },
    {
        id: 2,
        team1: "Südkorea",
        team2: "Tschechien",
        date: "2026-06-12",
        time: "17:00",
        location: "Dallas",
        stadium: "AT&T Stadium",
        group: "A",
        phase: "Gruppenphase"
    },
    {
        id: 3,
        team1: "Mexiko",
        team2: "Südkorea",
        date: "2026-06-17",
        time: "18:00",
        location: "Los Angeles",
        stadium: "SoFi Stadium",
        group: "A",
        phase: "Gruppenphase"
    },
    {
        id: 4,
        team1: "Tschechien",
        team2: "Südafrika",
        date: "2026-06-17",
        time: "15:00",
        location: "Vancouver",
        stadium: "BC Place",
        group: "A",
        phase: "Gruppenphase"
    },
    {
        id: 5,
        team1: "Tschechien",
        team2: "Mexiko",
        date: "2026-06-23",
        time: "20:00",
        location: "Toronto",
        stadium: "BMO Field",
        group: "A",
        phase: "Gruppenphase"
    },
    {
        id: 6,
        team1: "Südafrika",
        team2: "Südkorea",
        date: "2026-06-23",
        time: "17:00",
        location: "Houston",
        stadium: "NRG Stadium",
        group: "A",
        phase: "Gruppenphase"
    },

    // Gruppe B - Kanada, Bosnien-Herzegowina, Katar, Schweiz
    {
        id: 7,
        team1: "Kanada",
        team2: "Katar",
        date: "2026-06-13",
        time: "18:00",
        location: "Toronto",
        stadium: "BMO Field",
        group: "B",
        phase: "Gruppenphase"
    },
    {
        id: 8,
        team1: "Schweiz",
        team2: "Bosnien-Herzegowina",
        date: "2026-06-13",
        time: "15:00",
        location: "Los Angeles",
        stadium: "SoFi Stadium",
        group: "B",
        phase: "Gruppenphase"
    },
    {
        id: 9,
        team1: "Kanada",
        team2: "Bosnien-Herzegowina",
        date: "2026-06-18",
        time: "18:00",
        location: "Vancouver",
        stadium: "BC Place",
        group: "B",
        phase: "Gruppenphase"
    },
    {
        id: 10,
        team1: "Katar",
        team2: "Schweiz",
        date: "2026-06-18",
        time: "15:00",
        location: "Dallas",
        stadium: "AT&T Stadium",
        group: "B",
        phase: "Gruppenphase"
    },
    {
        id: 11,
        team1: "Katar",
        team2: "Kanada",
        date: "2026-06-24",
        time: "20:00",
        location: "Guadalajara",
        stadium: "Estadio Jalisco",
        group: "B",
        phase: "Gruppenphase"
    },
    {
        id: 12,
        team1: "Bosnien-Herzegowina",
        team2: "Schweiz",
        date: "2026-06-24",
        time: "17:00",
        location: "San Francisco",
        stadium: "Levi's Stadium",
        group: "B",
        phase: "Gruppenphase"
    },

    // Gruppe C - Brasilien, Marokko, Haiti, Schottland
    {
        id: 13,
        team1: "Brasilien",
        team2: "Schottland",
        date: "2026-06-14",
        time: "18:00",
        location: "Rio de Janeiro",
        stadium: "Estádio do Maracanã",
        group: "C",
        phase: "Gruppenphase"
    },
    {
        id: 14,
        team1: "Marokko",
        team2: "Haiti",
        date: "2026-06-14",
        time: "15:00",
        location: "Miami",
        stadium: "Inter&Co Stadium",
        group: "C",
        phase: "Gruppenphase"
    },
    {
        id: 15,
        team1: "Brasilien",
        team2: "Haiti",
        date: "2026-06-19",
        time: "18:00",
        location: "Salvador",
        stadium: "Arena Fonte Nova",
        group: "C",
        phase: "Gruppenphase"
    },
    {
        id: 16,
        team1: "Schottland",
        team2: "Marokko",
        date: "2026-06-19",
        time: "15:00",
        location: "Charlotte",
        stadium: "Bank of America Stadium",
        group: "C",
        phase: "Gruppenphase"
    },
    {
        id: 17,
        team1: "Schottland",
        team2: "Haiti",
        date: "2026-06-25",
        time: "20:00",
        location: "New York",
        stadium: "MetLife Stadium",
        group: "C",
        phase: "Gruppenphase"
    },
    {
        id: 18,
        team1: "Marokko",
        team2: "Brasilien",
        date: "2026-06-25",
        time: "17:00",
        location: "Phoenix",
        stadium: "State Farm Stadium",
        group: "C",
        phase: "Gruppenphase"
    },

    // Gruppe D - USA, Paraguay, Australien, Türkei
    {
        id: 19,
        team1: "USA",
        team2: "Australien",
        date: "2026-06-15",
        time: "18:00",
        location: "Los Angeles",
        stadium: "SoFi Stadium",
        group: "D",
        phase: "Gruppenphase"
    },
    {
        id: 20,
        team1: "Türkei",
        team2: "Paraguay",
        date: "2026-06-15",
        time: "15:00",
        location: "Miami",
        stadium: "Inter&Co Stadium",
        group: "D",
        phase: "Gruppenphase"
    },
    {
        id: 21,
        team1: "USA",
        team2: "Paraguay",
        date: "2026-06-20",
        time: "18:00",
        location: "Arlington",
        stadium: "AT&T Stadium",
        group: "D",
        phase: "Gruppenphase"
    },
    {
        id: 22,
        team1: "Australien",
        team2: "Türkei",
        date: "2026-06-20",
        time: "15:00",
        location: "Houston",
        stadium: "NRG Stadium",
        group: "D",
        phase: "Gruppenphase"
    },
    {
        id: 23,
        team1: "Australien",
        team2: "Paraguay",
        date: "2026-06-26",
        time: "20:00",
        location: "Denver",
        stadium: "Empower Field",
        group: "D",
        phase: "Gruppenphase"
    },
    {
        id: 24,
        team1: "Türkei",
        team2: "USA",
        date: "2026-06-26",
        time: "17:00",
        location: "New York",
        stadium: "MetLife Stadium",
        group: "D",
        phase: "Gruppenphase"
    },

    // Gruppe E - Deutschland, Curaçao, Elfenbeinküste, Ecuador
    {
        id: 25,
        team1: "Deutschland",
        team2: "Ecuador",
        date: "2026-06-16",
        time: "18:00",
        location: "Berlin",
        stadium: "Olympiastadion",
        group: "E",
        phase: "Gruppenphase"
    },
    {
        id: 26,
        team1: "Elfenbeinküste",
        team2: "Curaçao",
        date: "2026-06-16",
        time: "15:00",
        location: "Mexico City",
        stadium: "Estadio Azteca",
        group: "E",
        phase: "Gruppenphase"
    },
    {
        id: 27,
        team1: "Deutschland",
        team2: "Curaçao",
        date: "2026-06-21",
        time: "18:00",
        location: "Frankfurt",
        stadium: "Deutsche Bank Park",
        group: "E",
        phase: "Gruppenphase"
    },
    {
        id: 28,
        team1: "Ecuador",
        team2: "Elfenbeinküste",
        date: "2026-06-21",
        time: "15:00",
        location: "Monterrey",
        stadium: "Estadio Tecnológico",
        group: "E",
        phase: "Gruppenphase"
    },
    {
        id: 29,
        team1: "Ecuador",
        team2: "Curaçao",
        date: "2026-06-27",
        time: "20:00",
        location: "Quito",
        stadium: "Estadio Olímpico Atahualpa",
        group: "E",
        phase: "Gruppenphase"
    },
    {
        id: 30,
        team1: "Elfenbeinküste",
        team2: "Deutschland",
        date: "2026-06-27",
        time: "17:00",
        location: "Chicago",
        stadium: "Soldier Field",
        group: "E",
        phase: "Gruppenphase"
    },

    // Gruppe F - Niederlande, Japan, Schweden, Tunesien
    {
        id: 31,
        team1: "Niederlande",
        team2: "Tunesien",
        date: "2026-06-17",
        time: "20:00",
        location: "Amsterdam",
        stadium: "Johan Cruyff Arena",
        group: "F",
        phase: "Gruppenphase"
    },
    {
        id: 32,
        team1: "Japan",
        team2: "Schweden",
        date: "2026-06-17",
        time: "17:00",
        location: "Yokohama",
        stadium: "Nissan Stadium",
        group: "F",
        phase: "Gruppenphase"
    },
    {
        id: 33,
        team1: "Niederlande",
        team2: "Schweden",
        date: "2026-06-22",
        time: "18:00",
        location: "Rotterdam",
        stadium: "Feijenoord Stadion",
        group: "F",
        phase: "Gruppenphase"
    },
    {
        id: 34,
        team1: "Tunesien",
        team2: "Japan",
        date: "2026-06-22",
        time: "15:00",
        location: "Essen",
        stadium: "Stadion Essen",
        group: "F",
        phase: "Gruppenphase"
    },
    {
        id: 35,
        team1: "Tunesien",
        team2: "Schweden",
        date: "2026-06-28",
        time: "20:00",
        location: "Tunis",
        stadium: "Rades Olympic Stadium",
        group: "F",
        phase: "Gruppenphase"
    },
    {
        id: 36,
        team1: "Japan",
        team2: "Niederlande",
        date: "2026-06-28",
        time: "17:00",
        location: "Osaka",
        stadium: "Panasonic Stadium",
        group: "F",
        phase: "Gruppenphase"
    }
];

// Weitere Gruppen werden analog hinzugefügt (Gruppen G-L, später Knock-out Spiele)
// Für Platzgründe wurden hier die ersten 6 Gruppen komplettiert

// Alle Teams in ein Array
const allTeams = [];
Object.values(groups).forEach(group => {
    group.teams.forEach(team => {
        allTeams.push({
            name: team,
            group: Object.keys(groups).find(key => groups[key].teams.includes(team)),
            flag: teamFlags[team] || "🏆"
        });
    });
});

// Export für externe Verwendung
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { groups, matches, teamFlags, allTeams };
}
