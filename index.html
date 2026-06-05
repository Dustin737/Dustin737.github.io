// Zustand der Anwendung
const appState = {
    favorites: JSON.parse(localStorage.getItem('wmFavorites')) || [],
    predictions: JSON.parse(localStorage.getItem('wmPredictions')) || [],
    colors: JSON.parse(localStorage.getItem('wmColors')) || {
        background: 'white',
        cards: '#f5f5f5',
        header: '#1a1a1a'
    }
};

// Farb-Mappings
const colorMap = {
    'white': '#ffffff',
    'black': '#1a1a1a',
    'red': '#ff0000',
    'yellow': '#ffff00',
    'blue': '#0000ff',
    'gray': '#888888',
    'purple': '#800080',
    'green': '#008000',
    'lightgreen': '#90ee90',
    'darkgreen': '#006400',
    'lightblue': '#87ceeb',
    'darkblue': '#00008b',
    'germany': 'linear-gradient(to right, black 0%, black 33%, red 33%, red 66%, gold 66%, gold 100%)'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    applyColors();
    renderMatches();
    renderTeams();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Tab Navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchTab(e.target.dataset.tab);
        });
    });

    // Search and Filter
    const searchInput = document.getElementById('searchInput');
    searchInput?.addEventListener('input', (e) => {
        filterMatches(e.target.value);
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterMatches('', e.target.dataset.filter);
        });
    });

    // Favorites Button
    document.getElementById('favoritesBtn')?.addEventListener('click', () => {
        openModal('favoritesModal');
    });

    // Settings Button
    document.getElementById('settingsBtn')?.addEventListener('click', () => {
        openModal('settingsModal');
    });

    // Close Modals
    document.getElementById('closeSettings')?.addEventListener('click', () => {
        closeModal('settingsModal');
    });

    document.getElementById('closeFavorites')?.addEventListener('click', () => {
        closeModal('favoritesModal');
    });

    // Settings - Color Selection
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const color = e.target.dataset.color;
            const type = e.target.dataset.type;
            
            // Remove previous selection
            document.querySelectorAll(`.color-btn[data-type="${type}"]`).forEach(b => {
                b.classList.remove('selected');
            });
            
            // Add new selection
            e.target.classList.add('selected');
            
            // Update state
            appState.colors[type] = color;
            localStorage.setItem('wmColors', JSON.stringify(appState.colors));
            applyColors();
        });
    });

    // Settings - Section Toggle
    document.querySelectorAll('.section-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.currentTarget.dataset.section;
            const colorOptions = document.getElementById(section);
            const isHidden = colorOptions.style.display === 'none';
            
            // Toggle display
            colorOptions.style.display = isHidden ? 'block' : 'none';
            
            // Toggle arrow
            const arrow = e.currentTarget.querySelector('.toggle-arrow');
            arrow.textContent = isHidden ? '▼' : '▶';
            e.currentTarget.classList.toggle('collapsed');
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        const settingsModal = document.getElementById('settingsModal');
        const favoritesModal = document.getElementById('favoritesModal');
        
        if (e.target === settingsModal) {
            closeModal('settingsModal');
        }
        if (e.target === favoritesModal) {
            closeModal('favoritesModal');
        }
    });
}

// Tab Switching
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName)?.classList.add('active');
    event.target?.classList.add('active');
    
    // Special handling for predictions tab
    if (tabName === 'predictions') {
        renderPredictions();
    }
}

// Render Matches
function renderMatches() {
    const grid = document.getElementById('matchesGrid');
    grid.innerHTML = '';
    
    matches.forEach(match => {
        const card = createMatchCard(match);
        grid.appendChild(card);
    });
    
    // Mark selected colors in settings
    updateColorSelection();
}

