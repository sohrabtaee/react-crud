import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { GlobalContext } from '../context/GlobalState'

const AddNote = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const { addNote } = useContext(GlobalContext)
  const onSubmit = (data) => {
    addNote(data)
    router.push('/')
  }

  return (
    <div className="p-4">
      <Head>
        <title>Add Note</title>
      </Head>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          ref={register({ required: true })}
          className="mb-4"
          autoFocus
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          ref={register}
          className="mb-4"
        ></textarea>
        <button type="submit" className="bg-green-600 text-white">
          Save
        </button>
      </form>
    </div>
  )
}

export default AddNote
