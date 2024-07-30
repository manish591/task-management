export enum Status {
  SUCCESS = "success",
  ERROR = "error"
}

interface SuccessResponse {
  status: Status.SUCCESS,
  message: string,
  code: number,
  data?: unknown
}

interface ErrorResponse {
  status: Status.ERROR,
  message: string,
  code: number,
}

export function successResponse({
  message, code, data
}: SuccessResponse): SuccessResponse {
  return {
    status: Status.SUCCESS,
    code,
    message,
    data
  }
}

export function errorResponse({
  message, code
}: ErrorResponse): ErrorResponse {
  return {
    status: Status.ERROR,
    code,
    message
  }
}