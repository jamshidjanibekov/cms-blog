import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import {ChildProps} from "@/types";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {Toaster} from "@/components/ui/sonner";

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
  metadataBase:new URL('https://jamshidjanibekov.uz'),
  title: "Jamshid shaxsiy bloglari",
  description: "Dasturlash haqida shaxsiy fikrlar, yangiliklar, maslahatlar, va dasturlash sohasida eng so'ngi xabarlar. Bizning blogda dasturlashni o'rganish va rivojlanish uchun qo'llanma topshingiz mumkin",
  authors:[{name:'Jamshid Janibekov', url:'https://github.com/jamshidjanibekov'}],
  icons:{icon:'/favicon.png'},
  keywords:"jamshid janibekov, Jamshid Janibekov, shaxsiy bloglar, dasturlashga oid bloglar, reactjs uzbek tilida, javascript uzbek tilida bloglar, vuejs uzbek tilida bloglar, dasturlash bloglar o'zbek tilida, portfolio, dasturlash dasturlashni o'rganish bloglar, IT bloglar uzbek  tilida, jamshidjanibekov",
  openGraph:{
    title:'jamshid janibekov',
    description:'Dasturlash haqida shaxsiy fikrlar, yangiliklar, maslahatlar, va dasturlash sohasida eng so\'ngi xabarlar. Bizning blogda dasturlashni o\'rganish va rivojlanish uchun qo\'llanma topshingiz mumkin',
    type:'website',
    locale:'en_EN',
    countryName:'Uzbekistan',
    siteName:'Jamshid Janibekov',
    emails:'jamshidjanibekov0@gmail.com',
  }
  
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
          <Toaster position='top-center'/>

        </ThemeProvider>
      </body>
    </html>
  );
}
export default RootLayout
