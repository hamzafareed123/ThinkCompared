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

export interface SignUp{
  name:string;
  email:string;
  password:string;
}

export interface Login{
  email:string,
  password:string
}


