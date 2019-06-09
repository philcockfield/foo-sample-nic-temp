import { Subject } from 'rxjs';

import { CommandState, t } from '../common';
import { root } from './cmds';

export function init(args: { state$: Subject<Partial<t.ITestState>>, log: t.ILog }) {
  const { state$, log } = args;

  return CommandState.create({
    root,
    beforeInvoke: async e => {
      const props: t.ICommandProps = { ...e.props, state$, log };
      return { props };
    },
  });
}
