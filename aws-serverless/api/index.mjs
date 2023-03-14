import { getNow } from "./time.mjs";
export const handler = async(event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(getNow()),
    };
    return response;
};
