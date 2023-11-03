declare const generateToken: (user: any) => Promise<any>;
declare const encrypt: (password: any) => Promise<{
    salt: any;
    result: any;
}>;
declare const compare: (enteredValue: any, hashedValue: any) => Promise<any>;
export { generateToken, encrypt, compare };
