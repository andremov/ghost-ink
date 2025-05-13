import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "day" | "night" | "warm";
type Font = "sans" | "serif" | "mono";

interface EditorStore {
  content: string;
  theme: Theme;
  font: Font;
  fontSize: number;
  setContent: (content: string) => void;
  clearContent: () => void;
  setTheme: (theme: Theme) => void;
  setFont: (font: Font) => void;
  setFontSize: (size: number) => void;
}

export const useEditorStore = create<EditorStore>()(
  persist(
    (set) => ({
      content: "",
      theme: "night",
      font: "mono",
      fontSize: 18,
      setContent: (content) => set({ content }),
      clearContent: () => set({ content: "" }),
      setTheme: (theme) => set({ theme }),
      setFont: (font) => set({ font }),
      setFontSize: (fontSize) => set({ fontSize }),
    }),
    {
      name: "editor-storage",
    }
  )
);
