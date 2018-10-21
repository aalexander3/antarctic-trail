import video from '../samples/small.mp4';
import song from '../samples/prayer.mp3'
import pdf from '../samples/pdf.pdf'
import image from '../samples/image.jpg'
import {HANDLE_FEED_CLICK, GET_DATA, HANDLE_CLOSE_CLICK} from '../actions/types.js';


const initialState = {
  uploads: [],
  feedModalVisible: null,
  media: {
    "Art": [
      {type: ".jpg", url: image, user: {}},
      {type: ".mp4", url: video, user: {}}
    ],
    "Science": [
      {type: ".mp4", url: video, user: {}},
      {type: ".jpg", url: image, user: {}}
    ],
    "Literature": [
      {type: ".mp3", url: song, user: {}},
      {type: ".pdf", url: pdf, user: {}}
    ]
  }
};

export default function(state = initialState, action){
  switch(action.type){
    case 'GET_UPLOADS':
      return {
        ...state,
        uploads: [...state.uploads, ...action.payload ]
      }
    case 'ADD_UPLOAD':
      return {
        ...state,
        uploads: [...state.uploads, action.payload]
      }
    case HANDLE_FEED_CLICK:
      return {
        ...state,
        feedModalVisible: action.payload
      }
    case HANDLE_CLOSE_CLICK:
      return {
        ...state,
        feedModalVisible: action.payload
      }
    default:
      return state;
  }
}
