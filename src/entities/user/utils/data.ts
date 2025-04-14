import {ExecutorWorkFormat} from '../model/types';

/**
 * Словарь для статуса исполнителя
 */
export const executorWorkFormatDictionary = {
    [ExecutorWorkFormat.INDIVIDUAL]: 'Частное лицо',
    [ExecutorWorkFormat.SOLE_PROPRIETOR]: 'ИП',
    [ExecutorWorkFormat.LEGAL_ENTITY]: 'Юридическое лицо',
};
