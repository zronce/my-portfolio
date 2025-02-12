import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
const jetBrainsMono = JetBrains_Mono({subsets: ["latin"], weight: ["100", "200",
"300", "400", "500", "600", "700", "800"],
variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Kyle Batac",
  description: "Kyle Batac's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetBrainsMono.variable}>
          <Header />
          <StairTransition />
          <PageTransition>
            {children}
          </PageTransition>
          </body>

    </html>
  );
}
