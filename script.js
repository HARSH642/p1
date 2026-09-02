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
    const successMsg = document.getElementById('modal-success');

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

// 3. Language Selector Mockup
function initLanguageSelector() {
    const langSelect = document.getElementById('language-select');
    if (!langSelect) return;

    const translations = {
        en: {
            headline: "Stay Safe Online — Made Simple for Seniors",
            supporting: "Learn to spot scam messages with easy, visual examples and regain your digital confidence.",
            cta: "Start Learning — It’s Easy"
        },
        hi: {
            headline: "ऑनलाइन सुरक्षित रहें — वरिष्ठ नागरिकों के लिए सरल",
            supporting: "आसान, दृश्य उदाहरणों के साथ घोटाले के संदेशों को पहचानना सीखें।",
            cta: "सीखना शुरू करें — यह आसान है"
        },
        zh: {
            headline: "保持网络安全 — 专为年长者打造",
            supporting: "通过简单直观的示例，轻松识别诈骗短信，重拾数字信心。",
            cta: "开始学习 — 非常简单"
        },
        gu: {
            headline: "ઓનલાઈન સુરક્ષિત રહો — વરિષ્ઠ નાગરિકો માટે સરળ",
            supporting: "સરળ ઉદાહરણો સાથે સ્કેમ મેસેજ ઓળખતા શીખો અને તમારો આત્મવિશ્વાસ વધારો.",
            cta: "શીખવાનું શરૂ કરો — તે ખૂબ સરળ છે"
        }
    };

    langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        const mainHeadline = document.querySelector('.main-headline');
        const supportingHeadline = document.querySelector('.supporting-headline');
        const ctaButtons = document.querySelectorAll('.open-cta-modal span');

        if (translations[lang]) {
            if (mainHeadline) mainHeadline.textContent = translations[lang].headline;
            if (supportingHeadline) supportingHeadline.textContent = translations[lang].supporting;
            ctaButtons.forEach(span => {
                if (span.textContent.includes('Start Learning')) {
                    span.textContent = translations[lang].cta;
                }
            });
        }
    });
}
