// CyberSense Landing Page Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
    initModal();
    initAccessibilityTools();
    initLanguageSelector();
});

// 1. Call to Action Modal Handling
function initModal() {
    const modal = document.getElementById('cta-modal');
    const openButtons = document.querySelectorAll('.open-cta-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const form = document.getElementById('signup-form');

    openButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeCtaModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCtaModal();
        }
    });
}

function closeCtaModal() {
    const modal = document.getElementById('cta-modal');
    const form = document.getElementById('signup-form');
    const successMsg = document.getElementById('modal-success');

    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');

    // Reset form state after transition
    setTimeout(() => {
        if (form) form.style.display = 'block';
        if (successMsg) successMsg.style.display = 'none';
        if (form) form.reset();
    }, 300);
}

function handleSignupSubmit() {
    const form = document.getElementById('signup-form');
    const successMsg = document.getElementById('modal-success');
    if (form && successMsg) {
        form.style.display = 'none';
        successMsg.style.display = 'block';
    }
}

// 2. Accessibility Controls (Font Size & High Contrast)
function initAccessibilityTools() {
    const fontBtn = document.getElementById('toggle-font-size');
    const fontStatus = document.getElementById('font-size-status');
    const contrastBtn = document.getElementById('toggle-contrast');
    const contrastStatus = document.getElementById('contrast-status');

    let isLargeFont = false;
    let isHighContrast = false;

    if (fontBtn) {
        fontBtn.addEventListener('click', () => {
            isLargeFont = !isLargeFont;
            if (isLargeFont) {
                document.documentElement.style.setProperty('--font-size-multiplier', '1.2');
                fontStatus.textContent = 'Large (120%)';
            } else {
                document.documentElement.style.setProperty('--font-size-multiplier', '1');
                fontStatus.textContent = 'Standard';
            }
        });
    }

    if (contrastBtn) {
        contrastBtn.addEventListener('click', () => {
            isHighContrast = !isHighContrast;
            if (isHighContrast) {
                document.body.classList.add('high-contrast');
                contrastStatus.textContent = 'High Contrast';
            } else {
                document.body.classList.remove('high-contrast');
                contrastStatus.textContent = 'Normal';
            }
        });
    }
}

