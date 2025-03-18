import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_URL = "https://crudcrud.com/api/6af3064736354f6b93056ebeabe9bd9a/"
