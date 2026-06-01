export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  category: 'electrical' | 'mechanical' | 'structural' | 'specialized';
  complianceLink?: string;
}

export interface ApplicationItem {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  industryType: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  itemsToScan: number;
  message: string;
  industry: string;
}

export interface ProposalEstimate {
  estimatedHours: number;
  complianceLevel: string;
  baseEstimate: string;
  itemsBreakdown: string;
}
