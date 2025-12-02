// Data Constants
const STREAMS = ["Engineering", "Business", "Medicine", "Science", "Arts", "Law"];
const COUNTRIES = ["USA", "UK", "Canada", "Australia", "Germany", "India"];

const COLLEGES_DATA = [
    {
        id: 101,
        name: "Harvard University",
        country: "USA",
        location: "Cambridge, MA",
        rating: 9.9,
        reviews: "2.1k",
        rank: "#1 Global",
        img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
        logo: "https://ui-avatars.com/api/?name=HU&background=000&color=fff",
        fees: "$54,000 / yr",
        course: "MS Computer Science",
        stream: "Science",
        featured: true,
        chance: 15,
        fastTrack: false,
        tags: ["Ivy League", "Top Research"]
    },
    {
        id: 102,
        name: "University of Oxford",
        country: "UK",
        location: "Oxford, UK",
        rating: 9.8,
        reviews: "1.8k",
        rank: "#2 Global",
        img: "https://images.unsplash.com/photo-1548504769-900b70ed122e?auto=format&fit=crop&q=80&w=1000",
        logo: "https://ui-avatars.com/api/?name=OX&background=002147&color=fff",
        fees: "£32,000 / yr",
        course: "MBA",
        stream: "Business",
        featured: true,
        chance: 25,
        fastTrack: false,
        tags: ["Ancient Univ", "Rhodes"]
    },
    {
        id: 1,
        name: "Indian Institute of Technology (IIT)",
        country: "India",
        location: "New Delhi, India",
        rating: 9.3,
        reviews: "854",
        rank: "#1 in India",
        img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
        logo: "https://ui-avatars.com/api/?name=IIT&background=b91c1c&color=fff",
        fees: "₹ 2.25 Lakhs",
        course: "B.Tech CS",
        stream: "Engineering",
        featured: true,
        chance: 10,
        fastTrack: false,
        tags: ["Best ROI"]
    },
    {
        id: 103,
        name: "University of Toronto",
        country: "Canada",
        location: "Toronto, ON",
        rating: 9.4,
        reviews: "1.2k",
        rank: "#1 in Canada",
        img: "https://images.unsplash.com/photo-1599933399676-47b2b622837d?auto=format&fit=crop&q=80&w=1000",
        logo: "https://ui-avatars.com/api/?name=UT&background=002A5C&color=fff",
        fees: "CAD 45,000 / yr",
        course: "B.Sc Data Science",
        stream: "Science",
        featured: false,
        chance: 65, 
        fastTrack: true, 
        tags: ["Work Permit Friendly"]
    },
    {
        id: 104,
        name: "University of Melbourne",
        country: "Australia",
        location: "Melbourne, VIC",
        rating: 9.1,
        reviews: "950",
        rank: "#1 in Aus",
        img: "https://images.unsplash.com/photo-1510137600163-2729bc699982?auto=format&fit=crop&q=80&w=1000",
        logo: "https://ui-avatars.com/api/?name=UM&background=094796&color=fff",
        fees: "AUD 42,000 / yr",
        course: "Master of Eng.",
        stream: "Engineering",
        featured: false,
        chance: 72,
        fastTrack: true,
        tags: ["Research Hub"]
    },
    {
        id: 105,
        name: "Technical University of Munich",
        country: "Germany",
        location: "Munich, Germany",
        rating: 9.5,
        reviews: "780",
        rank: "#1 in Germany",
        img: "https://images.unsplash.com/photo-1590483863777-1a0670878a48?auto=format&fit=crop&q=80&w=1000",
        logo: "https://ui-avatars.com/api/?name=TUM&background=3070b3&color=fff",
        fees: "€ 148 / sem",
        course: "M.Sc Informatics",
        stream: "Engineering",
        featured: true,
        chance: 40,
        fastTrack: false,
        tags: ["No Tuition", "German Tech"]
    }
];

// Application State
let state = {
    search: "",
    stream: "",
    country: ""
};

// DOM Elements
const grid = document.getElementById('collegeGrid');
const emptyState = document.getElementById('emptyState');
const countLabel = document.getElementById('countLabel');
const resultsTitle = document.getElementById('resultsTitle');
const searchInput = document.getElementById('searchInput');

// Helper Functions
function getChanceColor(percentage) {
    if (percentage < 30) return 'bg-red-500';
    if (percentage < 60) return 'bg-yellow-500';
    return 'bg-green-500';
}

function getChanceLabel(percentage) {
    if (percentage < 30) return 'Ambitious';
    if (percentage < 60) return 'Target';
    return 'Safe';
}

