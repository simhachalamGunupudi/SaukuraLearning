import {testSapi} from '../../spec/helpers/sakura-api';
import {SomeService} from './some-service';

describe('SomeService tests', () => {
  const sapi = testSapi({
    providers: [SomeService]
  });

  it('SomeService', () => {
    pending('not implemented');
  });
});
