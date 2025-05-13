"use client";
import { useEditorStore } from "@/store/editor-store";
import {
  LucideTrash,
  LucideCopy,
  LucideDownload,
  LucideFlame,
  LucideMoon,
  LucideSun,
} from "lucide-react";
import { themes } from "@/config/themes";

const iconSize = 16;

export default function Toolbar() {
  const {
    clearContent,
    content,
    theme,
    setTheme,
    font,
    setFont,
    fontSize,
    setFontSize,
  } = useEditorStore();

  const getWordCount = () => {
    return content.trim() === "" ? 0 : content.trim().split(/\s+/).length;
  };

  const getCharacterCount = () => {
    return content.length;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "untitled.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`py-2 px-20 flex justify-between items-center ${themes[theme].bg} ${themes[theme].text} `}
    >
      <div className="flex gap-2">
        <button
          onClick={clearContent}
          className={`px-2 py-1 cursor-pointer rounded-md ${themes[theme].toolbar}  transition-colors text-sm`}
        >
          <LucideTrash size={iconSize} />
        </button>
        <button
          onClick={handleCopy}
          className={`px-2 py-1 cursor-pointer rounded-md ${themes[theme].toolbar}  transition-colors text-sm`}
        >
          <LucideCopy size={iconSize} />
        </button>
        <button
          onClick={handleDownload}
          className={`px-2 py-1 cursor-pointer rounded-md ${themes[theme].toolbar}  transition-colors text-sm`}
        >
          <LucideDownload size={iconSize} />
        </button>

        <div className="border-l border-current mx-2" />

        <button
          onClick={() => setTheme("day")}
          className={`px-2 py-1 cursor-pointer rounded-md ${themes[theme].toolbar} 
                     transition-colors text-sm ${theme === "day" ? themes[theme].active : ""}`}
        >
          <LucideSun size={iconSize} />
        </button>
        <button
          onClick={() => setTheme("night")}
          className={`px-2 py-1 cursor-pointer rounded-md ${themes[theme].toolbar} 
                     transition-colors text-sm ${theme === "night" ? themes[theme].active : ""}`}
        >
          <LucideMoon size={iconSize} />
        </button>
        <button
          onClick={() => setTheme("warm")}
          className={`px-2 py-1 cursor-pointer rounded-md ${themes[theme].toolbar} 
                     transition-colors text-sm ${theme === "warm" ? themes[theme].active : ""}`}
        >
          <LucideFlame size={iconSize} />
        </button>
        <div className="border-l border-current mx-2" />

        <div className="flex items-center gap-2">
          <span className="text-sm">{fontSize}px</span>
          <input
            type="range"
            min="12"
            max="32"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className={`w-24 h-1 rounded-lg appearance-none cursor-pointer
                       ${themes[theme].slider}`}
          />
        </div>

        <div className="border-l border-current mx-2" />

        {/* Font buttons */}
        <button
          onClick={() => setFont("sans")}
          className={`px-2 py-1 cursor-pointer rounded-md ${themes[theme].toolbar} 
                     transition-colors text-sm font-sans
                     ${font === "sans" ? themes[theme].active : ""}`}
        >
          Aa
        </button>
        <button
          onClick={() => setFont("serif")}
          className={`px-2 py-1 cursor-pointer rounded-md ${themes[theme].toolbar} 
                     transition-colors text-sm font-serif
                     ${font === "serif" ? themes[theme].active : ""}`}
        >
          Aa
        </button>
        <button
          onClick={() => setFont("mono")}
          className={`px-2 py-1 cursor-pointer rounded-md ${themes[theme].toolbar} 
                     transition-colors text-sm font-mono
                     ${font === "mono" ? themes[theme].active : ""}`}
        >
          Aa
        </button>
      </div>

      <div className="text-neutral-400 text-sm flex gap-4">
        <span>{getWordCount()} words</span>
        <span>{getCharacterCount()} characters</span>
      </div>
    </div>
  );
}
