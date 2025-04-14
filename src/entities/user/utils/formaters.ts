import {ExecutorWorkFormat} from '../model/types';
import {executorWorkFormatDictionary} from './data';

/**
 * Состыковать название формы предпринимательсва и тип
 */
export const mapExecutorTypeToLabel = (status: ExecutorWorkFormat) => {
    return executorWorkFormatDictionary[status];
};
