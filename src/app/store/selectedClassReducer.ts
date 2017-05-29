import { ActionReducer, Action } from '@ngrx/store';

export const SELECT_CLASS = 'SELECT_CLASS';

export function selectedClassReducer(state: any, action: Action) {
    switch (action.type) {
        case SELECT_CLASS:
            return action.payload;
        default:
            return state;
    }
}
