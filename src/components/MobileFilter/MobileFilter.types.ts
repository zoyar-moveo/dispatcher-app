type FilterEverythingT = {
  Sources: { selected: string; options: string[] };
  Language: { selected: string; options: string[] };
  Dates: { selected: string; options: string[] };
};
type FilterTopT = {
  Sources: { selected: string; options: string[] };
  Country: { selected: string; options: string[] };
  Category: { selected: string; options: string[] };
};

export interface FilterI {
  FilterEverything: FilterEverythingT;
  FilterTop: FilterTopT;
}

export interface MobileFilterProps {
  FilterCatagories: FilterI;
  isEverything: boolean;
  toggleSearchIn: () => void;
  onFilterBack: () => void;
  onCloseFilter: () => void;
}

export enum EveryKey {
  DATES = "Dates",
  SOURCES = "Sources",
  LANGUAGE = "Language",
}
export enum TopKey {
  COUNTRY = "Country",
  SOURCES = "Sources",
  CATEGORY = "Category",
}
