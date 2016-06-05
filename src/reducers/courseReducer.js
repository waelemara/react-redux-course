export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'LOAD_COURSE_SUCCESS':
            return action.courses;
        default:
            return state;
    }
}