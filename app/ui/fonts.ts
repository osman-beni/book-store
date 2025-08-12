import { Inter, DM_Serif_Display } from "next/font/google";

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