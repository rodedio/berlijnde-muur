// Initialize Supabase client
const supabaseUrl = 'https://wmiuonaxqizmzplwymxr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtaXVvbmF4cWl6bXpwbHd5bXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMDMyODYsImV4cCI6MjA2MDU3OTI4Nn0.z9a_zgEs6EDp5-GmnhkkeINOgoQYSvZPMmpcCRNjN18';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Language data
const translations = {
    nl: {
        title: 'Berlijnse Muur Tijdlijn',
        events: [
            {
                id: 1,
                date: '13 augustus 1961',
                title: 'Start bouw Berlijnse Muur',
                description: 'De DDR begint met de bouw van de Berlijnse Muur, die West-Berlijn van Oost-Berlijn scheidt.',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Berlinermauer.jpg/800px-Berlinermauer.jpg'
            },
            {
                id: 2,
                date: '17 augustus 1962',
                title: 'Dood van Peter Fechter',
                description: 'Peter Fechter wordt neergeschoten terwijl hij probeert over de muur te klimmen. Hij sterft na uren van hulpeloosheid.',
                location: { lat: 52.5074, lng: 13.3904 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Peter_Fechter_Memorial.jpg/800px-Peter_Fechter_Memorial.jpg'
            },
            {
                id: 3,
                date: '26 juni 1963',
                title: 'Ich bin ein Berliner',
                description: 'President John F. Kennedy bezoekt West-Berlijn en spreekt zijn beroemde woorden "Ich bin ein Berliner".',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/JFK_in_berlin.jpg/800px-JFK_in_berlin.jpg'
            },
            {
                id: 4,
                date: '12 juni 1987',
                title: 'Tear down this wall',
                description: 'President Ronald Reagan roept Michail Gorbatsjov op om de muur neer te halen met de woorden "Mr. Gorbachev, tear down this wall!"',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Reagan_Brandenburg_Gate_1987.jpg/800px-Reagan_Brandenburg_Gate_1987.jpg'
            },
            {
                id: 5,
                date: '9 november 1989',
                title: 'Val van de Berlijnse Muur',
                description: 'De Berlijnse Muur valt na een aankondiging van de DDR-regering dat burgers vrij mogen reizen.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Berlinermauer.jpg/800px-Berlinermauer.jpg'
            },
            {
                id: 6,
                date: '1961-1989',
                title: 'Checkpoint Charlie',
                description: 'Checkpoint Charlie was de bekendste grensovergang tussen Oost- en West-Berlijn. Het werd een symbool van de Koude Oorlog.',
                location: { lat: 52.5074, lng: 13.3904 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Checkpoint_Charlie_1961.jpg/800px-Checkpoint_Charlie_1961.jpg'
            },
            {
                id: 7,
                date: '1971',
                title: 'Vier-Mogendheden-Akkoord',
                description: 'Het akkoord verbeterde de toegang tot West-Berlijn en verminderde spanningen tussen Oost en West.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Berlin_1971.jpg/800px-Berlin_1971.jpg'
            },
            {
                id: 8,
                date: '1985',
                title: 'Michail Gorbatsjov aan de macht',
                description: 'Gorbatsjov wordt leider van de Sovjet-Unie en introduceert hervormingen (glasnost en perestrojka) die uiteindelijk leiden tot de val van de Muur.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Gorbachev_1987.jpg/800px-Gorbachev_1987.jpg'
            },
            {
                id: 9,
                date: '3 oktober 1990',
                title: 'Duitse Hereniging',
                description: 'Oost- en West-Duitsland worden officieel herenigd, wat het definitieve einde betekent van de deling van Duitsland.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/German_reunification_celebration.jpg/800px-German_reunification_celebration.jpg'
            }
        ]
    },
    de: {
        title: 'Berliner Mauer Zeitleiste',
        events: [
            {
                id: 1,
                date: '13. August 1961',
                title: 'Baubeginn der Berliner Mauer',
                description: 'Die DDR beginnt mit dem Bau der Berliner Mauer, die West-Berlin von Ost-Berlin trennt.',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Berlinermauer.jpg/800px-Berlinermauer.jpg'
            },
            {
                id: 2,
                date: '17. August 1962',
                title: 'Tod von Peter Fechter',
                description: 'Peter Fechter wird erschossen, als er versucht, über die Mauer zu klettern. Er stirbt nach Stunden der Hilflosigkeit.',
                location: { lat: 52.5074, lng: 13.3904 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Peter_Fechter_Memorial.jpg/800px-Peter_Fechter_Memorial.jpg'
            },
            {
                id: 3,
                date: '26. Juni 1963',
                title: 'Ich bin ein Berliner',
                description: 'Präsident John F. Kennedy besucht West-Berlin und spricht seine berühmten Worte "Ich bin ein Berliner".',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/JFK_in_berlin.jpg/800px-JFK_in_berlin.jpg'
            },
            {
                id: 4,
                date: '12. Juni 1987',
                title: 'Tear down this wall',
                description: 'Präsident Ronald Reagan fordert Michail Gorbatschow auf, die Mauer niederzureißen mit den Worten "Mr. Gorbachev, tear down this wall!"',
                location: { lat: 52.5163, lng: 13.3777 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Reagan_Brandenburg_Gate_1987.jpg/800px-Reagan_Brandenburg_Gate_1987.jpg'
            },
            {
                id: 5,
                date: '9. November 1989',
                title: 'Fall der Berliner Mauer',
                description: 'Die Berliner Mauer fällt nach einer Ankündigung der DDR-Regierung, dass Bürger frei reisen dürfen.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Berlinermauer.jpg/800px-Berlinermauer.jpg'
            },
            {
                id: 6,
                date: '1961-1989',
                title: 'Checkpoint Charlie',
                description: 'Checkpoint Charlie war der bekannteste Grenzübergang zwischen Ost- und West-Berlin. Er wurde zu einem Symbol des Kalten Krieges.',
                location: { lat: 52.5074, lng: 13.3904 },
                cityWide: false,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Checkpoint_Charlie_1961.jpg/800px-Checkpoint_Charlie_1961.jpg'
            },
            {
                id: 7,
                date: '1971',
                title: 'Viermächteabkommen',
                description: 'Das Abkommen verbesserte den Zugang zu West-Berlin und reduzierte die Spannungen zwischen Ost und West.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Berlin_1971.jpg/800px-Berlin_1971.jpg'
            },
            {
                id: 8,
                date: '1985',
                title: 'Michail Gorbatschow an der Macht',
                description: 'Gorbatschow wird Führer der Sowjetunion und führt Reformen (Glasnost und Perestroika) ein, die schließlich zum Fall der Mauer führen.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Gorbachev_1987.jpg/800px-Gorbachev_1987.jpg'
            },
            {
                id: 9,
                date: '3. Oktober 1990',
                title: 'Deutsche Wiedervereinigung',
                description: 'Ost- und Westdeutschland werden offiziell wiedervereinigt, was das endgültige Ende der deutschen Teilung bedeutet.',
                location: { lat: 52.5200, lng: 13.4050 },
                cityWide: true,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/German_reunification_celebration.jpg/800px-German_reunification_celebration.jpg'
            }
        ]
    }
};

let currentLanguage = 'nl';
let markers = [];
let timelineItems = [];

// Initialize map
const map = L.map('map').setView([52.520008, 13.404954], 12);

// Light mode tiles
const lightTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
});

// Dark mode tiles (CartoDB Dark Matter)
const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
});

