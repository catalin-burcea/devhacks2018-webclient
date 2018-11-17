import { Tag } from "./Tag";

export class Company {
	public id: number;
    public name: string;
    public description: string;
    public nrOfEmployees: number;
    public location: string;
    public tag: Tag;
}