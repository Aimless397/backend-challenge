export {}

declare global {
  namespace Express {
    export interface Request {
      idUser?: string // This line allows to manage the idUser field in the request object in Express
    }
  }
}
