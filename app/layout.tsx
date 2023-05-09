import RootStyleRegistry from "./emotion";
import ReduxRegistry from "./react-redux";
import MuiRegistry from "./mui";
import CommonPageTemplate from "../src/components/CommonPageTemplate";

export const metadata = {
  title: 'Next.js Template(TodoList)',
};

const RootLayout = 
  ({ children }: { children: JSX.Element }) => 
  {
  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body>
        <ReduxRegistry>
          <RootStyleRegistry>
            <MuiRegistry>
              <CommonPageTemplate>
                {children}
              </CommonPageTemplate>
            </MuiRegistry>
          </RootStyleRegistry>
        </ReduxRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
