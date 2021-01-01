export function getEnvParam(name: string) {
    return process.env[name] || null;
}
