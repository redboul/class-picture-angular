import { ActionReducer, Action } from '@ngrx/store';

export const LOAD_CLASSES = 'LOAD_CLASSES';

export function classesReducer(state: any[] = [], action: Action) {
    switch (action.type) {
        case LOAD_CLASSES:
            return action.payload;
        default:
            return state;
    }
}
