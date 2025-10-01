import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ToggleProvider } from './context/toggleContext.jsx';
import AppContainer from "./component/appContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "Help In Essen",
  description: "Connect with helpers in your city easily and safely",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-xh6pV1xB...YOUR_HASH_HERE..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
  <ToggleProvider>
    <AppContainer >
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only p-2 bg-blue-600 text-white"
      >
        Skip to content
      </a>

      {/* Main content should stretch */}
      <main id="main-content" className="flex-1 ">
        {children}
      </main>

     
    </AppContainer>
  </ToggleProvider>
</body>
</html>
  )
}
