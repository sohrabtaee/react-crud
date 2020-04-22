import React, { useEffect, useRef } from 'react'

const PWAInstallButton = () => {
  const deferredPrompt = useRef(null)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later.
      deferredPrompt.current = e
    })
  })

  const installPWA = () => {
    if (!deferredPrompt.current) return
    deferredPrompt.current.prompt()
  }
  return (
    <button
      type="button"
      className="text-blue-600 border border-blue-500 py-1 px-4 ml-4 hover:bg-blue-500 hover:text-white"
      onClick={installPWA}
    >
      Install
    </button>
  )
}

export default PWAInstallButton
