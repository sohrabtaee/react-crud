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
    // Wait for the user to respond to the prompt
    deferredPrompt.current.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt')
      } else {
        console.log('User dismissed the install prompt')
      }
    })
  }
  return (
    <button type="button" onClick={installPWA}>
      Install
    </button>
  )
}

export default PWAInstallButton
