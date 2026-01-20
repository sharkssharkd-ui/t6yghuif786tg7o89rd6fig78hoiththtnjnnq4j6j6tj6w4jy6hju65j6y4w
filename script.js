// === КАРТА ИКОНОК ДЛЯ КАТЕГОРИЙ (FontAwesome) ===
const categoryIcons = {
    "Избранное": "fa-solid fa-star",
    "Главное": "fa-solid fa-house-chimney",
    "Утилиты": "fa-solid fa-screwdriver-wrench",
    "AI / Нейро": "fa-solid fa-brain",
    "Minecraft": "fa-solid fa-cubes",
    "Визуал": "fa-solid fa-eye",
    "Фан": "fa-solid fa-gamepad",
    "Космос": "fa-solid fa-rocket",
    "Аудио": "fa-solid fa-music",
    "Наука": "fa-solid fa-flask",
    "IT / Код": "fa-solid fa-code",
    "Магазины": "fa-solid fa-cart-shopping",
    "Учеба": "fa-solid fa-graduation-cap"
};

// === БАЗА ДАННЫХ ===
const db = [
    // --- ГЛАВНОЕ ---
    { cat: "Главное", name: "Bisquit Host", url: "https://bisquit.host/", desc: "Хостинг серверов" },
    { cat: "Главное", name: "Telegram Web", url: "https://web.telegram.org/", desc: "Мессенджер" },
    { cat: "Главное", name: "Discord", url: "https://discord.com/login", desc: "Войс чаты" },
    { cat: "Главное", name: "YouTube", url: "https://www.youtube.com/", desc: "Видеохостинг" },
    { cat: "Главное", name: "Фоксфорд", url: "https://foxford.ru/", desc: "Школа" },
    { cat: "Главное", name: "Яндекс Музыка", url: "https://music.yandex.ru/", desc: "Плеер" },

    // --- УТИЛИТЫ ---
    { cat: "Утилиты", name: "Cobalt Tools", url: "https://cobalt.tools/", desc: "Скачать видео без знаков" },
    { cat: "Утилиты", name: "VirusTotal", url: "https://www.virustotal.com/", desc: "Проверка на вирусы" },
    { cat: "Утилиты", name: "TempMail", url: "https://temp-mail.org/", desc: "Временная почта" },
    { cat: "Утилиты", name: "DeepL", url: "https://www.deepl.com/translator", desc: "Умный переводчик" },
    { cat: "Утилиты", name: "Convertio", url: "https://convertio.co/ru/", desc: "Конвертер файлов" },
    { cat: "Утилиты", name: "Remove.bg", url: "https://www.remove.bg/", desc: "Удалить фон" },
    { cat: "Утилиты", name: "Screenshot Guru", url: "https://screenshot.guru/", desc: "Скриншот всего сайта" },
    { cat: "Утилиты", name: "SpeedTest", url: "https://www.speedtest.net/", desc: "Замер скорости" },
    { cat: "Утилиты", name: "Check-Host", url: "https://check-host.net/", desc: "Проверка IP" },

    // --- НЕЙРОСЕТИ ---
    { cat: "AI / Нейро", name: "ChatGPT", url: "https://chat.openai.com/", desc: "Базовый чат-бот" },
    { cat: "AI / Нейро", name: "Google AI Studio", url: "https://aistudio.google.com/", desc: "Gemini Pro" },
    { cat: "AI / Нейро", name: "Grok", url: "https://grok.x.ai/", desc: "ИИ от Илона Маска" },
    { cat: "AI / Нейро", name: "Midjourney", url: "https://www.midjourney.com/", desc: "Генератор артов" },
    { cat: "AI / Нейро", name: "Suno", url: "https://suno.com/", desc: "Генерация музыки" },
    { cat: "AI / Нейро", name: "ElevenLabs", url: "https://elevenlabs.io/", desc: "Озвучка голосом" },
    { cat: "AI / Нейро", name: "VocalRemover", url: "https://vocalremover.org/ru/", desc: "Сделать минус (удалить голос)" },
    { cat: "AI / Нейро", name: "Hugging Face", url: "https://huggingface.co/", desc: "Библиотека моделей" },

    // --- MINECRAFT ---
    { cat: "Minecraft", name: "Modrinth", url: "https://modrinth.com/", desc: "Скачать моды (Топ)" },
    { cat: "Minecraft", name: "NameMC", url: "https://ru.namemc.com/", desc: "История скинов" },
    { cat: "Minecraft", name: "ChunkBase", url: "https://www.chunkbase.com/", desc: "Поиск данжей/биомов" },
    { cat: "Minecraft", name: "Minecraft Tools", url: "https://minecraft.tools/ru/", desc: "Генераторы крафтов" },
    { cat: "Minecraft", name: "MapMaking Tools", url: "https://mcstacker.net/", desc: "Генератор команд" },
    { cat: "Minecraft", name: "SpigotMC", url: "https://www.spigotmc.org/", desc: "Плагины для сервера" },
    { cat: "Minecraft", name: "VanillaTweaks", url: "https://vanillatweaks.net/", desc: "Кастомные ресурспаки" },
    { cat: "Minecraft", name: "MC Icons", url: "https://mcicons.ccleaf.com/", desc: "Иконки серверов" },

    // --- ВИЗУАЛ ---
    { cat: "Визуал", name: "CoolSymbol", url: "https://coolsymbol.com/", desc: "Символы и значки" },
    { cat: "Визуал", name: "Unicode Table", url: "https://unicode-table.com/ru/", desc: "Все символы мира" },
    { cat: "Визуал", name: "ZoomQuilt", url: "https://zoomquilt.org/", desc: "Бесконечный зум" },
    { cat: "Визуал", name: "Fluid Simulation", url: "https://paveldogreat.github.io/WebGL-Fluid-Simulation/", desc: "Жидкость" },
    { cat: "Визуал", name: "Pointer Pointer", url: "https://pointerpointer.com/", desc: "Указывают на курсор" },
    { cat: "Визуал", name: "ColorHunt", url: "https://colorhunt.co/", desc: "Палитры цветов" },
    { cat: "Визуал", name: "Piskel", url: "https://www.piskelapp.com/", desc: "Пиксель арт" },

    // --- ФАН ---
    { cat: "Фан", name: "Neal.fun", url: "https://neal.fun/", desc: "Лучшие мини-игры" },
    { cat: "Фан", name: "The Useless Web", url: "https://theuselessweb.com/", desc: "Случайный сайт" },
    { cat: "Фан", name: "GeoGuessr", url: "https://www.geoguessr.com/", desc: "Угадай страну" },
    { cat: "Фан", name: "Quick Draw", url: "https://quickdraw.withgoogle.com/", desc: "ИИ угадывает рисунки" },
    { cat: "Фан", name: "Akinator", url: "https://ru.akinator.com/", desc: "Джинн" },
    { cat: "Фан", name: "Little Alchemy 2", url: "https://littlealchemy2.com/", desc: "Алхимия" },

    // --- КОСМОС И МИР ---
    { cat: "Космос", name: "FlightRadar24", url: "https://www.flightradar24.com/", desc: "Самолеты онлайн" },
    { cat: "Космос", name: "Radio Garden", url: "http://radio.garden/", desc: "Радио на глобусе" },
    { cat: "Космос", name: "Stellarium", url: "https://stellarium-web.org/", desc: "Звездное небо" },
    { cat: "Космос", name: "Drive & Listen", url: "https://driveandlisten.herokuapp.com/", desc: "Поездка по городам" },
    { cat: "Космос", name: "WikiMapia", url: "https://wikimapia.org/", desc: "Карта объектов" },

    // --- IT ---
    { cat: "IT / Код", name: "GitHub", url: "https://github.com/", desc: "Репозитории" },
    { cat: "IT / Код", name: "StackOverflow", url: "https://stackoverflow.com/", desc: "Вопросы IT" },
    { cat: "IT / Код", name: "Replit", url: "https://replit.com/", desc: "IDE онлайн" },
    { cat: "IT / Код", name: "Roadmap.sh", url: "https://roadmap.sh/", desc: "Путь программиста" },
    { cat: "IT / Код", name: "Carbon", url: "https://carbon.now.sh/", desc: "Красивый код" },

    // --- МАГАЗИНЫ ---
    { cat: "Магазины", name: "SteamDB", url: "https://steamdb.info/", desc: "База Steam" },
    { cat: "Магазины", name: "FunPay", url: "https://funpay.com/", desc: "Биржа" },
    { cat: "Магазины", name: "Plati Market", url: "https://plati.market/", desc: "Ключи" },
    { cat: "Магазины", name: "Pepper", url: "https://www.pepper.ru/", desc: "Скидки" }
];

