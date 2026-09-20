import { ServiceCategory, GalleryItem, ReviewItem, WhyChooseItem } from '../types';
import heroImg from '../assets/images/salon_hero_interior_1789903650481.jpg';
import aboutImg from '../assets/images/salon_about_styling_1789903669045.jpg';
import treatmentImg from '../assets/images/salon_hair_treatment_1789903688610.jpg';

// Authentic Bouffant Salon Sector 76 Noida Photography
export const SALON_REAL_PHOTOS = {
  panoramicInterior: '/20260920_173241_AHRPTWnugZ_MzOurhr42IDSo6o5ri-a2wXlW3XfeOwgoOm6OVIBg4SJjm7yF9jzYNuku10VR8dUfYSwl.jpg',
  receptionArch: '/20260920_173250_AHRPTWm10wfp4IpN-gbY4VKASn1pSFaIeJGn5zvHbPPSgoCbE5ZeqBGJdztIdbS1dTlZOXu4-nGZNIzY.jpg',
  washStation: '/20260920_173249_AHRPTWl0WsdpUWk9fmIUsuwQ62Vmnanu_1r0YHi89GmLCLtvWpLB_w5NnuUI02CZ7qhNY2s2X_F5L9vo.jpg',
  stylingStationMirror: '/20260920_173247_AHRPTWnR9rI_K0qMWdbDDb4dV01mril4SAJw9bNqcabRm5ulf-CTe6xdCrSo1bz3JNvAo00YyJy44cCx.jpg',
  receptionDesk: '/20260920_173243_AHRPTWmWwEiuHSh6eWuaMhzhfaY21A_PN3gFPBvU5Ywt3wCA7w3aHaoSC_aF8EC1PBjzVhdEvOKPK2Cn.jpg',
  storefrontExterior: '/20260920_173240_AHRPTWk5cEEyXnW6tvjlmZo3TFfaIXagZJZ0WKpH_jdOfBwSQSKQNP82GHreczuzL-VBjOpsFX6svmZD.jpg',
};

