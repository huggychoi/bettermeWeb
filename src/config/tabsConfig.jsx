import React from 'react';
import { 
  Users, // 멤버십용 아이콘
  Rocket,
  Syringe, 
  Sparkles,
  Star,
  Zap,
  Sun,
  Heart,
  CircleDot,
  Pointer,
  Flower2,
  Droplets,
  Scissors,
  Diamond,
  Gift,
  Clock, // 항노화용 아이콘
  Fingerprint, // 히라셀용 아이콘
  Flask, // 히스토랩용 아이콘
  Apple // 건강기능식품용 아이콘
} from 'lucide-react';

export const tabsConfig = {
  membership: {
    icon: <Users size={18} />,
    label: "멤버십",
    title: "멤버십",
    subtitle: "Membership",
  },
  new: {
    icon: <Rocket size={18} />,
    label: "신규런칭",
    title: "신규런칭",
    subtitle: "New Launch",
  },
  botox: {
    icon: <Syringe size={18} />,
    label: "보톡스",
    title: "보톡스/뻬띠",
    subtitle: "Botox",
  },
  rejuran: {
    icon: <Sparkles size={18} />,
    label: "리쥬란",
    title: "리쥬란 스킨부스터",
    subtitle: "REJURAN Skin Booster",
  },
  lifting: {
    icon: <Zap size={18} />,
    label: "리프팅",
    title: "리프팅",
    subtitle: "Lifting",
  },
  ulthera: {
    icon: <Star size={18} />,
    label: "울쎄라",
    title: "울쎄라",
    subtitle: "Ulthera",
  },
  whitening: {
    icon: <Sun size={18} />,
    label: "미백/기미",
    title: "미백/기미",
    subtitle: "Whitening",
  },
  antiaging: {
    icon: <Clock size={18} />,
    label: "항노화",
    title: "항노화",
    subtitle: "Anti-aging",
  },
  body: {
    icon: <Heart size={18} />,
    label: "바디체형",
    title: "바디체형",
    subtitle: "Body Contouring",
  },
  virizen: {
    icon: <CircleDot size={18} />,
    label: "바이리즌",
    title: "바이리즌",
    subtitle: "Virizen",
  },
  skincare: {
    icon: <Flower2 size={18} />,
    label: "스킨케어",
    title: "스킨케어",
    subtitle: "Skin Care",
  },
  booster: {
    icon: <Droplets size={18} />,
    label: "스킨부스터",
    title: "스킨부스터",
    subtitle: "Skin Booster",
  },
  acne: {
    icon: <Pointer size={18} />,
    label: "여드름/모공",
    title: "여드름/모공",
    subtitle: "Acne Care",
  },
  removal: {
    icon: <Scissors size={18} />,
    label: "제모",
    title: "제모",
    subtitle: "Hair Removal",
  },
  filler: {
    icon: <Diamond size={18} />,
    label: "필러/실",
    title: "필러/실",
    subtitle: "Filler & Thread",
  },
  wedding: {
    icon: <Gift size={18} />,
    label: "웨딩",
    title: "웨딩",
    subtitle: "Wedding",
  },
  hiracell: {
    icon: <Fingerprint size={18} />,
    label: "히라셀",
    title: "히라셀",
    subtitle: "Hiracell",
  },
  histolab: {
    icon: <Flask size={18} />,
    label: "히스토랩",
    title: "히스토랩",
    subtitle: "Histolab",
  },
  supplements: {
    icon: <Apple size={18} />,
    label: "건강기능식품",
    title: "건강기능식품",
    subtitle: "Health Supplements",
  }
};