// 3. Multilingual Support (Full Page Translations)
const translations = {
    en: {
        access_label: "Senior Accessibility Tools:",
        text_size_label: "Text Size:",
        contrast_label: "Contrast:",
        nav_why: "Why CyberSense",
        nav_features: "Key Features",
        nav_stories: "Stories",
        nav_cta: "Start Learning",
        hero_badge: "🛡️ Designed Specifically for Seniors (60+)",
        main_headline: "Stay Safe Online — Made Simple for Seniors",
        supporting_headline: "Learn to spot scam messages with easy, visual examples and regain your digital confidence.",
        benefit_summary_title: "What is CyberSense?",
        benefit_summary_body: "CyberSense teaches seniors how to recognise scams using simple, visual examples — protecting your hard-earned money and giving you peace of mind on your smartphone.",
        cta_main: "Start Learning — It’s Easy",
        cta_secondary: "See How It Works",
        trust_1: "✓ 100% Free for Seniors",
        trust_2: "✓ Large Fonts & Clear Images",
        trust_3: "✓ No Complex Technical Jargon",
        phone_status: "📱 Messages",
        phone_alert: "Interactive Scam Detector",
        phone_sender: "Unknown (+61 400 123 999)",
        phone_time: "Just now",
        scam_urgent: "URGENT:",
        scam_msg_text: "Your bank account is locked! Click here immediately to verify:",
        scam_tag: "FAKE SCAM MESSAGE DETECTED",
        exp_title: "How CyberSense protects you:",
        exp_warn_bold: "Urgent Warning:",
        exp_warn_text: "Banks never ask you to click links in text messages.",
        exp_safe_bold: "Safe Action:",
        exp_safe_text: "Tap our 1-Touch button to call your official bank.",
        phone_action_btn: "Practice Spotting Scams Now",
        b_title: "Why Seniors Love CyberSense",
        b_subtitle: "We break down online safety into bite-sized visual steps designed for clarity, comfort, and safety.",
        b1_title: "Simple, Clear Instructions",
        b1_desc: "No confusing computer terms. Step-by-step guidance written in clear, large print so you always feel in control.",
        b2_title: "Real Scam Examples",
        b2_desc: "Practice identifying real fake SMS messages, suspicious bank emails, and scam caller tricks in a safe, stress-free environment.",
        b3_title: "Protect Your Money",
        b3_desc: "Keep your life savings secure from online fraudsters and scammers with easy-to-remember safety rules.",
        b4_title: "Learn at Your Own Pace",
        b4_desc: "Take 5 minutes a day from your smartphone or tablet. Pause, replay, or ask questions anytime you need.",
        f_title: "Key Features Built For You",
        f_subtitle: "Designed with input from seniors, family members, and digital safety experts.",
        f1_title: "Voice-Assisted Learning",
        f1_desc: "Listen to instructions read aloud in clear, comforting speech if reading small text feels tiring.",
        f2_title: "Quick \"Call Your Bank\" Button",
        f2_desc: "Instant direct contact numbers for verified Australian & international banks when in doubt.",
        f3_title: "Family & Caregiver Support",
        f3_desc: "Optionally share your learning milestones with children or caregivers so they know you're safe.",
        f4_title: "Multilingual Support",
        f4_desc: "Available in English, Hindi, Mandarin, and Gujarati with intuitive visual icons.",
        t_title: "Trusted by Seniors & Loved Ones",
        t_subtitle: "Read how CyberSense is helping seniors browse and bank online with confidence.",
        t1_quote: "\"I received a text saying my parcel couldn't be delivered unless I paid $3. Thanks to CyberSense visual guides, I spotted it was a scam right away without losing a dollar!\"",
        t1_author: "Margaret A. (Age 72)",
        t1_location: "Melbourne, VIC",
        t2_quote: "\"My elderly mother was always anxious about online banking. CyberSense gave her simple rules to follow. Now she feels independent and secure.\"",
        t2_author: "Robert D. (Son)",
        t2_location: "Sydney, NSW",
        t3_quote: "\"We run digital literacy sessions in our community centre, and CyberSense is our go-to recommendation. The high-contrast text and voice reader are brilliant.\"",
        t3_author: "Sarah L.",
        t3_location: "Aged Care Coordinator",
        banner_title: "Ready to Protect Yourself & Your Loved Ones?",
        banner_subtitle: "Join thousands of seniors enjoying safe, worry-free online banking and messaging.",
        banner_phone: "📞 Call Toll-Free Support: 1800 CYBER SENSE",
        footer_brand_desc: "Empowering seniors (60+) with simple, visual cyber safety tools.",
        footer_community: "Community & Support",
        footer_libraries: "Libraries & Workshops",
        footer_training: "Aged Care Training",
        footer_family: "Family Dashboard",
        footer_partnerships: "Partnerships",
        footer_esafety: "eSafety Commissioner",
        footer_telstra: "Telstra Seniors Support",
        footer_bank: "Bank Cyber Alliance",
        footer_copyright: "© 2025 CyberSense Project. Individual Credit Task 6.2C. Designed for senior safety.",
        modal_title: "Start Learning with CyberSense",
        modal_subtitle: "It's 100% free and takes less than 2 minutes to start!",
        form_name_label: "Your Full Name:",
        form_contact_label: "Email or Phone Number:",
        form_role_label: "I am a:",
        role_senior: "Senior (60+)",
        role_family: "Family Member / Helper",
        role_caregiver: "Aged Care Coordinator",
        form_submit: "Get Free Access Now",
        modal_success_title: "Welcome to CyberSense!",
        modal_success_desc: "Thank you for signing up. Your simple safety guide is ready.",
        modal_close_btn: "Close"
    },
    hi: {
        access_label: "वरिष्ठ सुगम उपकरण:",
        text_size_label: "अक्षर का आकार:",
        contrast_label: "विपरीतता (कंट्रास्ट):",
        nav_why: "साइबरसेंस क्यों",
        nav_features: "मुख्य विशेषताएं",
        nav_stories: "कहानियां",
        nav_cta: "सीखना शुरू करें",
        hero_badge: "🛡️ विशेष रूप से वरिष्ठ नागरिकों (60+) के लिए डिज़ाइन किया गया",
        main_headline: "ऑनलाइन सुरक्षित रहें — वरिष्ठ नागरिकों के लिए सरल",
        supporting_headline: "आसान और दृश्य उदाहरणों के साथ घोटाले के संदेशों को पहचानना सीखें और अपना डिजिटल आत्मविश्वास वापस पाएं।",
        benefit_summary_title: "साइबरसेंस क्या है?",
        benefit_summary_body: "साइबरसेंस सरल, दृश्य उदाहरणों का उपयोग करके वरिष्ठ नागरिकों को घोटालों को पहचानना सिखाता है — आपकी मेहनत की कमाई की रक्षा करता है।",
        cta_main: "सीखना शुरू करें — यह आसान है",
        cta_secondary: "देखें कि यह कैसे काम करता है",
        trust_1: "✓ वरिष्ठों के लिए 100% मुफ़्त",
        trust_2: "✓ बड़े अक्षर और स्पष्ट चित्र",
        trust_3: "✓ कोई जटिल तकनीकी भाषा नहीं",
        phone_status: "📱 संदेश",
        phone_alert: "इंटरएक्टिव स्कैम डिटेक्टर",
        phone_sender: "अज्ञात (+61 400 123 999)",
        phone_time: "अभी-अभी",
        scam_urgent: "अति आवश्यक:",
        scam_msg_text: "आपका बैंक खाता लॉक कर दिया गया है! सत्यापित करने के लिए तुरंत यहाँ क्लिक करें:",
        scam_tag: "नकली घोटाला संदेश का पता चला",
        exp_title: "साइबरसेंस आपकी सुरक्षा कैसे करता है:",
        exp_warn_bold: "महत्वपूर्ण चेतावनी:",
        exp_warn_text: "बैंक कभी भी एसएमएस में लिंक पर क्लिक करने के लिए नहीं कहते हैं।",
        exp_safe_bold: "सुरक्षित कदम:",
        exp_safe_text: "अपने आधिकारिक बैंक को कॉल करने के लिए हमारे 1-टच बटन को दबाएं।",
        phone_action_btn: "अब घोटालों को पहचानने का अभ्यास करें",
        b_title: "वरिष्ठ नागरिक साइबरसेंस को क्यों पसंद करते हैं",
        b_subtitle: "हम ऑनलाइन सुरक्षा को स्पष्टता, आराम और सुरक्षा के लिए डिज़ाइन किए गए छोटे दृश्य चरणों में तोड़ते हैं।",
        b1_title: "सरल और स्पष्ट निर्देश",
        b1_desc: "कोई भ्रमित करने वाले कंप्यूटर शब्द नहीं। स्पष्ट, बड़े अक्षरों में लिखा गया चरण-दर-चरण मार्गदर्शन।",
        b2_title: "वास्तविक घोटाले के उदाहरण",
        b2_desc: "सुरक्षित वातावरण में नकली एसएमएस संदेशों, संदिग्ध बैंक ईमेल और स्कैम कॉलर्स को पहचानने का अभ्यास करें।",
        b3_title: "अपने पैसे की रक्षा करें",
        b3_desc: "याद रखने में आसान सुरक्षा नियमों के साथ अपनी जीवन भर की बचत को ऑनलाइन धोखेबाजों से सुरक्षित रखें।",
        b4_title: "अपनी गति से सीखें",
        b4_desc: "अपने स्मार्टफोन या टैबलेट से प्रतिदिन 5 मिनट निकालें। जब भी आपको आवश्यकता हो रोकें, दोबारा चलाएं या प्रश्न पूछें।",
        f_title: "आपके लिए बनाई गई मुख्य विशेषताएं",
        f_subtitle: "वरिष्ठ नागरिकों, परिवार के सदस्यों और डिजिटल सुरक्षा विशेषज्ञों के सुझावों से निर्मित।",
        f1_title: "आवाज-सहायता प्राप्त शिक्षा",
        f1_desc: "यदि छोटे अक्षर पढ़ना थकाऊ लगता है तो स्पष्ट, आरामदायक आवाज में निर्देशों को सुनें।",
        f2_title: "त्वरित \"अपने बैंक को कॉल करें\" बटन",
        f2_desc: "संदेह होने पर सत्यापित बैंकों के लिए तत्काल सीधे संपर्क नंबर।",
        f3_title: "परिवार और देखभालकर्ता सहायता",
        f3_desc: "वैकल्पिक रूप से अपनी सीखने की प्रगति को बच्चों या देखभाल करने वालों के साथ साझा करें।",
        f4_title: "बहुभाषी सहायता",
        f4_desc: "सहज दृश्य प्रतीकों के साथ अंग्रेजी, हिंदी, मंदारिन और गुजराती में उपलब्ध।",
        t_title: "वरिष्ठ नागरिकों और प्रियजनों द्वारा विश्वसनीय",
        t_subtitle: "पढ़ें कि कैसे साइबरसेंस वरिष्ठ नागरिकों को आत्मविश्वास के साथ ऑनलाइन ब्राउज़ और बैंकिंग करने में मदद कर रहा है।",
        t1_quote: "\"मुझे एक संदेश मिला कि जब तक मैं $3 का भुगतान नहीं करता, मेरा पार्सल डिलीवर नहीं हो सकता। साइबरसेंस की मदद से मैंने तुरंत पहचान लिया कि यह एक घोटाला था!\"",
        t1_author: "मार्गरेट ए. (उम्र 72)",
        t1_location: "मेलबर्न, वीआईसी",
        t2_quote: "\"मेरी बुजुर्ग मां हमेशा ऑनलाइन बैंकिंग को लेकर चिंतित रहती थीं। साइबरसेंस ने उन्हें पालन करने के लिए सरल नियम दिए। अब वह सुरक्षित महसूस करती हैं।\"",
        t2_author: "रॉबर्ट डी. (पुत्र)",
        t2_location: "सिडनी, एनएसडब्ल्यू",
        t3_quote: "\"हम अपने सामुदायिक केंद्र में डिजिटल साक्षरता सत्र चलाते हैं, और साइबरसेंस हमारी पहली सिफारिश है। उच्च-कंट्रास्ट टेक्स्ट शानदार है।\"",
        t3_author: "सारा एल.",
        t3_location: "एज्ड केयर समन्वयक",
        banner_title: "क्या आप अपनी और अपने प्रियजनों की सुरक्षा के लिए तैयार हैं?",
        banner_subtitle: "सुरक्षित, चिंता मुक्त ऑनलाइन बैंकिंग और मैसेजिंग का आनंद लेने वाले हजारों वरिष्ठ नागरिकों में शामिल हों।",
        banner_phone: "📞 टोल-फ्री सहायता को कॉल करें: 1800 CYBER SENSE",
        footer_brand_desc: "सरल, दृश्य साइबर सुरक्षा उपकरणों के साथ वरिष्ठ नागरिकों (60+) को सशक्त बनाना।",
        footer_community: "समुदाय और सहायता",
        footer_libraries: "पुस्तकालय और कार्यशालाएं",
        footer_training: "एज्ड केयर प्रशिक्षण",
        footer_family: "पारिवारिक डैशबोर्ड",
        footer_partnerships: "साझेदारी",
        footer_esafety: "ई-सुरक्षा आयुक्त",
        footer_telstra: "टेल्स्ट्रा सीनियर सपोर्ट",
        footer_bank: "बैंक साइबर एलायंस",
        footer_copyright: "© 2025 साइबरसेंस प्रोजेक्ट। व्यक्तिगत क्रेडिट कार्य 6.2C। वरिष्ठ सुरक्षा के लिए डिज़ाइन किया गया।",
        modal_title: "साइबरसेंस के साथ सीखना शुरू करें",
        modal_subtitle: "यह 100% मुफ़्त है और शुरू करने में 2 मिनट से भी कम समय लगता है!",
        form_name_label: "आपका पूरा नाम:",
        form_contact_label: "ईमेल या फोन नंबर:",
        form_role_label: "मैं हूँ:",
        role_senior: "वरिष्ठ नागरिक (60+)",
        role_family: "परिवार का सदस्य / मददगार",
        role_caregiver: "एज्ड केयर समन्वयक",
        form_submit: "अभी मुफ़्त पहुंच प्राप्त करें",
        modal_success_title: "साइबरसेंस में आपका स्वागत है!",
        modal_success_desc: "साइन अप करने के लिए धन्यवाद। आपकी सरल सुरक्षा मार्गदर्शिका तैयार है।",
        modal_close_btn: "बंद करें"
    },
    zh: {
        access_label: "长者无障碍无障碍工具：",
        text_size_label: "字体大小：",
        contrast_label: "对比度：",
        nav_why: "为什么选择 CyberSense",
        nav_features: "主要功能",
        nav_stories: "真实故事",
        nav_cta: "开始学习",
        hero_badge: "🛡️ 专为年长者（60岁以上）精心设计",
        main_headline: "保持网络安全 — 专为年长者打造",
        supporting_headline: "通过简单直观的示例，轻松识别诈骗短信，重拾您的数字生活信心。",
        benefit_summary_title: "什么是 CyberSense？",
        benefit_summary_body: "CyberSense 通过简单直观的图文示例，教授年长者如何识别网络诈骗 — 守护您的积蓄，让您安心使用智能手机。",
        cta_main: "开始学习 — 非常简单",
        cta_secondary: "查看工作原理",
        trust_1: "✓ 长者 100% 免费",
        trust_2: "✓ 大字体与清晰图片",
        trust_3: "✓ 无复杂专业术语",
        phone_status: "📱 信息",
        phone_alert: "互动式诈骗检测器",
        phone_sender: "未知号码 (+61 400 123 999)",
        phone_time: "刚刚",
        scam_urgent: "紧急提示：",
        scam_msg_text: "您的银行账户已被锁定！请立即点击此处进行验证：",
        scam_tag: "检测到虚假诈骗短信",
        exp_title: "CyberSense 如何保护您的安全：",
        exp_warn_bold: "重要警告：",
        exp_warn_text: "银行绝不会在短信中要求您点击链接。",
        exp_safe_bold: "安全操作：",
        exp_safe_text: "点击我们的一键拨号按钮直接联系您的官方银行。",
        phone_action_btn: "立即练习识别诈骗信息",
        b_title: "为什么年长者喜爱 CyberSense",
        b_subtitle: "我们将网络安全拆解为易于理解的视觉步骤，专为清晰、舒适与安全而设计。",
        b1_title: "简单清晰的说明",
        b1_desc: "没有令人困惑的技术术语。使用清晰的大号字体编写分步指南，让您始终掌控自如。",
        b2_title: "真实的诈骗案例",
        b2_desc: "在安全无压力的环境中，练习识别真实的虚假短信、可疑银行邮件及诈骗电话。",
        b3_title: "守护您的资金安全",
        b3_desc: "通过简单易记的安全准则，保护您的毕生积蓄免受网络诈骗分子的侵害。",
        b4_title: "按您自己的节奏学习",
        b4_desc: "每天只需从手机或平板电脑上抽出 5 分钟。随时暂停、重播或提出疑问。",
        f_title: "为您打造的核心功能",
        f_subtitle: "汇集年长者、家属及数字安全专家的建议精心设计。",
        f1_title: "语音辅助学习",
        f1_desc: "如果阅读小字感到疲劳，可以听取清晰舒适的语音朗读说明。",
        f2_title: "快捷“呼叫银行”按钮",
        f2_desc: "遇到疑问时，可直接拨打经过认证的银行官方联系电话。",
        f3_title: "家人与照顾者支持",
        f3_desc: "可选择与子女或照顾者分享您的学习进度，让他们放心。",
        f4_title: "多语言支持",
        f4_desc: "提供英语、中文、印地语和古吉拉特语版本，并配有直观图标。",
        t_title: "深受年长者与亲友信赖",
        t_subtitle: "阅读 CyberSense 如何帮助年长者充满自信地进行网上浏览与银行交易。",
        t1_quote: "“我收到一条短信说包裹无法送达，除非支付 3 美元。多亏了 CyberSense 的图文指南，我立刻识别出那是诈骗，一分钱也没损失！”",
        t1_author: "Margaret A. (72岁)",
        t1_location: "墨尔本，维多利亚州",
        t2_quote: "“我年迈的母亲过去总是对网上银行感到焦虑。CyberSense 提供了简单易行的规则。现在她感到独立且安心。”",
        t2_author: "Robert D. (儿子)",
        t2_location: "悉尼，新南威尔士州",
        t3_quote: "“我们在社区中心举办数字素养课程，CyberSense 是我们的首选推荐。高对比度文本和语音朗读功能太棒了。”",
        t3_author: "Sarah L.",
        t3_location: "老年护理协调员",
        banner_title: "准备好保护您和您的家人了吗？",
        banner_subtitle: "加入成千上万年长者的行列，享受安全、无忧的网上银行与通讯体验。",
        banner_phone: "📞 拨打免费支持热线：1800 CYBER SENSE",
        footer_brand_desc: "用简单直观的网络安全工具赋能年长者（60岁以上）。",
        footer_community: "社区与支持",
        footer_libraries: "图书馆与工作坊",
        footer_training: "老年护理培训",
        footer_family: "家庭仪表板",
        footer_partnerships: "合作伙伴",
        footer_esafety: "网络安全委员办公室",
        footer_telstra: "Telstra 长者技术支持",
        footer_bank: "银行网络安全联盟",
        footer_copyright: "© 2025 CyberSense 项目。个人学分任务 6.2C。专为长者安全设计。",
        modal_title: "开始使用 CyberSense 学习",
        modal_subtitle: "100% 免费，只需不到 2 分钟即可开始！",
        form_name_label: "您的姓名：",
        form_contact_label: "电子邮件或电话号码：",
        form_role_label: "我是：",
        role_senior: "年长者 (60岁以上)",
        role_family: "家属 / 协助者",
        role_caregiver: "老年护理协调员",
        form_submit: "立即获取免费体验",
        modal_success_title: "欢迎使用 CyberSense！",
        modal_success_desc: "感谢您的注册。您的简易安全指南已准备就绪。",
        modal_close_btn: "关闭"
    },
    gu: {
        access_label: "વરિષ્ઠ સુગમતા સાધનો:",
        text_size_label: "લખાણનું માપ:",
        contrast_label: "કોન્ટ્રાસ્ટ:",
        nav_why: "શા માટે સાયબરસાઇન્સ",
        nav_features: "મુખ્ય વિશેષતાઓ",
        nav_stories: "વાર્તાઓ",
        nav_cta: "શીખવાનું શરૂ કરો",
        hero_badge: "🛡️ ખાસ કરીને વરિષ્ઠ નાગરિકો (60+) માટે બનાવાયેલ",
        main_headline: "ઓનલાઈન સુરક્ષિત રહો — વરિષ્ઠ નાગરિકો માટે સરળ",
        supporting_headline: "સરળ અને દ્રશ્ય ઉદાહરણો સાથે સ્કેમ મેસેજ ઓળખતા શીખો અને તમારો ડિજિટલ આત્મવિશ્વાસ વધારો.",
        benefit_summary_title: "સાયબરસાઇન્સ શું છે?",
        benefit_summary_body: "સાયબરસાઇન્સ સરળ દ્રશ્ય ઉદાહરણો દ્વારા વરિષ્ઠ નાગરિકોને સ્કેમ ઓળખતા શીખવે છે — તમારી કમાણીનું રક્ષણ કરે છે.",
        cta_main: "શીખવાનું શરૂ કરો — તે ખૂબ સરળ છે",
        cta_secondary: "તે કેવી રીતે કામ કરે છે જુઓ",
        trust_1: "✓ વરિષ્ઠો માટે 100% મફત",
        trust_2: "✓ મોટા અક્ષરો અને સ્પષ્ટ ચિત્રો",
        trust_3: "✓ કોઈ અઘરી તકનીકી ભાષા નથી",
        phone_status: "📱 સંદેશાઓ",
        phone_alert: "ઇન્ટરેક્ટિવ સ્કેમ ડિટેક્ટર",
        phone_sender: "અજ્ઞાત (+61 400 123 999)",
        phone_time: "હમણાં જ",
        scam_urgent: "અતિ તાકીદનું:",
        scam_msg_text: "તમારું બેંક ખાતું લોક થઈ ગયું છે! ચકાસવા માટે તરત જ અહીં ક્લિક કરો:",
        scam_tag: "નકલી સ્કેમ મેસેજ મળી આવ્યો",
        exp_title: "સાયબરસાઇન્સ તમારી સુરક્ષા કેવી રીતે કરે છે:",
        exp_warn_bold: "મહત્વપૂર્ણ ચેતવણી:",
        exp_warn_text: "બેંક ક્યારેય મેસેજમાં લિંક પર ક્લિક કરવા કહેતી નથી.",
        exp_safe_bold: "સુરક્ષિત પગલું:",
        exp_safe_text: "તમારી બેંકને કૉલ કરવા માટે અમારા 1-ટચ બટનનો ઉપયોગ કરો.",
        phone_action_btn: "હવે સ્કેમ ઓળખવાની પ્રેક્ટિસ કરો",
        b_title: "વરિષ્ઠ નાગરિકો સાયબરસાઇન્સ કેમ પસંદ કરે છે",
        b_subtitle: "અમે ઓનલાઈન સુરક્ષાને સરળ અને સ્પષ્ટ દ્રશ્ય પગલાઓમાં વિભાજિત કરીએ છીએ.",
        b1_title: "સરળ અને સ્પષ્ટ સૂચનાઓ",
        b1_desc: "કોઈ અઘરા કોમ્પ્યુટર શબ્દો નથી. મોટા અક્ષરોમાં લખાયેલ પગલાં-દર-પગલાં માર્ગદર્શન.",
        b2_title: "વાસ્તવિક સ્કેમના ઉદાહરણો",
        b2_desc: "સુરક્ષિત વાતાવરણમાં નકલી SMS, શંકાસ્પદ બેંક ઈમેઈલ અને સ્કેમ કૉલ્સ ઓળખવાની પ્રેક્ટિસ કરો.",
        b3_title: "તમારા પૈસાનું રક્ષણ કરો",
        b3_desc: "યાદ રાખવામાં સરળ સુરક્ષા નિયમો સાથે તમારી બચતને ઓનલાઈન છેતરપિંડી કરનારાઓથી સુરક્ષિત રાખો.",
        b4_title: "તમારી ગતિએ શીખો",
        b4_desc: "તમારા સ્માર્ટફોનમાંથી દરરોજ 5 મિનિટ ફાળવો. જ્યારે પણ જરૂર હોય ત્યારે અટકાવો કે પ્રશ્નો પૂછો.",
        f_title: "તમારા માટે બનાવેલ મુખ્ય વિશેષતાઓ",
        f_subtitle: "વરિષ્ઠ નાગરિકો અને ડિજિટલ સુરક્ષા નિષ્ણાતોના સૂચનોથી બનેલ.",
        f1_title: "અવાજ-સહાયિત શિક્ષણ",
        f1_desc: "જો નાના અક્ષરો વાંચવામાં તકલીફ પડતી હોય તો સ્પષ્ટ અવાજમાં સૂચનાઓ સાંભળો.",
        f2_title: "ઝડપી \"બેંકને કૉલ કરો\" બટન",
        f2_desc: "શંકા હોય ત્યારે ચકાસાયેલ બેંકો માટે તાત્કાલિક સીધા સંપર્ક નંબર.",
        f3_title: "પરિવાર અને સંભાળ રાખનાર સપોર્ટ",
        f3_desc: "તમારી શીખવાની પ્રગતિ બાળકો અથવા સંભાળ રાખનારાઓ સાથે શેર કરો.",
        f4_title: "બહુભાષી સપોર્ટ",
        f4_desc: "અંગ્રેજી, હિન્દી, મંડારિન અને ગુજરાતીમાં ઉપલબ્ધ.",
        t_title: "વરિષ્ઠો દ્વારા વિશ્વસનીય",
        t_subtitle: "સાયબરસાઇન્સ વરિષ્ઠોને આત્મવિશ્વાસ સાથે ઓનલાઈન બેંકિંગ કરવામાં કેવી રીતે મદદ કરે છે તે વાંચો.",
        t1_quote: "\"મને મેસેજ મળ્યો કે $3 ન ચૂકવાય ત્યાં સુધી પાર્સલ મળશે નહીં. સાયબરસાઇન્સની મદદથી મેં તરત જ ઓળખી લીધું કે તે સ્કેમ હતો!\"",
        t1_author: "માર્ગારેટ એ. (ઉંમર 72)",
        t1_location: "મેલબોર્ન, VIC",
        t2_quote: "\"મારા માતા હંમેશા ઓનલાઈન બેંકિંગ અંગે ચિંતિત રહેતા. સાયબરસાઇન્સે તેમને સરળ નિયમો આપ્યા. હવે તેઓ સુરક્ષિત અનુભવે છે.\"",
        t2_author: "રોબર્ટ ડી. (પુત્ર)",
        t2_location: "સિડની, NSW",
        t3_quote: "\"અમે સમુદાય કેન્દ્રમાં ડિજિટલ સાક્ષરતા સત્રો ચલાવીએ છીએ, અને સાયબરસાઇન્સ અમારી પ્રથમ ભલામણ છે.\"",
        t3_author: "સારાહ એલ.",
        t3_location: "એજ્ડ કેર કોઓર્ડિનેટર",
        banner_title: "શું તમે તમારી અને તમારા પ્રિયજનોની સુરક્ષા માટે તૈયાર છો?",
        banner_subtitle: "સુરક્ષિત, ચિંતા મુક્ત ઓનલાઈન બેંકિંગનો આનંદ માણતા હજારો વરિષ્ઠો સાથે જોડાઓ.",
        banner_phone: "📞 ટોલ-ફ્રી સપોર્ટ પર કૉલ કરો: 1800 CYBER SENSE",
        footer_brand_desc: "સરળ સાયબર સુરક્ષા સાધનો સાથે વરિષ્ઠ નાગરિકો (60+) ને સક્ષમ બનાવવું.",
        footer_community: "સમુદાય અને સપોર્ટ",
        footer_libraries: "લાઇબ્રેરીઓ અને વર્કશોપ",
        footer_training: "એજ્ડ કેર તાલીમ",
        footer_family: "ફેમિલી ડેશબોર્ડ",
        footer_partnerships: "ભાગીદારી",
        footer_esafety: "ઈ-સેફ્ટી કમિશનર",
        footer_telstra: "ટેલસ્ટ્રા વરિષ્ઠ સપોર્ટ",
        footer_bank: "બેંક સાયબર એલાયન્સ",
        footer_copyright: "© 2025 સાયબરસાઇન્સ પ્રોજેક્ટ. વરિષ્ઠ સુરક્ષા માટે બનાવાયેલ.",
        modal_title: "સાયબરસાઇન્સ સાથે શીખવાનું શરૂ કરો",
        modal_subtitle: "તે 100% મફત છે અને શરૂ કરવામાં 2 મિનિટથી પણ ઓછો સમય લાગે છે!",
        form_name_label: "તમારું પૂરું નામ:",
        form_contact_label: "ઈમેઈલ અથવા ફોન નંબર:",
        form_role_label: "હું છું:",
        role_senior: "વરિષ્ઠ નાગરિક (60+)",
        role_family: "પરિવારના સભ્ય / મદદગાર",
        role_caregiver: "એજ્ડ કેર કોઓર્ડિનેટર",
        form_submit: "હવે મફત પ્રવેશ મેળવો",
        modal_success_title: "સાયબરસાઇન્સમાં તમારું સ્વાગત છે!",
        modal_success_desc: "સાઇન અપ કરવા બદલ આભાર. તમારી સુરક્ષા માર્ગદર્શિકા તૈયાર છે.",
        modal_close_btn: "બંધ કરો"
    }
};

function initLanguageSelector() {
    const langSelect = document.getElementById('language-select');
    if (!langSelect) return;

    langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        applyLanguage(lang);
    });
}

function applyLanguage(lang) {
    const langData = translations[lang] || translations['en'];

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) {
            el.textContent = langData[key];
        }
    });

    // Update document HTML lang attribute
    document.documentElement.lang = lang;
}
