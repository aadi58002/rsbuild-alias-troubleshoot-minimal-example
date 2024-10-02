import { trimString } from '$/common-utils/misc'

export const concat = (a: string, b: string) => {
  return trimString(a) + trimString(b);
}
