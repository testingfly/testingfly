import { apiResourcePath } from '../config/testconfig';

export function getApiResourcePath(): string {
  let ENV = process.env['ENV'];

  if (!ENV) {
    ENV = 'local'; // set default environment
  }
  return apiResourcePath[ENV];
}
