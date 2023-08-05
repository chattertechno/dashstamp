import { ReactNode } from "react";

// ==================================================
// HEADINGS =========================================
// ==================================================
export const H1 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <h1
    className={`text-2xl md:text-4xl lg:text-5xl xl:text-[4rem] xl:leading-[4.5rem] font-bold  ${className}`}
  >
    {children}
  </h1>
);

export const H2 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <h1 className={`text-3xl font-bold  ${className}`}>{children}</h1>;

export const H3 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <h1 className={`text-lg font-semibold  ${className}`}>{children}</h1>;

export const H4 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <h1 className={`text-base font-bold  ${className}`}>{children}</h1>;

// ==================================================
// SUB HEADINGS =====================================
// ==================================================
export const SubH1 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <h1
    className={`text-sm uppercase bg-[#CCE2FF] rounded-full p-1 px-2 font-semibold text-[#2B31D6] inline-block ${className}`}
  >
    {children}
  </h1>
);

export const SubH2 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <h1 className={`text-sm font-semibold ${className}`}>
    {children}
  </h1>
);

// ====================================================
// PARAGRAPHS =========================================
// ====================================================

export const P1 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <p className={`text-lg md:text-xl ${className}`}>{children}</p>;

export const P2 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <p className={`text-lg ${className}`}>{children}</p>;
