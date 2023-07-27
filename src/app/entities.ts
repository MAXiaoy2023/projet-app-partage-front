export interface User {
    id?:number;
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    address:string;
    tel:number;
    userAd:string[];
    userOrder:string[];

}

export interface AdLender {
    id?:number;
    adTitle:string;
    adDescription:string;
    adCategory:string;
    adKeywords:string;
    adPicture:string;
    createdDate: string;
    adStatus:boolean;
    city:string;
    user:string;
}

export interface OrderBorrower {
    id?:number;
    message: string;
    startDate: Date;
    endDate: Date;
    status: string;
    user:string;
    adLender:string;
}