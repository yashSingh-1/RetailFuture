import { ClerkProvider } from "@clerk/nextjs"

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
      <body >{children}</body>
    </html>
    </ClerkProvider>
  )
}
