export type TourCategory = "Тур" | "Экскурсия" | "База отдыха";




export default interface IProduct {
    id: string;
    userId: string;
    productData:IProductData
}
export interface IProductData {
    photos: Array<{
        contentType: string;
        data: string;
        name: string;
    }>;
    name: string;
    price: number;
    description: string;
    category: TourCategory
    timeOfTheYear: TimeOfTheYear;
    suitableFor:ISuitableFor;
    restrictions:IRestrictions;
    discounts:IDiscounts
    scheduleOfTheEvent: string
    places:IPlaces
    transfer: ITransfer
    transferTime:ITransferTime | undefined
    needDocuments: string[]
    needThings: string[]
    tourProgram: ITourProgram[];
    complexity: '1'|'2'|'3'|'4',
    comfortLevel: '1'|'2'|'3'|'4'|'5'
    repeatDaysOfTheWeek:IRepeatDaysOfTheWeek[] | undefined
    dayCount: number | undefined
    nightCount: number | undefined
    peopleCount: number | undefined
    calendar: ICalendar[];
}


export interface IProductCreateData {
    photos: string[];
    name: string;
    category: TourCategory
    price: number;
    description: string;
    timeOfTheYear: TimeOfTheYear;
    suitableFor:ISuitableFor;
    restrictions:IRestrictions;
    discounts:IDiscounts
    scheduleOfTheEvent: string
    places:IPlaces
    transfer: ITransfer
    transferTime:ITransferTime | undefined
    needDocuments: string[]
    needThings: string[]
    tourProgram: ITourProgram[];
    complexity: '1'|'2'|'3'|'4'
    comfortLevel: '1'|'2'|'3'|'4'|'5'
    repeatDaysOfTheWeek:IRepeatDaysOfTheWeek[] | undefined
    dayCount: number | undefined
    nightCount: number | undefined
    peopleCount: number | undefined
    calendar: ICalendar[] | undefined
}





export type TimeOfTheYear = {
    winter: boolean
    spring: boolean
    summer: boolean
    autumn: boolean
}


export type ISuitableFor = {
    familiesWithChildren: boolean;
    retirementAge: boolean;
    schoolchildren: boolean;
    organizations: boolean;
}


export type IRestrictions = 'noLimits' | 'younger6' | 'younger12' | 'younger18'


export type IDiscounts = {
    hasALGACard: number|undefined;
    pensioner: number|undefined;
    schoolboyOrStudent: number|undefined;
}


export type IPlaces = {
    startPlace: string|undefined;
    endPlace: string|undefined;
}


export type ITransfer = 'BothSides' | 'ToThePlace' | 'FromThePlace' | undefined
export type ITransferTime = {
    toPlace: string|undefined;
    fromPlace: string|undefined;
}

export interface ITourProgram {
    time: string;
    description: string;
}

export type IRepeatDaysOfTheWeek
    = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

export interface ICalendar{
    startDate:string;
    endDate:string;
}