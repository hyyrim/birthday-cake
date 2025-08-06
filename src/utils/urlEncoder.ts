import type { Theme } from '../components/ui/ThemeSelector';

interface BirthdayData {
  name: string;
  message: string;
  theme: Theme;
}

// Base64 인코딩 (안전한 방식)
export const encodeData = (data: BirthdayData): string => {
  try {
    const jsonString = JSON.stringify(data);
    return btoa(unescape(encodeURIComponent(jsonString)));
  } catch (error) {
    console.error('Encoding failed:', error);
    return '';
  }
};

// Base64 디코딩 (안전한 방식)
export const decodeData = (encoded: string): BirthdayData | null => {
  try {
    const jsonString = decodeURIComponent(escape(atob(encoded)));
    const data = JSON.parse(jsonString);

    // 데이터 유효성 검사
    if (
      typeof data.name === 'string' &&
      typeof data.message === 'string' &&
      ['chocolate', 'cream', 'blueberry'].includes(data.theme)
    ) {
      return data;
    }
    return null;
  } catch (error) {
    console.error('Decoding failed:', error);
    return null;
  }
};

// URL에서 데이터 파싱 (기존 방식과 Base64 방식 모두 지원)
export const parseURLData = (): BirthdayData | null => {
  const urlParams = new URLSearchParams(window.location.search);

  // Base64 방식 확인
  const encodedData = urlParams.get('data');
  if (encodedData) {
    return decodeData(encodedData);
  }

  // 기존 방식 (하위 호환성)
  const name = urlParams.get('name');
  const message = urlParams.get('message');
  const theme = urlParams.get('theme') as Theme;

  if (name && message && theme) {
    return {
      name: decodeURIComponent(name),
      message: decodeURIComponent(message),
      theme: ['chocolate', 'cream', 'blueberry'].includes(theme)
        ? theme
        : 'chocolate',
    };
  }

  return null;
};

// URL 업데이트 (Base64 방식)
export const updateURL = (data: BirthdayData): void => {
  const url = new URL(window.location.href);
  const encoded = encodeData(data);

  // 기존 파라미터 제거
  url.searchParams.delete('name');
  url.searchParams.delete('message');
  url.searchParams.delete('theme');

  // Base64 데이터 추가
  if (encoded) {
    url.searchParams.set('data', encoded);
  }

  window.history.replaceState({}, '', url.toString());
};
