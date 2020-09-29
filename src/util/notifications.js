import {notification} from "antd";


const commonNotification = (type, message, description, ...rest) => {
    notification[type]({
        message: message,
        description: description,
        placement: 'bottomLeft',
        ...rest
    });
};

export const showErrorNotification = (message, description, ...rest) => {
    commonNotification('error', message, description, ...rest)
};
export const showSuccessNotification = (message, description, ...rest) => {
    commonNotification('success', message, description, ...rest)
};