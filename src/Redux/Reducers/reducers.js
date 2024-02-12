import {
  SET_ORGANIZATIONS,
  SET_EVENTS,
  SET_ORGANIZATIONNEARYOU,
  SET_Email,
  SET_OTP_TYPE,
  SET_USERIMAGE,
} from '../Actions/actions';
const initialState = {
  organizations: [],
  events: [],
  organizationsNearyou: [],
  email: 0,
  otptype: 0,
  image: '',
};

function OrganizationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORGANIZATIONS:
      return {...state, organizations: action.payload};
    case SET_EVENTS:
      return {...state, events: action.payload};
    case SET_ORGANIZATIONNEARYOU:
      return {...state, organizationsNearyou: action.payload};
    case SET_Email:
      return {...state, email: action.payload};
    case SET_OTP_TYPE:
      return {...state, otptype: action.payload};
    case SET_USERIMAGE:
      return {...state, image: action.payload};
    default:
      return state;
  }
}

export default OrganizationReducer;
