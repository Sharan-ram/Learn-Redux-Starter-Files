import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

const Single = React.createClass({
  render () {
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)

    return (
      <div className='single-photo'>
        <Photo {...this.props} key={i} i={i} post={this.props.posts[i]} />
        <Comments />
      </div>
    )
  }
})

export default Single
