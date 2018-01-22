import {
  Injectable,
  SakuraApi,
  SapiInjectableMixin
} from '@sakuraapi/api';

export {SakuraApi};

@Injectable()
export class SomeService extends SapiInjectableMixin() {

}
