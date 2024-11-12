import React from 'react';
import { 
  Users,
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
  Clock,
  Fingerprint,
  Microscope,
  Leaf
} from 'lucide-react';

export const tabsConfig = {
  firstVisit: {
    icon: <Rocket size={14} />,
    label: "첫방문",
    title: "첫방문",
    subtitle: "First Visit",
  },
  botox: {
    icon: <Syringe size={14} />,
    label: "보톡스",
    title: "보톡스/뻬띠",
    subtitle: "Botox",
  },
  rejuran: {
    icon: <Sparkles size={14} />,
    label: "리쥬란",
    title: "리쥬란 스킨부스터",
    subtitle: "REJURAN Skin Booster",
  },
  lifting: {
    icon: <Zap size={14} />,
    label: "리프팅",
    title: "리프팅",
    subtitle: "Lifting",
  },
  ulthera: {
    icon: <Star size={14} />,
    label: "울쎄라",
    title: "울쎄라",
    subtitle: "Ulthera",
  },
  whitening: {
    icon: <Sun size={14} />,
    label: "미백/기미",
    title: "미백/기미",
    subtitle: "Whitening",
  },
  antiaging: {
    icon: <Clock size={14} />,
    label: "항노화",
    title: "항노화",
    subtitle: "Anti-aging",
  },
  body: {
    icon: <Heart size={14} />,
    label: "바디체형",
    title: "바디체형",
    subtitle: "Body Contouring",
  },
  virizen: {
    icon: <CircleDot size={14} />,
    label: "바이리즌",
    title: "바이리즌",
    subtitle: "Virizen",
  },
  skincare: {
    icon: <Flower2 size={14} />,
    label: "스킨케어",
    title: "스킨케어",
    subtitle: "Skin Care",
  },
  booster: {
    icon: <Droplets size={14} />,
    label: "스킨부스터",
    title: "스킨부스터",
    subtitle: "Skin Booster",
  },
  acne: {
    icon: <Pointer size={14} />,
    label: "여드름/모공",
    title: "여드름/모공",
    subtitle: "Acne Care",
  },
  removal: {
    icon: <Scissors size={14} />,
    label: "제모",
    title: "제모",
    subtitle: "Hair Removal",
  },
  filler: {
    icon: <Diamond size={14} />,
    label: "필러/실",
    title: "필러/실",
    subtitle: "Filler & Thread",
  },
  wedding: {
    icon: <Gift size={14} />,
    label: "웨딩",
    title: "웨딩",
    subtitle: "Wedding",
  },
  membership: {
    icon: <Users size={14} />,
    label: "멤버십",
    title: "멤버십",
    subtitle: "Membership",
  }
};