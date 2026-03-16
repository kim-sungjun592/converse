const img = (path) => `/img/${path}`;
export const helloData = {

  media: {
    type: "image",                     
    src: img("3.png"),   // 기존 파일명 대신 '3.png'로 변경
    alt: "Pink square demo image",
    radius: 24                         
  },

  eyebrow: "Hello❤️ We are CONVERSE!",
  title: "WE ARE <br/> CONVERSE",
description: "컨버즈(Conbuzz)는 기존의 제지 제조 중심 사업 구조에서 <br/> 벗어나 ICT(정보통신기술) 및 통신장비 사업으로 <br/> 주력 사업을 전환하고 있는 코스피 상장 기업입니다",
  

cta: {
    label: "MEET CONVERSE",
    href: "/about"
  }
};