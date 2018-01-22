import {
  Routable,
  Route,
  SakuraApi,
  SapiRoutableMixin,
  IRoutableLocals
} from '@sakuraapi/api';
import {
  NextFunction,
  Request,
  Response
} from 'express';
import { SomeModel } from '../models/some-model';

export { SakuraApi };

@Routable({
  baseUrl: 'users',
  model: SomeModel
})
export class SomeApi extends SapiRoutableMixin() {

  @Route({
    method: 'get',
    path: '/details'
  })
  someRoute(req: Request, res: Response, next: NextFunction) {

    const resLocals = res.locals as IRoutableLocals;
    resLocals.send(200, {message: 'welcome to my world'});

    next();
  }
}
