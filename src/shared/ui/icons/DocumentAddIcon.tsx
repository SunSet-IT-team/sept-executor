import { SvgIcon } from "@mui/material";

/**
 * Иконка с документом с плюсиком справа снизу
 * Экран - личный кабинет
 */
export const DocumentAddIcon = ({props}: any) => {
    return (
        <SvgIcon {...props}>
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M30 24H26V20H24V24H20V26H24V30H26V26H30V24Z"
                    fill="#4D4D4D"
                />
                <path
                    d="M16 28H8V3.99997H16V9.99997C16.0016 10.5299 16.2128 11.0377 16.5875 11.4124C16.9623 11.7872 17.4701 11.9984 18 12H24V16H26V9.99997C26.0035 9.86855 25.9785 9.73792 25.9268 9.61708C25.875 9.49624 25.7976 9.38805 25.7 9.29997L18.7 2.29997C18.6123 2.20184 18.5042 2.12411 18.3833 2.07228C18.2624 2.02045 18.1315 1.99577 18 1.99997H8C7.47005 2.00155 6.96227 2.21278 6.58753 2.58751C6.2128 2.96224 6.00158 3.47003 6 3.99997V28C6.00158 28.5299 6.2128 29.0377 6.58753 29.4124C6.96227 29.7872 7.47005 29.9984 8 30H16V28ZM18 4.39997L23.6 9.99997H18V4.39997Z"
                    fill="#4D4D4D"
                />
            </svg>
        </SvgIcon>
    );
};
