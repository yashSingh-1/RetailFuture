import MobileNav from "@/components/shared/MobileNav"
import "../globals.css"

export const metadata = {
  title: 'Retail',
  description: 'Future of Retail',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html>
        <body>{children}</body>

      </html>
    
  )
}
