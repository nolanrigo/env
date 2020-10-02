export function env(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Fail to retreive, process.env.${key} is not defined`);
  }

  return value;
}

export function envAsNumber(key: string): number {
  const value = Number(env(key));

  if (Number.isNaN(value)) {
    throw new Error(`process.env.${key} is not a number`);
  }

  return value;
}
