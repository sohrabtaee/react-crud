import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

const NoteForm = ({ id, title, content, onSubmit }) => {
  const { register, handleSubmit } = useForm()
  const submit = (note) => onSubmit(note, id)

  return (
    <form onSubmit={handleSubmit(submit)} className="max-w-lg">
      <label htmlFor="title">Title</label>
      <input
        defaultValue={title}
        type="text"
        name="title"
        id="title"
        ref={register}
        className="mb-4"
        data-testid="note-title"
        data-cy="note-title"
      />
      <label htmlFor="content">Content</label>
      <textarea
        defaultValue={content}
        id="content"
        name="content"
        rows="8"
        ref={register({ required: true })}
        className="mb-4"
        autoFocus
        data-testid="note-content"
        data-cy="note-content"
      ></textarea>
      <button
        type="submit"
        className="bg-green-600 text-white"
        data-testid="note-submit"
        data-cy="note-submit"
      >
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
