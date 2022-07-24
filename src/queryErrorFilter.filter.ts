import { ArgumentsHost, Catch, ConflictException, ExceptionFilter } from "@nestjs/common";
import { MongoError } from "mongodb";
import {Response} from "express"
@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    switch (exception.code) {
      case 11000:
        return response.status(500).send({
          msg: "Database conflicts",
          detail: exception.message
        })

      // duplicate exception
      // do whatever you want here, for instance send error to client
    }
  }
}
