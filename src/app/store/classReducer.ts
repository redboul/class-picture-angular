import { ActionReducer, Action } from '@ngrx/store';

export const LOAD_CLASS_PHOTOS = 'LOAD_CLASS_PHOTOS';

export function classReducer(state: any[] = [], action: Action) {
    switch (action.type) {
        case LOAD_CLASS_PHOTOS:
            return action.payload;
        default:
            return state;
    }
}
