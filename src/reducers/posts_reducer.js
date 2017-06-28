
import {POSTS_DATA,ADD_POST} from '../actions/index'

export default function (state = null,action)
{
  // console.log(state,action.type,action.payload);
  switch (action.type) {
    case POSTS_DATA:
      {
        console.log(action.type);

        return action.payload.data? action.payload.data: null;
      }
      case ADD_POST:
      {  console.log(action.type);


        return state.posts.concat(action.payload);
      }
  }
  return state;
}
