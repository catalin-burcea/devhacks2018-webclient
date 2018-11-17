import { Company } from "./Company";
import { User } from "./User";

export class Review {
    public id: number;
    public description:string;
    public rating;
    public category:string;

    public company: Company;
    public user: User;

}