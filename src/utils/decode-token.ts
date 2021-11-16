

export default function decodeToken(token: string):object {
  const [, encodedPayload] = token.split('.');
  const jsonPayload: string = Buffer.from(encodedPayload, 'base64').toString()
  const payload = JSON.parse(jsonPayload);
  return payload;
}
