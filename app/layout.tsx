import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import {ChildProps} from "@/types";
import {ThemeProvider} from "@/components/providers/theme-provider";

const creteRound = Crete_Round({
  weight:['400'],
  subsets:['latin'],
  variable:'--font-creteRound'
})
const workSans = Work_Sans({
  weight:[ '500', '600'],
  subsets:['latin'],
  variable:'--font-workSans'
})

export const metadata: Metadata = {
  title: "Jamshid shaxsiy bloglari",
  description: "Dasturlash haqida shaxsiy fikrlar, yangiliklar, maslahatlar, va dasturlash sohasida eng so'ngi xabarlar. Bizning blogda dasturlashni o'rganish va rivojlanish uchun qo'llanma topshingiz mumkin",
};

function RootLayout({children}:ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden` }>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
export default RootLayout
