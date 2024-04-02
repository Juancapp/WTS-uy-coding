export enum PurchaseStateEnum {
  MOVIE_FORM = "MOVIE_FORM",
  PERSONAL_INFO_FORM = "PERSONAL_INFO_FORM",
  PURCHASE_SUCCESSFULLY = "PURCHASE_SUCCESSFULLY",
}

export interface PurchaseFormProps {
  title: string;
  date: string;
  place: string;
}

export interface InformationFormProps {
  name: string;
  email: string;
  phone: string;
}
