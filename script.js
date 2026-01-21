document.addEventListener('DOMContentLoaded', () => {

    // === ФОН (МЕДЛЕННО ПЛЫВУЩИЕ ЗВЕЗДЫ) ===
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let width, height;
    const stars = [];
    // Параметры для параллакса
    const mouse = { x: 0, y: 0 };

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();

    // Отслеживаем мышь
    document.addEventListener('mousemove', (e) => {
        mouse.x = (e.clientX - width / 2) * 0.05;
        mouse.y = (e.clientY - height / 2) * 0.05;
    });

    class Star {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 0.5; // Размер звезд
            this.opacity = Math.random() * 0.5 + 0.3; // Прозрачность
            
            // Случайное направление движения (чтобы не летели вверх)
            this.speedX = (Math.random() - 0.5) * 0.2; 
            this.speedY = (Math.random() - 0.5) * 0.2;
        }
        update() {
            // Двигаем звезды
            this.x += this.speedX;
            this.y += this.speedY;

            // Если улетела за экран, возвращаем
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            
            // Рисуем с учетом параллакса (сдвига мыши)
            let dx = this.x - mouse.x * (this.size * 0.2);
            let dy = this.y - mouse.y * (this.size * 0.2);

            ctx.arc(dx, dy, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Создаем 150 звезд
    for (let i = 0; i < 150; i++) stars.push(new Star());

    function animate() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(s => { s.update(); s.draw(); });
        requestAnimationFrame(animate);
    }
    animate();


    // === ИКОНКИ КАТЕГОРИЙ ===
    const categoryIcons = {
        "Избранное": "fa-solid fa-star",
        "Главное": "fa-solid fa-house",
        "Утилиты": "fa-solid fa-toolbox",
        "AI / Нейро": "fa-solid fa-brain",
        "Minecraft": "fa-solid fa-cube",
        "Визуал": "fa-solid fa-palette",
        "Фан": "fa-solid fa-gamepad",
        "Кино и Аниме": "fa-solid fa-film",
        "Аудио": "fa-solid fa-music",
        "IT / Код": "fa-solid fa-code",
        "Магазины": "fa-solid fa-cart-shopping",
        "Учеба": "fa-solid fa-graduation-cap"
    };

    // === БАЗА САЙТОВ (Короткие и понятные описания) ===
    const db = [
        // ГЛАВНОЕ
        { cat: "Главное", name: "Vesperia SMP", url: "https://vesperiasmp.ru/", desc: "Магия и свобода действий" },
        { cat: "Главное", name: "Bisquit Host", url: "https://bisquit.host/", desc: "Хостинг серверов Майнкрафт" },
        { cat: "Главное", name: "Telegram", url: "https://web.telegram.org/", desc: "Быстрый мессенджер и каналы" },
        { cat: "Главное", name: "Discord", url: "https://discord.com/login", desc: "Голосовые чаты и стримы" },
        { cat: "Главное", name: "YouTube", url: "https://www.youtube.com/", desc: "Видео, влоги и стримы" },
        { cat: "Главное", name: "VK", url: "https://vk.com/", desc: "Социальная сеть, музыка" },
        { cat: "Главное", name: "Twitch", url: "https://www.twitch.tv/", desc: "Игровые прямые трансляции" },
        { cat: "Главное", name: "Gmail", url: "https://mail.google.com/", desc: "Электронная почта Google" },
        { cat: "Главное", name: "Yandex Mail", url: "https://mail.yandex.ru/", desc: "Почта Яндекс" },
        { cat: "Главное", name: "Google Drive", url: "https://drive.google.com/", desc: "Облачное хранилище файлов" },
        { cat: "Главное", name: "Pinterest", url: "https://www.pinterest.com/", desc: "Идеи, арты и вдохновение" },
        { cat: "Главное", name: "Reddit", url: "https://www.reddit.com/", desc: "Главный форум интернета" },
        { cat: "Главное", name: "TikTok", url: "https://www.tiktok.com/", desc: "Короткие вирусные видео" },
        { cat: "Главное", name: "Rutube", url: "https://rutube.ru/", desc: "Российский видеохостинг" },
        { cat: "Главное", name: "Google Maps", url: "https://www.google.com/maps", desc: "Навигация и карты мира" },
        { cat: "Главное", name: "2GIS", url: "https://2gis.ru/", desc: "Точные карты городов" },
        { cat: "Главное", name: "WhatsApp", url: "https://web.whatsapp.com/", desc: "Звонки и сообщения" },
        { cat: "Главное", name: "Zoom", url: "https://zoom.us/", desc: "Видеоконференции и уроки" },
        { cat: "Главное", name: "Gismeteo", url: "https://www.gismeteo.ru/", desc: "Точный прогноз погоды" },
        { cat: "Главное", name: "Twitter (X)", url: "https://twitter.com/", desc: "Новости и обсуждения" },
        { cat: "Главное", name: "Instagram", url: "https://www.instagram.com/", desc: "Фото и сторис" },
        { cat: "Главное", name: "Kick", url: "https://kick.com/", desc: "Стриминговая платформа" },

        // УТИЛИТЫ
        { cat: "Утилиты", name: "Cobalt Tools", url: "https://cobalt.tools/", desc: "Скачать видео без знаков" },
        { cat: "Утилиты", name: "VirusTotal", url: "https://www.virustotal.com/", desc: "Проверка файлов на вирусы" },
        { cat: "Утилиты", name: "DeepL", url: "https://www.deepl.com/translator", desc: "Лучший переводчик" },
        { cat: "Утилиты", name: "Convertio", url: "https://convertio.co/ru/", desc: "Конвертер любых файлов" },
        { cat: "Утилиты", name: "TempMail", url: "https://temp-mail.org/", desc: "Временная почта" },
        { cat: "Утилиты", name: "SpeedTest", url: "https://www.speedtest.net/", desc: "Замер скорости интернета" },
        { cat: "Утилиты", name: "Check-Host", url: "https://check-host.net/", desc: "Проверка IP и пинга" },
        { cat: "Утилиты", name: "Remove.bg", url: "https://www.remove.bg/", desc: "Удалить фон с фото" },
        { cat: "Утилиты", name: "Photopea", url: "https://www.photopea.com/", desc: "Фотошоп в браузере" },
        { cat: "Утилиты", name: "Waifu2x", url: "https://waifu2x.udp.jp/", desc: "Улучшить качество фото" },
        { cat: "Утилиты", name: "TinyPNG", url: "https://tinypng.com/", desc: "Сжать размер картинки" },
        { cat: "Утилиты", name: "Screenshot Guru", url: "https://screenshot.guru/", desc: "Скриншот сайта целиком" },
        { cat: "Утилиты", name: "Privnote", url: "https://privnote.com/", desc: "Самоуничтожающаяся записка" },
        { cat: "Утилиты", name: "Pastebin", url: "https://pastebin.com/", desc: "Поделиться кодом/текстом" },
        { cat: "Утилиты", name: "Archive.org", url: "https://web.archive.org/", desc: "История версий сайтов" },
        { cat: "Утилиты", name: "10 Minute Mail", url: "https://10minutemail.com/", desc: "Почта на 10 минут" },
        { cat: "Утилиты", name: "Ninite", url: "https://ninite.com/", desc: "Установка программ разом" },
        { cat: "Утилиты", name: "WinDirStat", url: "https://windirstat.net/", desc: "Анализ места на диске" },
        { cat: "Утилиты", name: "QR Generator", url: "https://ru.qr-code-generator.com/", desc: "Создать свой QR-код" },
        { cat: "Утилиты", name: "I Love PDF", url: "https://www.ilovepdf.com/ru", desc: "Сжать и объединить PDF" },
        { cat: "Утилиты", name: "Have I Been Pwned", url: "https://haveibeenpwned.com/", desc: "Проверка слива почты" },
        { cat: "Утилиты", name: "Keyboard Test", url: "https://key-test.ru/", desc: "Проверка клавиш" },
        { cat: "Утилиты", name: "Whoer", url: "https://whoer.net/ru", desc: "Проверка анонимности" },
        { cat: "Утилиты", name: "2IP", url: "https://2ip.ru/", desc: "Узнать свой IP" },

        // AI
        { cat: "AI / Нейро", name: "ChatGPT", url: "https://chat.openai.com/", desc: "Умный чат-бот" },
        { cat: "AI / Нейро", name: "Gemini", url: "https://gemini.google.com/", desc: "Нейросеть от Google" },
        { cat: "AI / Нейро", name: "Midjourney", url: "https://www.midjourney.com/", desc: "Генерация лучших артов" },
        { cat: "AI / Нейро", name: "Suno", url: "https://suno.com/", desc: "Создание песен с голосом" },
        { cat: "AI / Нейро", name: "Grok", url: "https://grok.x.ai/", desc: "ИИ от Илона Маска" },
        { cat: "AI / Нейро", name: "Claude", url: "https://claude.ai/", desc: "Чат с большим контекстом" },
        { cat: "AI / Нейро", name: "Character.ai", url: "https://beta.character.ai/", desc: "Чат с персонажами" },
        { cat: "AI / Нейро", name: "VocalRemover", url: "https://vocalremover.org/ru/", desc: "Удалить голос из песни" },
        { cat: "AI / Нейро", name: "ElevenLabs", url: "https://elevenlabs.io/", desc: "Качественная озвучка" },
        { cat: "AI / Нейро", name: "Luma Dream", url: "https://lumalabs.ai/dream-machine", desc: "Генерация видео" },
        { cat: "AI / Нейро", name: "Perplexity", url: "https://www.perplexity.ai/", desc: "Умный поисковик" },
        { cat: "AI / Нейро", name: "Bing Image", url: "https://www.bing.com/images/create", desc: "Рисование DALL-E 3" },
        { cat: "AI / Нейро", name: "Hugging Face", url: "https://huggingface.co/", desc: "Каталог моделей ИИ" },
        { cat: "AI / Нейро", name: "Civitai", url: "https://civitai.com/", desc: "Модели Stable Diffusion" },
        { cat: "AI / Нейро", name: "Leonardo.ai", url: "https://leonardo.ai/", desc: "Генератор картинок" },
        { cat: "AI / Нейро", name: "Udio", url: "https://www.udio.com/", desc: "Генератор музыки" },
        { cat: "AI / Нейро", name: "Gamma", url: "https://gamma.app/", desc: "Презентации за секунды" },
        { cat: "AI / Нейро", name: "Phind", url: "https://www.phind.com/", desc: "Помощь программисту" },

        // MINECRAFT
        { cat: "Minecraft", name: "Modrinth", url: "https://modrinth.com/", desc: "Скачать моды (быстро)" },
        { cat: "Minecraft", name: "NameMC", url: "https://ru.namemc.com/", desc: "История ников и скины" },
        { cat: "Minecraft", name: "CurseForge", url: "https://www.curseforge.com/minecraft", desc: "Классическая база модов" },
        { cat: "Minecraft", name: "PlanetMinecraft", url: "https://www.planetminecraft.com/", desc: "Карты, скины, текстуры" },
        { cat: "Minecraft", name: "ChunkBase", url: "https://www.chunkbase.com/", desc: "Поиск биомов и данжей" },
        { cat: "Minecraft", name: "MC Heads", url: "https://minecraft-heads.com/", desc: "Декоративные головы" },
        { cat: "Minecraft", name: "MC Tools", url: "https://minecraft.tools/ru/", desc: "Генераторы крафтов" },
        { cat: "Minecraft", name: "McStacker", url: "https://mcstacker.net/", desc: "Генератор команд" },
        { cat: "Minecraft", name: "SpigotMC", url: "https://www.spigotmc.org/", desc: "Плагины для сервера" },
        { cat: "Minecraft", name: "Nova Skin", url: "https://novaskin.me/", desc: "Редактор скинов" },
        { cat: "Minecraft", name: "Aternos", url: "https://aternos.org/", desc: "Бесплатный хостинг" },
        { cat: "Minecraft", name: "VanillaTweaks", url: "https://vanillatweaks.net/", desc: "Настройка ресурспаков" },
        { cat: "Minecraft", name: "Litematica", url: "https://masa.dy.fi/litematica/", desc: "Схематики построек" },
        { cat: "Minecraft", name: "PaperMC", url: "https://papermc.io/", desc: "Оптимизированное ядро" },
        { cat: "Minecraft", name: "FabricMC", url: "https://fabricmc.net/", desc: "Загрузчик модов" },
        { cat: "Minecraft", name: "OptiFine", url: "https://optifine.net/", desc: "Оптимизация FPS" },
        { cat: "Minecraft", name: "Authlib", url: "https://authlib-injector.yggdrasil.tv/", desc: "Своя система скинов" },
        { cat: "Minecraft", name: "Wiki", url: "https://minecraft.wiki/", desc: "Википедия по игре" },
        { cat: "Minecraft", name: "Sodium", url: "https://modrinth.com/mod/sodium", desc: "Лучший буст FPS" },

        // ВИЗУАЛ
        { cat: "Визуал", name: "CoolSymbol", url: "https://coolsymbol.com/", desc: "Символы и шрифты" },
        { cat: "Визуал", name: "Unicode", url: "https://unicode-table.com/ru/", desc: "Таблица символов" },
        { cat: "Визуал", name: "Kaomoji", url: "https://kaomoji.ru/", desc: "Японские смайлики" },
        { cat: "Визуал", name: "ColorHunt", url: "https://colorhunt.co/", desc: "Цветовые палитры" },
        { cat: "Визуал", name: "Google Fonts", url: "https://fonts.google.com/", desc: "Красивые шрифты" },
        { cat: "Визуал", name: "Piskel", url: "https://www.piskelapp.com/", desc: "Рисовать пиксель-арт" },
        { cat: "Визуал", name: "EzGif", url: "https://ezgif.com/", desc: "Создать и сжать GIF" },
        { cat: "Визуал", name: "Figma", url: "https://www.figma.com/", desc: "Веб-дизайн" },
        { cat: "Визуал", name: "Coolors", url: "https://coolors.co/", desc: "Генератор цветов" },
        { cat: "Визуал", name: "DaFont", url: "https://www.dafont.com/", desc: "Скачать шрифты" },
        { cat: "Визуал", name: "Flaticon", url: "https://www.flaticon.com/", desc: "Бесплатные иконки" },
        { cat: "Визуал", name: "Unsplash", url: "https://unsplash.com/", desc: "Стоковые фото" },
        { cat: "Визуал", name: "Canva", url: "https://www.canva.com/", desc: "Простой дизайн" },
        { cat: "Визуал", name: "CSS Gradient", url: "https://cssgradient.io/", desc: "Генератор градиентов" },
        { cat: "Визуал", name: "ZoomQuilt", url: "https://zoomquilt.org/", desc: "Бесконечный зум" },
        { cat: "Визуал", name: "Autodraw", url: "https://www.autodraw.com/", desc: "Умная рисовалка" },
        { cat: "Визуал", name: "Vector Magic", url: "https://vectormagic.com/", desc: "Фото в вектор" },
        { cat: "Визуал", name: "Dribbble", url: "https://dribbble.com/", desc: "Идеи для дизайна" },

        // ФАН
        { cat: "Фан", name: "Neal.fun", url: "https://neal.fun/", desc: "Смешные мини-игры" },
        { cat: "Фан", name: "GeoGuessr", url: "https://www.geoguessr.com/", desc: "Угадай место на карте" },
        { cat: "Фан", name: "Akinator", url: "https://ru.akinator.com/", desc: "Джинн угадывает мысли" },
        { cat: "Фан", name: "Quick Draw", url: "https://quickdraw.withgoogle.com/", desc: "Угадай рисунок" },
        { cat: "Фан", name: "Little Alchemy", url: "https://littlealchemy2.com/", desc: "Смешивай элементы" },
        { cat: "Фан", name: "Hacker Typer", url: "https://hackertyper.net/", desc: "Симулятор хакера" },
        { cat: "Фан", name: "Pointer", url: "https://pointerpointer.com/", desc: "Палец на курсор" },
        { cat: "Фан", name: "Infinite Craft", url: "https://neal.fun/infinite-craft/", desc: "Крафт всего на свете" },
        { cat: "Фан", name: "CityGuesser", url: "https://virtualvacation.us/guess", desc: "Угадай город" },
        { cat: "Фан", name: "Paper.io", url: "https://paper-io.com/", desc: "Захват территории" },
        { cat: "Фан", name: "Slither.io", url: "http://slither.io/", desc: "Змейка онлайн" },
        { cat: "Фан", name: "Agar.io", url: "https://agar.io/", desc: "Клетки онлайн" },
        { cat: "Фан", name: "Krunker", url: "https://krunker.io/", desc: "Браузерный шутер" },
        { cat: "Фан", name: "Slow Roads", url: "https://slowroads.io/", desc: "Вождение онлайн" },
        { cat: "Фан", name: "Windows 93", url: "http://www.windows93.net/", desc: "Виндовс 93" },
        { cat: "Фан", name: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/", desc: "Кликер печенья" },
        { cat: "Фан", name: "Gartic Phone", url: "https://garticphone.com/ru", desc: "Сломанный телефон" },
        { cat: "Фан", name: "Skribbl", url: "https://skribbl.io/", desc: "Рисовалка онлайн" },
        { cat: "Фан", name: "2048", url: "https://play2048.co/", desc: "Головоломка 2048" },
        { cat: "Фан", name: "MonkeyType", url: "https://monkeytype.com/", desc: "Тест печати" },

        // КИНО
        { cat: "Кино и Аниме", name: "Kinopoisk", url: "https://www.kinopoisk.ru/", desc: "Фильмы и сериалы" },
        { cat: "Кино и Аниме", name: "IMDb", url: "https://www.imdb.com/", desc: "Мировой рейтинг кино" },
        { cat: "Кино и Аниме", name: "Netflix", url: "https://www.netflix.com/", desc: "Сериалы и шоу" },
        { cat: "Кино и Аниме", name: "Shikimori", url: "https://shikimori.one/", desc: "Энциклопедия аниме" },
        { cat: "Кино и Аниме", name: "Jut.su", url: "https://jut.su/", desc: "Смотреть аниме" },
        { cat: "Кино и Аниме", name: "AnimeGO", url: "https://animego.org/", desc: "Аниме портал" },
        { cat: "Кино и Аниме", name: "MangaLib", url: "https://mangalib.me/", desc: "Читать мангу" },
        { cat: "Кино и Аниме", name: "Rezka", url: "https://rezka.ag/", desc: "Онлайн кинотеатр" },
        { cat: "Кино и Аниме", name: "Crunchyroll", url: "https://www.crunchyroll.com/", desc: "Официальное аниме" },
        { cat: "Кино и Аниме", name: "Dorama Live", url: "https://doramalive.com/", desc: "Азиатские дорамы" },

        // АУДИО
        { cat: "Аудио", name: "Yandex Music", url: "https://music.yandex.ru/", desc: "Музыка и подкасты" },
        { cat: "Аудио", name: "Spotify", url: "https://open.spotify.com/", desc: "Стриминг музыки" },
        { cat: "Аудио", name: "SoundCloud", url: "https://soundcloud.com/", desc: "Инди музыка" },
        { cat: "Аудио", name: "MyInstants", url: "https://www.myinstants.com/", desc: "Звуки мемов" },
        { cat: "Аудио", name: "Incredibox", url: "https://www.incredibox.com/", desc: "Создай битбокс" },
        { cat: "Аудио", name: "Rainyscope", url: "https://rainyscope.com/", desc: "Звуки дождя" },
        { cat: "Аудио", name: "Lofi Girl", url: "https://lofigirl.com/", desc: "Lofi радио" },
        { cat: "Аудио", name: "Shazam", url: "https://www.shazam.com/ru", desc: "Угадать песню" },
        { cat: "Аудио", name: "Radio Garden", url: "http://radio.garden/", desc: "Радио на глобусе" },

        // IT
        { cat: "IT / Код", name: "GitHub", url: "https://github.com/", desc: "Репозитории кода" },
        { cat: "IT / Код", name: "StackOverflow", url: "https://stackoverflow.com/", desc: "Ответы на вопросы" },
        { cat: "IT / Код", name: "Replit", url: "https://replit.com/", desc: "IDE в браузере" },
        { cat: "IT / Код", name: "Roadmap", url: "https://roadmap.sh/", desc: "Путь развития" },
        { cat: "IT / Код", name: "RegExr", url: "https://regexr.com/", desc: "Регулярные выражения" },
        { cat: "IT / Код", name: "CodePen", url: "https://codepen.io/", desc: "Песочница кода" },
        { cat: "IT / Код", name: "DevDocs", url: "https://devdocs.io/", desc: "Документация" },
        { cat: "IT / Код", name: "LeetCode", url: "https://leetcode.com/", desc: "Задачи для кодеров" },
        { cat: "IT / Код", name: "Cloudflare", url: "https://www.cloudflare.com/", desc: "Защита и DNS" },
        { cat: "IT / Код", name: "NPM", url: "https://www.npmjs.com/", desc: "Пакеты JS" },

        // МАГАЗИНЫ
        { cat: "Магазины", name: "Steam", url: "https://store.steampowered.com/", desc: "Магазин игр" },
        { cat: "Магазины", name: "SteamDB", url: "https://steamdb.info/", desc: "Цены и скидки" },
        { cat: "Магазины", name: "FunPay", url: "https://funpay.com/", desc: "Биржа валют" },
        { cat: "Магазины", name: "Plati", url: "https://plati.market/", desc: "Ключи игр" },
        { cat: "Магазины", name: "DNS", url: "https://www.dns-shop.ru/", desc: "Электроника" },
        { cat: "Магазины", name: "Wildberries", url: "https://www.wildberries.ru/", desc: "Маркетплейс" },
        { cat: "Магазины", name: "Ozon", url: "https://www.ozon.ru/", desc: "Товары" },
        { cat: "Магазины", name: "Epic Games", url: "https://store.epicgames.com/", desc: "Бесплатные игры" },
        { cat: "Магазины", name: "GGSel", url: "https://ggsel.net/", desc: "Маркет ключей" },
        { cat: "Магазины", name: "Kupikod", url: "https://kupikod.com/", desc: "Пополнение Steam" },
        { cat: "Магазины", name: "AliExpress", url: "https://aliexpress.ru/", desc: "Товары из Китая" },
        { cat: "Магазины", name: "Avito", url: "https://www.avito.ru/", desc: "Объявления" },

        // УЧЕБА
        { cat: "Учеба", name: "Foxford", url: "https://foxford.ru/", desc: "Онлайн школа" },
        { cat: "Учеба", name: "Wikipedia", url: "https://ru.wikipedia.org/", desc: "Свободная энциклопедия" },
        { cat: "Учеба", name: "WolframAlpha", url: "https://www.wolframalpha.com/", desc: "Решение задач" },
        { cat: "Учеба", name: "GDZ", url: "https://gdz.ru/", desc: "Готовые задания" },
        { cat: "Учеба", name: "Stepik", url: "https://stepik.org/", desc: "Бесплатные курсы" },
        { cat: "Учеба", name: "Duolingo", url: "https://www.duolingo.com/", desc: "Учить языки" },
        { cat: "Учеба", name: "Reverso", url: "https://context.reverso.net/", desc: "Контекстный перевод" },
        { cat: "Учеба", name: "Z-Library", url: "https://z-lib.io/", desc: "Скачать книги" },
        { cat: "Учеба", name: "Brainly", url: "https://znanija.com/", desc: "Помощь с ДЗ" },
        { cat: "Учеба", name: "Briefly", url: "https://briefly.ru/", desc: "Краткое содержание" }
    ];

    // === ЛОГИКА ===
    let currentCategory = "Избранное";
    let favorites = JSON.parse(localStorage.getItem('vesperiaFavs'));
    
    if (!favorites) {
        favorites = ["https://vesperiasmp.ru/"];
        localStorage.setItem('vesperiaFavs', JSON.stringify(favorites));
    }

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

    function renderTabs() {
        const nav = document.getElementById('tabs-nav');
        if (!nav) return;
        nav.innerHTML = "";
        const categories = ["Избранное", ...new Set(db.map(item => item.cat))];

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `tab-btn ${cat === currentCategory ? 'active' : ''}`;
            const iconClass = categoryIcons[cat] || "fa-solid fa-folder";
            btn.innerHTML = `<i class="${iconClass}"></i> ${cat}`;
            
            btn.onclick = () => {
                currentCategory = cat;
                const search = document.getElementById('search');
                if (search) search.value = "";
                renderTabs();
                renderSites();
            };
            nav.appendChild(btn);
        });
    }

    function renderSites(searchQuery = "") {
        const container = document.getElementById('content');
        if (!container) return;
        
        container.innerHTML = "";
        let sitesToShow = [];
        const lowerQuery = searchQuery.toLowerCase();
        const fixedQuery = fixKeyboardLayout(lowerQuery);

        if (searchQuery.trim() !== "") {
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
                    <div style='text-align:center; padding: 60px; color:#aaa; width: 100%;'>
                        <i class="fa-regular fa-star" style="font-size: 4rem; margin-bottom: 20px; opacity: 0.3;"></i>
                        <h2>Пусто</h2>
                        <p>Добавь сайты звездочкой!</p>
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
            
            // sz=128 для высокого качества
            const iconUrl = `https://www.google.com/s2/favicons?domain=${new URL(site.url).hostname}&sz=128`;

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

            // Лайк
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

    function toggleFavorite(url) {
        if (favorites.includes(url)) {
            favorites = favorites.filter(f => f !== url);
        } else {
            favorites.push(url);
        }
        localStorage.setItem('vesperiaFavs', JSON.stringify(favorites));
        
        const searchInput = document.getElementById('search');
        renderSites(searchInput ? searchInput.value : "");
    }

    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderSites(e.target.value);
        });
    }

    renderTabs();
    renderSites();
});
