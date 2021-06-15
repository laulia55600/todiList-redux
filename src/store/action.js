const ADD_TODO = 'add todo';
const DELETE_TODO = 'delete todo';
const SET_FILTER = 'set filter';
const TOGGLE_TODO = 'toggle todo';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addTodo = text => {
    return {
        type:ADD_TODO,
        text
    }
};

export const deleteTodo = index => {
    return {
        type: DELETE_TODO,
        index
    }
};

export const setFilter = index => {
    return {
        type: SET_FILTER,
        filter
    }
};

export const toggleTodo= index => {
    return {
        type: TOGGLE_TODO,
        index
    }
};