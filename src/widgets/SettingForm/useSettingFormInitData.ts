import {useState, useEffect} from 'react';
import {UseFormReturn} from 'react-hook-form';
import {urlToFile} from '../../shared/utils/share';
import {SettingFormData} from './schema';
import {Executor} from '../../entities/user/model/types';

/**
 * Устаналвивает начальное значение для формы настроек
 */
const useSettingFormInitData = (
    formMethods: UseFormReturn<SettingFormData>,
    executor: Executor
) => {
    const [isInitializing, setIsInitializing] = useState(true);

    useEffect(() => {
        const initializeForm = async () => {
            try {
                setIsInitializing(true);

                formMethods.setValue('name', executor.name);
                formMethods.setValue('phone', executor.phone);
                formMethods.setValue('email', executor.email);
                formMethods.setValue(
                    'experience',
                    parseInt(executor.experience)
                );
                formMethods.setValue('city', executor.city);
                formMethods.setValue('about', executor.about);

                // Загружаем и устанавливаем изображение
                const file = await urlToFile(executor.profileImage);

                formMethods.setValue('profileImage', file);
            } catch (error) {
                console.error('Initialization error:', error);
            } finally {
                setIsInitializing(false);
            }
        };

        initializeForm();
    }, [formMethods, executor]);

    return {isInitializing};
};

export default useSettingFormInitData;
