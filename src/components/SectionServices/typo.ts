export interface ServiceItemData {
  id: number; 
  image: string;
  title: string;
  text: string;
}

export interface SectionServicesProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  services: ServiceItemData[];
  gridColsClass: string;
}