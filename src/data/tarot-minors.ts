import type { CardText } from "./tarot-types";

// The Minor Arcana, suit by suit, from the Ace to the King.
// Each entry: [name, keywords, message of the day, advice].
export const MINORS: { id: string; bg: CardText; en: CardText }[] = [
  // Cups – emotions, love, intuition (water)
  {
    id: "cups-01",
    bg: ["Асо купи", "нова любов · откритост · изцеление", "Сърцето ти се пълни отново. Днес може да се роди нова връзка, чувство или вдъхновение.", "Отвори се за нежността, която идва към теб."],
    en: ["Ace of Cups", "new love · openness · healing", "Your heart is filling once more. A new bond, feeling or inspiration may be born today.", "Open yourself to the tenderness coming your way."],
  },
  {
    id: "cups-02",
    bg: ["Двойка купи", "съюз · взаимност · привличане", "Днес е ден за срещи на равни. Връзка, в която даваш и получаваш, се укрепва.", "Протегни ръка първа."],
    en: ["Two of Cups", "union · reciprocity · attraction", "Today is a day for meeting as equals. A bond of giving and receiving grows stronger.", "Be the first to reach out."],
  },
  {
    id: "cups-03",
    bg: ["Тройка купи", "приятелство · празник · общност", "Радостта се умножава, когато се споделя. Хората около теб днес са твоето богатство.", "Обади се на приятел или събери близките си."],
    en: ["Three of Cups", "friendship · celebration · community", "Joy multiplies when it is shared. The people around you are your wealth today.", "Call a friend or gather your circle."],
  },
  {
    id: "cups-04",
    bg: ["Четворка купи", "апатия · преосмисляне · пропусната възможност", "Ако нищо не те радва, вдигни поглед – може би пропускаш дар, който ти се подава.", "Забележи една нова възможност, която досега отминаваше."],
    en: ["Four of Cups", "apathy · contemplation · missed chance", "If nothing delights you, lift your gaze – you may be overlooking a gift held out to you.", "Notice one opportunity you have been passing by."],
  },
  {
    id: "cups-05",
    bg: ["Петица купи", "загуба · тъга · онова, което остава", "Скръбта има своето време, но не всичко е разлято. Две чаши все още стоят изправени зад теб.", "Обърни се към онова, което ти е останало."],
    en: ["Five of Cups", "loss · grief · what remains", "Sorrow has its season, yet not every cup has spilled. Two still stand upright behind you.", "Turn towards what you still have."],
  },
  {
    id: "cups-06",
    bg: ["Шестица купи", "спомени · детство · невинност", "Миналото днес идва с топлина. Спомен или човек от едно време може да ти напомни за истинската ти същност.", "Направи нещо, което те радваше като дете."],
    en: ["Six of Cups", "memories · childhood · innocence", "The past returns with warmth today. A memory or an old friend may remind you who you are.", "Do something that delighted you as a child."],
  },
  {
    id: "cups-07",
    bg: ["Седмица купи", "мечти · избор · илюзии", "Пред теб има много блестящи възможности, но не всички са истински. Днес фантазията трябва да срещне реалността.", "Избери една мечта и я провери с факти."],
    en: ["Seven of Cups", "dreams · choices · illusions", "Many glittering options lie before you, but not all of them are real. Today fantasy must meet reality.", "Pick one dream and test it against the facts."],
  },
  {
    id: "cups-08",
    bg: ["Осмица купи", "тръгване · търсене на смисъл · пускане", "Понякога трябва да оставиш нещо добро, за да намериш нещо истинско. Сърцето ти търси повече дълбочина.", "Признай пред себе си какво вече не те изпълва."],
    en: ["Eight of Cups", "walking away · seeking meaning · release", "Sometimes you must leave something good to find something true. Your heart is longing for greater depth.", "Admit to yourself what no longer fulfils you."],
  },
  {
    id: "cups-09",
    bg: ["Деветка купи", "сбъднато желание · удовлетворение · благодарност", "Картата на желанията! Днес нещо, което искаш, е по-близо, отколкото мислиш.", "Благодари за онова, което вече имаш."],
    en: ["Nine of Cups", "wish fulfilled · contentment · gratitude", "The wish card! Something you long for is closer than you think today.", "Give thanks for what you already have."],
  },
  {
    id: "cups-10",
    bg: ["Десетка купи", "семейно щастие · хармония · дом", "Денят носи емоционална пълнота и усещане за дом. Хармонията с близките е възможна.", "Подари време и внимание на семейството си."],
    en: ["Ten of Cups", "family joy · harmony · home", "The day brings emotional fullness and a feeling of home. Harmony with your loved ones is within reach.", "Give your family your time and attention."],
  },
  {
    id: "cups-11",
    bg: ["Паж купи", "послание · чувствителност · творческа искра", "Очаквай нежно послание – от човек, сън или знак. Вътрешното ти дете има какво да ти каже.", "Довери се на първото си чувство."],
    en: ["Page of Cups", "message · sensitivity · creative spark", "Expect a tender message – from a person, a dream or a sign. Your inner child has something to tell you.", "Trust your very first feeling."],
  },
  {
    id: "cups-12",
    bg: ["Рицар купи", "романтика · покана · следване на сърцето", "Днес сърцето води. Може да получиш предложение или покана, която те докосва.", "Действай от любов, не от страх."],
    en: ["Knight of Cups", "romance · invitation · following the heart", "Today the heart leads the way. An offer or invitation may arrive that truly moves you.", "Act from love, not from fear."],
  },
  {
    id: "cups-13",
    bg: ["Дама купи", "емпатия · интуиция · грижа", "Чувствителността ти е дар днес. Можеш да усетиш онова, което другите не казват.", "Изслушай някого, без да даваш съвети."],
    en: ["Queen of Cups", "empathy · intuition · compassion", "Your sensitivity is a gift today. You can sense what others leave unspoken.", "Listen to someone without offering advice."],
  },
  {
    id: "cups-14",
    bg: ["Крал купи", "емоционална зрялост · спокойствие · мъдрост", "Вълните наоколо може да са високи, но ти можеш да останеш спокоен център. Емоционалната зрялост е твоята сила.", "Отговори, вместо да реагираш."],
    en: ["King of Cups", "emotional maturity · calm · wisdom", "The waves around you may run high, yet you can remain a calm centre. Emotional maturity is your strength.", "Respond rather than react."],
  },

  // Pentacles – the material world, work, body, money (earth)
  {
    id: "pentacles-01",
    bg: ["Асо пентакли", "нова възможност · просперитет · семе", "Днес ти се подава реална, материална възможност. Малкото семе може да израсне в стабилно изобилие.", "Вложи време или средства в нещо дълготрайно."],
    en: ["Ace of Pentacles", "new opportunity · prosperity · a seed", "A real, tangible opportunity is offered to you today. A small seed can grow into lasting abundance.", "Invest time or money in something enduring."],
  },
  {
    id: "pentacles-02",
    bg: ["Двойка пентакли", "жонглиране · гъвкавост · приоритети", "Днес балансираш между няколко неща. Леко и гъвкаво – така ще успееш.", "Подреди задачите си по важност."],
    en: ["Two of Pentacles", "juggling · flexibility · priorities", "You are balancing several things at once today. Stay light and nimble, and you will manage.", "Put your tasks in order of importance."],
  },
  {
    id: "pentacles-03",
    bg: ["Тройка пентакли", "екипна работа · майсторство · признание", "Работата ти днес се забелязва. Сътрудничеството с други прави резултата по-добър.", "Потърси мнението на колега или партньор."],
    en: ["Three of Pentacles", "teamwork · craftsmanship · recognition", "Your work is being noticed today. Collaboration makes the result finer.", "Ask a colleague or partner for their view."],
  },
  {
    id: "pentacles-04",
    bg: ["Четворка пентакли", "сигурност · задържане · контрол", "Стабилността е важна, но прекаленото стискане спира потока. Какво държиш от страх?", "Отпусни хватката си върху едно нещо."],
    en: ["Four of Pentacles", "security · holding on · control", "Stability matters, but gripping too tightly stops the flow. What are you clutching out of fear?", "Loosen your grip on one thing."],
  },
  {
    id: "pentacles-05",
    bg: ["Петица пентакли", "лишение · изолация · помощ наблизо", "Може да се чувстваш извън кръга, но светлият прозорец е съвсем наблизо. Помощта съществува – трябва да я поискаш.", "Поискай подкрепа, без да се срамуваш."],
    en: ["Five of Pentacles", "hardship · isolation · help at hand", "You may feel left out in the cold, yet the lit window is just beside you. Help exists – you need only ask.", "Ask for support without shame."],
  },
  {
    id: "pentacles-06",
    bg: ["Шестица пентакли", "даване · получаване · щедрост", "Днес енергията тече в двете посоки – да даваш и да приемаш. Щедростта се връща умножена.", "Направи добро, без да чакаш нищо в замяна."],
    en: ["Six of Pentacles", "giving · receiving · generosity", "Energy flows both ways today – giving and receiving. Generosity returns to you multiplied.", "Do a kindness without expecting anything back."],
  },
  {
    id: "pentacles-07",
    bg: ["Седмица пентакли", "търпение · оценка · дългосрочен растеж", "Плодовете зреят, но не можеш да ги ускориш. Днес е ден да прецениш накъде расте трудът ти.", "Направи равносметка, преди да вложиш още."],
    en: ["Seven of Pentacles", "patience · assessment · long-term growth", "The fruit is ripening, but it cannot be hurried. Today is a day to assess where your labour is leading.", "Take stock before you invest any more."],
  },
  {
    id: "pentacles-08",
    bg: ["Осмица пентакли", "усърдие · умение · съвършенстване", "Повторението превръща умението в майсторство. Днес малките, внимателни усилия дават най-много.", "Посвети час на занаята си без разсейване."],
    en: ["Eight of Pentacles", "diligence · skill · refinement", "Repetition turns skill into mastery. Small, careful efforts yield the most today.", "Give an undistracted hour to your craft."],
  },
  {
    id: "pentacles-09",
    bg: ["Деветка пентакли", "независимост · изобилие · самоуважение", "Наслаждавай се на плодовете на собствения си труд. Днес можеш да почувстваш спокойна увереност в себе си.", "Поглези се с нещо красиво."],
    en: ["Nine of Pentacles", "independence · abundance · self-worth", "Savour the fruits of your own labour. Today you can feel secure in yourself.", "Treat yourself to something beautiful."],
  },
  {
    id: "pentacles-10",
    bg: ["Десетка пентакли", "наследство · семейство · дълготрайно богатство", "Мисли отвъд днешния ден. Онова, което градиш, може да остане за поколения.", "Направи стъпка към дългосрочна сигурност."],
    en: ["Ten of Pentacles", "legacy · family · lasting wealth", "Think beyond today. What you are building may outlast generations.", "Take one step towards long-term security."],
  },
  {
    id: "pentacles-11",
    bg: ["Паж пентакли", "учене · нова цел · практичност", "Нова практическа възможност иска да бъде проучена. Подходи като ученик – с любопитство и постоянство.", "Научи нещо полезно днес."],
    en: ["Page of Pentacles", "study · a new goal · practicality", "A new practical opportunity wants exploring. Approach it as a student – with curiosity and persistence.", "Learn something useful today."],
  },
  {
    id: "pentacles-12",
    bg: ["Рицар пентакли", "постоянство · надеждност · рутина", "Бавно, но сигурно. Денят награждава устойчивостта повече от бързината.", "Довърши една отложена задача."],
    en: ["Knight of Pentacles", "steadiness · reliability · routine", "Slow and sure. The day rewards perseverance over speed.", "Finish one task you have been putting off."],
  },
  {
    id: "pentacles-13",
    bg: ["Дама пентакли", "грижа · уют · практична мъдрост", "Днес силата ти е в грижата – за дома, тялото и хората. Земната мъдрост носи спокойствие.", "Направи пространството си по-уютно."],
    en: ["Queen of Pentacles", "nurture · comfort · practical wisdom", "Your strength today lies in care – for your home, your body and your people. Earthly wisdom brings calm.", "Make your space a little more welcoming."],
  },
  {
    id: "pentacles-14",
    bg: ["Крал пентакли", "успех · стабилност · материално майсторство", "Имаш силата да превърнеш идеите в осезаеми резултати. Днес мисли като създател на стойност.", "Вземи решение с поглед към дългосрочната полза."],
    en: ["King of Pentacles", "success · stability · material mastery", "You have the power to turn ideas into tangible results. Think like a creator of value today.", "Decide with an eye to long-term gain."],
  },

  // Swords – mind, truth, conflict, decisions (air)
  {
    id: "swords-01",
    bg: ["Асо мечове", "яснота · истина · пробив", "Мисълта ти днес е остра като меч. Истината прорязва мъглата и решението става ясно.", "Кажи истината ясно и кратко."],
    en: ["Ace of Swords", "clarity · truth · breakthrough", "Your mind is sword-sharp today. Truth cuts through the fog and the decision becomes clear.", "Speak the truth, clearly and briefly."],
  },
  {
    id: "swords-02",
    bg: ["Двойка мечове", "колебание · блокаж · избягване", "Превръзката на очите пази от болка, но и от яснота. Решението, което отлагаш, иска поглед.", "Свали превръзката – събери информацията, която избягваш."],
    en: ["Two of Swords", "indecision · stalemate · avoidance", "The blindfold shields you from pain, but also from clarity. The decision you keep deferring asks to be looked at.", "Remove the blindfold – gather the facts you have been avoiding."],
  },
  {
    id: "swords-03",
    bg: ["Тройка мечове", "болка · разочарование · истина", "Някоя истина може да заболи, но тя освобождава. Дъждът след бурята пречиства.", "Позволи си да почувстваш, без да се затваряш."],
    en: ["Three of Swords", "heartache · disappointment · truth", "A truth may sting, yet it sets you free. The rain after the storm cleanses.", "Let yourself feel without shutting down."],
  },
  {
    id: "swords-04",
    bg: ["Четворка мечове", "почивка · възстановяване · медитация", "Умът ти има нужда от тишина. Днес почивката е най-продуктивното действие.", "Направи истинска пауза – без телефон."],
    en: ["Four of Swords", "rest · recovery · meditation", "Your mind needs stillness. Today rest is the most productive thing you can do.", "Take a real pause – phone away."],
  },
  {
    id: "swords-05",
    bg: ["Петица мечове", "конфликт · его · празна победа", "Не всяка битка си струва да бъде спечелена. Понякога победата струва повече, отколкото дава.", "Избери мира пред правотата."],
    en: ["Five of Swords", "conflict · ego · hollow victory", "Not every battle is worth winning. Sometimes victory costs more than it gives.", "Choose peace over being right."],
  },
  {
    id: "swords-06",
    bg: ["Шестица мечове", "преход · отдалечаване · по-спокойни води", "Оставяш бурята зад себе си. Преходът може да е тих, но води към по-спокоен бряг.", "Направи една крачка далеч от онова, което те тежи."],
    en: ["Six of Swords", "transition · moving on · calmer waters", "You are leaving the storm behind. The crossing may be quiet, but it leads to a gentler shore.", "Take one step away from what weighs you down."],
  },
  {
    id: "swords-07",
    bg: ["Седмица мечове", "хитрост · стратегия · скрити намерения", "Не всичко се казва открито днес. Наблюдавай внимателно и пази идеите си, докато не са готови.", "Провери кой какво печели в ситуацията."],
    en: ["Seven of Swords", "cunning · strategy · hidden motives", "Not everything is said openly today. Stay watchful and guard your ideas until they are ready.", "Ask who gains what in this situation."],
  },
  {
    id: "swords-08",
    bg: ["Осмица мечове", "ограничение · страх · самозаблуда", "Клетката е по-скоро в ума, отколкото в света. Изходът е там – мечовете не те държат.", "Назови мисълта, която те ограничава, и я оспори."],
    en: ["Eight of Swords", "restriction · fear · self-deception", "The cage lies more in the mind than in the world. The way out is there – the swords do not hold you.", "Name the thought that confines you, and challenge it."],
  },
  {
    id: "swords-09",
    bg: ["Деветка мечове", "тревога · безсъние · страхове", "Нощните страхове често са по-големи от реалността. Онова, което те тревожи, днес може да бъде изречено и олекотено.", "Сподели тревогата си с някого или я запиши."],
    en: ["Nine of Swords", "anxiety · sleeplessness · fear", "Night-time fears are often larger than reality. What troubles you can be spoken today, and lightened.", "Share your worry with someone, or write it down."],
  },
  {
    id: "swords-10",
    bg: ["Десетка мечове", "дъно · край · ново утро", "Най-тъмното е отминало – зората вече изгрява на хоризонта. Краят днес е истински и затова освобождава.", "Приеми края, за да започне изцелението."],
    en: ["Ten of Swords", "rock bottom · endings · a new dawn", "The darkest hour has passed – dawn is already breaking on the horizon. Today's ending is final, and therefore freeing.", "Accept the ending so that healing can begin."],
  },
  {
    id: "swords-11",
    bg: ["Паж мечове", "любопитство · бдителност · нови идеи", "Умът ти е буден и жаден за информация. Днес задавай въпроси и проверявай слуховете.", "Научи фактите, преди да говориш."],
    en: ["Page of Swords", "curiosity · vigilance · new ideas", "Your mind is wide awake and hungry for information. Ask questions today and check every rumour.", "Learn the facts before you speak."],
  },
  {
    id: "swords-12",
    bg: ["Рицар мечове", "бързина · амбиция · директност", "Енергията е бърза и устремна. Действай смело, но внимавай да не нараниш някого по пътя.", "Помисли три секунди, преди да отговориш."],
    en: ["Knight of Swords", "speed · ambition · directness", "The energy is swift and headlong. Act boldly, but take care not to wound anyone along the way.", "Pause for three seconds before you reply."],
  },
  {
    id: "swords-13",
    bg: ["Дама мечове", "проницателност · независимост · честност", "Ясният поглед и честната дума са твоите инструменти днес. Опитът те е научил да виждаш през илюзиите.", "Постави една ясна граница."],
    en: ["Queen of Swords", "perception · independence · candour", "A clear eye and an honest word are your instruments today. Experience has taught you to see through illusion.", "Set one clear boundary."],
  },
  {
    id: "swords-14",
    bg: ["Крал мечове", "разум · авторитет · обективност", "Днес логиката и справедливостта водят. Решенията, взети с хладен ум, ще издържат.", "Отдели чувствата от фактите, преди да решиш."],
    en: ["King of Swords", "reason · authority · objectivity", "Logic and fairness lead the way today. Decisions made with a cool head will stand the test.", "Separate feelings from facts before you decide."],
  },

  // Wands – fire, passion, will, creativity
  {
    id: "wands-01",
    bg: ["Асо жезли", "вдъхновение · ново начинание · искра", "Нова искра пламва в теб. Днес е перфектен ден да започнеш нещо, което те вълнува.", "Хвани идеята, докато е гореща."],
    en: ["Ace of Wands", "inspiration · new venture · spark", "A new spark is kindling within you. Today is the perfect day to begin something that thrills you.", "Seize the idea while it is still hot."],
  },
  {
    id: "wands-02",
    bg: ["Двойка жезли", "планиране · хоризонт · решение", "Светът е в ръцете ти – въпросът е накъде ще поемеш. Днес визията търси посока.", "Начертай следващите три стъпки."],
    en: ["Two of Wands", "planning · horizons · decision", "The world is in your hands – the question is which way you will go. Today vision seeks direction.", "Map out your next three steps."],
  },
  {
    id: "wands-03",
    bg: ["Тройка жезли", "разширяване · очакване · далновидност", "Корабите ти вече са на път. Посятото от теб започва да се връща.", "Мисли по-мащабно от обичайното."],
    en: ["Three of Wands", "expansion · anticipation · foresight", "Your ships are already at sea. What you have sown is beginning to return.", "Think bigger than usual."],
  },
  {
    id: "wands-04",
    bg: ["Четворка жезли", "празник · дом · постижение", "Денят носи повод за радост и благодарност. Стабилността е заслужена – отпразнувай я.", "Отбележи постижение със своите хора."],
    en: ["Four of Wands", "celebration · home · milestone", "The day brings cause for joy and gratitude. Your stability is well earned – celebrate it.", "Mark a milestone with your people."],
  },
  {
    id: "wands-05",
    bg: ["Петица жезли", "съперничество · напрежение · различни мнения", "Много гласове, много посоки. Конфликтът днес може да бъде творчески, ако слушаш.", "Превърни спора в обмяна на идеи."],
    en: ["Five of Wands", "rivalry · friction · clashing views", "Many voices, many directions. Today's conflict can be creative if you listen.", "Turn the argument into an exchange of ideas."],
  },
  {
    id: "wands-06",
    bg: ["Шестица жезли", "победа · признание · увереност", "Усилията ти се виждат и признават. Днес можеш да вървиш с вдигната глава.", "Приеми похвалата, без да я омаловажаваш."],
    en: ["Six of Wands", "victory · recognition · confidence", "Your efforts are seen and acknowledged. Today you may walk with your head held high.", "Accept praise without playing it down."],
  },
  {
    id: "wands-07",
    bg: ["Седмица жезли", "защита · убеждения · устояване", "Може да се наложи да защитиш позицията си. Ти си на по-високата земя – не отстъпвай.", "Отстоявай една своя граница спокойно."],
    en: ["Seven of Wands", "defence · conviction · standing firm", "You may need to defend your position. You hold the higher ground – do not yield.", "Hold one of your boundaries, calmly."],
  },
  {
    id: "wands-08",
    bg: ["Осмица жезли", "бързина · новини · движение", "Нещата се раздвижват изведнъж. Очаквай вести, отговори и бърз напредък.", "Отговори на съобщенията днес, не утре."],
    en: ["Eight of Wands", "swiftness · news · movement", "Things are suddenly in motion. Expect news, answers and rapid progress.", "Reply to messages today, not tomorrow."],
  },
  {
    id: "wands-09",
    bg: ["Деветка жезли", "издръжливост · бдителност · последен рубеж", "Умората е голяма, но целта е съвсем близо. Още една крачка и битката е зад теб.", "Пази силите си за финалната отсечка."],
    en: ["Nine of Wands", "resilience · vigilance · the last stretch", "You are weary, but nearly there. One more step and the struggle is behind you.", "Save your strength for the final stretch."],
  },
  {
    id: "wands-10",
    bg: ["Десетка жезли", "бреме · отговорност · претоварване", "Носиш повече, отколкото трябва. Не всяко бреме е само твое.", "Делегирай или остави една задача."],
    en: ["Ten of Wands", "burden · responsibility · overload", "You are carrying more than you need to. Not every load is yours alone to bear.", "Delegate or drop one task."],
  },
  {
    id: "wands-11",
    bg: ["Паж жезли", "ентусиазъм · откритие · свободен дух", "Любопитството ти е пламнало. Днес е ден за изследване, експерименти и нови хоризонти.", "Опитай нещо съвсем ново за теб."],
    en: ["Page of Wands", "enthusiasm · discovery · free spirit", "Your curiosity is ablaze. Today is for exploring, experimenting and new horizons.", "Try something you have never done."],
  },
  {
    id: "wands-12",
    bg: ["Рицар жезли", "страст · приключение · импулсивност", "Енергията е огнена и нетърпелива. Използвай я за смело действие, но не изгаряй мостовете.", "Насочи страстта си към една цел."],
    en: ["Knight of Wands", "passion · adventure · impulsiveness", "The energy is fiery and impatient. Use it for bold action, but do not burn your bridges.", "Channel your passion towards a single aim."],
  },
  {
    id: "wands-13",
    bg: ["Дама жезли", "харизма · увереност · топлина", "Днес светиш. Увереността и топлотата ти привличат хора и възможности.", "Покажи се – говори, създавай, води."],
    en: ["Queen of Wands", "charisma · confidence · warmth", "You are radiant today. Your confidence and warmth draw people and opportunities to you.", "Step forward – speak, create, lead."],
  },
  {
    id: "wands-14",
    bg: ["Крал жезли", "визия · лидерство · смелост", "Имаш визията и силата да вдъхновиш другите. Днес мисли като лидер, не като изпълнител.", "Вземи смело решение и поеми отговорност."],
    en: ["King of Wands", "vision · leadership · boldness", "You hold the vision and the fire to inspire others. Today think like a leader, not a follower.", "Make a bold decision and own it."],
  },
];