// Core Logic
function renderGrid() {
    const filtered = COLLEGES_DATA.filter(c => {
        const searchLower = state.search.toLowerCase();
        const matchesSearch = 
            c.name.toLowerCase().includes(searchLower) || 
            c.location.toLowerCase().includes(searchLower) ||
            c.stream.toLowerCase().includes(searchLower) ||
            c.country.toLowerCase().includes(searchLower);
        
        const matchesStream = state.stream ? c.stream === state.stream : true;
        const matchesCountry = state.country ? c.country === state.country : true;

        return matchesSearch && matchesStream && matchesCountry;
    });

    countLabel.textContent = `Showing ${filtered.length} universities`;
    let titleHTML = 'Top Universities';
    if(state.country) titleHTML = `Universities in ${state.country}`;
    resultsTitle.innerHTML = titleHTML;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        grid.innerHTML = filtered.map(college => `
            <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover transition-all duration-300 group flex flex-col h-full">
                <div class="relative h-48 overflow-hidden">
                    <img src="${college.img}" alt="${college.name}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    <div class="absolute top-3 left-3 flex flex-wrap gap-2">
                        ${college.featured ? '<span class="bg-yellow-500/90 backdrop-blur-sm text-gray-900 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">Featured</span>' : ''}
                        ${college.fastTrack ? '<span class="bg-gray-900/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide flex items-center gap-1"><i class="fas fa-bolt text-yellow-500"></i> Fast Track</span>' : ''}
                    </div>

                    <button onclick="toggleHeart(this, event)" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white text-white hover:text-red-500 transition shadow-lg">
                        <i class="far fa-bookmark text-sm"></i>
                    </button>

                    <div class="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                        <img src="${college.logo}" class="w-12 h-12 rounded-lg bg-white p-1 shadow-md">
                        <div class="text-white flex-1 overflow-hidden">
                            <h3 class="font-bold text-lg leading-tight truncate shadow-black drop-shadow-md">${college.name}</h3>
                            <div class="flex items-center gap-2 text-xs text-gray-300 mt-1 font-medium">
                                <span><i class="fas fa-map-marker-alt text-yellow-500"></i> ${college.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-5 flex-1 flex flex-col">
                    
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${college.tags.map(tag => `<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium border border-gray-200">${tag}</span>`).join('')}
                    </div>

                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <div class="text-xs text-gray-400 font-semibold uppercase">Est. Fees</div>
                            <div class="font-bold text-gray-900 text-sm">${college.fees}</div>
                        </div>
                        <div>
                            <div class="text-xs text-gray-400 font-semibold uppercase">Ranking</div>
                            <div class="font-bold text-gray-900 text-sm">${college.rank}</div>
                        </div>
                    </div>

                    <div class="mt-auto mb-5 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-xs font-bold text-gray-600">Admission Probability</span>
                            <span class="text-xs font-bold ${getChanceColor(college.chance).replace('bg-', 'text-')}">${getChanceLabel(college.chance)}</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                            <div class="${getChanceColor(college.chance)} h-1.5 rounded-full progress-bar" style="width: ${college.chance}%"></div>
                        </div>
                    </div>

                    <div class="flex gap-3 mt-auto">
                        <button class="flex-1 bg-yellow-500 hover:bg-yellow-400 text-gray-900 py-2.5 rounded-lg text-sm font-bold transition shadow-md">
                            View Details
                        </button>
                        <button class="px-3 border border-gray-200 text-gray-400 hover:border-yellow-500 hover:text-yellow-500 rounded-lg transition">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderFilters() {
    document.getElementById('streamFilters').innerHTML = STREAMS.map(stream => `
        <label class="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="stream_desk" class="custom-radio hidden" 
                   ${state.stream === stream ? 'checked' : ''}
                   onchange="setFilter('stream', '${stream}')">
            <div class="w-4 h-4 rounded border border-gray-300 flex items-center justify-center transition group-hover:border-yellow-500">
                <div class="dot w-2 h-2 bg-white rounded-full hidden"></div>
            </div>
            <span class="text-sm ${state.stream === stream ? 'text-yellow-600 font-bold' : 'text-gray-600 group-hover:text-yellow-600'}">${stream}</span>
        </label>
    `).join('');

    document.getElementById('locationFilters').innerHTML = COUNTRIES.map(c => `
        <label class="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="loc_desk" class="custom-radio hidden" 
                   ${state.country === c ? 'checked' : ''}
                   onchange="setFilter('country', '${c}')">
            <div class="w-4 h-4 rounded border border-gray-300 flex items-center justify-center transition group-hover:border-yellow-500">
                <div class="dot w-2 h-2 bg-white rounded-full hidden"></div>
            </div>
            <span class="text-sm ${state.country === c ? 'text-yellow-600 font-bold' : 'text-gray-600 group-hover:text-yellow-600'}">${c}</span>
        </label>
    `).join('');
}

function renderMobileFilters() {
    const allFilters = [...STREAMS, ...COUNTRIES];
    const container = document.getElementById('mobileFilters');
    
    container.innerHTML = allFilters.map(item => {
        const isActive = state.stream === item || state.country === item;
        const type = STREAMS.includes(item) ? 'stream' : 'country';
        
        return `
        <button onclick="setFilter('${type}', '${isActive ? '' : item}')"
                class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition ${
                    isActive 
                    ? 'bg-yellow-500 text-gray-900 border-yellow-500 shadow-md' 
                    : 'bg-white text-gray-600 border-gray-200'
                }">
            ${item}
        </button>
    `}).join('');
}

function handleSearch(val) {
    state.search = val;
    renderGrid();
}

function setFilter(type, value) {
    if (state[type] === value) {
        state[type] = "";
    } else {
        state[type] = value;
    }
    renderFilters();
    renderMobileFilters();
    renderGrid();
}

function resetFilters() {
    state.search = "";
    state.stream = "";
    state.country = "";
    searchInput.value = "";
    
    document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
    
    renderFilters();
    renderMobileFilters();
    renderGrid();
}

function toggleHeart(btn, e) {
    e.stopPropagation(); 
    const icon = btn.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.classList.add('text-yellow-500', 'bg-white');
        btn.classList.remove('text-white', 'bg-white/20');
    } else {
        icon.classList.add('far');
        icon.classList.remove('fas');
        btn.classList.remove('text-yellow-500', 'bg-white');
        btn.classList.add('text-white', 'bg-white/20');
    }
}

function init() {
    renderFilters();
    renderMobileFilters();
    renderGrid();
}

// Initialize
init();