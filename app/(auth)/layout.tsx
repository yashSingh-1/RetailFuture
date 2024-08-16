import { ClerkProvider } from "@clerk/nextjs"
import "../globals.css"

export const metadata = {
  title: 'Retail',
  description: 'Future of Retail',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="h-screen w-full m-auto">
        <main className="m-auto">
        {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  )
}