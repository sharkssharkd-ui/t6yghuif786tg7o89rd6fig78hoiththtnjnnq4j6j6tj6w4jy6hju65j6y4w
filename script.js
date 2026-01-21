document.addEventListener('DOMContentLoaded', () => {

    // === ФОН: ГЛУБОКИЙ КОСМОС (Плавающие звезды) ===
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let width, height;
    const stars = [];
    const mouse = { x: 0, y: 0 };

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();

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
            this.size = Math.random() * 2 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            let dx = this.x - mouse.x * (this.size * 0.1);
            let dy = this.y - mouse.y * (this.size * 0.1);
            ctx.arc(dx, dy, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 200; i++) stars.push(new Star());

    function animate() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(s => { s.update(); s.draw(); });
        requestAnimationFrame(animate);
    }
    animate();


    // === ИКОНКИ ===
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

    // === БАЗА ДАННЫХ (ОБНОВЛЕННАЯ) ===
    const db = [
        // --- ГЛАВНОЕ ---
        { cat: "Главное", name: "Vesperia SMP", url: "https://vesperiasmp.ru/", desc: "Твой сервер майнкрафт (весперия)" },
        { cat: "Главное", name: "Bisquit Host", url: "https://bisquit.host/", desc: "Хостинг серверов (бисквит)" },
        { cat: "Главное", name: "Telegram Web", url: "https://web.telegram.org/", desc: "Телеграм (тг)" },
        { cat: "Главное", name: "Discord", url: "https://discord.com/login", desc: "Дискорд (дс)" },
        { cat: "Главное", name: "YouTube", url: "https://www.youtube.com/", desc: "Ютуб видео" },
        { cat: "Главное", name: "Twitch", url: "https://www.twitch.tv/", desc: "Стримы твич" },
        { cat: "Главное", name: "VK", url: "https://vk.com/", desc: "ВКонтакте" },
        { cat: "Главное", name: "Gmail", url: "https://mail.google.com/", desc: "Почта Гугл" },
        { cat: "Главное", name: "Yandex Mail", url: "https://mail.yandex.ru/", desc: "Почта Яндекс" },
        { cat: "Главное", name: "Google Drive", url: "https://drive.google.com/", desc: "Гугл Диск" },
        { cat: "Главное", name: "Yandex Disk", url: "https://disk.yandex.ru/", desc: "Яндекс Диск" },
        { cat: "Главное", name: "Pinterest", url: "https://www.pinterest.com/", desc: "Идеи и картинки" },
        { cat: "Главное", name: "Reddit", url: "https://www.reddit.com/", desc: "Форум реддит" },
        { cat: "Главное", name: "TikTok", url: "https://www.tiktok.com/", desc: "ТикТок" },
        { cat: "Главное", name: "Rutube", url: "https://rutube.ru/", desc: "Рутуб" },
        { cat: "Главное", name: "Dzen", url: "https://dzen.ru/", desc: "Дзен" },
        { cat: "Главное", name: "Google Maps", url: "https://www.google.com/maps", desc: "Гугл карты" },
        { cat: "Главное", name: "2GIS", url: "https://2gis.ru/", desc: "Карты 2ГИС" },
        { cat: "Главное", name: "WhatsApp", url: "https://web.whatsapp.com/", desc: "Ватсап" },
        { cat: "Главное", name: "Zoom", url: "https://zoom.us/", desc: "Зум" },
        { cat: "Главное", name: "Gismeteo", url: "https://www.gismeteo.ru/", desc: "Погода" },
        { cat: "Главное", name: "Twitter (X)", url: "https://twitter.com/", desc: "Твиттер" },
        { cat: "Главное", name: "Instagram", url: "https://www.instagram.com/", desc: "Инстаграм" },
        { cat: "Главное", name: "Kick", url: "https://kick.com/", desc: "Стримы Кик" },

        // --- УТИЛИТЫ (Новые + Старые) ---
        { cat: "Утилиты", name: "Snapdrop", url: "https://snapdrop.net/", desc: "AirDrop для любых устройств" },
        { cat: "Утилиты", name: "AlternativeTo", url: "https://alternativeto.net/", desc: "Поиск аналогов программ" },
        { cat: "Утилиты", name: "ResizePixel", url: "https://www.resizepixel.com/ru/", desc: "Изменить размер фото" },
        { cat: "Утилиты", name: "PostImages", url: "https://postimages.org/", desc: "Залить картинку ссылкой" },
        { cat: "Утилиты", name: "Check-Host", url: "https://check-host.net/", desc: "Проверка IP и сайта" },
        { cat: "Утилиты", name: "Cobalt Tools", url: "https://cobalt.tools/", desc: "Скачать видео без знаков" },
        { cat: "Утилиты", name: "VirusTotal", url: "https://www.virustotal.com/", desc: "Проверка на вирусы" },
        { cat: "Утилиты", name: "DeepL", url: "https://www.deepl.com/translator", desc: "Лучший переводчик" },
        { cat: "Утилиты", name: "Convertio", url: "https://convertio.co/ru/", desc: "Конвертер файлов" },
        { cat: "Утилиты", name: "TempMail", url: "https://temp-mail.org/", desc: "Временная почта" },
        { cat: "Утилиты", name: "SpeedTest", url: "https://www.speedtest.net/", desc: "Скорость интернета" },
        { cat: "Утилиты", name: "Remove.bg", url: "https://www.remove.bg/", desc: "Удалить фон" },
        { cat: "Утилиты", name: "Photopea", url: "https://www.photopea.com/", desc: "Фотошоп онлайн" },
        { cat: "Утилиты", name: "Waifu2x", url: "https://waifu2x.udp.jp/", desc: "Улучшить качество фото" },
        { cat: "Утилиты", name: "TinyPNG", url: "https://tinypng.com/", desc: "Сжать фото" },
        { cat: "Утилиты", name: "Screenshot Guru", url: "https://screenshot.guru/", desc: "Скриншот сайта" },
        { cat: "Утилиты", name: "Privnote", url: "https://privnote.com/", desc: "Секретная записка" },
        { cat: "Утилиты", name: "Pastebin", url: "https://pastebin.com/", desc: "Текст ссылкой" },
        { cat: "Утилиты", name: "IP Logger", url: "https://iplogger.org/", desc: "Сократить ссылку" },
        { cat: "Утилиты", name: "Archive.org", url: "https://web.archive.org/", desc: "Машина времени" },
        { cat: "Утилиты", name: "10 Minute Mail", url: "https://10minutemail.com/", desc: "Почта на 10 мин" },
        { cat: "Утилиты", name: "Ninite", url: "https://ninite.com/", desc: "Установка программ" },
        { cat: "Утилиты", name: "WinDirStat", url: "https://windirstat.net/", desc: "Место на диске" },
        { cat: "Утилиты", name: "QR Generator", url: "https://ru.qr-code-generator.com/", desc: "Создать QR" },
        { cat: "Утилиты", name: "I Love PDF", url: "https://www.ilovepdf.com/ru", desc: "Редактор PDF" },
        { cat: "Утилиты", name: "Regex101", url: "https://regex101.com/", desc: "Регулярки" },
        { cat: "Утилиты", name: "Have I Been Pwned", url: "https://haveibeenpwned.com/", desc: "Проверка слива" },
        { cat: "Утилиты", name: "Keyboard Test", url: "https://key-test.ru/", desc: "Тест клавиатуры" },
        { cat: "Утилиты", name: "Whoer", url: "https://whoer.net/ru", desc: "Анонимность IP" },
        { cat: "Утилиты", name: "2IP", url: "https://2ip.ru/", desc: "Мой IP" },
        { cat: "Утилиты", name: "BugMeNot", url: "http://bugmenot.com/", desc: "Общие логины сайтов" },
        { cat: "Утилиты", name: "Untools", url: "https://untools.co/", desc: "Инструменты мышления" },
        { cat: "Утилиты", name: "JustDeleteMe", url: "https://backgroundchecks.org/justdeleteme/", desc: "Удалить аккаунты" },
        { cat: "Утилиты", name: "ManualsLib", url: "https://www.manualslib.com/", desc: "Инструкции ко всему" },
        { cat: "Утилиты", name: "PrintFriendly", url: "https://www.printfriendly.com/", desc: "Печать без мусора" },

        // --- AI / НЕЙРОСЕТИ ---
        { cat: "AI / Нейро", name: "ChatGPT", url: "https://chat.openai.com/", desc: "Чат ГПТ" },
        { cat: "AI / Нейро", name: "Gemini", url: "https://gemini.google.com/", desc: "Гугл ИИ" },
        { cat: "AI / Нейро", name: "Midjourney", url: "https://www.midjourney.com/", desc: "Генерация артов" },
        { cat: "AI / Нейро", name: "Suno", url: "https://suno.com/", desc: "Музыка с вокалом" },
        { cat: "AI / Нейро", name: "Grok", url: "https://grok.x.ai/", desc: "ИИ Илона Маска" },
        { cat: "AI / Нейро", name: "Claude", url: "https://claude.ai/", desc: "Умный чат Клод" },
        { cat: "AI / Нейро", name: "Character.ai", url: "https://beta.character.ai/", desc: "Чат с персонажами" },
        { cat: "AI / Нейро", name: "VocalRemover", url: "https://vocalremover.org/ru/", desc: "Сделать минус" },
        { cat: "AI / Нейро", name: "ElevenLabs", url: "https://elevenlabs.io/", desc: "Озвучка текста" },
        { cat: "AI / Нейро", name: "Luma Dream", url: "https://lumalabs.ai/dream-machine", desc: "Видео из текста" },
        { cat: "AI / Нейро", name: "Perplexity", url: "https://www.perplexity.ai/", desc: "Поисковик фактов" },
        { cat: "AI / Нейро", name: "Bing Image", url: "https://www.bing.com/images/create", desc: "Рисование DALL-E 3" },
        { cat: "AI / Нейро", name: "Hugging Face", url: "https://huggingface.co/", desc: "Библиотека моделей" },
        { cat: "AI / Нейро", name: "Civitai", url: "https://civitai.com/", desc: "Модели Stable Diffusion" },
        { cat: "AI / Нейро", name: "Leonardo.ai", url: "https://leonardo.ai/", desc: "Генератор картинок" },
        { cat: "AI / Нейро", name: "Lexica", url: "https://lexica.art/", desc: "Поиск промптов" },
        { cat: "AI / Нейро", name: "Udio", url: "https://www.udio.com/", desc: "Генератор музыки" },
        { cat: "AI / Нейро", name: "Lalal.ai", url: "https://www.lalal.ai/", desc: "Разделение звука" },
        { cat: "AI / Нейро", name: "Runway", url: "https://runwayml.com/", desc: "Видео нейросеть" },
        { cat: "AI / Нейро", name: "Gamma", url: "https://gamma.app/", desc: "Презентации" },
        { cat: "AI / Нейро", name: "Phind", url: "https://www.phind.com/", desc: "ИИ для кодеров" },
        { cat: "AI / Нейро", name: "Blackbox", url: "https://www.blackbox.ai/", desc: "Помощь с кодом" },
        { cat: "AI / Нейро", name: "WatermarkRemover", url: "https://www.watermarkremover.io/", desc: "Удалить водяной знак" },
        { cat: "AI / Нейро", name: "GoblinTools", url: "https://goblin.tools/", desc: "Помощь с делами" },
        { cat: "AI / Нейро", name: "RizzGPT", url: "https://rizzgpt.app/", desc: "Генератор ответов" },

        // --- MINECRAFT (Добавлен Blockbench) ---
        { cat: "Minecraft", name: "Blockbench", url: "https://www.blockbench.net/", desc: "3D моделирование" },
        { cat: "Minecraft", name: "MC Icons", url: "https://mcicons.ccleaf.com/", desc: "Иконки серверов" },
        { cat: "Minecraft", name: "Modrinth", url: "https://modrinth.com/", desc: "Скачать моды" },
        { cat: "Minecraft", name: "NameMC", url: "https://ru.namemc.com/", desc: "Ники и скины" },
        { cat: "Minecraft", name: "CurseForge", url: "https://www.curseforge.com/minecraft", desc: "База модов" },
        { cat: "Minecraft", name: "PlanetMinecraft", url: "https://www.planetminecraft.com/", desc: "Карты и скины" },
        { cat: "Minecraft", name: "ChunkBase", url: "https://www.chunkbase.com/", desc: "Поиск биомов" },
        { cat: "Minecraft", name: "MC Heads", url: "https://minecraft-heads.com/", desc: "Головы для декора" },
        { cat: "Minecraft", name: "MC Tools", url: "https://minecraft.tools/ru/", desc: "Генераторы крафтов" },
        { cat: "Minecraft", name: "McStacker", url: "https://mcstacker.net/", desc: "Команды summon" },
        { cat: "Minecraft", name: "SpigotMC", url: "https://www.spigotmc.org/", desc: "Плагины (спигот)" },
        { cat: "Minecraft", name: "Nova Skin", url: "https://novaskin.me/", desc: "Редактор скинов" },
        { cat: "Minecraft", name: "Aternos", url: "https://aternos.org/", desc: "Бесплатный сервер" },
        { cat: "Minecraft", name: "VanillaTweaks", url: "https://vanillatweaks.net/", desc: "Твики ресурспаков" },
        { cat: "Minecraft", name: "Litematica", url: "https://masa.dy.fi/litematica/", desc: "Схематики" },
        { cat: "Minecraft", name: "PaperMC", url: "https://papermc.io/", desc: "Ядро Paper" },
        { cat: "Minecraft", name: "SkinGrabber", url: "https://mcskinsearch.com/", desc: "Поиск скина" },
        { cat: "Minecraft", name: "Minotar", url: "https://minotar.net/", desc: "API голов" },
        { cat: "Minecraft", name: "Crafting", url: "https://www.minecraft-crafting.net/", desc: "Рецепты" },
        { cat: "Minecraft", name: "Plotz", url: "https://www.plotz.co.uk/", desc: "Строить сферы" },
        { cat: "Minecraft", name: "FabricMC", url: "https://fabricmc.net/", desc: "Fabric (фабрик)" },
        { cat: "Minecraft", name: "OptiFine", url: "https://optifine.net/", desc: "Оптифайн" },
        { cat: "Minecraft", name: "Authlib", url: "https://authlib-injector.yggdrasil.tv/", desc: "Система скинов" },
        { cat: "Minecraft", name: "RGB Gradient", url: "https://rgb.birdflop.com/", desc: "Градиент текста" },
        { cat: "Minecraft", name: "Wiki", url: "https://minecraft.wiki/", desc: "Википедия" },
        { cat: "Minecraft", name: "Exaroton", url: "https://exaroton.com/", desc: "Платный хост" },
        { cat: "Minecraft", name: "Sodium", url: "https://modrinth.com/mod/sodium", desc: "Буст ФПС" },
        { cat: "Minecraft", name: "Seus Shaders", url: "https://www.sonicether.com/seus/", desc: "Красивые шейдеры" },

        // --- ВИЗУАЛ ---
        { cat: "Визуал", name: "Piskel", url: "https://www.piskelapp.com/", desc: "Пиксель арт" },
        { cat: "Визуал", name: "CoolSymbol", url: "https://coolsymbol.com/", desc: "Символы и значки" },
        { cat: "Визуал", name: "Unicode", url: "https://unicode-table.com/ru/", desc: "Таблица Юникода" },
        { cat: "Визуал", name: "Kaomoji", url: "https://kaomoji.ru/", desc: "Японские смайлы" },
        { cat: "Визуал", name: "ColorHunt", url: "https://colorhunt.co/", desc: "Палитры цветов" },
        { cat: "Визуал", name: "Google Fonts", url: "https://fonts.google.com/", desc: "Шрифты Гугл" },
        { cat: "Визуал", name: "EzGif", url: "https://ezgif.com/", desc: "Редактор GIF" },
        { cat: "Визуал", name: "Figma", url: "https://www.figma.com/", desc: "Дизайн (фигма)" },
        { cat: "Визуал", name: "Symbl", url: "https://symbl.cc/ru/", desc: "Спецсимволы" },
        { cat: "Визуал", name: "Coolors", url: "https://coolors.co/", desc: "Генератор цветов" },
        { cat: "Визуал", name: "DaFont", url: "https://www.dafont.com/", desc: "Скачать шрифты" },
        { cat: "Визуал", name: "FontAwesome", url: "https://fontawesome.com/icons", desc: "Иконки" },
        { cat: "Визуал", name: "Flaticon", url: "https://www.flaticon.com/", desc: "PNG иконки" },
        { cat: "Визуал", name: "Unsplash", url: "https://unsplash.com/", desc: "Фото стоки" },
        { cat: "Визуал", name: "Canva", url: "https://www.canva.com/", desc: "Простой дизайн" },
        { cat: "Визуал", name: "Lospec", url: "https://lospec.com/", desc: "Палитры пикселей" },
        { cat: "Визуал", name: "CSS Gradient", url: "https://cssgradient.io/", desc: "Градиенты CSS" },
        { cat: "Визуал", name: "Fluid Sim", url: "https://paveldogreat.github.io/WebGL-Fluid-Simulation/", desc: "Жидкость" },
        { cat: "Визуал", name: "ZoomQuilt", url: "https://zoomquilt.org/", desc: "Бесконечный зум" },
        { cat: "Визуал", name: "Weavesilk", url: "http://weavesilk.com/", desc: "Шелковые узоры" },
        { cat: "Визуал", name: "Autodraw", url: "https://www.autodraw.com/", desc: "Рисовалка Гугл" },
        { cat: "Визуал", name: "Vector Magic", url: "https://vectormagic.com/", desc: "Векторизация" },
        { cat: "Визуал", name: "Huemint", url: "https://huemint.com/", desc: "AI цвета" },
        { cat: "Визуал", name: "TypeScale", url: "https://typescale.com/", desc: "Шрифтовые пары" },
        { cat: "Визуал", name: "Profile Pic", url: "https://pfpmaker.com/", desc: "Аватарка крутая" },
        { cat: "Визуал", name: "Shots.so", url: "https://shots.so/", desc: "Красивые мокапы" },

        // --- ФАН (Новые: акулы, ноклип) ---
        { cat: "Фан", name: "OCEARCH", url: "https://www.ocearch.org/tracker/", desc: "Трекер акул" },
        { cat: "Фан", name: "Noclip", url: "https://noclip.website/", desc: "Карты игр" },
        { cat: "Фан", name: "Neal.fun", url: "https://neal.fun/", desc: "Мини-игры" },
        { cat: "Фан", name: "GeoGuessr", url: "https://www.geoguessr.com/", desc: "Угадай страну" },
        { cat: "Фан", name: "Akinator", url: "https://ru.akinator.com/", desc: "Акинатор" },
        { cat: "Фан", name: "Useless Web", url: "https://theuselessweb.com/", desc: "Рандомный сайт" },
        { cat: "Фан", name: "Quick Draw", url: "https://quickdraw.withgoogle.com/", desc: "Угадай рисунок" },
        { cat: "Фан", name: "Little Alchemy", url: "https://littlealchemy2.com/", desc: "Алхимия" },
        { cat: "Фан", name: "Hacker Typer", url: "https://hackertyper.net/", desc: "Хакер" },
        { cat: "Фан", name: "Pointer", url: "https://pointerpointer.com/", desc: "Палец на курсор" },
        { cat: "Фан", name: "Infinite Craft", url: "https://neal.fun/infinite-craft/", desc: "Крафт всего" },
        { cat: "Фан", name: "CityGuesser", url: "https://virtualvacation.us/guess", desc: "Угадай город" },
        { cat: "Фан", name: "Paper.io", url: "https://paper-io.com/", desc: "Захват зоны" },
        { cat: "Фан", name: "Slither.io", url: "http://slither.io/", desc: "Змейка" },
        { cat: "Фан", name: "Agar.io", url: "https://agar.io/", desc: "Клетки" },
        { cat: "Фан", name: "Krunker", url: "https://krunker.io/", desc: "Шутер" },
        { cat: "Фан", name: "Slow Roads", url: "https://slowroads.io/", desc: "Вождение" },
        { cat: "Фан", name: "Dino Swords", url: "https://dinoswords.gg/", desc: "Динозавр" },
        { cat: "Фан", name: "Windows 93", url: "http://www.windows93.net/", desc: "Виндовс 93" },
        { cat: "Фан", name: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/", desc: "Кликер" },
        { cat: "Фан", name: "MapCrunch", url: "https://www.mapcrunch.com/", desc: "Рандом улицы" },
        { cat: "Фан", name: "Supercook", url: "https://www.supercook.com/", desc: "Рецепты из ничего" },
        { cat: "Фан", name: "Bill Gates", url: "https://neal.fun/spend/", desc: "Тратить деньги" },
        { cat: "Фан", name: "True Size", url: "https://www.thetruesize.com/", desc: "Размеры стран" },
        { cat: "Фан", name: "Garden of Words", url: "http://www.garden-of-words.com/", desc: "Сад слов" },

        // --- КИНО И АНИМЕ ---
        { cat: "Кино и Аниме", name: "Kinopoisk", url: "https://www.kinopoisk.ru/", desc: "Кинопоиск" },
        { cat: "Кино и Аниме", name: "IMDb", url: "https://www.imdb.com/", desc: "Рейтинг фильмов" },
        { cat: "Кино и Аниме", name: "Netflix", url: "https://www.netflix.com/", desc: "Нетфликс" },
        { cat: "Кино и Аниме", name: "Shikimori", url: "https://shikimori.one/", desc: "Энциклопедия аниме" },
        { cat: "Кино и Аниме", name: "Jut.su", url: "https://jut.su/", desc: "Смотреть аниме" },
        { cat: "Кино и Аниме", name: "AnimeGO", url: "https://animego.org/", desc: "Аниме портал" },
        { cat: "Кино и Аниме", name: "MyAnimeList", url: "https://myanimelist.net/", desc: "Топ аниме" },
        { cat: "Кино и Аниме", name: "MangaLib", url: "https://mangalib.me/", desc: "Читать мангу" },
        { cat: "Кино и Аниме", name: "Rezka", url: "https://rezka.ag/", desc: "Онлайн кинотеатр" },
        { cat: "Кино и Аниме", name: "Seasonvar", url: "http://seasonvar.ru/", desc: "Сериалы" },
        { cat: "Кино и Аниме", name: "Letterboxd", url: "https://letterboxd.com/", desc: "Дневник кино" },
        { cat: "Кино и Аниме", name: "Metacritic", url: "https://www.metacritic.com/", desc: "Критика" },
        { cat: "Кино и Аниме", name: "Rotten Tomatoes", url: "https://www.rottentomatoes.com/", desc: "Томаты" },
        { cat: "Кино и Аниме", name: "Crunchyroll", url: "https://www.crunchyroll.com/", desc: "Официальное аниме" },
        { cat: "Кино и Аниме", name: "Dorama Live", url: "https://doramalive.com/", desc: "Дорамы" },

        // --- АУДИО ---
        { cat: "Аудио", name: "Radioiss", url: "http://radioiss.com/", desc: "Радио МКС" },
        { cat: "Аудио", name: "Yandex Music", url: "https://music.yandex.ru/", desc: "Яндекс Музыка" },
        { cat: "Аудио", name: "Spotify", url: "https://open.spotify.com/", desc: "Спотифай" },
        { cat: "Аудио", name: "SoundCloud", url: "https://soundcloud.com/", desc: "Саундклауд" },
        { cat: "Аудио", name: "MyInstants", url: "https://www.myinstants.com/", desc: "Звуки мемов" },
        { cat: "Аудио", name: "Incredibox", url: "https://www.incredibox.com/", desc: "Битбокс" },
        { cat: "Аудио", name: "Rainyscope", url: "https://rainyscope.com/", desc: "Звуки дождя" },
        { cat: "Аудио", name: "Noisli", url: "https://www.noisli.com/", desc: "Фоновые звуки" },
        { cat: "Аудио", name: "Lofi Girl", url: "https://lofigirl.com/", desc: "Lofi радио" },
        { cat: "Аудио", name: "Every Noise", url: "https://everynoise.com/", desc: "Жанры музыки" },
        { cat: "Аудио", name: "Blob Opera", url: "https://artsandculture.google.com/experiment/blob-opera/", desc: "Опера" },
        { cat: "Аудио", name: "Pink Trombone", url: "https://dood.al/pinktrombone/", desc: "Голос (рот)" },
        { cat: "Аудио", name: "BeepBox", url: "https://beepbox.co/", desc: "Чиптюн" },
        { cat: "Аудио", name: "Online Sequencer", url: "https://onlinesequencer.net/", desc: "Пианино" },
        { cat: "Аудио", name: "Shazam", url: "https://www.shazam.com/ru", desc: "Шазам" },
        { cat: "Аудио", name: "Radio Garden", url: "http://radio.garden/", desc: "Радио на глобусе" },
        { cat: "Аудио", name: "NCS", url: "https://ncs.io/", desc: "Музыка без АП" },
        { cat: "Аудио", name: "Tabletop Audio", url: "https://tabletopaudio.com/", desc: "Звуки RPG" },
        { cat: "Аудио", name: "MyNoise", url: "https://mynoise.net/", desc: "Шум" },

        // --- IT / КОД ---
        { cat: "IT / Код", name: "Ray.so", url: "https://ray.so/", desc: "Красивый код" },
        { cat: "IT / Код", name: "GitHub", url: "https://github.com/", desc: "Гитхаб" },
        { cat: "IT / Код", name: "StackOverflow", url: "https://stackoverflow.com/", desc: "Ответы вопросы" },
        { cat: "IT / Код", name: "Replit", url: "https://replit.com/", desc: "IDE онлайн" },
        { cat: "IT / Код", name: "Roadmap", url: "https://roadmap.sh/", desc: "Роадмап" },
        { cat: "IT / Код", name: "Carbon", url: "https://carbon.now.sh/", desc: "Скрин кода" },
        { cat: "IT / Код", name: "RegExr", url: "https://regexr.com/", desc: "Регулярки" },
        { cat: "IT / Код", name: "CodePen", url: "https://codepen.io/", desc: "Кодпен" },
        { cat: "IT / Код", name: "JSFiddle", url: "https://jsfiddle.net/", desc: "Fiddle" },
        { cat: "IT / Код", name: "JSON Lint", url: "https://jsonlint.com/", desc: "Валидатор" },
        { cat: "IT / Код", name: "DevDocs", url: "https://devdocs.io/", desc: "Документация" },
        { cat: "IT / Код", name: "LeetCode", url: "https://leetcode.com/", desc: "Задачи" },
        { cat: "IT / Код", name: "CodeWars", url: "https://www.codewars.com/", desc: "Ката" },
        { cat: "IT / Код", name: "Cloudflare", url: "https://www.cloudflare.com/", desc: "DNS" },
        { cat: "IT / Код", name: "Vercel", url: "https://vercel.com/", desc: "Хостинг" },
        { cat: "IT / Код", name: "DevHints", url: "https://devhints.io/", desc: "Шпаргалки" },
        { cat: "IT / Код", name: "Transform", url: "https://transform.tools/", desc: "Конвертер кода" },
        { cat: "IT / Код", name: "BundlePhobia", url: "https://bundlephobia.com/", desc: "Размер npm" },
        { cat: "IT / Код", name: "CryptoZombies", url: "https://cryptozombies.io/", desc: "Учить блокчейн" },

        // --- МАГАЗИНЫ ---
        { cat: "Магазины", name: "Steam", url: "https://store.steampowered.com/", desc: "Стим" },
        { cat: "Магазины", name: "SteamDB", url: "https://steamdb.info/", desc: "База цен" },
        { cat: "Магазины", name: "FunPay", url: "https://funpay.com/", desc: "Фанпей" },
        { cat: "Магазины", name: "Plati", url: "https://plati.market/", desc: "Плати Маркет" },
        { cat: "Магазины", name: "Pepper", url: "https://www.pepper.ru/", desc: "Скидки" },
        { cat: "Магазины", name: "DNS", url: "https://www.dns-shop.ru/", desc: "ДНС" },
        { cat: "Магазины", name: "Wildberries", url: "https://www.wildberries.ru/", desc: "ВБ" },
        { cat: "Магазины", name: "Ozon", url: "https://www.ozon.ru/", desc: "Озон" },
        { cat: "Магазины", name: "Epic Games", url: "https://store.epicgames.com/", desc: "Эпик" },
        { cat: "Магазины", name: "GOG", url: "https://www.gog.com/", desc: "ГОГ" },
        { cat: "Магазины", name: "Itch.io", url: "https://itch.io/", desc: "Инди" },
        { cat: "Магазины", name: "GGSel", url: "https://ggsel.net/", desc: "Ключи" },
        { cat: "Магазины", name: "Kupikod", url: "https://kupikod.com/", desc: "Пополнение" },
        { cat: "Магазины", name: "AliExpress", url: "https://aliexpress.ru/", desc: "Али" },
        { cat: "Магазины", name: "Avito", url: "https://www.avito.ru/", desc: "Авито" },
        { cat: "Магазины", name: "Yandex Market", url: "https://market.yandex.ru/", desc: "Маркет" },
        { cat: "Магазины", name: "MVideo", url: "https://www.mvideo.ru/", desc: "МВидео" },
        { cat: "Магазины", name: "Eneba", url: "https://www.eneba.com/", desc: "Ключи" },
        { cat: "Магазины", name: "Humble", url: "https://www.humblebundle.com/", desc: "Бандлы" },
        { cat: "Магазины", name: "CDKeys", url: "https://www.cdkeys.com/", desc: "Дешево" },

        // --- УЧЕБА ---
        { cat: "Учеба", name: "DeepL Write", url: "https://www.deepl.com/write", desc: "Исправить текст" },
        { cat: "Учеба", name: "NASA Images", url: "https://images.nasa.gov/", desc: "Фото космоса" },
        { cat: "Учеба", name: "Foxford", url: "https://foxford.ru/", desc: "Фоксфорд (твое)" },
        { cat: "Учеба", name: "Wikipedia", url: "https://ru.wikipedia.org/", desc: "Вики" },
        { cat: "Учеба", name: "WolframAlpha", url: "https://www.wolframalpha.com/", desc: "Вольфрам" },
        { cat: "Учеба", name: "GDZ", url: "https://gdz.ru/", desc: "ГДЗ" },
        { cat: "Учеба", name: "Stepik", url: "https://stepik.org/", desc: "Степик" },
        { cat: "Учеба", name: "Duolingo", url: "https://www.duolingo.com/", desc: "Языки" },
        { cat: "Учеба", name: "Desmos", url: "https://www.desmos.com/", desc: "Графики" },
        { cat: "Учеба", name: "Symbolab", url: "https://www.symbolab.com/", desc: "Решебник" },
        { cat: "Учеба", name: "Reverso", url: "https://context.reverso.net/", desc: "Перевод" },
        { cat: "Учеба", name: "Scholar", url: "https://scholar.google.ru/", desc: "Наука" },
        { cat: "Учеба", name: "Z-Library", url: "https://z-lib.io/", desc: "Книги" },
        { cat: "Учеба", name: "Coursera", url: "https://www.coursera.org/", desc: "Курсы" },
        { cat: "Учеба", name: "Brainly", url: "https://znanija.com/", desc: "Ответы" },
        { cat: "Учеба", name: "MuscleWiki", url: "https://musclewiki.com/", desc: "Спорт" },
        { cat: "Учеба", name: "PTable", url: "https://ptable.com/", desc: "Менделеев" },
        { cat: "Учеба", name: "Habr", url: "https://habr.com/", desc: "Хабр" },
        { cat: "Учеба", name: "Grammarly", url: "https://www.grammarly.com/", desc: "Грамматика" },
        { cat: "Учеба", name: "Uchi.ru", url: "https://uchi.ru/", desc: "Учи.ру" },
        { cat: "Учеба", name: "Resh", url: "https://resh.edu.ru/", desc: "РЭШ" },
        { cat: "Учеба", name: "Briefly", url: "https://briefly.ru/", desc: "Кратко" },
        { cat: "Учеба", name: "Sci-Hub", url: "https://sci-hub.se/", desc: "Научные статьи" },
        { cat: "Учеба", name: "LibGen", url: "https://libgen.is/", desc: "Библиотека" },
        { cat: "Учеба", name: "Stellarium", url: "https://stellarium-web.org/", desc: "Карта звезд" }
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
