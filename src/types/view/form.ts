
export type FormState = {
  valid: boolean
  error: string
}

export type FormData<T> = FormState & T;

export type FormSettings<T> = {
  error: string
  button: string
} & T;
