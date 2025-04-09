import { SORT_DESC } from "../constants/index.js";

export const generateTaskId = (tasks) => {
    if (!tasks.length) {
        return 1;
    }

    return tasks[tasks.length - 1].id + 1;
}

const compareStrings = (a, b, order) => {
    if (order === SORT_DESC) {
        return b.localeCompare(a);
    }
    
    return a.localeCompare(b);
};

const compareDates = (a, b, order) => {
    const aDate = new Date(a);
    const bDate = new Date(b);

    if (order === SORT_DESC) {
        return bDate - aDate;
    }

    return aDate - bDate;
};

export const sortTasks = (tasks, sortBy, order) => {
    return [...tasks].sort((a, b) => {
        const aVal = a[sortBy];
        const bVal = b[sortBy];

        if (typeof aVal === 'string' && typeof bVal === 'string') {
            return compareStrings(aVal, bVal, order);
        }

        return compareDates(aVal, bVal, order);
    });
};