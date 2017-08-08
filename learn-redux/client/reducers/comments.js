const postComment = (state, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ]
    case 'REMOVE_COMMENT':
    default:return state
  }
}

export const comments = (state = [], action) => {
  // console.log("action is:"+action)
  if (typeof action.postId !== 'undefined') {
    // console.log("postId is:"+action.postId)
    return {
      ...state,
      [action.postId]: postComment(state[action.postId], action)
    }
  }
  return state
}