// Start met lightTiles
lightTiles.addTo(map);

function setMapTheme(theme) {
    // Altijd lightTiles gebruiken, ongeacht het thema
    if (map.hasLayer(darkTiles)) map.removeLayer(darkTiles);
    if (!map.hasLayer(lightTiles)) lightTiles.addTo(map);
}

// Detecteer en wissel bij laden
const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
setMapTheme(initialTheme);

// Pas aan bij wisselen van dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setMapTheme(newTheme);
});

// Initialize dark mode
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Existing DOMContentLoaded code...
    document.getElementById('languageSwitch').setAttribute('data-lang', 'nl');
    document.querySelector('[data-lang-nl]').classList.add('active');
    document.querySelector('[data-lang-de]').classList.remove('active');
    
    // Add event listeners
    document.getElementById('languageSwitch').addEventListener('click', switchLanguage);
    
    // Add reset map functionality
    document.getElementById('resetMap').addEventListener('click', () => {
        map.setView([52.520008, 13.404954], 12);
    });
    
    // Add sources toggle functionality
    const sourcesToggle = document.getElementById('sourcesToggle');
    const sidebar = document.getElementById('sidebar');
    
    sourcesToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        sourcesToggle.classList.toggle('hide', sidebar.classList.contains('active'));
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !sourcesToggle.contains(e.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            sourcesToggle.classList.remove('hide');
        }
    });
    
    // Update sources toggle text based on language
    document.querySelector('#sourcesToggle [data-lang-nl]').classList.add('active');
    document.querySelector('#sourcesToggle [data-lang-de]').classList.remove('active');
    
    // Load initial timeline data
    loadTimelineData();
});

