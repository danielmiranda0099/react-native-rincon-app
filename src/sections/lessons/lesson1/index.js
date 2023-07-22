import { Section1 } from "./Section1";

export const lesson1Data = {
  id: 1,
  title: "Tipos de pelo y de cortes.",
  image: "../assets/girl-desk-1.png",

  sections: [
    {
      banner: "corte_pelo",
      title: "Corte Shaggy con flequillo en textura ondulada (2c-3a)",

      content: () => <Section1 />,
    },
    {
      banner: "corte_pelo",
      title: "Corte Shaggy",

      content: () => <Section1 />,
    },
  ],
};
