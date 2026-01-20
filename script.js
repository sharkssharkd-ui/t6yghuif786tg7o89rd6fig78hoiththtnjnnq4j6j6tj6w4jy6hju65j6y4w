document.addEventListener('DOMContentLoaded', () => {
    
    // === ИКОНКИ КАТЕГОРИЙ ===
    const categoryIcons = {
        "Избранное": "fa-solid fa-star",
        "Главное": "fa-solid fa-house",
        "Утилиты": "fa-solid fa-toolbox",
        "AI / Нейро": "fa-solid fa-robot",
        "Minecraft": "fa-solid fa-cube",
        "Визуал": "fa-solid fa-palette",
        "Фан": "fa-solid fa-gamepad",
        "Космос": "fa-solid fa-user-astronaut",
        "Аудио": "fa-solid fa-headphones",
        "Наука": "fa-solid fa-atom",
        "IT / Код": "fa-solid fa-terminal",
        "Магазины": "fa-solid fa-cart-shopping",
        "Учеба": "fa-solid fa-book-open"
    };

    // === БАЗА ДАННЫХ ===
    // Я добавил русские названия в описания (desc), чтобы поиск их находил!
    const db = [
        // === ГЛАВНОЕ ===
        { cat: "Главное", name: "Bisquit Host", url: "https://bisquit.host/", desc: "Хостинг серверов (бисквит)" },
        { cat: "Главное", name: "Telegram Web", url: "https://web.telegram.org/", desc: "Телеграм (тг, telegram)" },
        { cat: "Главное", name: "Discord", url: "https://discord.com/login", desc: "Дискорд (дс, discord)" },
        { cat: "Главное", name: "YouTube", url: "https://www.youtube.com/", desc: "Ютуб видео (youtube)" },
        { cat: "Главное", name: "VK", url: "https://vk.com/", desc: "ВКонтакте (вк)" },
        { cat: "Главное", name: "Gmail", url: "https://mail.google.com/", desc: "Почта Гугл (google)" },
        { cat: "Главное", name: "Twitch", url: "https://www.twitch.tv/", desc: "Твич стримы (twitch)" },
        { cat: "Главное", name: "Яндекс Почта", url: "https://mail.yandex.ru/", desc: "Почта Яндекс" },
        { cat: "Главное", name: "Google Drive", url: "https://drive.google.com/", desc: "Гугл Диск" },
        { cat: "Главное", name: "Яндекс Диск", url: "https://disk.yandex.ru/", desc: "Облако Яндекс" },
        { cat: "Главное", name: "Pinterest", url: "https://www.pinterest.com/", desc: "Пинтерест (картинки)" },
        { cat: "Главное", name: "TikTok", url: "https://www.tiktok.com/", desc: "ТикТок (tiktok)" },
        { cat: "Главное", name: "Rutube", url: "https://rutube.ru/", desc: "Рутуб видео" },
        { cat: "Главное", name: "Dzen", url: "https://dzen.ru/", desc: "Дзен (Яндекс)" },
        { cat: "Главное", name: "Kinopoisk", url: "https://www.kinopoisk.ru/", desc: "Кинопоиск (фильмы)" },
        { cat: "Главное", name: "Google Maps", url: "https://www.google.com/maps", desc: "Гугл Карты" },
        { cat: "Главное", name: "2GIS", url: "https://2gis.ru/", desc: "2ГИС Карты" },

        // === УТИЛИТЫ ===
        { cat: "Утилиты", name: "Cobalt Tools", url: "https://cobalt.tools/", desc: "Скачать видео без водяных знаков" },
        { cat: "Утилиты", name: "VirusTotal", url: "https://www.virustotal.com/", desc: "ВирусТотал (проверка на вирусы)" },
        { cat: "Утилиты", name: "DeepL", url: "https://www.deepl.com/translator", desc: "Переводчик (лучше гугла)" },
        { cat: "Утилиты", name: "Convertio", url: "https://convertio.co/ru/", desc: "Конвертер файлов (любой формат)" },
        { cat: "Утилиты", name: "TempMail", url: "https://temp-mail.org/", desc: "Временная почта" },
        { cat: "Утилиты", name: "SpeedTest", url: "https://www.speedtest.net/", desc: "Спидтест (скорость интернета)" },
        { cat: "Утилиты", name: "Check-Host", url: "https://check-host.net/", desc: "Чек Хост (IP и пинг)" },
        { cat: "Утилиты", name: "Remove.bg", url: "https://www.remove.bg/", desc: "Удалить фон с фото" },
        { cat: "Утилиты", name: "Photopea", url: "https://www.photopea.com/", desc: "Фотошоп онлайн (photoshop)" },
        { cat: "Утилиты", name: "Waifu2x", url: "https://waifu2x.udp.jp/", desc: "Улучшить качество фото (апскейл)" },
        { cat: "Утилиты", name: "TinyPNG", url: "https://tinypng.com/", desc: "Сжать фото (уменьшить вес)" },
        { cat: "Утилиты", name: "Screenshot Guru", url: "https://screenshot.guru/", desc: "Скриншот сайта целиком" },
        { cat: "Утилиты", name: "Privnote", url: "https://privnote.com/", desc: "Записка сгорает после прочтения" },
        { cat: "Утилиты", name: "Pastebin", url: "https://pastebin.com/", desc: "Пастбин (код текстом)" },
        { cat: "Утилиты", name: "IP Logger", url: "https://iplogger.org/", desc: "Айпи логгер (сокращение ссылок)" },
        { cat: "Утилиты", name: "Archive.org", url: "https://web.archive.org/", desc: "Архив интернета (wayback machine)" },

        // === AI / НЕЙРОСЕТИ ===
        { cat: "AI / Нейро", name: "ChatGPT", url: "https://chat.openai.com/", desc: "Чат ГПТ (OpenAI)" },
        { cat: "AI / Нейро", name: "Google Gemini", url: "https://gemini.google.com/", desc: "Гугл Джемини (AI)" },
        { cat: "AI / Нейро", name: "Midjourney", url: "https://www.midjourney.com/", desc: "Миджорни (генерация картинок)" },
        { cat: "AI / Нейро", name: "Suno", url: "https://suno.com/", desc: "Суно (создание музыки)" },
        { cat: "AI / Нейро", name: "Grok", url: "https://grok.x.ai/", desc: "Грок (ИИ Илона Маска)" },
        { cat: "AI / Нейро", name: "Claude AI", url: "https://claude.ai/", desc: "Клод (умный чат)" },
        { cat: "AI / Нейро", name: "Character.ai", url: "https://beta.character.ai/", desc: "Общение с персонажами" },
        { cat: "AI / Нейро", name: "VocalRemover", url: "https://vocalremover.org/ru/", desc: "Удалить голос из песни (минус)" },
        { cat: "AI / Нейро", name: "ElevenLabs", url: "https://elevenlabs.io/", desc: "Озвучка текста голосом" },
        { cat: "AI / Нейро", name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", desc: "Создание видео из текста" },

        // === MINECRAFT ===
        { cat: "Minecraft", name: "Modrinth", url: "https://modrinth.com/", desc: "Модринт (скачать моды)" },
        { cat: "Minecraft", name: "CurseForge", url: "https://www.curseforge.com/minecraft", desc: "Курсфордж (база модов)" },
        { cat: "Minecraft", name: "NameMC", url: "https://ru.namemc.com/", desc: "НеймМС (скины и ники)" },
        { cat: "Minecraft", name: "PlanetMinecraft", url: "https://www.planetminecraft.com/", desc: "Планета Майнкрафт (карты)" },
        { cat: "Minecraft", name: "ChunkBase", url: "https://www.chunkbase.com/", desc: "Чанкбейс (поиск биомов/сиды)" },
        { cat: "Minecraft", name: "Minecraft Heads", url: "https://minecraft-heads.com/", desc: "Головы для декора" },
        { cat: "Minecraft", name: "Minecraft Tools", url: "https://minecraft.tools/ru/", desc: "Генераторы крафтов" },
        { cat: "Minecraft", name: "MapMaking Tools", url: "https://mcstacker.net/", desc: "Генератор команд (summon)" },
        { cat: "Minecraft", name: "SpigotMC", url: "https://www.spigotmc.org/", desc: "Спигот (плагины)" },
        { cat: "Minecraft", name: "Nova Skin", url: "https://novaskin.me/", desc: "Нова Скин (редактор)" },
        { cat: "Minecraft", name: "Aternos", url: "https://aternos.org/", desc: "Атернос (бесплатный хост)" },
        { cat: "Minecraft", name: "VanillaTweaks", url: "https://vanillatweaks.net/", desc: "Ванилла Твикс (ресурспаки)" },
        { cat: "Minecraft", name: "Litematica", url: "https://masa.dy.fi/litematica/", desc: "Лайтематика (схемы)" },

        // === ВИЗУАЛ ===
        { cat: "Визуал", name: "CoolSymbol", url: "https://coolsymbol.com/", desc: "Кул Символ (значки и шрифты)" },
        { cat: "Визуал", name: "Unicode Table", url: "https://unicode-table.com/ru/", desc: "Таблица Юникода" },
        { cat: "Визуал", name: "Kaomoji", url: "https://kaomoji.ru/", desc: "Каомодзи (японские смайлы)" },
        { cat: "Визуал", name: "ColorHunt", url: "https://colorhunt.co/", desc: "Палитры цветов" },
        { cat: "Визуал", name: "Google Fonts", url: "https://fonts.google.com/", desc: "Гугл Шрифты" },
        { cat: "Визуал", name: "Piskel", url: "https://www.piskelapp.com/", desc: "Пискел (рисовать спрайты)" },
        { cat: "Визуал", name: "EzGif", url: "https://ezgif.com/", desc: "GIF редактор" },
        { cat: "Визуал", name: "Figma", url: "https://www.figma.com/", desc: "Фигма (дизайн интерфейсов)" },

        // === ФАН & РАЗВЛЕЧЕНИЯ ===
        { cat: "Фан", name: "Neal.fun", url: "https://neal.fun/", desc: "Нил Фан (мини игры)" },
        { cat: "Фан", name: "GeoGuessr", url: "https://www.geoguessr.com/", desc: "Геогессер (угадай страну)" },
        { cat: "Фан", name: "Akinator", url: "https://ru.akinator.com/", desc: "Акинатор (джинн)" },
        { cat: "Фан", name: "The Useless Web", url: "https://theuselessweb.com/", desc: "Бесполезный сайт" },
        { cat: "Фан", name: "Quick Draw", url: "https://quickdraw.withgoogle.com/", desc: "Угадай рисунок" },
        { cat: "Фан", name: "Little Alchemy 2", url: "https://littlealchemy2.com/", desc: "Алхимия 2" },
        { cat: "Фан", name: "Hacker Typer", url: "https://hackertyper.net/", desc: "Симулятор хакера" },
        { cat: "Фан", name: "Pointer Pointer", url: "https://pointerpointer.com/", desc: "Палец на курсор" },

        // === КОСМОС ===
        { cat: "Космос", name: "FlightRadar24", url: "https://www.flightradar24.com/", desc: "ФлайтРадар (самолеты)" },
        { cat: "Космос", name: "Stellarium", url: "https://stellarium-web.org/", desc: "Карта звездного неба" },
        { cat: "Космос", name: "Radio Garden", url: "http://radio.garden/", desc: "Радио Гарден (глобус)" },
        { cat: "Космос", name: "Drive & Listen", url: "https://driveandlisten.herokuapp.com/", desc: "Поездка по городам" },
        { cat: "Космос", name: "ISS Live", url: "https://eol.jsc.nasa.gov/ESRS/HDEV/", desc: "МКС Прямой эфир" },

        // === IT / КОД ===
        { cat: "IT / Код", name: "GitHub", url: "https://github.com/", desc: "Гитхаб (код)" },
        { cat: "IT / Код", name: "StackOverflow", url: "https://stackoverflow.com/", desc: "СтекОверфлоу (вопросы)" },
        { cat: "IT / Код", name: "Replit", url: "https://replit.com/", desc: "Реплит (IDE онлайн)" },
        { cat: "IT / Код", name: "Roadmap.sh", url: "https://roadmap.sh/", desc: "Карта развития программиста" },
        { cat: "IT / Код", name: "Carbon", url: "https://carbon.now.sh/", desc: "Красивый скриншот кода" },
        { cat: "IT / Код", name: "RegExr", url: "https://regexr.com/", desc: "Регулярные выражения" },

        // === АУДИО ===
        { cat: "Аудио", name: "Яндекс Музыка", url: "https://music.yandex.ru/", desc: "Яндекс Плеер" },
        { cat: "Аудио", name: "Spotify", url: "https://open.spotify.com/", desc: "Спотифай" },
        { cat: "Аудио", name: "MyInstants", url: "https://www.myinstants.com/", desc: "Звуки мемов" },
        { cat: "Аудио", name: "Incredibox", url: "https://www.incredibox.com/", desc: "Битбокс игра" },
        { cat: "Аудио", name: "Rainyscope", url: "https://rainyscope.com/", desc: "Звуки дождя" },

        // === МАГАЗИНЫ ===
        { cat: "Магазины", name: "Steam", url: "https://store.steampowered.com/", desc: "Стим (игры)" },
        { cat: "Магазины", name: "SteamDB", url: "https://steamdb.info/", desc: "База Стим (цены)" },
        { cat: "Магазины", name: "FunPay", url: "https://funpay.com/", desc: "Фанпей (биржа)" },
        { cat: "Магазины", name: "Plati Market", url: "https://plati.market/", desc: "Плати Маркет (ключи)" },
        { cat: "Магазины", name: "Pepper", url: "https://www.pepper.ru/", desc: "Пеппер (скидки)" },
        { cat: "Магазины", name: "DNS", url: "https://www.dns-shop.ru/", desc: "ДНС (техника)" },
        { cat: "Магазины", name: "Wildberries", url: "https://www.wildberries.ru/", desc: "Вайлдберриз" },
        { cat: "Магазины", name: "Ozon", url: "https://www.ozon.ru/", desc: "Озон" },

        // === УЧЕБА ===
        { cat: "Учеба", name: "Фоксфорд", url: "https://foxford.ru/", desc: "Школа Фоксфорд" },
        { cat: "Учеба", name: "Википедия", url: "https://ru.wikipedia.org/", desc: "Википедия" },
        { cat: "Учеба", name: "WolframAlpha", url: "https://www.wolframalpha.com/", desc: "Вольфрам (решение задач)" },
        { cat: "Учеба", name: "Gdz.ru", url: "https://gdz.ru/", desc: "ГДЗ (решебники)" },
        { cat: "Учеба", name: "Stepik", url: "https://stepik.org/", desc: "Степик (курсы)" },
        { cat: "Учеба", name: "Duolingo", url: "https://www.duolingo.com/", desc: "Дуолинго (языки)" }
    ];

    // === ЛОГИКА ===
    let currentCategory = "Избранное";
    let favorites = JSON.parse(localStorage.getItem('vesperiaFavs')) || [];

    // 1. Исправление раскладки (ghbdtn -> привет)
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

    // 2. Рендер вкладок
    function renderTabs() {
        const nav = document.getElementById('tabs-nav');
        if (!nav) return; // Защита от ошибки
        nav.innerHTML = "";
        
        const categories = ["Избранное", ...new Set(db.map(item => item.cat))];

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `tab-btn ${cat === currentCategory ? 'active' : ''}`;
            const iconClass = categoryIcons[cat] || "fa-solid fa-folder";
            btn.innerHTML = `<i class="${iconClass}"></i> ${cat}`;
            
            btn.onclick = () => {
                currentCategory = cat;
                const searchInput = document.getElementById('search');
                if (searchInput) searchInput.value = "";
                renderTabs();
                renderSites();
            };
            nav.appendChild(btn);
        });
    }

    // 3. Рендер сайтов
    function renderSites(searchQuery = "") {
        const container = document.getElementById('content');
        if (!container) return; // Защита от ошибки
        
        container.innerHTML = "";
        let sitesToShow = [];
        const lowerQuery = searchQuery.toLowerCase();
        const fixedQuery = fixKeyboardLayout(lowerQuery);

        if (searchQuery.trim() !== "") {
            // Ищем по имени, описанию и исправленной раскладке
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
                    <div style='text-align:center; padding: 60px; color:#888; width: 100%;'>
                        <i class="fa-regular fa-star" style="font-size: 4rem; margin-bottom: 20px; opacity: 0.3;"></i>
                        <h2>Избранное пусто</h2>
                        <p>Нажми на звездочку на карточке, чтобы добавить.</p>
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
            const card = document.createElement('a');
            card.className = 'card';
            card.href = site.url;
            card.target = "_blank";
            
            const iconUrl = `https://www.google.com/s2/favicons?domain=${new URL(site.url).hostname}&sz=64`;

            card.innerHTML = `
                <div class="card-content">
                    <img src="${iconUrl}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1006/1006771.png'">
                    <div class="card-text">
                        <span class="card-title">${site.name}</span>
                        <span class="card-desc">${site.desc}</span>
                    </div>
                </div>
                <button class="fav-btn ${isFav ? 'active' : ''}">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
                </button>
            `;
            
            // Обработчик лайка
            const favBtn = card.querySelector('.fav-btn');
            favBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(site.url);
            });

            grid.appendChild(card);
        });

        container.appendChild(grid);
    }

    // 4. Логика избранного
    function toggleFavorite(url) {
        if (favorites.includes(url)) {
            favorites = favorites.filter(f => f !== url);
        } else {
            favorites.push(url);
        }
        localStorage.setItem('vesperiaFavs', JSON.stringify(favorites));
        
        // Перерисовываем
        const searchInput = document.getElementById('search');
        renderSites(searchInput ? searchInput.value : "");
    }

    // 5. Поиск
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderSites(e.target.value);
        });
    }

    // ЗАПУСК
    renderTabs();
    renderSites();

}); // Конец DOMContentLoaded
