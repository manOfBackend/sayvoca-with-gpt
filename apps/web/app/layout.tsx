import { ClerkProvider } from "@clerk/nextjs"
import { cn } from "@sayvoca/lib/utils"
import { Analytics, ThemeProvider, Toaster } from '@sayvoca/ui'
import '../styles/globals.css'
import { Inter as FontSans } from "next/font/google"
import Providers from "@/components/providers"

interface RootLayoutProps {
  children: React.ReactNode
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: '세이보카',
  description: '세이보카 프로젝트',
  keywords: [
    "english voca learning",
    "chatGPT",
  ],
  authors: [
    {
      name: "hyunBell",
      url: "https://irondeveloper.tistory.com",
    },
  ],
  creator: "hyunBell",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],

}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="ko" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen max-w-md bg-background mx-auto font-sans antialiased flex justify-center w-full",
            fontSans.variable,
          )}
        >
          <Providers>
            <div className='w-full'>
              {children}
            </div>
            <Analytics />
            <Toaster />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
