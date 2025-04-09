export const generateTaskId = (tasks) => {
    if (!tasks.length) {
        return 1;
    }

    return tasks[tasks.length - 1].id + 1;
}