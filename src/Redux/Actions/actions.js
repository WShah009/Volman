export const SET_ORGANIZATIONS = 'SET_ORGANIZATIONS';
export const SET_EVENTS = 'SET_EVENTS';
export const SET_ORGANIZATIONNEARYOU = 'SET_ORGANIZATIONNEARYOU';
export const SET_Email = 'SET_EMAIL';
export const SET_OTP_TYPE = 'SET_OTP_TYPE';
export const SET_USERIMAGE = 'SET_USERIMAGE';

export const setOrganizations = organizations => dispatch => {
  dispatch({
    type: SET_ORGANIZATIONS,
    payload: organizations,
  });
};
export const setEvents = events => dispatch => {
  dispatch({
    type: SET_EVENTS,
    payload: events,
  });
};
export const setOrganizationNearYou = orgnearyou => dispatch => {
  dispatch({
    type: SET_ORGANIZATIONNEARYOU,
    payload: orgnearyou,
  });
};
export const setEmail = email => dispatch => {
  dispatch({
    type: SET_Email,
    payload: email,
  });
};
export const setOtptype = otptype => dispatch => {
  dispatch({
    type: SET_OTP_TYPE,
    payload: otptype,
  });
};
export const setUserimage = image => dispatch => {
  dispatch({
    type: SET_USERIMAGE,
    payload: image,
  });
};
