// script.js

document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");
    
    // 다국어 데이터: 각 페이지의 주요 텍스트를 담고 있습니다.
    const langData = {
        ko: {
            // Header
            home: "홈",
            about: "회사 소개",
            services: "서비스",
            contact: "문의하기",
            pageTitleHome: "홈 | NEO MARITIME SERVICE",
            pageTitleAbout: "회사 소개 | NEO MARITIME SERVICE",
            pageTitleServices: "서비스 | NEO MARITIME SERVICE",
            pageTitleContact: "문의하기 | NEO MARITIME SERVICE",

            // Index (index.html)
            heroTitle: "신뢰와 전문성으로 함께하는 해상 서비스",
            heroSubtitle: "한국과 파나마, 두 거점을 잇는 통합 솔루션을 제공합니다.",
            heroButtonPrimary: "서비스 보기",
            heroButtonSecondary: "문의하기",

            promiseTitle: "우리의 약속",
            promiseLead: "NEO MARITIME SERVICE는 고객의 성공적인 항해를 위해 헌신합니다.",
            feature1Title: "최적의 가격",
            feature1Desc: "현지 직거래와 효율적인 물류 시스템을 통해 최고의 가치를 제공합니다.",
            feature2Title: "신속한 공급",
            feature2Desc: "파나마와 한국의 전략적 거점을 통해 긴급한 요구에도 빠르게 대응합니다.",
            feature3Title: "최고의 품질",
            feature3Desc: "엄격한 검수 과정을 거친 검증된 제품만을 공급합니다.",

            whyUsTitle: "왜 우리와 함께해야 할까요?",
            whyUsLead: "우리의 독점적인 네트워크와 전문성이 귀사의 해상 운영 효율을 극대화합니다.",
            
            // About (about.html)
            aboutHeroDesc: "해상 서비스 분야의 새로운 기준을 제시합니다.",
            missionTitle: "우리의 미션",
            missionLead: "NEO MARITIME SERVICE는 한국과 파나마를 잇는 최적의 해상 물류 파트너입니다.",
            
            // Values (about.html)
            valuesTitle: "핵심 가치",
            value1Title: "신뢰 (Trust)",
            value1Desc: "모든 이해관계자와의 투명하고 정직한 관계를 구축합니다.",
            value2Title: "혁신 (Innovation)",
            value2Desc: "새로운 기술과 프로세스를 도입하여 효율을 극대화합니다.",
            value3Title: "안전 (Safety)",
            value3Desc: "선원과 선박의 안전을 최우선으로 생각합니다.",
            
            // Management (about.html)
            managementTitle: "경영진",
            managementLead: "해운 및 물류 전문가로 구성된 우리의 팀이 귀사를 지원합니다.",

            // Services (services.html)
            servicesHeroDesc: "한국과 파나마를 잇는 통합 솔루션을 확인해보세요.",
            servicesTitle: "우리의 서비스", // '주요 서비스'에서 변경됨
            serviceFoodTitle: "식자재/신선식품 공급",
            serviceFoodDesc: "선원들의 만족도를 높이는 다양한 신선 식자재와 풍부한 K-Food를 신속하게 조달합니다.",
            serviceChandlerTitle: "선용품 (Chandling) 공급",
            serviceChandlerDesc: "갑판, 엔진, 안전 장비 등 모든 선박 운영에 필요한 고품질 선용품을 공급합니다.",
            serviceLubeTitle: "벙커 / 윤활유 공급", // '윤활유 및 화학 제품'에서 변경됨
            serviceLubeDesc: "경쟁력 있는 가격으로 고품질 연료와 윤활유를 제공합니다.", // 내용 변경
            serviceRepairTitle: "현지 조달 및 수리 용역",
            serviceRepairDesc: "현지 직거래를 통한 최적의 가격과 선박 수리, 용역 서비스를 제공합니다.", // '양국' 제거
            
            // CTA (services.html)
            ctaTitle: "당신의 다음 항해를 위한 신뢰할 수 있는 파트너",
            ctaLead: "지금 바로 문의하여 최적의 선박 보급 솔루션을 받아보세요.",
            ctaButton: "문의하기",

            // Contact (contact.html)
            contactHeroDesc: "귀사의 문의 사항에 신속하게 답변드리겠습니다.",
            contactTitle: "문의 및 연락처",
            contactFormTitle: "문의 양식",
            contactFormName: "이름",
            contactFormEmail: "이메일",
            contactFormPhone: "연락처",
            contactFormSubject: "제목",
            contactFormMessage: "메시지",
            contactFormFile: "파일 첨부",
            contactFormSubmit: "전송하기",
            contactOfficeTitle: "본사 연락처",
            contactMapTitle: "찾아오시는 길",
        },
        en: {
            // Header
            home: "Home",
            about: "About Us",
            services: "Services",
            contact: "Contact",
            pageTitleHome: "Home | NEO MARITIME SERVICE",
            pageTitleAbout: "About Us | NEO MARITIME SERVICE",
            pageTitleServices: "Services | NEO MARITIME SERVICE",
            pageTitleContact: "Contact | NEO MARITIME SERVICE",

            // Index (index.html)
            heroTitle: "Maritime Service with Trust and Expertise",
            heroSubtitle: "Providing integrated solutions connecting two hubs: Korea and Panama.",
            heroButtonPrimary: "View Services",
            heroButtonSecondary: "Contact Us",

            promiseTitle: "Our Promise",
            promiseLead: "NEO MARITIME SERVICE is dedicated to our clients' successful voyages.",
            feature1Title: "Optimal Pricing",
            feature1Desc: "We provide the best value through direct local transactions and efficient logistics systems.",
            feature2Title: "Prompt Supply",
            feature2Desc: "We respond quickly to urgent demands through strategic hubs in Panama and Korea.",
            feature3Title: "Highest Quality",
            feature3Desc: "We only supply verified products that have undergone strict inspection processes.",

            whyUsTitle: "Why Choose Us?",
            whyUsLead: "Our exclusive network and expertise maximize your maritime operational efficiency.",
            
            // About (about.html)
            aboutHeroDesc: "Setting a new standard in the maritime service sector.",
            missionTitle: "Our Mission",
            missionLead: "NEO MARITIME SERVICE is the optimal maritime logistics partner connecting Korea and Panama.",

            // Values (about.html)
            valuesTitle: "Core Values",
            value1Title: "Trust",
            value1Desc: "Building transparent and honest relationships with all stakeholders.",
            value2Title: "Innovation",
            value2Desc: "Maximizing efficiency by adopting new technologies and processes.",
            value3Title: "Safety",
            value3Desc: "Prioritizing the safety of seafarers and vessels.",

            // Management (about.html)
            managementTitle: "Management Team",
            managementLead: "Our team of shipping and logistics experts is here to support your company.",

            // Services (services.html)
            servicesHeroDesc: "Check out the integrated solutions connecting Korea and Panama.",
            servicesTitle: "Our Services",
            serviceFoodTitle: "Food & Fresh Provision Supply",
            serviceFoodDesc: "We promptly procure and supply various fresh provisions and abundant K-Food to enhance crew satisfaction.",
            serviceChandlerTitle: "Ship Chandling Supply",
            serviceChandlerDesc: "We supply high-quality ship chandlery items required for all vessel operations, including deck, engine, and safety equipment.",
            serviceLubeTitle: "Bunker / Lubricant Supply",
            serviceLubeDesc: "We provide high-quality fuel and lubricants at competitive prices.",
            serviceRepairTitle: "Local Sourcing & Repair Services",
            serviceRepairDesc: "We provide optimal pricing through direct local transactions and offer ship repair and service work.",

            // CTA (services.html)
            ctaTitle: "Your Trusted Partner for Your Next Voyage",
            ctaLead: "Contact us now to get the optimal ship supply solution.",
            ctaButton: "Contact Us",

            // Contact (contact.html)
            contactHeroDesc: "We will respond quickly to your inquiries.",
            contactTitle: "Inquiries & Contact",
            contactFormTitle: "Inquiry Form",
            contactFormName: "Name",
            contactFormEmail: "Email",
            contactFormPhone: "Phone",
            contactFormSubject: "Subject",
            contactFormMessage: "Message",
            contactFormFile: "Attach File",
            contactFormSubmit: "Send Message",
            contactOfficeTitle: "Head Office Contact",
            contactMapTitle: "Find Us",
        },
        es: {
            // Header
            home: "Inicio",
            about: "Nosotros",
            services: "Servicios",
            contact: "Contacto",
            pageTitleHome: "Inicio | NEO MARITIME SERVICE",
            pageTitleAbout: "Nosotros | NEO MARITIME SERVICE",
            pageTitleServices: "Servicios | NEO MARITIME SERVICE",
            pageTitleContact: "Contacto | NEO MARITIME SERVICE",

            // Index (index.html)
            heroTitle: "Servicio Marítimo con Confianza y Experiencia",
            heroSubtitle: "Ofrecemos soluciones integradas conectando dos centros: Corea y Panamá.",
            heroButtonPrimary: "Ver Servicios",
            heroButtonSecondary: "Contáctenos",

            promiseTitle: "Nuestra Promesa",
            promiseLead: "NEO MARITIME SERVICE se dedica al éxito de los viajes de nuestros clientes.",
            feature1Title: "Precios Óptimos",
            feature1Desc: "Ofrecemos el mejor valor a través de transacciones locales directas y sistemas logísticos eficientes.",
            feature2Title: "Suministro Rápido",
            feature2Desc: "Respondemos rápidamente a demandas urgentes a través de centros estratégicos en Panamá y Corea.",
            feature3Title: "Máxima Calidad",
            feature3Desc: "Solo suministramos productos verificados que han pasado por estrictos procesos de inspección.",

            whyUsTitle: "¿Por qué Elegirnos?",
            whyUsLead: "Nuestra red exclusiva y experiencia maximizan la eficiencia operativa marítima de su empresa.",

            // About (about.html)
            aboutHeroDesc: "Estableciendo un nuevo estándar en el sector de servicios marítimos.",
            missionTitle: "Nuestra Misión",
            missionLead: "NEO MARITIME SERVICE es el socio logístico marítimo óptimo que conecta Corea y Panamá.",

            // Values (about.html)
            valuesTitle: "Valores Fundamentales",
            value1Title: "Confianza",
            value1Desc: "Construir relaciones transparentes y honestas con todos los interesados.",
            value2Title: "Innovación",
            value2Desc: "Maximizar la eficiencia mediante la adopción de nuevas tecnologías y procesos.",
            value3Title: "Seguridad",
            value3Desc: "Priorizar la seguridad de los marineros y las embarcaciones.",

            // Management (about.html)
            managementTitle: "Equipo Directivo",
            managementLead: "Nuestro equipo de expertos en transporte marítimo y logística está aquí para apoyar a su empresa.",

            // Services (services.html)
            servicesHeroDesc: "Vea las soluciones integradas que conectan Corea y Panamá.",
            servicesTitle: "Nuestros Servicios",
            serviceFoodTitle: "Suministro de Alimentos y Provisiones Frescas",
            serviceFoodDesc: "Procuramos y suministramos rápidamente diversas provisiones frescas y abundante Comida K para aumentar la satisfacción de la tripulación.",
            serviceChandlerTitle: "Suministro de Proveduría (Chandling)",
            serviceChandlerDesc: "Suministramos artículos de proveduría de alta calidad necesarios para todas las operaciones de la embarcación, incluyendo equipos de cubierta, motor y seguridad.",
            serviceLubeTitle: "Suministro de Búnker / Lubricantes",
            serviceLubeDesc: "Ofrecemos combustible y lubricantes de alta calidad a precios competitivos.",
            serviceRepairTitle: "Suministro Local y Servicios de Reparación",
            serviceRepairDesc: "Proporcionamos precios óptimos a través de transacciones locales directas y ofrecemos servicios de reparación y mantenimiento de embarcaciones.",

            // CTA (services.html)
            ctaTitle: "Su Socio de Confianza para Su Próximo Viaje",
            ctaLead: "Contáctenos ahora para obtener la solución óptima de suministro para embarcaciones.",
            ctaButton: "Contáctenos",

            // Contact (contact.html)
            contactHeroDesc: "Responderemos rápidamente a sus consultas.",
            contactTitle: "Consultas y Contacto",
            contactFormTitle: "Formulario de Consulta",
            contactFormName: "Nombre",
            contactFormEmail: "Correo Electrónico",
            contactFormPhone: "Teléfono",
            contactFormSubject: "Asunto",
            contactFormMessage: "Mensaje",
            contactFormFile: "Adjuntar Archivo",
            contactFormSubmit: "Enviar Mensaje",
            contactOfficeTitle: "Contacto de la Oficina Principal",
            contactMapTitle: "Encuéntrenos",
        },
        zh: {
            // Header
            home: "首页",
            about: "关于我们",
            services: "服务",
            contact: "联系我们",
            pageTitleHome: "首页 | NEO MARITIME SERVICE",
            pageTitleAbout: "关于我们 | NEO MARITIME SERVICE",
            pageTitleServices: "服务 | NEO MARITIME SERVICE",
            pageTitleContact: "联系我们 | NEO MARITIME SERVICE",

            // Index (index.html)
            heroTitle: "以信任和专业知识为您提供海事服务",
            heroSubtitle: "提供连接韩国和巴拿马两个枢纽的综合解决方案。",
            heroButtonPrimary: "查看服务",
            heroButtonSecondary: "联系我们",

            promiseTitle: "我们的承诺",
            promiseLead: "NEO MARITIME SERVICE 致力于客户的成功航行。",
            feature1Title: "最优价格",
            feature1Desc: "通过当地直接交易和高效的物流系统，提供最佳价值。",
            feature2Title: "快速供应",
            feature2Desc: "通过位于巴拿马和韩国的战略枢纽，快速响应紧急需求。",
            feature3Title: "最高质量",
            feature3Desc: "我们仅供应经过严格检验流程的验证产品。",

            whyUsTitle: "为什么选择我们？",
            whyUsLead: "我们独有的网络和专业知识将最大限度地提高您的海事运营效率。",

            // About (about.html)
            aboutHeroDesc: "设定海事服务领域的新标准。",
            missionTitle: "我们的使命",
            missionLead: "NEO MARITIME SERVICE 是连接韩国和巴拿马的最佳海事物流合作伙伴。",

            // Values (about.html)
            valuesTitle: "核心价值",
            value1Title: "信任",
            value1Desc: "与所有利益相关者建立透明、诚实的关系。",
            value2Title: "创新",
            value2Desc: "通过采用新技术和流程来最大限度地提高效率。",
            value3Title: "安全",
            value3Desc: "将船员和船舶的安全置于首位。",

            // Management (about.html)
            managementTitle: "管理团队",
            managementLead: "我们的海运和物流专家团队将为您的公司提供支持。",

            // Services (services.html)
            servicesHeroDesc: "查看连接韩国和巴拿马的综合解决方案。",
            servicesTitle: "我们的服务",
            serviceFoodTitle: "食品和生鲜供应",
            serviceFoodDesc: "我们迅速采购和供应各种新鲜的食品和丰富的韩式食物，以提高船员的满意度。",
            serviceChandlerTitle: "船舶用品 (Chandling) 供应",
            serviceChandlerDesc: "我们供应船舶运营所需的所有高质量船舶用品，包括甲板、发动机和安全设备。",
            serviceLubeTitle: "燃料 / 润滑油供应",
            serviceLubeDesc: "我们以具有竞争力的价格提供高质量的燃料和润滑油。",
            serviceRepairTitle: "本地采购和维修服务",
            serviceRepairDesc: "我们通过当地直接交易提供最优价格，并提供船舶维修和劳务服务。",

            // CTA (services.html)
            ctaTitle: "您下一次航行的可靠伙伴",
            ctaLead: "立即联系我们，获取最佳船舶供应解决方案。",
            ctaButton: "联系我们",

            // Contact (contact.html)
            contactHeroDesc: "我们将迅速回复您的咨询。",
            contactTitle: "咨询与联系方式",
            contactFormTitle: "咨询表格",
            contactFormName: "姓名",
            contactFormEmail: "电子邮件",
            contactFormPhone: "电话",
            contactFormSubject: "主题",
            contactFormMessage: "消息",
            contactFormFile: "附加文件",
            contactFormSubmit: "发送信息",
            contactOfficeTitle: "总部联系方式",
            contactMapTitle: "找到我们",
        },
    };

    const applyLanguage = (lang) => {
        // 타이틀 번역
        const titleElement = document.querySelector('title');
        const titleKey = titleElement.getAttribute('data-translate-title');
        if (titleKey && langData[lang][titleKey]) {
            titleElement.textContent = langData[lang][titleKey];
        }

        // 일반 텍스트 번역
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langData[lang][key]) {
                element.textContent = langData[lang][key];
            }
        });

        // 버튼 텍스트 번역
        document.querySelectorAll('[data-translate-button]').forEach(element => {
            const key = element.getAttribute('data-translate-button');
            if (langData[lang][key]) {
                element.textContent = langData[lang][key];
            }
        });

        // Placeholder 번역 (Contact Form)
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (langData[lang][key]) {
                element.placeholder = langData[lang][key];
            }
        });
    };

    // 로컬 스토리지에서 저장된 언어 설정 불러오기
    let currentLang = localStorage.getItem('language') || 'ko';
    languageSelect.value = currentLang;
    applyLanguage(currentLang);

    // 언어 선택 변경 이벤트 리스너
    languageSelect.addEventListener('change', (event) => {
        currentLang = event.target.value;
        localStorage.setItem('language', currentLang);
        applyLanguage(currentLang);
    });

    // 헤더 스크롤 시 배경색 변경 (선택적 기능)
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Hero 섹션 배경 이미지 로드 시 페이드인 효과 (선택적 기능)
    const heroSection = document.querySelector('.hero, .page-hero');
    if (heroSection) {
        const imageUrl = heroSection.style.backgroundImage.slice(5, -2).replace(/"/g, "");
        if (imageUrl) {
            const img = new Image();
            img.onload = () => {
                heroSection.style.opacity = 1;
            };
            img.src = imageUrl;
            heroSection.style.opacity = 0; // 초기 투명 설정
            heroSection.style.transition = 'opacity 1s ease-in-out';
        } else {
            heroSection.style.opacity = 1; // 이미지가 없으면 바로 표시
        }
    }
});