import React, { useEffect, useRef } from "react";

class TextScramble {
  private el: HTMLElement;
  private chars: string;
  private queue: Array<{
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }>;
  private frame: number;
  private frameRequest: number;
  private resolve: () => void;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.queue = [];
    this.frame = 0;
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  private update(): void {
    let output = "";
    let complete = 0;

    for (let i = 0; i < this.queue.length; i++) {
      const { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          this.queue[i].char = this.randomChar();
        }
        output += `<span class="dud">${this.queue[i].char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update.bind(this));
      this.frame++;
    }
  }

  private randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = ["Welcome!"];

const SplashScreen: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const fxRef = useRef<TextScramble | null>(null);
  const counterRef = useRef<number>(0);

  useEffect(() => {
    if (textRef.current) {
      fxRef.current = new TextScramble(textRef.current);
      next();
    }
  }, []);

  const next = () => {
    if (fxRef.current) {
      fxRef.current.setText(phrases[counterRef.current]).then(() => {
        setTimeout(next, 800);
      });
      counterRef.current = (counterRef.current + 1) % phrases.length;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="text-6xl font-bold font-inter uppercase"
        ref={textRef}
      ></div>
    </div>
  );
};

export default SplashScreen;
