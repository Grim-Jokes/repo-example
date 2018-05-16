import { Company } from "./models";

export abstract class Operation {
    // Store the actual common storage related logic here
}

export class WriteOperation<M> {
    public add(model: M): M {
        // Actual DB call will happen here
        return model;
    }
}

export abstract class Repository {
    // Common repository functionality goes here
}

export class CompanyRepository extends Repository{
    public add(model: Company): Company  {
        // Model gets processes and convered into proper parameters
        return new WriteOperation<Company>(
            //Additional data such as DB query to execute
            // Down the line this may be a base class instead to reduce the params
        ).add(model);

        /// We return the new model as the id was generated and we may want access to it
    }

}

