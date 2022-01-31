export type ValidRoutes = 'dashboard' | 'upload-file' | '';

export interface ValidRouteTranslation {
  persianTitle: string;
  englishTitle: ValidRoutes;
}

export interface Organization {
  id: number;
  name: string;
  nationalCode: string;
  isActive: boolean;
  deletedAt: null | string;
}

export interface Report {
  id: number;
  name: string;
  isActive: boolean;
  deletedAt: Date;
}

export interface ReportInfo {
  organization: string;
  reportType: string;
  reportTypeId: number;
  type: number;
  date: string;
  file: any;
}
