"use client";

import { useEffect, useId, useRef, useState } from "react";

const STORAGE_KEY = "bci-disclaimer-agreed";

type GateState = "pending" | "agreed" | "declined";

export default function DisclaimerGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<GateState>("pending");
  const dialogRef = useRef<HTMLDivElement>(null);
  const agreeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "yes") {
        setState("agreed");
      }
    } catch {
      setState("pending");
    }
  }, []);

  useEffect(() => {
    const lock = state !== "agreed";
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [state]);

  useEffect(() => {
    if (state !== "pending") return;
    agreeRef.current?.focus();
  }, [state]);

  useEffect(() => {
    if (state !== "pending") return;

    const node = dialogRef.current;
    if (!node) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = node.querySelectorAll<HTMLElement>("button");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [state]);

  function agree() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "yes");
    } catch {
      /* sessionStorage may be blocked; still allow this session */
    }
    setState("agreed");
  }

  function decline() {
    setState("declined");
  }

  return (
    <>
      {state === "pending" ? (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 px-5 py-8 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
        >
          <div className="max-h-full w-full max-w-xl overflow-y-auto border border-gold/40 bg-paper px-7 py-8 shadow-[0_24px_80px_rgba(18,24,38,0.28)] sm:px-10 sm:py-10">
            <p className="font-deva text-[0.7rem] tracking-[0.22em] text-gold uppercase">
              घोषणा · Declaration
            </p>
            <h2
              id={titleId}
              className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-[2rem]"
            >
              Before you continue
            </h2>
            <div
              id={descId}
              className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-ink-muted"
            >
              <p>
                This website furnishes information of Arvind Kumar Sharma,
                Advocate, as permitted under Rule 36 of the Bar Council of India
                Rules (proviso added by Resolution No. 50/2008). It is an
                informational record, not an advertisement.
              </p>
              <p>
                By selecting <strong className="font-medium text-ink">I Agree</strong>,
                you confirm that you are seeking this information of your own
                accord and that there has been no advertisement, solicitation,
                invitation or inducement of any kind whatsoever to solicit work
                through this website.
              </p>
              <p>
                The particulars are true to the best of the advocate’s knowledge
                as on the date stated on this page. Nothing here is legal advice.
                Viewing this website does not create an advocate–client
                relationship.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                ref={agreeRef}
                type="button"
                onClick={agree}
                className="inline-flex min-h-11 items-center justify-center border border-ink bg-ink px-6 py-2.5 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                I Agree
              </button>
              <button
                type="button"
                onClick={decline}
                className="inline-flex min-h-11 items-center justify-center border border-ink/25 bg-transparent px-6 py-2.5 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                I Do Not Agree
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {state === "declined" ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-paper px-6">
          <div className="max-w-md text-center">
            <p className="font-deva text-[0.7rem] tracking-[0.22em] text-gold uppercase">
              घोषणा · Declaration
            </p>
            <h1 className="mt-4 font-heading text-3xl font-semibold text-ink">
              You have chosen not to view this website
            </h1>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted">
              No further information is displayed. You may close this page.
            </p>
            <button
              type="button"
              onClick={() => setState("pending")}
              className="mt-8 inline-flex min-h-11 items-center justify-center border border-ink/25 px-6 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Return to declaration
            </button>
          </div>
        </div>
      ) : null}

      <div
        inert={state !== "agreed" ? true : undefined}
        aria-hidden={state !== "agreed"}
        className={state === "declined" ? "hidden" : undefined}
      >
        {children}
      </div>
    </>
  );
}
