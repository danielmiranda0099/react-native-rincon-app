import { Section1 } from "../lesson1/Section1";
import { SectionShagy } from "./SectionShagy";

export const lesson2Data = {
  id: 2,
  title: "Corte Shagy.",
  image: "../assets/girl-desk-1.png",

  sections: [
    {
      banner: "corte_pelo2",
      title: "Corte Shaggy con Capas",

      content: () => <SectionShagy />,
    },
    {
      banner: "corte_pelo",
      title: "Corte Shaggy",

      content: () => <Section1 />,
    },
  ],
};