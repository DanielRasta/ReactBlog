import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CreatePostForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" className="form-control" placeholder="Title"/>
      </div>

      <div className="form-group">
        <label htmlFor="body">Body</label>
        <Field name="body" component="textarea" type="text" className="form-control" placeholder="Body" rows="3"/>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
      
    </form>
  )
}

CreatePostForm = reduxForm({
  // a unique name for the form
  form: 'create-post'
})(CreatePostForm)

export default CreatePostForm;
