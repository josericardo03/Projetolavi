import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institucional",
  description: "Crédito para o seu negócio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
