const decode = (encoded) => atob(encoded); // Base64 decode

// Base64 encoded domain name
const encodedDomain = 'Y29kc3F1YWQ=';
const decodedDomain = `${decode(encodedDomain)}.net`;

const currentDomain = window.location.hostname;

let localUrl, serverUrl;

if (currentDomain !== decodedDomain) {
    localUrl = '';
    serverUrl = '';
} else {
    localUrl = decode('aHR0cHM6Ly9jb2RzcXVhZC5uZXQv');
    serverUrl = decode('aHR0cHM6Ly9hcGkuY29kc3F1YWQubmV0Lw==');
}

// localUrl = 'http://localhost:8080/'
// serverUrl = 'http://localhost:8000/'


export { localUrl, serverUrl };


export const version = '1.0.1';

export const currency = "$";
export const prefix = 'cods';