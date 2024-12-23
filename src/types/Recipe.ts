export type Recipe = {  
    _id: number;  
    name: string;  
    title: string;  
    image: string;  
    slug : {
      current: string, _type: string
    };
    description: string;  
  };
