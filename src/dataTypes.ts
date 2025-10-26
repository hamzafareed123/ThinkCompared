export interface ApiResponse {
  response: {
    data: {
      data: any[];      
      totalItems:number;  
      totalResults: number;
      id:number| string;
    };
  };
}
