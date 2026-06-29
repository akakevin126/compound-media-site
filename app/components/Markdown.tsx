import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1
      className="text-3xl sm:text-5xl font-bold text-ink leading-tight mb-6"
      style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      className="text-2xl sm:text-3xl font-bold text-ink mt-10 mb-3"
      style={{ fontFamily: "'Fredoka', sans-serif" }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="text-xl sm:text-2xl font-bold text-ink mt-8 mb-2"
      style={{ fontFamily: "'Fredoka', sans-serif" }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-ink/80 text-base sm:text-lg leading-relaxed mb-5">{children}</p>
  ),
  strong: ({ children }) => <strong className="font-bold text-ink">{children}</strong>,
  ul: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-2 text-ink/80">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-ink/80">{children}</ol>,
  li: ({ children }) => <li className="text-base sm:text-lg leading-relaxed">{children}</li>,
  a: ({ href, children }) => {
    const url = href ?? "#";
    const isInternal = url.startsWith("/");
    const className =
      "text-coral font-semibold underline decoration-2 underline-offset-2 hover:text-coral-hover transition-colors";
    if (isInternal) {
      return (
        <Link href={url} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  },
};

export function Markdown({ children }: { children: string }) {
  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
}
