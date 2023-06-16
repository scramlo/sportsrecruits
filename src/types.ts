import AthleteData from "@/assets/data.json";
// utility for extracting type from array of types

type Unpacked<T> = T extends (infer U)[] ? U : T;

export type Athletes = typeof AthleteData.data;
export type Athlete = Unpacked<Athletes>;
