import { Metadata } from 'next'
import '../globals.css'
import ReduxProvider from './_providers/ReduxProvider'
import CommonPageTemplate from '../components/CommonPageTemplate'

type RootLayoutProps = React.PropsWithChildren

export const metadata: Metadata = {
  title: 'Next.js Template(TodoList)',
  description: 'This is Next.js Sample Template',
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
}: RootLayoutProps) => (
  <html lang="ja">
    <body>
      <ReduxProvider>
        <CommonPageTemplate>{children}</CommonPageTemplate>
      </ReduxProvider>
    </body>
  </html>
)

export default RootLayout