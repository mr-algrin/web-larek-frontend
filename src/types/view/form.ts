
export type FormData<T> = {
  valid: boolean
  error: string
} & T;

export type FormSettings<T> = {
  error: string
  button: string
} & T;
