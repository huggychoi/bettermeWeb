// config/tabsConfig.js

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
  Leaf,
  Beaker
} from 'lucide-react';

const ICON_SIZE = 20;
const STROKE_WIDTH = 1.5;

export const tabsConfig = {
  firstVisit: {
    icon: <Rocket size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "첫방문",
    title: "첫방문",
    subtitle: "First Visit",
  },
  botox: {
    icon: <Syringe size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "보톡스",
    title: "보톡스/뻬띠",
    subtitle: "Botox",
  },
  rejuran: {
    icon: <Sparkles size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "리쥬란",
    title: "리쥬란 스킨부스터",
    subtitle: "REJURAN Skin Booster",
  },
  lifting: {
    icon: <Zap size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "리프팅",
    title: "리프팅",
    subtitle: "Lifting",
  },
  ulthera: {
    icon: <Star size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "울쎄라",
    title: "울쎄라",
    subtitle: "Ulthera",
  },
  whitening: {
    icon: <Sun size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "미백/기미",
    title: "미백/기미",
    subtitle: "Whitening",
  },
  antiaging: {
    icon: <Clock size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "항노화",
    title: "항노화",
    subtitle: "Anti-aging",
  },
  body: {
    icon: <Heart size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "바디체형",
    title: "바디체형",
    subtitle: "Body Contouring",
  },
  virizen: {
    icon: <CircleDot size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "바이리즌",
    title: "바이리즌",
    subtitle: "Virizen",
  },
  skincare: {
    icon: <Flower2 size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "스킨케어",
    title: "스킨케어",
    subtitle: "Skin Care",
  },
  booster: {
    icon: <Droplets size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "스킨부스터",
    title: "스킨부스터",
    subtitle: "Skin Booster",
  },
  acne: {
    icon: <Pointer size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "여드름&모공",
    title: "여드름&모공",
    subtitle: "Acne Care",
  },
  removal: {
    icon: <Scissors size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "제모",
    title: "제모",
    subtitle: "Hair Removal",
  },
  filler: {
    icon: <Diamond size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "필러/실",
    title: "필러/실",
    subtitle: "Filler & Thread",
  },
  wedding: {
    icon: <Gift size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "웨딩",
    title: "웨딩",
    subtitle: "Wedding",
  },
  haracell: {
    icon: <Fingerprint size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "하라셀",
    title: "하라셀",
    subtitle: "Haracell",
  },
  histolab: {
    icon: <Microscope size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "히스토랩",
    title: "히스토랩",
    subtitle: "Histolab",
  },
  supplements: {
    icon: <Leaf size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "건강기능식품",
    title: "건강기능식품",
    subtitle: "Health Supplements",
  },
  membership: {
    icon: <Users size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    label: "멤버십",
    title: "멤버십",
    subtitle: "Membership",
  }
};

export default tabsConfig;