import { atom } from "recoil";

// 피드 or 보관함 둘중에 선택
export const ItemState = atom<boolean>({
    key: "itemState",
    default: false, 
  });
  // feed이미지 호버시
  export const OverlayState = atom<boolean>({
    key: "overlay",
    default: false, 
  });
  
  export const ImgIdState = atom<number>({
    key: "imgId",
    default: 10000000000, 
  });