import { TaskCounter } from './../../taskCounter/taskCounter';
import { ITaskApi } from '../../interfaces/ITaskApi';
import { TaskCounterStatusType } from '../../taskCounter/taskCounter';

export const countTasks = (
    tasks: ITaskApi[],
    status: TaskCounterStatusType,
): number => {
    if (!Array.isArray(tasks)) {
        return 0;
    }

    const totalTasks = tasks.filter((task) => {
        return task.status === status;
    })

    return totalTasks.length;
};