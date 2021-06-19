export function env(key: string, defaultValue?: string): string {
  const value = process.env[key] ?? defaultValue;

  if (!value) {
    throw new Error(`Fail to retreive, process.env.${key} is not defined`);
  }

  return value;
}

export function envAsNumber(key: string, defaultValue?: number): number {
  const value = Number(env(key, defaultValue?.toString()));

  if (Number.isNaN(value)) {
    throw new Error(`process.env.${key} is not a number`);
  }

  return value;
}
