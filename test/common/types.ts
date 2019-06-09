import { Subject } from 'rxjs';
import { ILog } from '@platform/log/lib/types';

export * from '@platform/cli.ui/lib/types';
export * from '../../src/types';

export { ILog };

export type ICommandProps = {
  state$: Subject<ITestState>;
  log: ILog;
};

export type ITestState = {
  title?: string;
  count?: number;
};
