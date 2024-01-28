export default interface ICreditcardData {
  id: string;
  title: string;
  charge: number;
  withdrawal_fees: number;
  withdrawal_fees_description: string;
  interest: number;
  image: string;
  features: Feature[];
  rating: Rating;
  information: Information[];
}

export interface Feature {
  title: string;
  highlighted: boolean;
}

export interface Rating {
  score: string;
  description: string;
}

export interface Information {
  title: string;
  //groups?: Group[]
  items?: InformationItem[];
}

export interface Group {
  title: string;
  items: [GroupItem, any][];
}

export interface GroupItem {
  title: string;
  icon: string;
  description: string;
  is_bold: boolean;
}

export interface InformationItem {
  title: string;
  items: title[][];
}

export interface title {
  title: string;
  icon: string;
  description: string;
  is_bold: boolean;
}
