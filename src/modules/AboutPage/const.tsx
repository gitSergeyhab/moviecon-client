import { Description, LinkData } from "./types";
import TelegramIcon from "@/components/icons/telegram";
import GitHubIcon from "@/components/icons/gitHub";
import KinopoiskApiIcon from "@/components/icons/kinopoiskApi";
import AtlasMongoIcon from "@/components/icons/atlasMongo";
import ChatGPTIcon from "@/components/icons/chatGPT";

export const aboutData: Description[] = [
  {
    id: 1,
    title: "Что это",
    paragraphs: [
      `Видим вопрос и несколько вариантов ответа. Выбираем... в конце
уровня получаем балы за ответы, а так же за неиспользованные
пропуски, ошибки и оставшееся время.`,
      `Для каждого уровня свое число вопросов, возможных пропусков и
ошибок, а так же время, за которое желательно уложиться, чтобы
получить бонусные балы`,
      `Существует несколько уровней. Количество уровней зависит от
выбранной длительности: быстрая игра имеет 3 уровня, стандартная
- 7 уровней, большая - 13`,
      `Есть четыре категории: "Все фильмы", "Мировое кино" (по большей
части иностранное), "Советское кино" и "Российское кино"`,
    ],
  },
  {
    id: 2,
    title: "Правила",
    paragraphs: [
      `Все просто. Отвечаем правильно - получаем балы. Не правильно -
сгорает жизнь. Вопрос можно пропустить ограниченное количество
раз`,
      `Если время истекло - вы не проиграли. Но если успели - получите
еще балы)`,
      `Балы начисляются только в конце уровня. Закончить его можно:
пройдя все вопросы, проиграв или нажав кнопку "Завершить".
Закрыв вкладку, балов вы не получите - более того, игра не
сохранится и вы потеряете уже набранные - результат сохраняется
только у завершенной игры.`,
      `Все завершенные игры сохраняются, и списки рекордсменов
отображаются на главной странице. Также вы можете найти свои
результаты на странице профиля и странице статистики`,
    ],
  },
  {
    id: 3,
    title: "Подсчет результатов",
    paragraphs: [
      `Промежуточные результаты рассчитываются в конце каждого уровня`,
      `- за каждый ответ - 10 балов`,
      `- за неиспользованную ошибку - 6 балов`,
      `- за неиспользованный пропуск - 4 бала`,
      `- за каждую неистекшую секунду - 1 бал`,
      `Победитель получает +10% ко всем набранным балам`,
    ],
  },
  {
    id: 4,
    title: "Реализация",
    paragraphs: [
      `Клиентское приложение построено с использованием React и Redux
Toolkit для управления состоянием. В проекте используются
библиотеки Radix UI для создания удобных и доступных
интерфейсов, а также React Hook Form для удобной работы с
формами. Axios обеспечивает HTTP-запросы, а Dayjs помогает с
форматированием дат. Tailwind CSS и связанные плагины, такие как
tailwind-merge и tailwindcss-animate, используются для
стилизации. Валидация данных осуществляется с помощью Zod. В
процессе разработки применяются Vite для сборки проекта, ESLint
для поддержания качества кода, и TypeScript для статической
типизации.`,
      `Сервер написан на TypeScript/Express. Для работы с базой данных
использован Mongoose. Для безопасности и аутентификации
применяются bcryptjs, helmet, и jsonwebtoken. Валидация данных
осуществляется с помощью Joi, а управление конфигурацией — через
dotenv. Логирование и мониторинг обеспечивают Morgan и Winston.
Также используются body-parser для парсинга запросов, cors для
настройки кросс-доменного доступа, и uuid для генерации
уникальных идентификаторов.`,
    ],
  },
  {
    id: 5,
    title: "Ресурсы",
    paragraphs: [
      `Вся информация о фильмах и все использованные в игре картинки
позаимствованы у Kinopoisk-API. За что им огромная
благодарность.`,
      `Так как Kinopoisk-API бесплатно разрешает ограниченное
количество запросов, данные были предварительно загружены,
пересобраны в подходящие для игры структуры и сохранены в Atlas
(mongodb). Также абсолютно бесплатно. Снова благодарности)`,
      `Картинки, использованные для дизайна, были сгенерированы с помощью Stable Diffusion`,
      `С помощью chatGPT была создана часть этого описания (Реализация), текст на главной странице,
 часть запросов к mongodb и метатеги. Да, снова спасибо, снова бесплатно)`,
    ],
  },
];

const classes = "w-6 md:w-8";
export const myLinks: LinkData[] = [
  {
    href: "https://t.me/redmoloch",
    icon: <TelegramIcon className={classes} />,
    ariaLabel: "Telegram",
  },
  {
    href: "https://github.com/gitSergeyhab",
    icon: <GitHubIcon className={classes} />,
    ariaLabel: "GitHub",
  },
];

export const sourceLinks: LinkData[] = [
  {
    href: "https://kinopoisk.dev/",
    icon: <KinopoiskApiIcon className={classes} />,
    ariaLabel: "Kinopoisk API",
  },
  {
    href: "https://cloud.mongodb.com/",
    icon: <AtlasMongoIcon className={classes} />,
    ariaLabel: "Atlas MongoDB",
  },
  {
    href: "https://chatgpt.com/",
    icon: <ChatGPTIcon className={classes} />,
    ariaLabel: "ChatGPT",
  },
  {
    href: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    icon: (
      <div
        className="bg-neutral-200 dark:bg-neutral-800 border-neutral-800 dark:border-neutral-200 border-2 
      flex items-center justify-center h-6 w-6 text-xs rounded-full md:h-8 md:w-8 md:text-sm"
      >
        <div>SD</div>
      </div>
    ),
    ariaLabel: "Stable Diffusion",
  },
];

export const title = "О проекте";
