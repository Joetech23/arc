"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import {
  IconClose,
  IconSend,
  IconSparkle,
} from "@/components/icons";

type Msg = {
  from: "bot" | "user";
  text: string;
  actions?: { label: string; href: string; external?: boolean }[];
};

const quickReplies = [
  "What services do you offer?",
  "I'd like a quote",
  "Where do you work?",
  "How do I contact you?",
];

const greeting: Msg = {
  from: "bot",
  text: `Hi 👋 I'm Arc — the Arcmarshal assistant. I can tell you about our services, locations and how to get a quote. What would you like to know?`,
};

function getReply(input: string): Msg {
  const q = input.toLowerCase();

  if (/(service|build|construct|do you|offer|renovat|interior|industrial|commercial|residential|real estate|land)/.test(q)) {
    return {
      from: "bot",
      text: `We're a full-service design & construction company. We handle: ${services
        .map((s) => s.title)
        .join(", ")}. Want details on any of these?`,
      actions: [{ label: "Browse all services", href: "/services" }],
    };
  }
  if (/(quote|price|cost|budget|estimate|how much|charge)/.test(q)) {
    return {
      from: "bot",
      text: "Great — quotes are free and there's no obligation. Tell us a bit about your project and we'll get back within one business day.",
      actions: [
        { label: "Request a free quote", href: "/quote" },
        { label: "Chat on WhatsApp", href: `https://wa.me/${site.whatsapp}`, external: true },
      ],
    };
  }
  if (/(where|location|area|abuja|state|cover|kurudu|port|kaduna|delta|bauchi)/.test(q)) {
    return {
      from: "bot",
      text: `Our head office is in ${site.address.line1}, ${site.address.line2}. We deliver projects across ${site.serviceAreas.join(", ")}.`,
      actions: [{ label: "View contact & map", href: "/contact" }],
    };
  }
  if (/(contact|call|phone|email|reach|talk|human|speak|whatsapp)/.test(q)) {
    return {
      from: "bot",
      text: `You can reach our team directly:\n📞 ${site.phoneDisplay}\n✉️ ${site.email}`,
      actions: [
        { label: "Call now", href: `tel:${site.phone}`, external: true },
        { label: "WhatsApp us", href: `https://wa.me/${site.whatsapp}`, external: true },
        { label: "Contact page", href: "/contact" },
      ],
    };
  }
  if (/(portfolio|project|work|done|gallery|example)/.test(q)) {
    return {
      from: "bot",
      text: "We've delivered homes, commercial spaces and industrial builds across Nigeria. Take a look at some of our work.",
      actions: [{ label: "See our projects", href: "/portfolio" }],
    };
  }
  if (/(hi|hello|hey|good (morning|afternoon|evening))/.test(q)) {
    return {
      from: "bot",
      text: "Hello! 👷 How can I help with your project today?",
    };
  }
  if (/(cac|registered|trust|legit|legal|verified|insur)/.test(q)) {
    return {
      from: "bot",
      text: `Yes — ${site.legalName} is a duly registered Nigerian company (CAC). You're in safe, accountable hands.`,
      actions: [{ label: "Learn about us", href: "/about" }],
    };
  }

  return {
    from: "bot",
    text: "I want to make sure I get this right — the easiest way is to send us your question directly and a team member will respond personally.",
    actions: [
      { label: "Request a quote", href: "/quote" },
      { label: "WhatsApp us", href: `https://wa.me/${site.whatsapp}`, external: true },
    ],
  };
}

export function AIAgent() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([greeting]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, open]);

  // Proactively greet the visitor 5s after they start scrolling (once per session).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("arc-greeted")) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let armed = false;
    const onScroll = () => {
      if (armed || window.scrollY < 250) return;
      armed = true;
      window.removeEventListener("scroll", onScroll);
      timer = setTimeout(() => {
        if (!sessionStorage.getItem("arc-greeted")) {
          sessionStorage.setItem("arc-greeted", "1");
          setOpen(true);
        }
      }, 5000);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const send = (text: string) => {
    const value = text.trim();
    if (!value) return;
    setMessages((m) => [...m, { from: "user", text: value }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, getReply(value)]);
      setTyping(false);
    }, 650);
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => {
          if (typeof window !== "undefined")
            sessionStorage.setItem("arc-greeted", "1");
          setOpen((o) => !o);
        }}
        aria-label="Open AI assistant"
        className="group fixed bottom-[88px] right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold shadow-lift transition-transform duration-300 hover:scale-105"
      >
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
        </span>
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <IconClose className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="ai"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <IconSparkle className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-40 right-5 z-40 flex h-[min(540px,72vh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-cloud-dark bg-white shadow-lift"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-navy px-5 py-4 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy">
                <IconSparkle className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading text-sm font-bold">Arc Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Online now
                </p>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto bg-cloud/60 p-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-md bg-navy text-white"
                        : "rounded-bl-md bg-white text-charcoal shadow-soft"
                    }`}
                  >
                    {m.text}
                    {m.actions && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.actions.map((a) =>
                          a.external ? (
                            <a
                              key={a.label}
                              href={a.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-full bg-gold px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:bg-gold-400"
                            >
                              {a.label}
                            </a>
                          ) : (
                            <Link
                              key={a.label}
                              href={a.href}
                              onClick={() => setOpen(false)}
                              className="rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-navy-800"
                            >
                              {a.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-soft">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-2 w-2 rounded-full bg-navy/40"
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.9,
                          delay: d * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick replies (only at start) */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickReplies.map((qr) => (
                    <button
                      key={qr}
                      onClick={() => send(qr)}
                      className="rounded-full border border-navy/15 bg-white px-3 py-1.5 text-xs font-medium text-navy transition-colors hover:border-gold hover:bg-gold hover:text-navy"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-cloud-dark bg-white p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full bg-cloud px-4 py-2.5 text-sm text-charcoal outline-none focus:ring-2 focus:ring-gold/40"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-navy transition-transform hover:scale-105"
              >
                <IconSend className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