// Create Match Card
function createMatchCard(match) {
    const card = document.createElement('div');
    card.className = 'match-card';
    card.id = `match-${match.id}`;
    
    if (appState.favorites.includes(match.id)) {
        card.classList.add('favorite');
    }
    
    const date = new Date(match.date);
    const dateStr = date.toLocaleDateString('de-DE', {
        weekday: 'short',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    const isFavorite = appState.favorites.includes(match.id);
    
    card.innerHTML = `
        <div class="match-header">
            <span class="match-phase">${match.phase}</span>
            <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" 
                    onclick="toggleFavorite(${match.id})">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
        </div>
        <div class="match-teams">
            <span class="team-name">${teamFlags[match.team1] || '🏆'} ${match.team1}</span>
            <span class="vs-text">vs</span>
            <span class="team-name">${teamFlags[match.team2] || '🏆'} ${match.team2}</span>
        </div>
        <div class="match-info">
            <div class="info-item">
                <span class="info-icon">📅</span>
                <span>${dateStr}, ${match.time} Uhr</span>
            </div>
            <div class="info-item">
                <span class="info-icon">📍</span>
                <span>${match.location}</span>
            </div>
            <div class="info-item">
                <span class="info-icon">🏟️</span>
                <span>${match.stadium}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Render Teams
function renderTeams() {
    const grid = document.getElementById('teamsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    allTeams.forEach(team => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="team-flag">${team.flag}</div>
            <div class="team-name-header">${team.name}</div>
            <div class="team-group">${groups[team.group].name}</div>
            <div class="team-stats">
                <div class="stat-item">
                    <strong>Gruppe</strong><br>${team.group}
                </div>
                <div class="stat-item">
                    <strong>Spiele</strong><br>3
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Toggle Favorite
function toggleFavorite(matchId) {
    const index = appState.favorites.indexOf(matchId);
    if (index > -1) {
        appState.favorites.splice(index, 1);
    } else {
        appState.favorites.push(matchId);
    }
    
    localStorage.setItem('wmFavorites', JSON.stringify(appState.favorites));
    
    // Update UI
    const btn = document.querySelector(`#match-${matchId} .favorite-btn`);
    const card = document.getElementById(`match-${matchId}`);
    const isFavorite = appState.favorites.includes(matchId);
    
    btn.textContent = isFavorite ? '❤️' : '🤍';
    btn.classList.toggle('favorited');
    card.classList.toggle('favorite');
    
    // Update counter
    document.querySelector('.favorites-count').textContent = appState.favorites.length;
    
    // Update favorites modal if open
    if (document.getElementById('favoritesModal').classList.contains('show')) {
        renderFavoritesList();
    }
}

// Render Favorites
function renderFavoritesList() {
    const list = document.getElementById('favoritesList');
    
    if (appState.favorites.length === 0) {
        list.innerHTML = '<div class="no-favorites">Keine Favoriten hinzugefügt.</div>';
        return;
    }
    
    list.innerHTML = '';
    appState.favorites.forEach(matchId => {
        const match = matches.find(m => m.id === matchId);
        if (match) {
            const card = createMatchCard(match);
            list.appendChild(card);
        }
    });
}

// Filter Matches
function filterMatches(searchTerm = '', filterType = 'all') {
    const cards = document.querySelectorAll('.match-card');
    const searchLower = searchTerm.toLowerCase();
    
    cards.forEach(card => {
        const matchId = parseInt(card.id.replace('match-', ''));
        const match = matches.find(m => m.id === matchId);
        
        let shouldShow = true;
        
        // Filter by phase
        if (filterType === 'group') {
            shouldShow = match.phase === 'Gruppenphase';
        } else if (filterType === 'knockout') {
            shouldShow = match.phase !== 'Gruppenphase';
        }
        
        // Search filter
        if (searchTerm) {
            const matchesSearch = 
                match.team1.toLowerCase().includes(searchLower) ||
                match.team2.toLowerCase().includes(searchLower) ||
                match.location.toLowerCase().includes(searchLower) ||
                match.date.includes(searchTerm);
            
            shouldShow = shouldShow && matchesSearch;
        }
        
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// Predictions
function renderPredictions() {
    const container = document.getElementById('predictionsList');
    if (!container) return;
    
    container.innerHTML = `
        <div class="prediction-form">
            <div class="form-group">
                <label for="predictionMatch">Spiel wählen:</label>
                <select id="predictionMatch">
                    <option value="">-- Bitte wählen --</option>
                    ${matches.map(m => `
                        <option value="${m.id}">
                            ${teamFlags[m.team1]} ${m.team1} vs ${m.team2} ${teamFlags[m.team2]}
                        </option>
                    `).join('')}
                </select>
            </div>
            <div class="form-group">
                <label for="predictionTeam1Score">Tore ${matches.length > 0 ? matches[0].team1 : 'Team 1'}:</label>
                <input type="number" id="predictionTeam1Score" min="0" max="20" value="0">
            </div>
            <div class="form-group">
                <label for="predictionTeam2Score">Tore ${matches.length > 0 ? matches[0].team2 : 'Team 2'}:</label>
                <input type="number" id="predictionTeam2Score" min="0" max="20" value="0">
            </div>
            <button class="btn" onclick="addPrediction()">Prognose speichern</button>
        </div>
        
        <div class="predictions-grid" id="predictionsGrid"></div>
    `;
    
    // Add event listener for match change
    const matchSelect = document.getElementById('predictionMatch');
    matchSelect.addEventListener('change', (e) => {
        const match = matches.find(m => m.id === parseInt(e.target.value));
        if (match) {
            document.querySelector('label[for="predictionTeam1Score"]').textContent = `Tore ${match.team1}:`;
            document.querySelector('label[for="predictionTeam2Score"]').textContent = `Tore ${match.team2}:`;
        }
    });
    
    renderPredictionsGrid();
}

function renderPredictionsGrid() {
    const grid = document.getElementById('predictionsGrid');
    if (!grid) return;
    
    if (appState.predictions.length === 0) {
        grid.innerHTML = '<div class="empty-message">Keine Prognosen vorhanden. Füge deine erste Prognose hinzu!</div>';
        return;
    }
    
    grid.innerHTML = '';
    appState.predictions.forEach((pred, index) => {
        const match = matches.find(m => m.id === pred.matchId);
        if (match) {
            const card = document.createElement('div');
            card.className = 'prediction-card';
            card.innerHTML = `
                <div class="prediction-match">
                    ${teamFlags[match.team1]} ${match.team1} vs ${match.team2} ${teamFlags[match.team2]}
                </div>
                <div class="prediction-score">
                    ${pred.team1Score} : ${pred.team2Score}
                </div>
                <button class="btn btn-secondary" onclick="deletePrediction(${index})">Löschen</button>
            `;
            grid.appendChild(card);
        }
    });
}

function addPrediction() {
    const matchId = parseInt(document.getElementById('predictionMatch').value);
    const team1Score = parseInt(document.getElementById('predictionTeam1Score').value) || 0;
    const team2Score = parseInt(document.getElementById('predictionTeam2Score').value) || 0;
    
    if (!matchId) {
        alert('Bitte ein Spiel wählen!');
        return;
    }
    
    // Check if prediction exists
    const existingIndex = appState.predictions.findIndex(p => p.matchId === matchId);
    if (existingIndex > -1) {
        appState.predictions[existingIndex] = { matchId, team1Score, team2Score };
    } else {
        appState.predictions.push({ matchId, team1Score, team2Score });
    }
    
    localStorage.setItem('wmPredictions', JSON.stringify(appState.predictions));
    renderPredictionsGrid();
    
    // Clear form
    document.getElementById('predictionMatch').value = '';
    document.getElementById('predictionTeam1Score').value = '0';
    document.getElementById('predictionTeam2Score').value = '0';
}

function deletePrediction(index) {
    appState.predictions.splice(index, 1);
    localStorage.setItem('wmPredictions', JSON.stringify(appState.predictions));
    renderPredictionsGrid();
}

// Colors & Styling
function applyColors() {
    const root = document.documentElement;
    
    const bgColor = colorMap[appState.colors.background] || '#ffffff';
    const cardColor = colorMap[appState.colors.cards] || '#f5f5f5';
    const headerColor = colorMap[appState.colors.header] || '#1a1a1a';
    
    if (appState.colors.background === 'germany') {
        document.body.style.background = 'linear-gradient(to right, black 0%, black 33%, red 33%, red 66%, gold 66%, gold 100%)';
    } else {
        document.body.style.backgroundColor = bgColor;
    }
    
    const header = document.querySelector('.header');
    if (appState.colors.header === 'germany') {
        header.style.background = 'linear-gradient(to right, black 0%, black 33%, red 33%, red 66%, gold 66%, gold 100%)';
    } else {
        header.style.backgroundColor = headerColor;
    }
    
    // Update card styling
    const style = document.createElement('style');
    style.textContent = `
        .match-card, .team-card, .prediction-card {
            background-color: ${cardColor} !important;
        }
    `;
    document.head.appendChild(style);
    
    root.style.setProperty('--bg-color', bgColor);
    root.style.setProperty('--card-color', cardColor);
    root.style.setProperty('--header-color', headerColor);
}

function updateColorSelection() {
    document.querySelectorAll('.color-btn').forEach(btn => {
        const color = btn.dataset.color;
        const type = btn.dataset.type;
        
        if (appState.colors[type] === color) {
            btn.classList.add('selected');
        }
    });
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    
    if (modalId === 'favoritesModal') {
        renderFavoritesList();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
}

// Initialize favorites counter
window.addEventListener('load', () => {
    document.querySelector('.favorites-count').textContent = appState.favorites.length;
});
