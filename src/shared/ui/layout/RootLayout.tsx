import CommonPageTemplate from '../CommonPageTemplate';
import '../../../app/styles/globals.css';
import ReduxProvider from '../../../app/providers/ReduxProvider';

type RootLayoutProps = React.PropsWithChildren;

const RootLayout: React.FC<RootLayoutProps> = ({ children }: RootLayoutProps) => (
  <html lang="ja">
    <body>
      <ReduxProvider>
        <CommonPageTemplate>{children}</CommonPageTemplate>
      </ReduxProvider>
    </body>
  </html>
)

export default RootLayout;
