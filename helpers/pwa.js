let prompt = null

export function hasPwaInstallPrompt() {
  return prompt !== null
}

export function openPwaInstallPrompt() {
  if (prompt) {
    prompt.prompt()
    const promise = prompt.userChoice
    prompt = null
    return promise
  } else {
    return Promise.reject('PWA install prompt is not available.')
  }
}

// listen to the PWA install prompt events
if (process.browser) {
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault()

    // Stash the event so it can be triggered later.
    prompt = e
  })
}
