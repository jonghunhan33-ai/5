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

            // About Hero
            aboutHeroTitle: "회사 소개",
            aboutHeroSubtitle: "한국과 파나마를 잇는 글로벌 선박 보급 네트워크",

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
            valueTrustDesc: "약속된 시간에, 약속된 품질의 제품을 제공하여 고객의 신뢰를 최우선으로 합니다.",
            valueGlobalTitle: "글로벌 전문성",
            valueGlobalDesc: "한국과 파나마 현지 시장에 대한 깊은 이해를 바탕으로 최적의 솔루션을 제공합니다.",
            valueFlexibilityTitle: "유연한 대응",
            valueFlexibilityDesc: "예상치 못한 상황에도 신속하고 유연하게 대처하여 선박의 운영 중단을 최소화합니다.",

            // Management (about.html)
            managementTitle: "경영진",
            managementSubtitle: "양국 현지 전문가들이 직접 운영하여 빠르고 전문적인 서비스를 보장합니다.",
            managerJungTitle: "정태욱 대표 (Jung Taewook)",
            managerJungRole: "파나마 CEO",
            managerJungDesc: "20년 이상 파나마 현지에서 선박 보급 분야를 이끌어 온 전문가로 중남미 및 글로벌 네트워크를 총괄합니다.",
            managerKimTitle: "김경희 대표 (Kim Kyunghee)",
            managerKimRole: "한국 CEO",
            managerKimDesc: "한국 물류회사 대표 및 20년 이상 경력의 선박 전문가로 한국 운영을 총괄하며 효율적이고 체계적인 보급 서비스를 제공합니다.",
            goToServicesButton: "서비스 둘러보기",

            // Services Hero
            servicesHeroTitle: "서비스 안내",
            servicesHeroSubtitle: "한국과 파나마를 잇는 통합 솔루션을 확인해보세요. ",

            // Main Services (services.html)
            mainServicesTitle: "주요 서비스",
            serviceFoodTitle: "식자재/신선식품 공급",
            serviceFoodDesc: "선원들의 만족도를 높이는 다양한 신선 식자재와 풍부한 K-Food를 신속하게 조달합니다.",
            serviceChandlingTitle: "선용품 (Chandling) 공급",
            serviceChandlingDesc: "갑판, 엔진, 안전 장비 등 모든 선박 운영에 필요한 고품질 선용품을 공급합니다.",
            serviceBunkerTitle: "벙커 및 화학 제품",
            serviceBunkerDesc: "주요 브랜드의 벙커 및 윤활유, 청소용 화학 제품을 신속하게 조달합니다.",
            serviceRepairTitle: "현지 조달 및 수리 용역",
            serviceRepairDesc: "양국 현지 직거래를 통한 최적의 가격과 선박 수리, 용역 서비스를 제공합니다.",
            
            // CTA (services.html)
            ctaTitle: "당신의 다음 항해를 위한 신뢰할 수 있는 파트너",
            ctaLead: "지금 바로 문의하여 최적의 선박 보급 솔루션을 받아보세요.",
            ctaButton: "문의하기",

            // Contact Hero
            contactHeroTitle: "문의하기",
            contactHeroSubtitle: "귀사의 해상 운영에 필요한 모든 사항에 대해 문의해 주세요. ",

            // Contact Details (contact.html)
            contactFormTitle: "문의 양식",
            contactKoreaTitle: "🇰🇷 한국 사무소",
            contactPanamaTitle: "🇵🇦 파나마 사무소",
            contactSelectOffice: "문의하실 사무소를 선택하세요",
            contactSelectPlaceholder: "선택",
            contactName: "이름 또는 선명",
            contactEmailLabel: "이메일",
            contactMessage: "문의 내용",
            contactAddress: "주소:",
            contactTel: "Tel:",
            contactEmergency: "Emergency:",
            contactEmail: "Email:",
            contactMapTitle: "오시는 길",
            contactMapNote: "* 지도 표시에 Google Maps API Key가 필요합니다. 'YOUR_API_KEY' 부분을 교체해야 정상 작동합니다.",
            
            // Contact Form Placeholders
            phName: "이름을 입력해 주세요",
            phEmail: "이메일 주소를 입력해 주세요",
            phMessage: "문의 내용을 상세하게 작성해 주세요",
            contactSubmit: "문의하기"
        },
        en: {
            pageTitleHome: "NEO MARITIME SERVICE | Your Reliable Partner for Safe Navigation",
            pageTitleAbout: "About Us | NEO MARITIME SERVICE",
            pageTitleServices: "Services | NEO MARITIME SERVICE",
            pageTitleContact: "Contact Us | NEO MARITIME SERVICE",

            home: "Home",
            about: "About Us",
            services: "Services",
            contact: "Contact",

            heroTitle: "Your Reliable Partner for Safe Navigation",
            heroSubtitle: "Global voyage, unwavering trust. NEO MARITIME SERVICE, your strong partner.",
            btnService: "View Services",
            btnContact: "Contact Us",

            promiseTitle: "Our Promise",
            promiseFastTitle: "Rapid Response",
            promiseFastDesc: "We ensure fast and accurate supply based on our local network.",
            promiseQualityTitle: "Quality Assurance",
            promiseQualityDesc: "We supply only certified products that meet international standards.",
            promiseCustomerTitle: "Customer Focus",
            promiseCustomerDesc: "We provide customized solutions optimized for your requirements.",

            whyUsTitle: "Why NEO MARITIME SERVICE?",
            whyUsLead: "Beyond a supplier, we become your trusted partner.",
            whyUsText: "We don't just deliver products; we build a partnership for your successful voyage. We strive to meet all your needs with excellent service, rapid response, and uncompromising quality.",
            whyUsButton: "About Us",
            
            aboutHeroTitle: "About Us",
            aboutHeroSubtitle: "A global ship supply network connecting Korea and Panama.",

            missionTitle: "Our Mission",
            missionFastTitle: "Fast and Accurate Service",
            missionFastDesc: "We provide fast and accurate service 24 hours a day for customer requests.",
            missionQualityTitle: "Service Focused on Trust and Quality",
            missionQualityDesc: "We operate a strict hygiene and quality management system adhering to HACCP standards.",
            missionPartnerTitle: "Growth Based on Partnership",
            missionPartnerDesc: "We aim for customer success, building long-term trust to grow together.",

            valueTitle: "Core Values",
            valueTrustTitle: "Reliability",
            valueTrustDesc: "We prioritize customer trust by delivering products of promised quality at the promised time.",
            valueGlobalTitle: "Global Expertise",
            valueGlobalDesc: "We provide optimal solutions based on deep understanding of the local markets in Korea and Panama.",
            valueFlexibilityTitle: "Flexible Response",
            valueFlexibilityDesc: "We minimize vessel downtime by responding quickly and flexibly to unexpected situations.",

            managementTitle: "Management Team",
            managementSubtitle: "Local experts from both countries directly manage operations, ensuring fast and professional service.",
            managerJungTitle: "Taewook Jung, CEO",
            managerJungRole: "Panama CEO",
            managerJungDesc: "An expert who has led the ship supply sector in Panama for over 20 years, overseeing the global network in Central and South America.",
            managerKimTitle: "Kyunghee Kim, CEO",
            managerKimRole: "Korea CEO",
            managerKimDesc: "A ship expert with over 20 years of experience and CEO of a Korean logistics company, she manages Korean operations to provide efficient and systematic supply services.",
            goToServicesButton: "View Services",

            servicesHeroTitle: "Our Services",
            servicesHeroSubtitle: "Check out our integrated solutions connecting Korea and Panama.",

            mainServicesTitle: "Key Services",
            serviceFoodTitle: "Food/Fresh Provisions Supply",
            serviceFoodDesc: "We rapidly procure a variety of fresh provisions and abundant K-Food to enhance crew satisfaction.",
            serviceChandlingTitle: "Ship Chandling Supply",
            serviceChandlingDesc: "We supply high-quality ship chandlery needed for all vessel operations, including deck, engine, and safety equipment.",
            serviceBunkerTitle: "Bunker and Chemical Products",
            serviceBunkerDesc: "We promptly supply bunker and lubricating oils from major brands, as well as cleaning chemical products.",
            serviceRepairTitle: "Local Sourcing and Repair Services",
            serviceRepairDesc: "We offer optimal pricing through direct local transactions in both countries, along with ship repair and agency services.",

            ctaTitle: "Your Trusted Partner for Your Next Voyage",
            ctaLead: "Contact us now to receive the optimal ship supply solution.",
            ctaButton: "Contact Us",

            contactHeroTitle: "Contact Us",
            contactHeroSubtitle: "Please inquire about all matters necessary for your maritime operations.",

            contactFormTitle: "Contact Form",
            contactKoreaTitle: "🇰🇷 Korea Office",
            contactPanamaTitle: "🇵🇦 Panama Office",
            contactSelectOffice: "Select the office you wish to contact",
            contactSelectPlaceholder: "Select",
            contactName: "Name or Vessel Name",
            contactEmailLabel: "Email",
            contactMessage: "Inquiry Details",
            contactAddress: "Address:",
            contactTel: "Tel:",
            contactEmergency: "Emergency:",
            contactEmail: "Email:",
            contactMapTitle: "Directions",
            contactMapNote: "* Google Maps API Key is required for map display. You must replace 'YOUR_API_KEY' for proper operation.",

            phName: "Enter your name",
            phEmail: "Enter your email address",
            phMessage: "Please detail your inquiry",
            contactSubmit: "Submit Inquiry"
        },
        es: {
            pageTitleHome: "NEO MARITIME SERVICE | Su socio confiable para una navegación segura",
            pageTitleAbout: "Sobre Nosotros | NEO MARITIME SERVICE",
            pageTitleServices: "Servicios | NEO MARITIME SERVICE",
            pageTitleContact: "Contáctenos | NEO MARITIME SERVICE",

            home: "Inicio",
            about: "Sobre Nosotros",
            services: "Servicios",
            contact: "Contacto",

            heroTitle: "Su socio confiable para una navegación segura",
            heroSubtitle: "Viaje global, confianza inquebrantable. NEO MARITIME SERVICE, su socio fuerte.",
            btnService: "Ver Servicios",
            btnContact: "Contáctenos",

            promiseTitle: "Nuestra Promesa",
            promiseFastTitle: "Respuesta Rápida",
            promiseFastDesc: "Aseguramos un suministro rápido y preciso basado en nuestra red local.",
            promiseQualityTitle: "Garantía de Calidad",
            promiseQualityDesc: "Suministramos solo productos certificados que cumplen con estándares internacionales.",
            promiseCustomerTitle: "Enfoque en el Cliente",
            promiseCustomerDesc: "Ofrecemos soluciones personalizadas optimizadas para sus requerimientos.",

            whyUsTitle: "¿Por qué NEO MARITIME SERVICE?",
            whyUsLead: "Más allá de un proveedor, nos convertimos en su socio de confianza.",
            whyUsText: "No solo entregamos productos; construimos una asociación para su navegación exitosa. Nos esforzamos por satisfacer todas sus necesidades con un servicio excelente, respuesta rápida y calidad inquebrantable.",
            whyUsButton: "Sobre Nosotros",

            aboutHeroTitle: "Sobre Nosotros",
            aboutHeroSubtitle: "Una red global de suministro de barcos que conecta Corea y Panamá.",

            missionTitle: "Nuestra Misión",
            missionFastTitle: "Servicio Rápido y Preciso",
            missionFastDesc: "Ofrecemos servicio rápido y preciso las 24 horas para las solicitudes de los clientes.",
            missionQualityTitle: "Servicio Centrado en la Confianza y la Calidad",
            missionQualityDesc: "Operamos un estricto sistema de gestión de higiene y calidad que cumple con los estándares HACCP.",
            missionPartnerTitle: "Crecimiento Basado en la Asociación",
            missionPartnerDesc: "Apuntamos al éxito del cliente, construyendo una relación de confianza a largo plazo para crecer juntos.",

            valueTitle: "Valores Fundamentales",
            valueTrustTitle: "Fiabilidad",
            valueTrustDesc: "Priorizamos la confianza del cliente al entregar productos de la calidad prometida en el tiempo acordado.",
            valueGlobalTitle: "Experiencia Global",
            valueGlobalDesc: "Proporcionamos soluciones óptimas basadas en un profundo conocimiento de los mercados locales en Corea y Panamá.",
            valueFlexibilityTitle: "Respuesta Flexible",
            valueFlexibilityDesc: "Minimizamos el tiempo de inactividad de los buques al responder de manera rápida y flexible a situaciones inesperadas.",

            managementTitle: "Equipo Directivo",
            managementSubtitle: "Expertos locales de ambos países gestionan directamente las operaciones, asegurando un servicio rápido y profesional.",
            managerJungTitle: "Jung Taewook, CEO",
            managerJungRole: "CEO de Panamá",
            managerJungDesc: "Experto que ha liderado el sector de suministro de barcos en Panamá durante más de 20 años, supervisando la red global en Centro y Sudamérica.",
            managerKimTitle: "Kim Kyunghee, CEO",
            managerKimRole: "CEO de Corea",
            managerKimDesc: "Experta en barcos con más de 20 años de experiencia y CEO de una empresa de logística coreana, gestiona las operaciones coreanas para proporcionar servicios de suministro eficientes y sistemáticos.",
            goToServicesButton: "Ver Servicios",

            servicesHeroTitle: "Nuestros Servicios",
            servicesHeroSubtitle: "Vea nuestras soluciones integradas que conectan Corea y Panamá.",

            mainServicesTitle: "Servicios Clave",
            serviceFoodTitle: "Suministro de Alimentos/Provisiones Frescas",
            serviceFoodDesc: "Adquirimos rápidamente una variedad de provisiones frescas y abundante K-Food para mejorar la satisfacción de la tripulación.",
            serviceChandlingTitle: "Suministro de Provisions Marítimas (Chandling)",
            serviceChandlingDesc: "Suministramos provisions marítimas de alta calidad necesarias para todas las operaciones de los buques, incluyendo equipos de cubierta, motor y seguridad.",
            serviceBunkerTitle: "Productos Químicos y de Combustible (Bunker)",
            serviceBunkerDesc: "Suministramos rápidamente combustible (bunker) y aceites lubricantes de las principales marcas, así como productos químicos de limpieza.",
            serviceRepairTitle: "Adquisición Local y Servicios de Reparación",
            serviceRepairDesc: "Ofrecemos precios óptimos a través de transacciones locales directas en ambos países, junto con servicios de reparación y agencia de barcos.",
            
            ctaTitle: "Su Socio Confiable para su Próximo Viaje",
            ctaLead: "Contáctenos ahora para recibir la solución óptima de suministro de barcos.",
            ctaButton: "Contáctenos",

            contactHeroTitle: "Contáctenos",
            contactHeroSubtitle: "Por favor, pregunte sobre todos los asuntos necesarios para sus operaciones marítimas.",

            contactFormTitle: "Formulario de Contacto",
            contactKoreaTitle: "🇰🇷 Oficina de Corea",
            contactPanamaTitle: "🇵🇦 Oficina de Panamá",
            contactSelectOffice: "Seleccione la oficina que desea contactar",
            contactSelectPlaceholder: "Seleccionar",
            contactName: "Nombre o Nombre del Buque",
            contactEmailLabel: "Correo Electrónico",
            contactMessage: "Detalles de la Consulta",
            contactAddress: "Dirección:",
            contactTel: "Tel:",
            contactEmergency: "Emergencia:",
            contactEmail: "Correo Electrónico:",
            contactMapTitle: "Ubicación",
            contactMapNote: "* Se requiere una clave API de Google Maps para la visualización del mapa. Debe reemplazar 'YOUR_API_KEY' para un funcionamiento correcto.",

            phName: "Ingrese su nombre",
            phEmail: "Ingrese su dirección de correo electrónico",
            phMessage: "Detalle su consulta con precisión",
            contactSubmit: "Enviar Consulta"
        },
        zh: {
            // Page Titles
            pageTitleHome: "NEO MARITIME SERVICE | 您安全航行的可靠伙伴",
            pageTitleAbout: "关于我们 | NEO MARITIME SERVICE",
            pageTitleServices: "服务 | NEO MARITIME SERVICE",
            pageTitleContact: "联系我们 | NEO MARITIME SERVICE",
            
            // Header & Navigation
            home: "首页",
            about: "关于我们",
            services: "服务",
            contact: "联系我们",

            // Hero (index.html)
            heroTitle: "您安全航行的可靠伙伴",
            heroSubtitle: "全球航行，不变的信任。NEO MARITIME SERVICE，您坚实的伙伴。",
            btnService: "查看服务",
            btnContact: "联系我们",

            // Promise (index.html)
            promiseTitle: "我们的承诺",
            promiseFastTitle: "快速响应",
            promiseFastDesc: "基于本地网络，保证快速准确的供应。",
            promiseQualityTitle: "品质保证",
            promiseQualityDesc: "仅提供符合国际标准的认证产品。",
            promiseCustomerTitle: "以客户为中心",
            promiseCustomerDesc: "提供针对您要求的优化定制解决方案。",
            
            // Why Us (index.html)
            whyUsTitle: "为什么选择NEO MARITIME SERVICE？",
            whyUsLead: "不仅仅是供应商，我们是您值得信赖的伙伴。",
            whyUsText: "我们不仅交付产品，我们更致力于建立您成功航行的合作伙伴关系。凭借卓越的服务、快速的响应和毫不妥协的质量，我们竭诚满足您的所有需求。",
            whyUsButton: "关于我们",

            // About Hero
            aboutHeroTitle: "关于我们",
            aboutHeroSubtitle: "连接韩国和巴拿马的全球船舶供应网络",

            // Mission (about.html)
            missionTitle: "我们的使命",
            missionFastTitle: "快速准确的服务",
            missionFastDesc: "我们为客户要求提供24小时快速准确的服务。",
            missionQualityTitle: "以信任和质量为中心的服务",
            missionQualityDesc: "我们运营符合HACCP标准的严格卫生和质量管理系统。",
            missionPartnerTitle: "基于伙伴关系的成长",
            missionPartnerDesc: "我们以客户的成功为目标，建立长期信任关系，共同成长。",

            // Value (about.html)
            valueTitle: "核心价值",
            valueTrustTitle: "可靠性",
            valueTrustDesc: "我们按时提供承诺质量的产品，将客户的信任放在首位。",
            valueGlobalTitle: "全球专业性",
            valueGlobalDesc: "基于对韩国和巴拿马本地市场的深入了解，提供最佳解决方案。",
            valueFlexibilityTitle: "灵活应对",
            valueFlexibilityDesc: "即使在意外情况下，也能快速灵活应对，最大限度地减少船舶运营中断。",

            // Management (about.html)
            managementTitle: "管理层",
            managementSubtitle: "两国本地专家直接管理运营，确保快速专业的服务。",
            managerJungTitle: "郑太旭 代表 (Jung Taewook)",
            managerJungRole: "巴拿马 CEO",
            managerJungDesc: "20多年来一直领导巴拿马当地船舶供应领域的专家，负责中南美和全球网络。",
            managerKimTitle: "金京熙 代表 (Kim Kyunghee)",
            managerKimRole: "韩国 CEO",
            managerKimDesc: "韩国物流公司代表，拥有20年以上船舶专家经验，负责韩国运营，提供高效系统的供应服务。",
            goToServicesButton: "查看服务",

            // Services Hero
            servicesHeroTitle: "服务指南",
            servicesHeroSubtitle: "查看连接韩国和巴拿马的综合解决方案。",

            // Main Services (services.html)
            mainServicesTitle: "主要服务",
            serviceFoodTitle: "食材/新鲜食品供应",
            serviceFoodDesc: "我们迅速采购各种新鲜食材和丰富的K-Food，以提高船员满意度。",
            serviceChandlingTitle: "船舶物料 (Chandling) 供应",
            serviceChandlingDesc: "供应甲板、发动机、安全设备等所有船舶运营所需的高质量船舶物料。",
            serviceBunkerTitle: "燃油和化学品",
            serviceBunkerDesc: "迅速采购主要品牌的燃油和润滑油，以及清洁化学品。",
            serviceRepairTitle: "本地采购和维修服务",
            serviceRepairDesc: "通过两国本地直接交易提供最优价格，并提供船舶维修和代理服务。",
            
            // CTA (services.html)
            ctaTitle: "您下次航行的可靠伙伴",
            ctaLead: "立即联系我们，获取最佳船舶供应解决方案。",
            ctaButton: "联系我们",

            // Contact Hero
            contactHeroTitle: "联系我们",
            contactHeroSubtitle: "请咨询您海上运营所需的所有事宜。",

            // Contact Details (contact.html)
            contactFormTitle: "联系表格",
            contactKoreaTitle: "🇰🇷 韩国办事处",
            contactPanamaTitle: "🇵🇦 巴拿马办事处",
            contactSelectOffice: "请选择您想联系的办事处",
            contactSelectPlaceholder: "选择",
            contactName: "姓名或船名",
            contactEmailLabel: "电子邮件",
            contactMessage: "咨询内容",
            contactAddress: "地址:",
            contactTel: "电话:",
            contactEmergency: "紧急:",
            contactEmail: "电子邮件:",
            contactMapTitle: "路线",
            contactMapNote: "* 地图显示需要Google Maps API Key。必须替换 'YOUR_API_KEY' 才能正常运行。",

            // Contact Form Placeholders
            phName: "请输入您的姓名",
            phEmail: "请输入您的电子邮件地址",
            phMessage: "请详细写下您的咨询内容",
            contactSubmit: "提交咨询"
        }
    };

    /**
     * 페이지의 모든 data-translate 속성을 기반으로 텍스트를 업데이트합니다.
     * @param {string} lang - 적용할 언어 코드 (예: 'ko', 'en').
     */
    const applyLanguage = (lang) => {
        const data = langData[lang];
        if (!data) return;

        // 1. Title 업데이트
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const titleKey = titleElement.getAttribute('data-translate-title');
            if (titleKey && data[titleKey]) {
                document.title = data[titleKey];
            }
        }
        
        // 2. data-translate 속성을 가진 모든 요소 업데이트
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (data[key]) {
                el.textContent = data[key];
            }
        });

        // 3. data-translate-button 속성을 가진 버튼 업데이트
        document.querySelectorAll('[data-translate-button]').forEach(el => {
            const key = el.getAttribute('data-translate-button');
            if (data[key]) {
                el.textContent = data[key];
            }
        });
        
        // 4. data-translate-placeholder 속성을 가진 인풋/텍스트 영역 업데이트
        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            if (data[key]) {
                el.placeholder = data[key];
            }
        });

        // 5. Contact 페이지의 드롭다운 옵션 업데이트
        const selectOffice = document.getElementById('selectOffice');
        if (selectOffice) {
            selectOffice.querySelector('option[disabled]').textContent = data.contactSelectPlaceholder;
            selectOffice.querySelector('option[value="korea"]').textContent = data.contactKoreaTitle;
            selectOffice.querySelector('option[value="panama"]').textContent = data.contactPanamaTitle;
        }

        // 6. Contact 페이지의 오시는 길 노트 업데이트 (data-translate가 아닌 일반 P 태그이므로)
        const mapNote = document.querySelector('[data-translate="contactMapNote"]');
        if(mapNote) {
             mapNote.textContent = data.contactMapNote;
        }
        
        // HTML lang 속성 변경
        document.documentElement.lang = lang;
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

        // 다음 인덱스로 이동 (배열 끝에 도달하면 0으로 리셋)
        currentIndex = (currentIndex + 1) % images.length;
    };

    if (heroSection) {
        // 초기 배경 설정
        changeBackground(); 
        // 4초 간격으로 배경 변경 설정
        setInterval(changeBackground, 4000);
    }
});