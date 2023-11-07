import {
  generateToken,
  encrypt,
  compare,
  getToken,
  getTokenPayload,
} from './auth.helper';

describe('generateToken()', () => {
  it('should generate a valid JWT token', async () => {
    const user = {
      id: 1,
      username: 'test',
      email: 'test@example.com',
      number: '1234567890',
    };
    const token = await generateToken(user);
    expect(token).toBeDefined();
  });
});

describe('encrypt()', () => {
  it('should encrypt a password', async () => {
    const password = 'test';
    const result = await encrypt(password);
    expect(result).toBeDefined();
    expect(result.salt).toBeDefined();
    expect(result.result).toBeDefined();
  });
});

describe('compare()', () => {
  it('should compare a password to an encrypted password', async () => {
    const password = 'test';
    const encryptedPassword = await encrypt(password);

    const result = await compare(password, encryptedPassword.result);
    expect(result).toBeTruthy();
  });
});

describe('getToken()', () => {
  it('should extract a bearer token from a request object', () => {
    const req = { headers: { authorization: 'Bearer valid.token' } };
    const token = getToken(req);

    expect(token).toBe('valid.token');
  });

  it('should throw an error if the request object does not contain a bearer token', () => {
    const req = { headers: {} };
    expect(() => getToken(req)).toThrowError('Unauthorised');
  });
});

describe('getTokenPayload()', () => {
  it('should verify and decode a bearer token', async () => {
    const token = await generateToken({
      id: 1,
      username: 'test',
      email: 'test@example.com',
      number: '1234567890',
    });
    const payload = await getTokenPayload(token);

    expect(payload).toBeDefined();
    expect(payload.id).toBe(1);
    expect(payload.username).toBe('test');
    expect(payload.email).toBe('test@example.com');
    expect(payload.number).toBe('1234567890');
  });

  it('should throw an error if the bearer token is invalid', () => {
    const token = 'invalid.token';
    expect(() => getTokenPayload(token)).toThrowError('Internal Server Error');
  });
});
