import { getCompanyNameIfValid } from "./validator";

export interface CompanyParams extends ModelParams {
    name: string;
}

export interface ModelParams {
    id?: string; // UUID
}

export class Model {
    public readonly id: string;

    constructor(params: ModelParams) {
        this.id = params.id as string; // Can be left undefined
    }
}

export class Company extends Model {
    
    public readonly name: string;

    constructor(params: CompanyParams) {
        super(params);
        this.name = getCompanyNameIfValid(params);
    }
}