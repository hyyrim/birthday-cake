import type { Theme } from '../components/ThemeSelector';

export interface ThemeColors {
  cakeBase: string; // 케이크 기본 색상
  filling: string; // 필링 색상
  cream: string; // 크림 색상
  base: string; // 케이크 바닥 색상
}

export const themeColors: Record<Theme, ThemeColors> = {
  chocolate: {
    cakeBase: '#643925', // 초콜릿 브라운
    filling: '#C18453', // 다크 초콜릿
    cream: '#8A5637', // 버번 크림
    base: '#F5F4DF',
  },
  cream: {
    cakeBase: '#F0DDCF', // 밀색
    filling: '#FFFAF8', // 탄 베이지
    cream: '#FDA2A2', // 콘실크
    base: '#FFF8DC',
  },
  blueberry: {
    cakeBase: '#8E7A9B', // 인디고
    filling: '#AF99C4', // 슬레이트 블루
    cream: '#E8E0EB', // 라벤더
    base: '#E6E6FA',
  },
}; 