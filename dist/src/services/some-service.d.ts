import { SakuraApi } from '@sakuraapi/api';
export { SakuraApi };
declare const SomeService_base: {
    new (...args: any[]): {
        sapi: SakuraApi;
        sapiConfig: any;
    };
    sapi: SakuraApi;
    sapiConfig: any;
} & (new (...args: any[]) => {});
export declare class SomeService extends SomeService_base {
}
