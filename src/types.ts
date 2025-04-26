export interface Task {
    id: string;
    content: string;
    isCompleted: boolean;
}

export interface TaskListProps {
    tasks: Task[];
    onDeleteTask: (id: string) => void;
    onToggleComplete: (id: string) => void;
}

export interface TaskItemProps {
    content: string;
    isCompleted: boolean;
    onDelete: () => void;
    onToggleComplete: () => void;
}

export interface FormProps {
    onCreateTask: (content: string) => void;
}

export interface TaskListHeaderProps {
    tasksCreated: number;
    tasksCompleted: number;
}