export interface IEducationCardContainerProps {
  name: string;
  image: string;
  location: string;
  startDate: string;
  endDate: string | null;
  descriptionTitle: string;
  topics: string;
  link: string;
  about: string;
}

export interface IEducationCardContainerState {}

export interface IEducationCardProps {
  name: string;
  image: string;
  location: string;
  startDate: string;
  endDate: string | null;
  descriptionTitle: string;
  topics: string;
  link: string;
  about: string;
}

export interface IEducationCardState {}
