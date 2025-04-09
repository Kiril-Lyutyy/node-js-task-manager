import { statuses } from '../constants/index.js'; 

export const validateTask = ({ title, status }) => {
    if (!statuses.includes(status?.toLowerCase())) {
        throw new Error('Status must be one of [todo, in-progress, done].')
    }

    if (title?.length < 3) {
        throw new Error('Title must be at least 3 symbols long.') 
    }
}