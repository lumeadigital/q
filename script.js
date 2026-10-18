/**
 * CYBER SHIELD 🛡️
 * تحدّي الأمن السيبراني — اكتشف الاحتيال!
 * متوافق تماماً مع شاشات اللمس واللابتوب وبوث جامعة الحسين بن طلال
 */

// 1. قاعدة بيانات الأسئلة والمواقف الرقمية
const QUESTION_BANK = [
    {
        id: 1,
        type: "رسالة بريد جامعي واردة",
        icon: "🎓",
        sender: "مركز تكنولوجيا المعلومات <support@student-portal-security-check.xyz>",
        subject: "تنبيه أمني عاجل: سيتم إيقاف حسابك الجامعي خلال 6 ساعات",
        body: "عزيزي الطالب،\n\nرصد نظام الأمان الجامعي محاولة دخول غير مصرح بها إلى بوابتك الأكاديمية. لحماية سجلك الدراسي وتفادي إلغاء تفعيل حسابك بصورة نهائية، يُرجى تأكيد كلمة المرور ورقمك الجامعي فوراً عبر بوابة الصيانة المرفقة أدناه.",
        linkUrl: "https://portal-ahu-verification.xyz/login?student_id=validate",
        isPhishing: true,
        explanation: "🚨 احتيال واضح! لاحظ اسم النطاق (.xyz) الذي لا يمت للجامعة بأي صلة، بالإضافة إلى لغة التهديد والاستعجال لإجبارك على إدخال كلمة المرور بدون تفكير."
    },
    {
        id: 2,
        type: "رسالة SMS بنكية",
        icon: "💳",
        sender: "ARAB-BANK (اسم عرض منتحل)",
        subject: "تجميد البطاقة المصرفية",
        body: "عميلنا الكريم، تم إيقاف بطاقتكم الائتمانية بشكل مؤقت لأسباب أمنية. لتحديث بياناتكم ورفع التجميد، يرجى تزويدنا برمز التحقق (OTP) المرسل إليكم هاتفياً أو فتح الرابط المرفق لإعادة التفعيل.",
        linkUrl: "https://banking-online-update-jordan.net/auth",
        isPhishing: true,
        explanation: "🚨 احتيال خطر! البنوك والمؤسسات المالية لا تطلب منك إطلاقاً مشاركة رمز التحقق (OTP) أو كلمة المرور، كما أن النطاق المرفق مزيف وليس الموقع الرسمي للبنك."
    },
    {
        id: 3,
        type: "رسالة بريد من منصة تخزين سحابي",
        icon: "☁️",
        sender: "Google Workspace <no-reply@accounts.google.com>",
        subject: "تنبيه أمني: تسجيل دخول جديد من متصفح غير مألوف",
        body: "مرحباً، تم رصد تسجيل دخول جديد إلى حسابك الشخصي من جهاز Windows في مدينة عمان. إذا كنت أنت من قام بذلك فلا داعي لاتخاذ أي إجراء. أما إذا لم تكن أنت، يرجى فتح إعدادات الأمان من داخل حسابك ومراجعة الأجهزة المسجلة فوراً.",
        linkUrl: "https://myaccount.google.com/security-checkup",
        isPhishing: false,
        explanation: "✅ إشعار أمني آمن وسليم! النطاق الرسمي تابع تماماً للمزود (google.com)، والرسالة لم تطلب بيانات سرية أو رموز OTP، بل وجّهتك لمراجعة الإعدادات من مصدر موثوق."
    },
    {
        id: 4,
        type: "رسالة شحنة وتوصيل طرود (SMS)",
        icon: "📦",
        sender: "+962 7 9000 0000",
        subject: "تعليق تسليم الطرد رقم #JO-88349",
        body: "شحنتك موجودة حالياً في مركز التوزيع البريدي ومتوقفة بسبب نقص عنوان التوصيل ورسوم جمركية متبقية بقيمة (1.50 دينار). لإعادة جدولة التوصيل فوراً يرجى سداد المبلغ عبر الرابط التالي وإدخال بطاقتك الائتمانية.",
        linkUrl: "https://aramex-parcel-tracking-update.com/pay",
        isPhishing: true,
        explanation: "🚨 احتيال تصيّد شهير! أسلوب متكرر لاستدراجك لدفع مبلغ رمزي بهدف سرقة بيانات بطاقتك البنكية الكاملة. لا تفتح روابط الشحنات من أرقام شخصية مجهولة بل استخدم التطبيق الرسمي للشركة."
    },
    {
        id: 5,
        type: "إشعار بريد جامعي رسمي",
        icon: "🏛️",
        sender: "عمادة القبول والتسجيل <reg-support@ahu.edu.jo>",
        subject: "إعلان بدء فترة السحب والإضافة للفصل الدراسي",
        body: "أبناءنا الطلبة، نود إعلامكم ببدء فترة السحب والإضافة الإلكترونية وفق المواعيد المحددة للسنوات الدراسية عبر بوابة التسجيل الذاتي المعتمدة. للاطلاع على جدول المواعيد الرسمي وقائمة الشعب، تفضلوا بزيارة الموقع الرسمي للجامعة.",
        linkUrl: "https://www.ahu.edu.jo/Registration/Schedule",
        isPhishing: false,
        explanation: "✅ رسالة آمنة وشرعية! البريد صادر من النطاق الأكاديمي الرسمي المعتمد للجامعة (ahu.edu.jo) وينتهي بالنطاق الوطني (.jo)، ولا يحتوي على أي طلبات مريبة لبيانات شخصية أو كلمات مرور."
    }
];

