import AthleteData from "@/assets/data.json";

export type Athletes = typeof AthleteData.data;
export type Athlete = Athletes[0];
export type Report = Athlete['report'][0];