"use client";

import { useEditorStore } from "@/store/editor-store";
import { themes } from "@/config/themes";
import { fonts } from "@/config/fonts";

export default function Editor() {
  const { content, setContent, theme, font, fontSize } = useEditorStore();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <textarea
      value={content}
      onChange={handleChange}
      className={`w-full flex-1 resize-none border-none outline-none p-8 
                 ${themes[theme].bg} ${themes[theme].text} 
                 ${fonts[font]} leading-relaxed`}
      style={{ fontSize: `${fontSize}px` }}
      autoFocus
      placeholder="Type here..."
      spellCheck="false"
    />
  );
}
