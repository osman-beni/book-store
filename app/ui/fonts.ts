import { Inter, DM_Serif_Display, Libre_Baskerville } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const dmSerifDisplay = DM_Serif_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-serif-display",
    weight: "400",
});

export const libreBaskerville = Libre_Baskerville({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-libre-baskerville",
    weight: "400",
});