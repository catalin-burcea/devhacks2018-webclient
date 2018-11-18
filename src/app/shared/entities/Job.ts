import { Company } from "./Company";

export class Job {
	public id: number;
    public title: string;
    public description: string;
    public salary: number;
    public company: Company;
}