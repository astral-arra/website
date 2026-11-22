import type { CardText } from "./tarot-types";

// The Major Arcana. Each entry: [name, keywords, message of the day, advice].
export const MAJORS: { id: string; bg: CardText; en: CardText }[] = [
  {
    id: "00-fool",
    bg: ["Глупакът", "начало · доверие · свобода", "Днес е ден за първата крачка, без да виждаш целия път. Невинността не е наивност – тя е отвореност към чудото.", "Кажи „да“ на нещо ново, дори да е малко."],
    en: ["The Fool", "beginnings · trust · freedom", "Today asks for the first step before the whole road is visible. Innocence is not naivety – it is an open door to wonder.", "Say yes to something new, however small."],
  },
  {
    id: "01-magician",
    bg: ["Магьосникът", "воля · умение · проявление", "Имаш всичко необходимо на масата пред себе си. Каквото фокусираш днес с ясно намерение, започва да се проявява.", "Назови желанието си на глас и направи едно конкретно действие."],
    en: ["The Magician", "will · skill · manifestation", "Every tool you need is already on the table. Whatever you focus on today with clear intent begins to take form.", "Speak your wish aloud, then make one concrete move."],
  },
  {
    id: "02-high-priestess",
    bg: ["Върховната жрица", "интуиция · тайна · вътрешно знание", "Отговорът не е навън, а в тишината между мислите. Днес знаците говорят тихо – слушай сънищата и предчувствията.", "Отдели десет минути тишина, преди да решиш."],
    en: ["The High Priestess", "intuition · mystery · inner knowing", "The answer lies not out there, but in the silence between thoughts. Today the signs speak softly – heed your dreams and hunches.", "Give yourself ten minutes of silence before you decide."],
  },
  {
    id: "03-empress",
    bg: ["Императрицата", "изобилие · грижа · творчество", "Денят носи плодородна, женствена енергия. Онова, за което се грижиш с любов, расте по-бързо, отколкото очакваш.", "Погрижи се за тялото си и за нещо, което създаваш."],
    en: ["The Empress", "abundance · nurture · creativity", "The day carries a fertile, feminine current. What you tend with love grows faster than you expect.", "Nourish your body – and something you are bringing to life."],
  },
  {
    id: "04-emperor",
    bg: ["Императорът", "структура · власт · стабилност", "Днес редът е твоят съюзник. Ясните граници и решения създават сигурност за теб и за хората около теб.", "Направи план и го следвай без отстъпки."],
    en: ["The Emperor", "structure · authority · stability", "Order is your ally today. Clear boundaries and firm decisions build safety for you and for those around you.", "Draw up a plan and keep to it."],
  },
  {
    id: "05-hierophant",
    bg: ["Йерофантът", "традиция · учител · посвещение", "Мъдростта на миналото има какво да ти каже. Днес може да срещнеш учител – в човек, книга или ритуал.", "Потърси съвет от някого с повече опит."],
    en: ["The Hierophant", "tradition · teacher · initiation", "The wisdom of those before you has something to say. Today a teacher may appear – in a person, a book or a ritual.", "Seek counsel from someone further along the path."],
  },
  {
    id: "06-lovers",
    bg: ["Влюбените", "избор · любов · съзвучие", "Сърцето ти е изправено пред избор, който отразява ценностите ти. Връзките днес се задълбочават, когато говориш честно.", "Избери онова, което е вярно за теб, не удобното."],
    en: ["The Lovers", "choice · love · harmony", "Your heart stands before a choice that mirrors your values. Bonds deepen today wherever you are honest.", "Choose what is true for you, not what is convenient."],
  },
  {
    id: "07-chariot",
    bg: ["Колесницата", "движение · решителност · победа", "Противоположните сили в теб могат да теглят в една посока. Днес напредваш, когато държиш юздите здраво.", "Определи една цел за деня и не се отклонявай."],
    en: ["The Chariot", "momentum · resolve · victory", "The opposing forces within you can pull in a single direction. You advance today when you hold the reins firmly.", "Set one goal for the day and stay the course."],
  },
  {
    id: "08-strength",
    bg: ["Силата", "смелост · търпение · нежна сила", "Истинската сила е мека. Днес укротяваш бурята в себе си не с натиск, а с търпение и топлота.", "Отговори на напрежението с мекота."],
    en: ["Strength", "courage · patience · gentle power", "True strength is soft-spoken. Today you tame the storm within not by force, but with patience and warmth.", "Meet tension with tenderness."],
  },
  {
    id: "09-hermit",
    bg: ["Отшелникът", "уединение · търсене · вътрешна светлина", "Денят те кани да се оттеглиш от шума. Фенерът, който търсиш, вече свети в ръката ти.", "Прекарай време в уединение и запиши какво осъзнаваш."],
    en: ["The Hermit", "solitude · seeking · inner light", "The day invites you to step back from the noise. The lantern you are searching for already glows in your hand.", "Spend time alone and write down what surfaces."],
  },
  {
    id: "10-wheel-of-fortune",
    bg: ["Колелото на съдбата", "цикли · обрат · синхроничност", "Колелото се завърта. Внимавай за синхроничности – те показват, че си в правилния поток.", "Забележи повтарящите се знаци днес."],
    en: ["Wheel of Fortune", "cycles · turning point · synchronicity", "The wheel is turning. Watch for synchronicities – they tell you that you are moving with the current.", "Notice the signs that repeat themselves today."],
  },
  {
    id: "11-justice",
    bg: ["Справедливостта", "истина · равновесие · последствия", "Днес везните се изравняват. Решенията, взети с ясен ум и честност, носят дълготраен мир.", "Претегли фактите, преди да отсъдиш."],
    en: ["Justice", "truth · balance · consequence", "Today the scales come level. Decisions made with a clear mind and an honest heart bring lasting peace.", "Weigh the facts before you pass judgement."],
  },
  {
    id: "12-hanged-man",
    bg: ["Обесеният", "пауза · нова гледна точка · отдаване", "Когато нищо не помръдва, промени ъгъла на погледа. Паузата днес не е загуба, а посвещение.", "Спри да буташ – погледни ситуацията отвисоко."],
    en: ["The Hanged Man", "pause · new perspective · surrender", "When nothing will budge, change the angle of your gaze. Today's pause is not a loss, but an initiation.", "Stop pushing – view the situation from above."],
  },
  {
    id: "13-death",
    bg: ["Смъртта", "край · трансформация · освобождаване", "Нещо е изпълнило ролята си и иска да си отиде. Краят днес освобождава място за истинско ново начало.", "Пусни едно нещо, което вече не ти служи."],
    en: ["Death", "endings · transformation · release", "Something has served its purpose and asks to leave. Today's ending clears the ground for a true beginning.", "Release one thing that no longer serves you."],
  },
  {
    id: "14-temperance",
    bg: ["Умереността", "баланс · алхимия · търпение", "Денят е за смесване на противоположностите в правилната мярка. Бавното и внимателно действие е най-силната магия.", "Избери средния път и не бързай."],
    en: ["Temperance", "balance · alchemy · patience", "The day is for blending opposites in just measure. Slow, careful action is the strongest magic of all.", "Take the middle way and do not hurry."],
  },
  {
    id: "15-devil",
    bg: ["Дяволът", "привързаност · сянка · изкушение", "Погледни веригите, които те държат – често са по-хлабави, отколкото изглеждат. Сянката днес иска да бъде видяна, не скрита.", "Назови един навик, който те контролира."],
    en: ["The Devil", "attachment · shadow · temptation", "Look at the chains that bind you – they are often looser than they seem. Today your shadow asks to be seen, not hidden.", "Name one habit that holds you in its grip."],
  },
  {
    id: "16-tower",
    bg: ["Кулата", "сътресение · прозрение · освобождаване", "Онова, което е построено върху илюзия, днес може да се разклати. Мълнията разрушава, но и осветява истината.", "Посрещни неочакваното като възможност за яснота."],
    en: ["The Tower", "upheaval · revelation · liberation", "What was built on illusion may tremble today. The lightning destroys – but it also lights up the truth.", "Greet the unexpected as a chance for clarity."],
  },
  {
    id: "17-star",
    bg: ["Звездата", "надежда · изцеление · вдъхновение", "След бурята идва тиха светлина. Днес Вселената налива нова надежда в теб – позволи си да мечтаеш отново.", "Запиши едно желание и го пусни към звездите."],
    en: ["The Star", "hope · healing · inspiration", "After the storm comes a quiet light. Today the universe pours fresh hope into you – let yourself dream again.", "Write down one wish and release it to the stars."],
  },
  {
    id: "18-moon",
    bg: ["Луната", "илюзия · подсъзнание · сънища", "Не всичко е такова, каквото изглежда. Днес интуицията ти е по-точна от логиката, но страховете могат да изкривят картината.", "Не взимай важни решения на тъмно – първо изясни."],
    en: ["The Moon", "illusion · the subconscious · dreams", "Not everything is as it seems. Your intuition is sharper than logic today, yet fear may distort the picture.", "Make no major decision in the dark – seek clarity first."],
  },
  {
    id: "19-sun",
    bg: ["Слънцето", "радост · успех · жизненост", "Денят свети с ясна, топла енергия. Каквото започнеш с открито сърце, е благословено.", "Сподели радостта си с някого."],
    en: ["The Sun", "joy · success · vitality", "The day shines with clear, warm energy. Whatever you begin with an open heart is blessed.", "Share your joy with someone."],
  },
  {
    id: "20-judgement",
    bg: ["Страшният съд", "пробуждане · призив · прошка", "Нещо в теб се пробужда и те призовава към по-висша версия на себе си. Миналото може да бъде простено и затворено.", "Отговори на вътрешния си призив."],
    en: ["Judgement", "awakening · calling · absolution", "Something in you is stirring, summoning you towards a higher version of yourself. The past can be forgiven and laid to rest.", "Answer the call you hear within."],
  },
  {
    id: "21-world",
    bg: ["Светът", "завършеност · цялост · интеграция", "Един цикъл се затваря и картината най-сетне има смисъл. Днес празнуваш изминатия път.", "Отбележи какво е завършено, преди да започнеш новото."],
    en: ["The World", "completion · wholeness · integration", "A cycle closes and the picture at last makes sense. Today you celebrate the road you have travelled.", "Honour what you have completed before you begin anew."],
  },
];
