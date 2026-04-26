"use client";

import { Check, Copy } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from "react";

export default function Pre({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
  "data-language"?: string; // ✅ 明确存在该属性
}) {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);
  const language = props["data-language"];

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent;

    if (code) {
      const newCode = code.replace(language || "code", "");
      await navigator.clipboard.writeText(newCode);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <div className="relative">
      <pre ref={preRef} {...props} suppressHydrationWarning>
        <span className="block mb-2 flex justify-between h-[24px]">
          <span className="uppercase">{language || "code"}</span>
          <button
            disabled={isCopied}
            onClick={handleClickCopy}
            className="absolute right-4 cursor-pointer"
          >
            {isCopied ? (
              <Check color="#00c9a7" size={20} />
            ) : (
              <Copy color="#009efa" size={20} />
            )}
          </button>
        </span>
        {children}
      </pre>
    </div>
  );
}
