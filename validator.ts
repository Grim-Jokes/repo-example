import { CompanyParams } from "./models";

/// Reusable validation function that can be used by the models
/// as well as the controllers, doesn't matter
export function getCompanyNameIfValid(params: CompanyParams) {
    if (!params.name) {
        throw new Error('Name is not set')
    }

    return params.name;
}