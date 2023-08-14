import { atom } from "recoil";

export const EditImgModalState = atom<boolean>({
    key: "EditImgModalState",
    default: false,
  });


  export const EditImgState = atom<string>({
    key: "EditImgState",
    default: "",
  });

  export const EditImgFileState = atom<File[]>({
    key:"EditImgFileState",
    default:[],
  });