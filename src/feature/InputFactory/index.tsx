import {AboutField} from '../../shared/ui/inputs/AboutInput';
import {InputField} from '../../shared/ui/inputs/InputField';
import {PasswordField} from '../../shared/ui/inputs/PasswordField';

type InputFactory = {
    label: string;
    labelPosition?: 'start' | 'center' | 'end';
    name: string;
    required: boolean;
    type?: string;
};

/**
 * Фабрика инпутов
 */
const InputFactory = ({
    name,
    label,
    labelPosition,
    type,
    required,
}: InputFactory) => {
    switch (name) {
        case 'password':
            return (
                <PasswordField
                    label={label}
                    labelPosition={labelPosition}
                    name={name}
                    type={type}
                    required={required}
                    variant={'outlined'}
                />
            );

        case 'about':
            return (
                <AboutField
                    label={label}
                    labelPosition={labelPosition}
                    name={name}
                    type={type}
                    required={required}
                />
            );

        default:
            return (
                <InputField
                    label={label}
                    labelPosition={labelPosition}
                    name={name}
                    type={type}
                    required={required}
                />
            );
    }
};

export default InputFactory;
