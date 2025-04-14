import {AboutField} from '../../shared/ui/inputs/AboutInput';
import {InputField} from '../../shared/ui/inputs/InputField';
import {PasswordField} from '../../shared/ui/inputs/PasswordField';

type InputFactory = {
    label: string;
    name: string;
    required: boolean;
    errorText: string;
    type?: string;
};

/**
 * Фабрика инпутов
 */
const InputFactory = ({
    name,
    label,
    type,
    required,
    errorText,
}: InputFactory) => {
    switch (name) {
        case 'password':
            return (
                <PasswordField
                    label={label}
                    name={name}
                    type={type}
                    required={required}
                />
            );

        case 'about':
            return (
                <AboutField
                    label={label}
                    name={name}
                    type={type}
                    required={required}
                />
            );

        default:
            return (
                <InputField
                    label={label}
                    name={name}
                    type={type}
                    required={required}
                />
            );
    }
};

export default InputFactory;
