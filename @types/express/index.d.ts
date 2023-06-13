import { Express } from "express-serve-static-core";


interface authData {
  id: string;
  email: string;
}

declare global {
    namespace Express {
        interface Request {
            user: authData;
        }
    }
}
