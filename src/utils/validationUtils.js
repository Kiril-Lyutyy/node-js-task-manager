import { statuses } from '../constants/index.js';
import { ValidationError } from './validationErrors.js';

export const validateStatus = (status) => {
    if (!statuses.includes(status?.toLowerCase())) {
        throw new ValidationError('Status must be one of [todo, in-progress, done].');
    }
};

export const validateTask = ({ title, status }) => {
    if (!title || title.length < 3) {
        throw new ValidationError('Title must be at least 3 characters long.');
    }

    validateStatus(status);
};
