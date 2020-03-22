import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

const NoteForm = ({ id, title, content, onSubmit }) => {
  const { register, handleSubmit } = useForm()
  const submit = (note) => onSubmit(note, id)

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor="title">Title</label>
      <input
        defaultValue={title}
        type="text"
        name="title"
        id="title"
        ref={register({ required: true })}
        className="mb-4"
        autoFocus
      />
      <label htmlFor="content">Content</label>
      <textarea
        defaultValue={content}
        id="content"
        name="content"
        rows="8"
        ref={register}
        className="mb-4"
      ></textarea>
      <button type="submit" className="bg-green-600 text-white">
        Save
      </button>
    </form>
  )
}

NoteForm.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default NoteForm
