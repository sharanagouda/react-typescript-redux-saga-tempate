import CommonModel from "../CommonModel";
import User from './User';
import Cause from "./Cause";

export declare type Deals = Deal[];
export declare type UDeal = Deal | undefined;

export default interface Deal extends CommonModel{
    key:string,
    dealType:string,
    title:string,
    makerPercentage: number,
    description:string,
    tags:string,
    url:string,
    media:string,
    cause?: Cause | null,
    user?: User | null
}