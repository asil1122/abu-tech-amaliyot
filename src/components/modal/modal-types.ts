export interface createType {
  title?: string;
  courseId?: number;
}


export interface fileType {
  title?: string;
  courseId: number;
  attachment: {
    url?: string;
    origName?: string;
    size?: number;
  };
}


export interface dataTypes {
  data: {
    fileName: string;
    path: string;
    size: number;
  }[];
  error: null;
  success: boolean;
}



export interface DataType {
  key: number;
  id: number;
  title: string;
  name: string;
  attachment: {
    origName?: string;
    size?: number;
    url?: string;
  }
}