// === ЛОГИКА ===
let currentCategory = "Избранное";
let favorites = JSON.parse(localStorage.getItem('myStarFavs')) || [];

// 1. ФУНКЦИЯ: Исправление раскладки (ghbdtn -> привет)
function fixKeyboardLayout(text) {
    const replacer = {
        "q":"й", "w":"ц", "e":"у", "r":"к", "t":"е", "y":"н", "u":"г", 
        "i":"ш", "o":"щ", "p":"з", "[":"х", "]":"ъ", "a":"ф", "s":"ы", 
        "d":"в", "f":"а", "g":"п", "h":"р", "j":"о", "k":"л", "l":"д", 
        ";":"ж", "'":"э", "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и", 
        "n":"т", "m":"ь", ",":"б", ".":"ю", "/":"."
    };
    return text.toLowerCase().split('').map(char => replacer[char] || char).join('');
}

function init() {
    renderTabs();
    renderSites();
}

function renderTabs() {
    const nav = document.getElementById('tabs-nav');
    nav.innerHTML = "";

    const categories = ["Избранное", ...new Set(db.map(item => item.cat))];

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${cat === currentCategory ? 'active' : ''}`;
        
        // Подбираем иконку, если нет - ставим дефолтную
        const iconClass = categoryIcons[cat] || "fa-solid fa-folder";
        
        btn.innerHTML = `<i class="${iconClass}"></i> ${cat}`;
        btn.onclick = () => {
            currentCategory = cat;
            document.getElementById('search').value = "";
            renderTabs();
            renderSites();
        };
        nav.appendChild(btn);
    });
}

function renderSites(searchQuery = "") {
    const container = document.getElementById('content');
    container.innerHTML = "";

    let sitesToShow = [];
    const lowerQuery = searchQuery.toLowerCase();
    const fixedQuery = fixKeyboardLayout(lowerQuery); // Магия раскладки

    if (searchQuery.trim() !== "") {
        // Ищем и по обычному тексту, и по исправленной раскладке
        sitesToShow = db.filter(site => 
            site.name.toLowerCase().includes(lowerQuery) || 
            site.desc.toLowerCase().includes(lowerQuery) ||
            site.name.toLowerCase().includes(fixedQuery) ||
            site.desc.toLowerCase().includes(fixedQuery)
        );
    } else if (currentCategory === "Избранное") {
        sitesToShow = db.filter(site => favorites.includes(site.url));
        if (sitesToShow.length === 0) {
            container.innerHTML = `
                <div style='text-align:center; padding: 40px; color:#666;'>
                    <i class="fa-regular fa-star" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                    <h3>Здесь пусто</h3>
                    <p>Нажми на звездочку, чтобы добавить сайт сюда</p>
                </div>`;
            return;
        }
    } else {
        sitesToShow = db.filter(site => site.cat === currentCategory);
    }

    const grid = document.createElement('div');
    grid.className = 'grid';

    sitesToShow.forEach(site => {
        const isFav = favorites.includes(site.url);
        
        const card = document.createElement('div');
        card.className = 'card';
        
        const iconUrl = `https://www.google.com/s2/favicons?domain=${new URL(site.url).hostname}&sz=64`;

        card.innerHTML = `
            <a href="${site.url}" target="_blank" class="card-link">
                <img src="${iconUrl}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1006/1006771.png'">
                <div class="card-info">
                    <span class="card-title">${site.name}</span>
                    <span class="card-desc">${site.desc}</span>
                </div>
            </a>
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${site.url}')">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
            </button>
        `;
        grid.appendChild(card);
    });

    container.appendChild(grid);
}

window.toggleFavorite = function(url) {
    if (favorites.includes(url)) {
        favorites = favorites.filter(f => f !== url);
    } else {
        favorites.push(url);
    }
    localStorage.setItem('myStarFavs', JSON.stringify(favorites));
    renderSites(document.getElementById('search').value);
}

document.getElementById('search').addEventListener('input', (e) => {
    renderSites(e.target.value);
});

init();
