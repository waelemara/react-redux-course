import courseApi from '../api/mockCourseApi';

export function loadCourseSuccess(courses) {
    return { type: 'LOAD_COURSE_SUCCESS', courses };
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCourseSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    };
}