// script.js

document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");
    
    // 다국어 데이터: 각 페이지의 주요 텍스트를 담고 있습니다.
    const langData = {
        ko: {
            // Page Titles
            pageTitleHome: "NEO MARITIME SERVICE | 안전한 항해를 위한 당신의 든든한 파트너",
            pageTitleAbout: "회사 소개 | NEO MARITIME SERVICE",
            pageTitleServices: "서비스 | NEO MARITIME SERVICE",
            pageTitleContact: "문의하기 | NEO MARITIME SERVICE",
            
            // Header & Navigation
            home: "홈",
            about: "회사 소개",
            services: "서비스",
            contact: "문의하기",

            // Hero (index.html)
            heroTitle: "안전한 항해를 위한 당신의 든든한 파트너",
            heroSubtitle: "글로벌 항해, 멈춤 없는 신뢰. 당신의 든든한 파트너, NEO MARITIME SERVICE.",
            btnService: "서비스 둘러보기",
            btnContact: "문의하기",

            // Promise (index.html)
            promiseTitle: "우리의 약속",
            promiseFastTitle: "신속한 대응",
            promiseFastDesc: "현지 네트워크를 바탕으로 신속하고 정확한 공급을 보장합니다.",
            promiseQualityTitle: "품질 보증",
            promiseQualityDesc: "국제 규격에 부합하는 검증된 제품만을 공급합니다.",
            promiseCustomerTitle: "고객 중심",
            promiseCustomerDesc: "요구사항에 최적화된 맞춤형 솔루션을 제공합니다.",
            
            // Why Us (index.html)
            whyUsTitle: "왜 NEO MARITIME SERVICE인가?",
            whyUsLead: "단순한 공급업체를 넘어 귀사의 신뢰할 수 있는 파트너가 됩니다.",
            whyUsText: "우리는 단순히 제품을 배달하는 것이 아니라, 귀사의 성공적인 항해를 위한 파트너십을 구축합니다. 뛰어난 서비스, 신속한 대응, 그리고 타협 없는 품질로 귀사의 모든 요구를 충족시키기 위해 최선을 다합니다.",
            whyUsButton: "회사 소개",

            // About Hero (about.html)
            aboutHeroDesc: "한국과 파나마를 잇는 글로벌 선박 보급 네트워크",

            // Mission (about.html)
            missionTitle: "우리의 미션",
            missionFastTitle: "신속하고 정확한 서비스",
            missionFastDesc: "고객의 요청사항을 24시간 신속하고 정확한 서비스를 제공합니다.",
            missionQualityTitle: "신뢰와 품질 중심의 서비스",
            missionQualityDesc: "HACCP 기준을 준수하는 엄격한 위생 및 품질 관리 시스템을 운영합니다.",
            missionPartnerTitle: "파트너십 기반의 성장",
            missionPartnerDesc: "고객의 성공을 목표로 장기적 신뢰 관계를 구축해 함께 성장합니다.",

            // Value (about.html)
            valueTitle: "핵심 가치",
            valueTrustTitle: "신뢰성",
            valueTrustDesc: "약속된 시간에, 약속된 품질을 제공합니다.",
            valueGlobalTitle: "글로벌 네트워크",
            valueGlobalDesc: "파나마와 한국을 잇는 독보적인 글로벌 공급망을 갖추고 있습니다.",
            valueCustomerTitle: "고객 중심",
            valueCustomerDesc: "고객의 요구를 최우선으로 하여 맞춤형 서비스를 제공합니다.",

            // Management (about.html)
            managementTitle: "경영진 소개",
            managementLead: "숙련된 전문가들이 귀사의 안전한 항해를 지원합니다.",
            managerHanTitle: "한종훈 대표 (Han Jonghun)",
            managerHanRole: "파나마 CEO",
            managerHanDesc: "글로벌 해운 및 물류 분야 20년 이상 경력의 전문가로 NEO MARITIME SERVICE를 이끌며 글로벌 네트워크 확장에 집중하고 있습니다.",
            managerKimTitle: "김경희 대표 (Kim Kyunghee)",
            managerKimRole: "한국 CEO",
            managerKimDesc: "한국 물류회사 대표 및 20년 이상 경력의 선박 전문가로 한국 운영을 총괄하며 효율적이고 체계적인 보급 서비스를 제공합니다.",
            
            // Services (services.html)
            servicesHeroDesc: "한국과 파나마를 잇는 통합 솔루션을 확인해보세요.",
            servicesTitle: "주요 서비스",
            serviceFoodTitle: "식자재/신선식품 공급",
            serviceFoodDesc: "선원들의 만족도를 높이는 다양한 신선 식자재와 풍부한 K-Food를 신속하게 조달합니다.",
            serviceChandlerTitle: "선용품 (Chandling) 공급",
            serviceChandlerDesc: "갑판, 엔진, 안전 장비 등 모든 선박 운영에 필요한 고품질 선용품을 공급합니다.",
            serviceLubeTitle: "윤활유 및 화학 제품",
            serviceLubeDesc: "주요 브랜드의 벙커 및 윤활유, 청소용 화학 제품을 신속하게 조달합니다.",
            serviceRepairTitle: "현지 조달 및 수리 용역",
            serviceRepairDesc: "양국 현지 직거래를 통한 최적의 가격과 선박 수리, 용역 서비스를 제공합니다.",
            
            // CTA (services.html)
            ctaTitle: "당신의 다음 항해를 위한 신뢰할 수 있는 파트너",
            ctaLead: "지금 바로 문의하여 최적의 선박 보급 솔루션을 받아보세요.",
            ctaButton: "문의하기",

            // Contact (contact.html)
            contactHeroTitle: "문의하기",
            contactHeroSubtitle: "귀사의 해상 운영에 필요한 모든 사항에 대해 문의해 주세요.",
            contactSectionTitle: "사무소 연락처 및 문의 양식",
            officeKorea: "🇰🇷 한국 사무소",
            officePanama: "🇵🇦 파나마 사무소",
            formKoreaTitle: "🇰🇷 한국 문의 양식", // 새로 추가
            formPanamaTitle: "🇵🇦 파나마 문의 양식", // 새로 추가
            mapKorea: "🇰🇷 한국 사무소 위치",
            mapPanama: "🇵🇦 파나마 사무소 위치",
            phSelectOffice: "문의 대상 사무소를 선택하세요", // (현재 사용되지 않음)
            phCompanyVessel: "회사 또는 선박명", 
            phContactPerson: "담당자 이름", 
            phEmail: "이메일",
            phPhone: "전화번호", 
            phMessage: "문의 내용",
            btnSubmitKorea: "한국 사무소로 보내기", // 새로 추가
            btnSubmitPanama: "파나마 사무소로 보내기", // 새로 추가
        },
        en: {
            // Page Titles
            pageTitleHome: "NEO MARITIME SERVICE | Your Reliable Partner for Safe Navigation",
            pageTitleAbout: "About Us | NEO MARITIME SERVICE",
            pageTitleServices: "Services | NEO MARITIME SERVICE",
            pageTitleContact: "Contact Us | NEO MARITIME SERVICE",
            
            // Header & Navigation
            home: "Home",
            about: "About Us",
            services: "Services",
            contact: "Contact",

            // Hero (index.html)
            heroTitle: "Your Reliable Partner for Safe Navigation",
            heroSubtitle: "Global voyage, unwavering trust. Your dependable partner, NEO MARITIME SERVICE.",
            btnService: "View Services",
            btnContact: "Contact Us",

            // Promise (index.html)
            promiseTitle: "Our Promise",
            promiseFastTitle: "Rapid Response",
            promiseFastDesc: "We ensure fast and accurate supply based on our local network.",
            promiseQualityTitle: "Quality Assurance",
            promiseQualityDesc: "We supply only certified products that meet international standards.",
            promiseCustomerTitle: "Customer-Centric",
            promiseCustomerDesc: "We provide customized solutions optimized for your requirements.",

            // Why Us (index.html)
            whyUsTitle: "Why NEO MARITIME SERVICE?",
            whyUsLead: "We are more than just a supplier; we are your trusted partner.",
            whyUsText: "We don't just deliver products; we build partnerships for your successful voyage. We are committed to meeting all your needs with excellent service, rapid response, and uncompromising quality.",
            whyUsButton: "About Us",

            // About Hero (about.html)
            aboutHeroDesc: "Global Ship Supply Network connecting Korea and Panama",

            // Mission (about.html)
            missionTitle: "Our Mission",
            missionFastTitle: "Fast and Accurate Service",
            missionFastDesc: "We provide 24-hour fast and accurate service for customer requests.",
            missionQualityTitle: "Trust and Quality-Centric Service",
            missionQualityDesc: "We operate a strict hygiene and quality management system complying with HACCP standards.",
            missionPartnerTitle: "Partnership-Based Growth",
            missionPartnerDesc: "We build long-term trust relationships aiming for customer success and mutual growth.",

            // Value (about.html)
            valueTitle: "Core Values",
            valueTrustTitle: "Reliability",
            valueTrustDesc: "We deliver the promised quality at the promised time.",
            valueGlobalTitle: "Global Network",
            valueGlobalDesc: "We possess a unique global supply chain connecting Panama and Korea.",
            valueCustomerTitle: "Customer Focus",
            valueCustomerDesc: "We prioritize customer needs by providing tailored services.",

            // Management (about.html)
            managementTitle: "Management Team",
            managementLead: "Experienced professionals support your safe navigation.",
            managerHanTitle: "Jonghun Han (Panama CEO)",
            managerHanRole: "Panama CEO",
            managerHanDesc: "A professional with over 20 years of experience in global shipping and logistics, leading NEO MARITIME SERVICE and focusing on global network expansion.",
            managerKimTitle: "Kyunghee Kim (Korea CEO)",
            managerKimRole: "Korea CEO",
            managerKimDesc: "A shipping expert with over 20 years of experience and a former Korean logistics company representative, overseeing Korean operations to provide efficient and systematic supply services.",

            // Services (services.html)
            servicesHeroDesc: "Check out the integrated solutions connecting Korea and Panama.",
            servicesTitle: "Key Services",
            serviceFoodTitle: "Food & Fresh Provision Supply",
            serviceFoodDesc: "We promptly procure and supply various fresh provisions and abundant K-Food to enhance crew satisfaction.",
            serviceChandlerTitle: "Ship Chandling Supply",
            serviceChandlerDesc: "We supply high-quality ship chandlery items required for all vessel operations, including deck, engine, and safety equipment.",
            serviceLubeTitle: "Lubricants & Chemical Products",
            serviceLubeDesc: "We promptly source and deliver major brands of bunker, lubricants, and cleaning chemical products.",
            serviceRepairTitle: "Local Sourcing & Repair Services",
            serviceRepairDesc: "We provide optimal pricing through direct local transactions and offer ship repair and service work in both countries.",

            // CTA (services.html)
            ctaTitle: "Your Trusted Partner for Your Next Voyage",
            ctaLead: "Contact us now to get the optimal ship supply solution.",
            ctaButton: "Contact Us",

            // Contact (contact.html)
            contactHeroTitle: "Contact Us",
            contactHeroSubtitle: "Inquire about all requirements for your maritime operations.",
            contactSectionTitle: "Office Contact Information and Inquiry Form",
            officeKorea: "🇰🇷 Korea Office",
            officePanama: "🇵🇦 Panama Office",
            formKoreaTitle: "🇰🇷 Korea Inquiry Form",
            formPanamaTitle: "🇵🇦 Panama Inquiry Form",
            mapKorea: "🇰🇷 Korea Office Location",
            mapPanama: "🇵🇦 Panama Office Location",
            phSelectOffice: "Select Inquiry Office",
            phCompanyVessel: "Company or Vessel Name", 
            phContactPerson: "Contact Person Name", 
            phEmail: "Email",
            phPhone: "Phone Number", 
            phMessage: "Inquiry Details",
            btnSubmitKorea: "Send to Korea Office",
            btnSubmitPanama: "Send to Panama Office",
        },
        es: {
            // Page Titles
            pageTitleHome: "NEO MARITIME SERVICE | Su Socio Fiable para una Navegación Segura",
            pageTitleAbout: "Sobre Nosotros | NEO MARITIME SERVICE",
            pageTitleServices: "Servicios | NEO MARITIME SERVICE",
            pageTitleContact: "Contáctenos | NEO MARITIME SERVICE",
            
            // Header & Navigation
            home: "Inicio",
            about: "Sobre Nosotros",
            services: "Servicios",
            contact: "Contacto",

            // Hero (index.html)
            heroTitle: "Su Socio Fiable para una Navegación Segura",
            heroSubtitle: "Viaje global, confianza inquebrantable. Su socio de confianza, NEO MARITIME SERVICE.",
            btnService: "Ver Servicios",
            btnContact: "Contáctenos",

            // Promise (index.html)
            promiseTitle: "Nuestra Promesa",
            promiseFastTitle: "Respuesta Rápida",
            promiseFastDesc: "Aseguramos un suministro rápido y preciso basado en nuestra red local.",
            promiseQualityTitle: "Garantía de Calidad",
            promiseQualityDesc: "Suministramos solo productos certificados que cumplen con las normas internacionales.",
            promiseCustomerTitle: "Enfoque en el Cliente",
            promiseCustomerDesc: "Ofrecemos soluciones personalizadas optimizadas para sus requisitos.",

            // Why Us (index.html)
            whyUsTitle: "¿Por qué NEO MARITIME SERVICE?",
            whyUsLead: "Somos más que un proveedor; somos su socio de confianza.",
            whyUsText: "No solo entregamos productos; construimos asociaciones para su viaje exitoso. Estamos comprometidos a satisfacer todas sus necesidades con un servicio excelente, respuesta rápida y calidad inquebrantable.",
            whyUsButton: "Sobre Nosotros",

            // About Hero (about.html)
            aboutHeroDesc: "Red Global de Suministro de Barcos que conecta Corea y Panamá",

            // Mission (about.html)
            missionTitle: "Nuestra Misión",
            missionFastTitle: "Servicio Rápido y Preciso",
            missionFastDesc: "Ofrecemos servicio rápido y preciso las 24 horas para las solicitudes del cliente.",
            missionQualityTitle: "Servicio Centrado en la Confianza y la Calidad",
            missionQualityDesc: "Operamos un estricto sistema de gestión de higiene y calidad que cumple con las normas HACCP.",
            missionPartnerTitle: "Crecimiento Basado en la Asociación",
            missionPartnerDesc: "Construimos relaciones de confianza a largo plazo con el objetivo de lograr el éxito y el crecimiento mutuo del cliente.",

            // Value (about.html)
            valueTitle: "Valores Fundamentales",
            valueTrustTitle: "Fiabilidad",
            valueTrustDesc: "Entregamos la calidad prometida en el tiempo prometido.",
            valueGlobalTitle: "Red Global",
            valueGlobalDesc: "Poseemos una cadena de suministro global única que conecta Panamá y Corea.",
            valueCustomerTitle: "Enfoque en el Cliente",
            valueCustomerDesc: "Priorizamos las necesidades del cliente proporcionando servicios a medida.",

            // Management (about.html)
            managementTitle: "Equipo Directivo",
            managementLead: "Profesionales experimentados apoyan su navegación segura.",
            managerHanTitle: "Jonghun Han (CEO de Panamá)",
            managerHanRole: "CEO de Panamá",
            managerHanDesc: "Un profesional con más de 20 años de experiencia en transporte marítimo y logística global, liderando NEO MARITIME SERVICE y enfocándose en la expansión de la red global.",
            managerKimTitle: "Kyunghee Kim (CEO de Corea)",
            managerKimRole: "CEO de Corea",
            managerKimDesc: "Experto en transporte marítimo con más de 20 años de experiencia y ex representante de una empresa de logística coreana, supervisando las operaciones coreanas para proporcionar servicios de suministro eficientes y sistemáticos.",

            // Services (services.html)
            servicesHeroDesc: "Consulte las soluciones integradas que conectan Corea y Panamá.",
            servicesTitle: "Servicios Clave",
            serviceFoodTitle: "Suministro de Alimentos Frescos y Provisiones",
            serviceFoodDesc: "Adquirimos y suministramos con prontitud diversas provisiones frescas y abundante Comida K para mejorar la satisfacción de la tripulación.",
            serviceChandlerTitle: "Suministro de Provisionistas (Chandling)",
            serviceChandlerDesc: "Suministramos artículos de provisionista de alta calidad necesarios para todas las operaciones del buque, incluido equipo de cubierta, motor y seguridad.",
            serviceLubeTitle: "Lubricantes y Productos Químicos",
            serviceLubeDesc: "Obtenemos y entregamos con prontitud marcas importantes de búnker, lubricantes y productos químicos de limpieza.",
            serviceRepairTitle: "Abastecimiento Local y Servicios de Reparación",
            serviceRepairDesc: "Ofrecemos precios óptimos a través de transacciones locales directas y proporcionamos trabajos de reparación y servicio de barcos en ambos países.",

            // CTA (services.html)
            ctaTitle: "Su Socio de Confianza para Su Próximo Viaje",
            ctaLead: "Contactenos ahora para obtener la solución óptima de suministro de barcos.",
            ctaButton: "Contáctenos",

            // Contact (contact.html)
            contactHeroTitle: "Contáctenos",
            contactHeroSubtitle: "Consulte sobre todos los requisitos para sus operaciones marítimas.",
            contactSectionTitle: "Información de Contacto de la Oficina y Formulario de Consulta",
            officeKorea: "🇰🇷 Oficina de Corea",
            officePanama: "🇵🇦 Oficina de Panamá",
            formKoreaTitle: "🇰🇷 Formulario de Consulta de Corea",
            formPanamaTitle: "🇵🇦 Formulario de Consulta de Panamá",
            mapKorea: "🇰🇷 Ubicación de la Oficina de Corea",
            mapPanama: "🇵🇦 Ubicación de la Oficina de Panamá",
            phSelectOffice: "Seleccionar Oficina de Consulta",
            phCompanyVessel: "Nombre de la Compañía o Buque", 
            phContactPerson: "Nombre de la Persona de Contacto", 
            phEmail: "Correo Electrónico",
            phPhone: "Número de Teléfono", 
            phMessage: "Detalles de la Consulta",
            btnSubmitKorea: "Enviar a la Oficina de Corea",
            btnSubmitPanama: "Enviar a la Oficina de Panamá",
        },
        zh: {
            // Page Titles
            pageTitleHome: "NEO MARITIME SERVICE | 您安全航行的堅實夥伴",
            pageTitleAbout: "關於我們 | NEO MARITIME SERVICE",
            pageTitleServices: "服務 | NEO MARITIME SERVICE",
            pageTitleContact: "聯繫我們 | NEO MARITIME SERVICE",
            
            // Header & Navigation
            home: "首頁",
            about: "關於我們",
            services: "服務",
            contact: "聯繫我們",

            // Hero (index.html)
            heroTitle: "您安全航行的堅實夥伴",
            heroSubtitle: "全球航行，堅定不移的信賴。您可靠的夥伴，NEO MARITIME SERVICE。",
            btnService: "查看服務",
            btnContact: "聯繫我們",

            // Promise (index.html)
            promiseTitle: "我們的承諾",
            promiseFastTitle: "快速響應",
            promiseFastDesc: "以當地網絡為基礎，確保快速準確的供應。",
            promiseQualityTitle: "質量保證",
            promiseQualityDesc: "僅供應符合國際標準的認證產品。",
            promiseCustomerTitle: "以客戶為中心",
            promiseCustomerDesc: "提供根據您的要求量身定制的優化解決方案。",

            // Why Us (index.html)
            whyUsTitle: "為什麼選擇 NEO MARITIME SERVICE？",
            whyUsLead: "我們不僅是供應商；我們是您值得信賴的合作夥伴。",
            whyUsText: "我們不僅僅交付產品，我們還為您成功的航行建立合作夥伴關係。我們致力於提供卓越的服務、快速的響應和毫不妥協的質量，以滿足您的所有需求。",
            whyUsButton: "關於我們",

            // About Hero (about.html)
            aboutHeroDesc: "連接韓國和巴拿馬的全球船舶供應網絡",

            // Mission (about.html)
            missionTitle: "我們的使命",
            missionFastTitle: "快速準確的服務",
            missionFastDesc: "我們為客戶的要求提供 24 小時快速準確的服務。",
            missionQualityTitle: "以信賴和質量為中心的服務",
            missionQualityDesc: "我們實施嚴格的衛生和質量管理體系，符合 HACCP 標準。",
            missionPartnerTitle: "基於夥伴關係的成長",
            missionPartnerDesc: "我們以客戶成功為目標，建立長期信賴關係，共同成長。",

            // Value (about.html)
            valueTitle: "核心價值",
            valueTrustTitle: "可靠性",
            valueTrustDesc: "在承諾的時間內交付承諾的質量。",
            valueGlobalTitle: "全球網絡",
            valueGlobalDesc: "我們擁有連接巴拿馬和韓國的獨特全球供應鏈。",
            valueCustomerTitle: "以客戶為中心",
            valueCustomerDesc: "我們提供量身定制的服務，將客戶的需求放在首位。",

            // Management (about.html)
            managementTitle: "管理團隊介紹",
            managementLead: "經驗豐富的專業人士為您的安全航行提供支持。",
            managerHanTitle: "韓宗勳 代表 (Panama CEO)",
            managerHanRole: "巴拿馬 CEO",
            managerHanDesc: "一位在全球航運和物流領域擁有 20 多年經驗的專業人士，領導 NEO MARITIME SERVICE 並專注於全球網絡擴展。",
            managerKimTitle: "金京姬 代表 (Korea CEO)",
            managerKimRole: "韓國 CEO",
            managerKimDesc: "擁有 20 多年經驗的船舶專家和前韓國物流公司代表，監督韓國業務，提供高效和系統的供應服務。",

            // Services (services.html)
            servicesHeroDesc: "查看連接韓國和巴拿馬的綜合解決方案。",
            servicesTitle: "主要服務",
            serviceFoodTitle: "食物和新鮮物資供應",
            serviceFoodDesc: "我們及時採購和供應各種新鮮物資和豐富的韓式美食，以提高船員滿意度。",
            serviceChandlerTitle: "船舶供應品 (Chandling) 供應",
            serviceChandlerDesc: "我們供應船舶所有操作所需的高質量船舶用品，包括甲板、發動機和安全設備。",
            serviceLubeTitle: "潤滑油和化學產品",
            serviceLubeDesc: "我們及時採購和交付主要品牌的燃油、潤滑油和清潔化學產品。",
            serviceRepairTitle: "本地採購和維修服務",
            serviceRepairDesc: "我們通過當地直接交易提供最優惠的價格，並在兩國提供船舶維修和服務工作。",

            // CTA (services.html)
            ctaTitle: "您下一次航行的可靠夥伴",
            ctaLead: "立即聯繫我們，獲得最佳船舶供應解決方案。",
            ctaButton: "聯繫我們",

            // Contact (contact.html)
            contactHeroTitle: "聯繫我們",
            contactHeroSubtitle: "諮詢您的海上作業的所有要求。",
            contactSectionTitle: "辦公室聯繫信息和諮詢表格",
            officeKorea: "🇰🇷 韓國辦事處",
            officePanama: "🇵🇦 巴拿馬辦事處",
            formKoreaTitle: "🇰🇷 韓國諮詢表格",
            formPanamaTitle: "🇵🇦 巴拿馬諮詢表格",
            mapKorea: "🇰🇷 韓國辦事處位置",
            mapPanama: "🇵🇦 巴拿馬辦事處位置",
            phSelectOffice: "選擇諮詢辦事處",
            phCompanyVessel: "公司或船名", 
            phContactPerson: "聯繫人姓名", 
            phEmail: "電子郵件",
            phPhone: "電話號碼", 
            phMessage: "諮詢詳情",
            btnSubmitKorea: "發送到韓國辦事處",
            btnSubmitPanama: "發送到巴拿馬辦事處",
        }
    };

    // 텍스트를 페이지에 적용하는 함수
    const applyLanguage = (lang) => {
        const data = langData[lang];
        if (!data) return;

        // 1. Title 업데이트
        document.querySelectorAll('[data-translate-title]').forEach(el => {
            const key = el.getAttribute('data-translate-title');
            if (data[key]) {
                el.textContent = data[key];
                document.title = data[key]; // <title> 태그도 업데이트
            }
        });
        
        // 2. 일반 텍스트 업데이트
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (data[key]) {
                el.textContent = data[key];
            }
        });

        // 3. 버튼 텍스트 업데이트 (index, services 페이지의 CTA 버튼)
        document.querySelectorAll('[data-translate-button]').forEach(el => {
            const key = el.getAttribute('data-translate-button');
            // 문의하기 버튼은 아래에서 별도로 처리하므로 스킵
            if (el.closest('.form-col')) return; 
            if (data[key]) {
                el.textContent = data[key];
            }
        });

        // 4. Contact 페이지 전용 업데이트 (문의 양식 제목 및 버튼 텍스트)
        document.querySelectorAll('[data-translate-contact-office]').forEach(el => {
            const key = el.getAttribute('data-translate-contact-office');
            if (data[key]) {
                el.textContent = data[key];
            }
        });

        // 5. Placeholder 및 버튼 텍스트 업데이트 (문의 양식)
        document.querySelectorAll('.form-col form').forEach(form => {
            // Placeholder 업데이트
            form.querySelector('input[name="company_vessel"]').placeholder = data.phCompanyVessel;
            form.querySelector('input[name="contact_person"]').placeholder = data.phContactPerson;
            form.querySelector('input[name="email"]').placeholder = data.phEmail;
            form.querySelector('input[name="phone"]').placeholder = data.phPhone;
            form.querySelector('textarea[name="message"]').placeholder = data.phMessage;

            // 버튼 텍스트 업데이트 (사무소별 분리)
            const office = form.getAttribute('data-office');
            const submitButton = form.querySelector('button[type="submit"]');
            if (office === 'korea') {
                submitButton.textContent = data.btnSubmitKorea;
            } else if (office === 'panama') {
                submitButton.textContent = data.btnSubmitPanama;
            }
        });
    };

    // 초기 로드 시 저장된 언어 또는 기본값 (한국어) 적용
    const savedLang = localStorage.getItem("selectedLanguage") || "ko";
    if (languageSelect) {
        languageSelect.value = savedLang;
        applyLanguage(savedLang);

        // 언어 변경 이벤트 리스너
        languageSelect.addEventListener("change", (e) => {
            const newLang = e.target.value;
            localStorage.setItem("selectedLanguage", newLang);
            applyLanguage(newLang);
        });
    }

    // --- 홈 페이지 배경 슬라이드 기능 (index.html 전용) ---
    // 1. 배경 사진 파일 이름으로 교체 (resized_1.jpg, resized_2.jpg, resized_3.jpg 사용)
    const heroSection = document.getElementById('home-hero');
    const images = ['resized_1.jpg', 'resized_2.jpg', 'resized_3.jpg']; 
    let currentIndex = 0;

    const changeBackground = () => {
        if (!heroSection) return;

        // 배경 이미지를 직접 스타일로 설정
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;

        currentIndex = (currentIndex + 1) % images.length;
    };

    // 2. 5초마다 배경 변경 (heroSection이 존재할 때만 실행)
    if (heroSection) {
        // 페이지 로드 후 즉시 첫 이미지를 설정하고 슬라이드 시작
        changeBackground(); 
        setInterval(changeBackground, 5000); 
    }
});