declare const generateToken: (user: any) => Promise<any>;
declare const encrypt: (password: string) => Promise<{
    salt: any;
    result: any;
}>;
declare const compare: (enteredValue: string, hashedValue: string) => Promise<any>;
declare const getToken: (req: any, res: any) => Promise<any>;
declare const getTokenPayload: (bearerToken: string) => Promise<any>;
export { generateToken, encrypt, compare, getToken, getTokenPayload };
