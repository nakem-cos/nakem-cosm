import { AppContent, Language } from './types';

// Placeholder images - in a real scenario, these would be the uploaded assets
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop", // Nature leaves
  story: "/brandstory.jpg", // Brand story image
  ingredient: "/leaf.png", // Leaf texture
  product1: "/ampoule.png", // Ampoule product image
  product2: "/mask.png", // Mask product image
};

export const CONTENT: Record<Language, AppContent> = {
  [Language.KR]: {
    nav: {
      story: "브랜드 스토리",
      philosophy: "철학",
      products: "제품",
      contact: "문의하기"
    },
    hero: {
      title: "Nature Awakened,\nYour True Skin",
      subtitle: "자연이 깨어나는 순간, 피부의 본연도 깨어납니다.",
      cta: "제품 보기"
    },
    story: {
      title: "Brand Story",
      description: [
        "NAKEM은 ‘Natural Awakening’의 의미를 담은 이름으로, 자연의 순수한 에너지를 통해 피부 본연의 힘을 되살리는 브랜드입니다.",
        "우리는 한국의 전통 원료, 감잎(Persimmon Leaf)에서 영감을 받았습니다. 예로부터 감잎은 차로 마시며 건강을 지켜온 천연 원료로 각종 염증과 고혈압에 탁월한 효과를 선사하며 인체에 섭취할 수 있을 만큼 깨끗하고 안전한 성분을 지니고 있습니다.",
        "햇살과 바람을 머금고 자란 감잎은 수많은 계절을 견디며 풍부한 비타민 C, 폴리페놀, 탄닌을 함유해 피부의 노화를 예방하고, 탄력과 맑음을 더하는 천연 항산화 소재입니다."
      ],
      subDescription: "NAKEM은 이러한 감잎의 순수한 에너지를 온전히 담기 위해 식품 등급의 원료만을 사용하고, 저온 추출 공법을 통해 유효 성분의 손실을 최소화했습니다.",
      quote: "먹을 수 있을 만큼 순수한 원료로,\n피부에 닿는 진심을 전하다."
    },
    philosophy: {
      title: "Brand Philosophy",
      items: [
        {
          icon: "leaf",
          title: "Clean Beauty",
          desc: "유해 성분 무첨가, 피부 친화적 원료"
        },
        {
          icon: "recycle",
          title: "Sustainability",
          desc: "친환경 패키징 & 지속 가능한 생산"
        },
        {
          icon: "droplet",
          title: "Holistic Skincare",
          desc: "피부의 리듬을 회복하는 뷰티 루틴"
        }
      ]
    },
    ingredient: {
      title: "Core Ingredient: 감잎 (Persimmon Leaf)",
      description: "자연이 가진 치유의 언어를 과학의 언어로 번역합니다.",
      features: [
        "풍부한 비타민 C: 피부 미백, 광채",
        "폴리페놀 & 탄닌: 항산화 및 탄력 강화",
        "저온 추출 공법: 자연 효능 극대화",
        "식품 등급 원료: 안전하고 순수한 피부 케어"
      ]
    },
    process: {
      title: "Manufacturing Process",
      subtitle: "자연의 순수함을 그대로 담아내는 NAKEM만의 정성 어린 제조 과정",
      steps: [
        {
          icon: "leaf",
          title: "원료 선별",
          description: "국내산 청정 지역에서 자란 감잎만을 엄선하여 수확합니다. 최적의 시기에 채취한 잎만을 사용합니다."
        },
        {
          icon: "thermometer",
          title: "저온 추출",
          description: "40°C 이하의 저온에서 72시간 동안 천천히 추출하여 유효 성분의 손실을 최소화합니다."
        },
        {
          icon: "flask",
          title: "정제 및 배합",
          description: "식품 등급의 순수한 원료만을 사용하여 피부에 최적화된 비율로 정밀하게 배합합니다."
        },
        {
          icon: "package",
          title: "품질 검사 및 포장",
          description: "엄격한 품질 관리를 거쳐 친환경 패키지에 담아 신선하게 전달합니다."
        }
      ]
    },
    products: {
      title: "Product Line",
      subtitle: "감잎의 순수한 에너지를 담아, 피부 본연의 생기를 깨웁니다.",
      items: [
        {
          id: "ampoule",
          name: "NAKEM Persimmon Leaf Ampoule",
          slogan: "자연이 깨어나는 순간, 피부의 본연이 깨어나다",
          // Updated specifically per request
          features: [
            "피부 진정 / 모공 수렴 / 탄력 강화 / 수분 공급",
            "저온 추출 공법으로 유효성분 손실 최소화"
          ],
          howToUse: "세안 후 토너로 피부결을 정돈한 뒤, 적당량을 얼굴 전체에 펴 발라 흡수시킵니다.",
          image: IMAGES.product1,
          tags: ["Clean Formula", "Vegan", "Cruelty-Free"]
        },
        {
          id: "mask",
          name: "NAKEM Persimmon Leaf Mask",
          slogan: "하루의 피로를 잠재우는 감잎의 진정 에너지",
          features: [
            "감잎 추출물 + 나이아신아마이드 + 히알루론산",
            "피부 진정, 수분, 미백, 탄력 효과",
            "친환경 생분해 텐셀 시트 사용"
          ],
          howToUse: "세안 후 토너로 피부결 정돈 > 마스크를 얼굴에 밀착시켜 10~20분 유지 > 남은 에센스를 가볍게 두드려 흡수",
          image: IMAGES.product2,
          tags: ["Clean Formula", "Vegan", "Cruelty-Free"]
        }
      ]
    },
    footer: {
      copyright: "© 2025 NAKEM. All rights reserved.",
      tagline: "자연이 깨어나는 순간, 피부의 본연도 깨어납니다.\n한국 감잎의 순수함과 회복력에서 영감을 받은 홀리스틱 스킨케어 브랜드."
    }
  },
  [Language.EN]: {
    nav: {
      story: "Our Story",
      philosophy: "Philosophy",
      products: "Products",
      contact: "Contact"
    },
    hero: {
      title: "Nature Awakened,\nYour True Skin",
      subtitle: "When nature awakens, your true skin awakens too.",
      cta: "Discover More"
    },
    story: {
      title: "Brand Story",
      description: [
        "NAKEM, meaning “Natural Awakening,” is a brand born from the belief that pure energy from nature can revive the skin’s original vitality.",
        "Our inspiration comes from Persimmon Leaf, a traditional Korean ingredient that has long been used in tea to promote health and inner balance. For centuries, persimmon leaves have been valued for their ability to soothe inflammation and support circulation — a natural ingredient so pure and safe that it can be consumed by the human body.",
        "Grown under the warmth of sunlight and the breath of the wind, the persimmon leaf endures countless seasons to develop an abundance of Vitamin C, polyphenols, and tannins — powerful natural antioxidants that help prevent aging, enhance firmness, and illuminate the skin."
      ],
      subDescription: "To capture this pure energy, NAKEM uses only food-grade ingredients and applies a low-temperature extraction method to preserve the active nutrients and maximize their efficacy.",
      quote: "Pure enough to drink,\nsincere enough to touch your skin."
    },
    philosophy: {
      title: "Brand Philosophy",
      items: [
        {
          icon: "leaf",
          title: "Clean Beauty",
          desc: "Free from harmful ingredients"
        },
        {
          icon: "recycle",
          title: "Sustainability",
          desc: "Eco-friendly materials and responsible production"
        },
        {
          icon: "droplet",
          title: "Holistic Skincare",
          desc: "Restoring the skin’s rhythm through natural balance"
        }
      ]
    },
    ingredient: {
      title: "Core Ingredient: Persimmon Leaf",
      description: "Translating nature's healing language into the science of skincare.",
      features: [
        "Vitamin C: Brightening and radiance boost",
        "Polyphenols & Tannins: Antioxidant and firming benefits",
        "Low-Temperature Extraction: Preserves natural potency",
        "Food-Grade Purity: Safe and gentle for all skin types"
      ]
    },
    process: {
      title: "Our Process",
      subtitle: "A meticulous journey from nature to your skin, preserving purity at every step",
      steps: [
        {
          icon: "leaf",
          title: "Ingredient Selection",
          description: "We carefully select persimmon leaves grown in Korea's pristine regions, harvested at the optimal time for maximum potency."
        },
        {
          icon: "thermometer",
          title: "Low-Temperature Extraction",
          description: "Extracted slowly over 72 hours at temperatures below 40°C to preserve all active nutrients and natural efficacy."
        },
        {
          icon: "flask",
          title: "Purification & Formulation",
          description: "Using only food-grade pure ingredients, we precisely blend at optimal ratios for your skin."
        },
        {
          icon: "package",
          title: "Quality Control & Packaging",
          description: "Rigorous quality testing ensures freshness, delivered in eco-friendly packaging."
        }
      ]
    },
    products: {
      title: "Product Line",
      subtitle: "Formulated with the purest Persimmon Leaf extract to awaken your skin's natural vitality.",
      items: [
        {
          id: "ampoule",
          name: "NAKEM Persimmon Leaf Ampoule",
          slogan: "When nature awakens, your true skin awakens too.",
          features: [
            "Calming / Pore Tightening / Firming / Deep Hydration",
            "Cold Extraction for Maximum Efficacy"
          ],
          howToUse: "After cleansing and toning, apply evenly and pat for absorption.",
          image: IMAGES.product1,
          tags: ["Clean Formula", "Vegan", "Cruelty-Free"]
        },
        {
          id: "mask",
          name: "NAKEM Persimmon Leaf Mask",
          slogan: "The calming energy of persimmon leaf after a long day.",
          features: ["Persimmon Leaf + Niacinamide + Hyaluronic Acid", "Soothing, Hydrating, Brightening, Firming", "Eco-Friendly Biodegradable Tencel Sheet"],
          howToUse: "Cleanse & Tone > Apply mask for 10–20 mins > Pat remaining essence.",
          image: IMAGES.product2,
          tags: ["Clean Formula", "Vegan", "Cruelty-Free"]
        }
      ]
    },
    footer: {
      copyright: "© 2025 NAKEM. All rights reserved.",
      tagline: "Nature Awakened, Your True Skin.\nA holistic skincare brand inspired by the resilience and purity of Korean Persimmon Leaf."
    }
  }
};