// نصائح التوعية الأمنية العشوائية
const SECURITY_TIPS = [
    "لا تشارك رمز التحقق لمرة واحدة (OTP) أو كلمة المرور مع أي شخص على الإطلاق، حتى لو ادعى أنه موظف البنك.",
    "وجود قفل الأمان (HTTPS) يعني تشفير الاتصال فقط، ولا يعني بالضرورة أن الموقع موثوق أو غير احتيالي.",
    "تفقّد دائماً اسم النطاق الفعلي بعد إشارة (@) في البريد الإلكتروني أو بعد (https://) في الروابط.",
    "رسائل الاحتيال غالباً ما تضعك تحت ضغط زمني وخوف مصطنع (مثل: سيتم قفل حسابك خلال ساعتين!).",
    "إذا راودك الشك حول أي رسالة بنكية أو جامعية، تواصل فوراً عبر الهاتف أو التطبيق الرسمي المعتمد."
];

// الحالة البرمجية للعبة (Game State)
let currentQuestionIndex = 0;
let userScore = 0;
let correctCount = 0;
let incorrectCount = 0;
let currentQuestionsList = [];
let hasAnsweredCurrentQuestion = false;

// مرجع عناصر واجهة المستخدم (DOM Elements)
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
const btnHome = document.getElementById('btn-home');
const btnNext = document.getElementById('btn-next');
const btnPhishing = document.getElementById('btn-phishing');
const btnSafe = document.getElementById('btn-safe');

const questionProgressText = document.getElementById('question-progress-text');
const currentScoreText = document.getElementById('current-score-text');
const quizProgressBar = document.getElementById('quiz-progress-bar');

const scenarioTypeText = document.getElementById('scenario-type-text');
const scenarioSender = document.getElementById('scenario-sender');
const scenarioSubject = document.getElementById('scenario-subject');
const scenarioSubjectWrap = document.getElementById('scenario-subject-wrap');
const scenarioBody = document.getElementById('scenario-body');
const scenarioLinkUrl = document.getElementById('scenario-link-url');

const feedbackPanel = document.getElementById('feedback-panel');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackExplanation = document.getElementById('feedback-explanation');

const finalScoreValue = document.getElementById('final-score-value');
const finalCorrectCount = document.getElementById('final-correct-count');
const finalIncorrectCount = document.getElementById('final-incorrect-count');
const scoreVerdictBox = document.getElementById('score-verdict-box');
const randomSecurityTip = document.getElementById('random-security-tip');

// خلط مصفوفة الأسئلة عشوائياً (Fisher-Yates Shuffle)
function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// بدء التحدي
function startQuiz() {
    // خلط الأسئلة في كل جولة لضمان تجربة فريدة بالبوث
    currentQuestionsList = shuffleArray(QUESTION_BANK);
    currentQuestionIndex = 0;
    userScore = 0;
    correctCount = 0;
    incorrectCount = 0;
    hasAnsweredCurrentQuestion = false;

    // التنقل بين الشاشات
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');

    loadQuestion();
}

