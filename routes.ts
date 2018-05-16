import { CompanyRepository } from "./repository";
import { Company } from "./models";
import { getCompanyNameIfValid } from "./validator";

export function createCompany(req: any, res: any) {
    const repo = new CompanyRepository();

    try {
        const name = getCompanyNameIfValid(req.body);
    }
    catch (err) {
        return res.json(err);
    }

    const newCompany: Company = repo.add(new Company({
        name
    }));

    return res.json(newCompany);
}