import type { Metadata } from "next";
import { RootProviders } from "@/app/_components/RootProviders";

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = (props) => {
  return (
    <html lang={"ja"}>
      <body>
        <RootProviders>{props.children}</RootProviders>
      </body>
    </html>
  );
};

export const metadata: Metadata = {};

export default RootLayout;