// تحميل السؤال الحالي
function loadQuestion() {
    hasAnsweredCurrentQuestion = false;
    
    // إخفاء صندوق التفسير وتمكين أزرار الإجابة
    feedbackPanel.classList.add('hidden');
    feedbackPanel.className = 'feedback-panel hidden';
    btnPhishing.disabled = false;
    btnSafe.disabled = false;

    const q = currentQuestionsList[currentQuestionIndex];

    // تحديث البيانات في الواجهة
    questionProgressText.textContent = `${currentQuestionIndex + 1} / ${currentQuestionsList.length}`;
    currentScoreText.textContent = `${userScore}`;
    
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestionsList.length) * 100;
    quizProgressBar.style.width = `${progressPercent}%`;

    scenarioTypeText.textContent = q.type;
    scenarioSender.textContent = q.sender;
    
    if (q.subject) {
        scenarioSubjectWrap.style.display = 'flex';
        scenarioSubject.textContent = q.subject;
    } else {
        scenarioSubjectWrap.style.display = 'none';
    }

    scenarioBody.textContent = q.body;
    scenarioLinkUrl.textContent = q.linkUrl;
}

// معالجة اختيار الإجابة من اللاعب (منع التكرار)
function handleAnswer(selectedPhishing) {
    if (hasAnsweredCurrentQuestion) return; // حماية ضد النقر المتعدد
    hasAnsweredCurrentQuestion = true;

    // تعطيل الأزرار فوراً لمنع الضغط المزدوج
    btnPhishing.disabled = true;
    btnSafe.disabled = true;

    const currentQ = currentQuestionsList[currentQuestionIndex];
    const isCorrect = (selectedPhishing === currentQ.isPhishing);

    if (isCorrect) {
        userScore += 20;
        correctCount++;
        feedbackPanel.classList.add('correct-feedback');
        feedbackIcon.textContent = "🎯";
        feedbackTitle.textContent = "إجابة صحيحة وذكية!";
    } else {
        incorrectCount++;
        feedbackPanel.classList.add('incorrect-feedback');
        feedbackIcon.textContent = "⚠️";
        feedbackTitle.textContent = "إجابة غير صحيحة!";
    }

    // تحديث عداد النقاط الظاهر
    currentScoreText.textContent = `${userScore}`;
    
    // عرض التفسير الأمني المتخصص
    feedbackExplanation.textContent = currentQ.explanation;
    feedbackPanel.classList.remove('hidden');

    // إذا كان هذا السؤال الأخير، نغير تسمية الزر إلى "عرض النتيجة النهائية"
    if (currentQuestionIndex === currentQuestionsList.length - 1) {
        btnNext.querySelector('span').textContent = "عرض النتيجة النهائية 🏆";
    } else {
        btnNext.querySelector('span').textContent = "السؤال التالي ➡️";
    }
}

// الانتقال للسؤال التالي أو إنهاء اللعبة
function nextQuestion() {
    if (currentQuestionIndex < currentQuestionsList.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

// عرض شاشة النتيجة النهائية
function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    finalScoreValue.textContent = userScore;
    finalCorrectCount.textContent = correctCount;
    finalIncorrectCount.textContent = incorrectCount;

    // التقييم والعبارات التشجيعية المحددة بالطلب
    let verdictText = "";
    if (userScore >= 80) {
        verdictText = "🌟 ممتاز! عندك عين خبيرة وحس أمني عالٍ في كشف التهديدات والتصيّد الإلكتروني.";
    } else if (userScore >= 60) {
        verdictText = "👍 جيد جدًا! بقيت بعض العلامات الدقيقة في الروابط وعناوين البريد التي تحتاج إلى تركيز.";
    } else {
        verdictText = "🛡️ انتهى التحدي، والآن أصبحت تعرف أبرز علامات الخطر وأساليب المخترقين لحماية نفسك!";
    }
    scoreVerdictBox.textContent = verdictText;

    // اختيار نصيحة أمنية عشوائية
    const randomTipIndex = Math.floor(Math.random() * SECURITY_TIPS.length);
    randomSecurityTip.textContent = SECURITY_TIPS[randomTipIndex];
}

// مستمعات الأحداث (Event Listeners)
btnStart.addEventListener('click', startQuiz);
btnRestart.addEventListener('click', startQuiz);
btnHome.addEventListener('click', () => {
    resultScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    startScreen.classList.add('active');
});
btnNext.addEventListener('click', nextQuestion);