export const SALON_INFO = {
  name: 'Bouffant Salon Noida',
  tagline: 'Elevate Your Style at Bouffant Salon',
  description: 'Premium hair, beauty and grooming services designed to bring out your best look.',
  aboutDetailed: 'Bouffant Salon Noida provides professional hair, beauty and grooming services for men and women with a focus on personalized styling, quality products and a comfortable salon experience.',
  locationShort: 'Sector 76, Noida',
  address: 'Ground Floor, Shop No. 8, Amrapali Crystal Homes, Market, Sector 76 Road, Amarpali Silicon City, Sector 76, Noida, Uttar Pradesh 201301',
  phoneDisplay: '079822 40842',
  phoneRaw: '+917982240842',
  phoneTel: 'tel:+917982240842',
  whatsappDefaultMsg: 'Hi Bouffant Salon, I would like to book an appointment. Please share the available slots.',
  get whatsappUrl() {
    return `https://wa.me/917982240842?text=${encodeURIComponent(this.whatsappDefaultMsg)}`;
  },
  getCustomWhatsappUrl(msg: string) {
    return `https://wa.me/917982240842?text=${encodeURIComponent(msg)}`;
  },
  instagramHandle: '@bouffantsalonofficial',
  instagramUrl: 'https://www.instagram.com/bouffantsalonofficial/',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Amrapali+Crystal+Homes+Sector+76+Noida+Uttar+Pradesh+201301',
  mapsEmbedQuery: 'Amrapali Crystal Homes, Sector 76, Noida, Uttar Pradesh 201301',
  openingHours: 'Mon – Sun: 10:00 AM – 9:00 PM',
  rating: 4.9,
  totalReviews: 184,
  images: {
    hero: SALON_REAL_PHOTOS.panoramicInterior,
    about: SALON_REAL_PHOTOS.receptionArch,
    treatment: '/images/spa_wash_station_1789907036232.jpg',
    stylingStation: SALON_REAL_PHOTOS.stylingStationMirror,
    reception: '/images/salon_reception_desk_1789907054653.jpg',
    exterior: SALON_REAL_PHOTOS.storefrontExterior,
    fallbackHero: heroImg,
    fallbackAbout: aboutImg,
    fallbackTreatment: '/images/spa_wash_station.jpg',
  }
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'hair-styling',
    title: 'HAIR & STYLING',
    subtitle: 'Precision cuts, blowouts & bespoke event styling',
    image: SALON_REAL_PHOTOS.stylingStationMirror,
    fallbackImage: aboutImg,
    highlight: 'Tailored to your facial structure and hair texture',
    services: [
      {
        id: 'haircuts',
        name: 'Haircuts',
        description: 'Customized precision haircut with hair wash, professional consultation, and signature blowout styling.',
        popular: true,
      },
      {
        id: 'hair-styling',
        name: 'Hair Styling',
        description: 'Voluminous blowdrys, curls, straightening, and bespoke styling tailored for work, events, or parties.',
        popular: true,
      },
      {
        id: 'womens-hair-beauty',
        name: "Women's Hair & Beauty Services",
        description: 'Complete hair transformation, layered cuts, modern fringes, styling, and beauty finish.',
      },
      {
        id: 'mens-grooming',
        name: "Men's Grooming",
        description: 'Modern men’s fade, classic scissor cuts, beard sculpting, line-ups, and grooming treatments.',
        popular: true,
      },
    ],
  },
  {
    id: 'hair-color-treatments',
    title: 'HAIR COLOR & TREATMENTS',
    subtitle: 'Rich tones, gloss, keratin & deep renewal',
    image: '/images/keratin_smoothing_hair_1789906613761.jpg',
    fallbackImage: '/images/keratin_treatment.jpg',
    highlight: 'Using professional ammonia-free & salon-grade formulas',
    services: [
      {
        id: 'hair-coloring',
        name: 'Hair Coloring',
        description: 'Global color, root touch-up, highlights, balayage, and dimensional gloss formulated for vibrant shine.',
        popular: true,
      },
      {
        id: 'keratin-treatment',
        name: 'Keratin Treatment',
        description: 'Deep smoothing and restorative treatment to eliminate frizz, restore protein, and impart mirror-like softness.',
        popular: true,
      },
      {
        id: 'hair-spa',
        name: 'Hair Spa',
        description: 'Nourishing botanical hair spa with scalp massage, steam infusion, and intensive conditioning mask.',
        popular: true,
      },
    ],
  },
  {
    id: 'scalp-hair-care',
    title: 'SCALP & HAIR CARE',
    subtitle: 'Dedicated scalp health & hair follicle therapy',
    image: '/images/spa_wash_station_1789907036232.jpg',
    fallbackImage: '/images/spa_wash_station.jpg',
    highlight: 'Healthy, radiant hair begins at the scalp root',
    services: [
      {
        id: 'scalp-treatment',
        name: 'Scalp Treatment',
        description: 'Clarifying exfoliation, sebum balance, and targeted anti-dandruff therapy to purify the scalp barrier.',
        popular: true,
      },
      {
        id: 'scalp-revitalization',
        name: 'Scalp Revitalization',
        description: 'Micro-stimulating therapy with therapeutic serums to nourish roots, improve circulation, and enhance hair density.',
      },
    ],
  },
  {
    id: 'skin-facials',
    title: 'SKIN & FACIALS',
    subtitle: 'Hydration, radiance & revitalizing skin treatments',
    image: SALON_REAL_PHOTOS.receptionArch,
    fallbackImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    highlight: 'Gentle dermatologically tested skincare products',
    services: [
      {
        id: 'skin-care',
        name: 'Skin Care',
        description: 'Deep cleansing, pore refining, clean-up, detan protocols, and hydration therapy for vibrant, refreshed skin.',
      },
      {
        id: 'facials',
        name: 'Facials',
        description: 'Premium brightening, anti-aging, and radiance-boosting facials customized for your specific skin type.',
        popular: true,
      },
    ],
  },
  {
    id: 'mens-womens-beauty',
    title: "MEN'S & WOMEN'S BEAUTY",
    subtitle: 'Complete everyday & occasion grooming packages',
    image: SALON_REAL_PHOTOS.panoramicInterior,
    fallbackImage: heroImg,
    highlight: 'Comprehensive head-to-toe salon services under one roof',
    services: [
      {
        id: 'mens-grooming-full',
        name: "Men's Grooming",
        description: 'Beard trim, mustache shaping, charcoal detan clean-up, relaxing head massage, and hair care.',
        popular: true,
      },
      {
        id: 'womens-hair-beauty-full',
        name: "Women's Hair & Beauty Services",
        description: 'Threading, waxing, manicure, pedicure, party styling, and tailored bridal or festive grooming.',
        popular: true,
      },
    ],
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'professional-service',
    title: 'Professional Service',
    description: 'Experienced, attentive stylists and beauticians trained in modern cutting and treatment protocols.',
    iconName: 'Award',
  },
  {
    id: 'personalized-styling',
    title: 'Personalized Styling',
    description: 'Every haircut, color, and treatment is customized to suit your unique features, lifestyle, and hair goals.',
    iconName: 'Sparkles',
  },
  {
    id: 'premium-salon-experience',
    title: 'Premium Salon Experience',
    description: 'A serene, impeccably hygienic and relaxing salon environment designed for ultimate comfort in Sector 76.',
    iconName: 'Gem',
  },
  {
    id: 'quality-products',
    title: 'Quality Products',
    description: 'We exclusively utilize trusted, professional salon-grade hair and skin products for safe, long-lasting results.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'men-and-women',
    title: 'Services for Men & Women',
    description: 'Complete unisex hair, skin, and grooming care under one roof for individuals and families alike.',
    iconName: 'Users',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Bouffant Salon Full Interior Panorama',
    category: 'Salon',
    image: SALON_REAL_PHOTOS.panoramicInterior,
    fallbackImage: heroImg,
    caption: 'Modern styling stations, glowing arched mirrors, emerald palette, and geometric designer flooring.',
  },
  {
    id: 'g2',
    title: 'Bouffant Signature Logo & Product Display',
    category: 'Salon',
    image: SALON_REAL_PHOTOS.receptionArch,
    fallbackImage: aboutImg,
    caption: 'Backlit Bouffant branding, premium beauty retail shelves, and clean marble counter.',
  },
  {
    id: 'g3',
    title: 'Relaxing Hair Spa & Shampoo Wash Stations',
    category: 'Hair',
    image: '/images/spa_wash_station_1789907036232.jpg',
    fallbackImage: '/images/spa_wash_station.jpg',
    caption: 'Ergonomic emerald leather recliners with deep black ceramic basins, warm steam mist, and soothing head massage therapy.',
  },
  {
    id: 'g4',
    title: 'Precision Styling Mirror Station & Quilted Chair',
    category: 'Styling',
    image: SALON_REAL_PHOTOS.stylingStationMirror,
    fallbackImage: aboutImg,
    caption: 'Full-length illuminated arch mirrors and comfortable styling chairs with ring-light fixtures.',
  },
  {
    id: 'g5',
    title: 'Bouffant Reception Desk & Welcome Area',
    category: 'Salon',
    image: '/images/salon_reception_desk_1789907054653.jpg',
    fallbackImage: '/images/reception_desk.jpg',
    caption: 'Fluted emerald reception counter, warm welcoming ambiance, white marble surface, and comfortable consultation lounge.',
  },
  {
    id: 'g6',
    title: 'Bouffant Salon Storefront at Sector 76 Noida',
    category: 'Salon',
    image: SALON_REAL_PHOTOS.storefrontExterior,
    fallbackImage: heroImg,
    caption: 'Shop No. 8 Ground Floor, Amrapali Crystal Homes market, Sector 76 Road, Noida.',
  },
  {
    id: 'g7',
    title: 'Precision Haircuts & Blowout Finish',
    category: 'Hair',
    image: aboutImg,
    fallbackImage: '/images/salon_styling.jpg',
    caption: 'Expert customized haircuts and bouncy blowouts crafted with master precision.',
  },
  {
    id: 'g8',
    title: 'Keratin Smoothing & Cuticle Renewal',
    category: 'Hair',
    image: '/images/keratin_smoothing_hair_1789906613761.jpg',
    fallbackImage: '/images/keratin_treatment.jpg',
    caption: 'Mirror-like smooth shine, intense hydration, and frizz elimination treatments.',
  },
  {
    id: 'g9',
    title: 'Radiance Facials & Skin Revitalization',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    caption: 'Nourishing clinical skin clean-ups and facials for restored natural glow.',
  },
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Priya Sharma',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Got my haircut and keratin treatment done at Bouffant Salon Noida in Sector 76. The stylist took the time to understand exactly what I wanted. My hair feels so soft and manageable. Highly recommended!',
    serviceMentioned: 'Keratin Treatment & Haircut',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Aman Verma',
    rating: 5,
    date: '1 month ago',
    comment: 'One of the cleanest and most professional salons in Sector 76. The men’s haircut and beard trim were spot on. Great hospitality and very courteous staff.',
    serviceMentioned: "Men's Grooming & Haircut",
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Neha Gupta',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Visited for a hair spa and facial. The scalp massage was so relaxing and my skin felt genuinely radiant afterward. Will definitely be making this my regular salon in Noida.',
    serviceMentioned: 'Hair Spa & Facial',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Rahul Mehrotra',
    rating: 5,
    date: '1 month ago',
    comment: 'Superb ambiance with comfortable seating and great service. They use genuine products and don’t push unnecessary packages. Top-notch hair styling.',
    serviceMentioned: 'Hair Styling',
    verified: true,
  },
  {
    id: 'rev-5',
    author: 'Simran Kaur',
    rating: 5,
    date: '2 months ago',
    comment: 'Bouffant Salon did an incredible job with my hair color and blow dry. Beautiful shade and no damage at all. The team is skilled and very welcoming.',
    serviceMentioned: 'Hair Coloring',
    verified: true,
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig1',
    image: '/images/insta_balayage_color_1789906648203.jpg',
    caption: 'Dimensional caramel balayage & soft beach waves crafted by our color specialists 🎨✨ #BouffantColor',
    likes: 342,
  },
  {
    id: 'ig2',
    image: '/images/keratin_smoothing_hair_1789906613761.jpg',
    caption: 'Liquid glass mirror shine! Frizz-free keratin smoothing transformation for healthy manageable hair 💎 #KeratinNoida',
    likes: 418,
  },
  {
    id: 'ig3',
    image: '/images/insta_mens_grooming_1789906661959.jpg',
    caption: 'Sharp taper fade & bespoke beard grooming. Premium unisex salon care for discerning gentlemen 💈 #MensGrooming',
    likes: 276,
  },
  {
    id: 'ig4',
    image: '/images/insta_bridal_blowout_1789906675370.jpg',
    caption: 'Signature red-carpet bouncy blowout with lustrous volume and touchable softness 🤍 #BlowoutGoals',
    likes: 389,
  },
  {
    id: 'ig5',
    image: SALON_REAL_PHOTOS.panoramicInterior,
    caption: 'Serene emerald haven with glowing arch mirrors & hygienic private stations at Sector 76 Noida 🌿 #BouffantVibes',
    likes: 315,
  },
  {
    id: 'ig6',
    image: SALON_REAL_PHOTOS.storefrontExterior,
    caption: 'Shop No. 8 Ground Floor, Amrapali Crystal Homes Market! Walk-ins & appointments welcome 📍 #NoidaSalon',
    likes: 295,
  },
];
