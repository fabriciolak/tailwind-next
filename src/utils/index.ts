import { twMerge, type ClassNameValue } from 'tailwind-merge'

export function tw(...className: ClassNameValue[]) {
  return twMerge(...className)
}
