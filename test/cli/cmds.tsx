import { Command, t } from '../common';

type P = t.ICommandProps & { count: number };

/**
 * Sample commands.
 */
export const root = Command.create<P>('root', e => {
  // Setup initial screen.
}).add('sodium', e => {
  const log = e.props.log;
  console.log('e.props', e.props);
  try {
  } catch (error) {
    log.error(error);
  }
});
