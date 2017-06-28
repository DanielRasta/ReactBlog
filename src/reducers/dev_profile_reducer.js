
import {USER_DATA} from '../actions/index'

export default function (state = null,action)
{
  switch (action.type) {
    case USER_DATA:
      {
        var developer_data = action.payload.data[0];
        return developer_data? developer_data: null;
      }
  }
  return state;
}
