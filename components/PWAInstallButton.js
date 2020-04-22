import React, { useEffect, useRef } from 'react'
import { LOCAL_STORAGE_KEYS } from '~/context/Constants'

const PWAInstallButton = () => {
  const deferredPrompt = useRef(null)

  useEffect(() => {
    const handlePrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later.
      deferredPrompt.current = e
    }

    window.addEventListener('beforeinstallprompt', handlePrompt)
    return () => window.removeEventListener('beforeinstallprompt', handlePrompt)
  })

  const installPWA = () => {
    if (!deferredPrompt.current) return
    deferredPrompt.current.prompt()
    // Wait for the user to respond to the prompt
    deferredPrompt.current.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        localStorage.setItem(LOCAL_STORAGE_KEYS.PWA_INSTALLED, 'true')
      }
    })
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
