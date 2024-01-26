import CustomLayout from "components/open-part/custom-layout"
import logo from 'public/logo.svg'

export const metadata = {
  title: 'Главная',
  description: 'Developed by Izat Tilekuulu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomLayout>
          {children}
        </CustomLayout>
      </body>
    </html>
  )
}