function switchLanguage() {
    const targetLanguage = currentLanguage === 'nl' ? 'de' : 'nl';
    document.getElementById('languageSwitch').setAttribute('data-lang', targetLanguage);
    currentLanguage = targetLanguage;
    
    // Toggle language classes for all elements
    document.querySelectorAll('[data-lang-nl]').forEach(el => el.classList.toggle('active'));
    document.querySelectorAll('[data-lang-de]').forEach(el => el.classList.toggle('active'));
    
    loadTimelineData();
}

function loadTimelineData() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = ''; // Clear existing content
    
    const events = translations[currentLanguage].events;
    
    events.forEach((event, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.setAttribute('data-id', event.id);
        
        const dateElement = document.createElement('div');
        dateElement.className = 'timeline-date';
        dateElement.textContent = event.date;
        dateElement.setAttribute('data-lang-nl', '');
        dateElement.setAttribute('data-lang-de', '');
        
        const titleElement = document.createElement('div');
        titleElement.className = 'timeline-title';
        titleElement.textContent = event.title;
        titleElement.setAttribute('data-lang-nl', '');
        titleElement.setAttribute('data-lang-de', '');
        
        const contentElement = document.createElement('div');
        contentElement.className = 'timeline-content';
        contentElement.onclick = () => showPopup(index);
        
        contentElement.appendChild(dateElement);
        contentElement.appendChild(titleElement);
        
        timelineItem.appendChild(contentElement);
        timeline.appendChild(timelineItem);
    });
    
    // Update visibility based on current language
    document.querySelectorAll('[data-lang-nl]').forEach(el => {
        el.classList.toggle('active', currentLanguage === 'nl');
    });
    document.querySelectorAll('[data-lang-de]').forEach(el => {
        el.classList.toggle('active', currentLanguage === 'de');
    });
    
    // Update map markers
    updateMapMarkers(events);
}

function updateMapMarkers(events) {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    
    // Add new markers
    events.forEach(event => {
        if (!event.cityWide) {
            const marker = L.marker([event.location.lat, event.location.lng])
                .bindPopup(`
                    <h3>${event.title}</h3>
                    <p>${event.date}</p>
                    <p>${event.description}</p>
                    <img src="${event.image}" alt="${event.title}" style="max-width: 200px; margin-top: 10px;">
                `);
            marker.addTo(map);
            markers.push(marker);
        }
    });
}

function showPopup(index) {
    const event = translations[currentLanguage].events[index];
    const popup = document.querySelector('.timeline-popup');
    
    // Update popup content
    popup.querySelector('.popup-title').textContent = event.title;
    popup.querySelector('.popup-date').textContent = event.date;
    popup.querySelector('.popup-description').textContent = event.description;
    popup.querySelector('.popup-image').src = event.image;
    popup.querySelector('.popup-image').alt = event.title;
    
    // Show popup
    popup.classList.add('active');
    
    // Center map on location
    if (event.location) {
        map.setView([event.location.lat, event.location.lng], 15);
    }
}

// Add event listener for popup close button
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.popup-close');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            document.querySelector('.timeline-popup').classList.remove('active');
        });
    }

    // Add ESC key listener to close popup
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const popup = document.querySelector('.timeline-popup');
            if (popup.classList.contains('active')) {
                popup.classList.remove('active');
            }
        }
    });
}); 