import { create } from "zustand";

export interface ImgStoreType {
  imgURL: string;
  setImgURL: (imgURL: string) => void;
}

export const useImgURLStore = create<ImgStoreType>((set) => ({
  imgURL: "",
  setImgURL: (imgURL) => set({ imgURL: imgURL }),
}));
