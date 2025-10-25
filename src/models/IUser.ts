export default interface IUser{
    id: string;
    userData:{
        email: string,
        password: string,
        companyNameOrIE:string | null;
        INNorORG:string | null;
        legalAddress:string | null;
        factualAddress:string | null;
        phoneNumber:string | null;
        communicationEmail:string | null;
        fullNameOfTheResponsible:IFIOUser | null;
        fullRegistration:boolean;
        files:{
            doc1: string | null
            doc2: string | null
            doc3: string | null
            doc4: string | null
        }
    }
}

export interface IFIOUser{
    firstName: string,
    lastName: string,
    middleName: string
}


export interface IFullRegistration {
    id: string;
    companyNameOrIE:string;
    INNorORG:string;
    legalAddress:string;
    factualAddress:string;
    phoneNumber:string;
    communicationEmail:string;
    fullNameOfTheResponsible:IFIOUser;
}