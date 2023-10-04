self.addEventListener(
  'message',
  function (e) {
    const url = new URL(e.data.url)
    const params = new URLSearchParams(url.search)
    const code = params.get('code')

    if (!code) return

    const state = params.get('state')
    let responseMessage = {}

    if (code && state) {
      responseMessage.code = code
      responseMessage.state = state
      responseMessage.action = 'closeWindow'
    } else {
      responseMessage.error = 'noCodeErrorCloseWindow'
    }

    // Post data back to the main thread
    self.postMessage(responseMessage)
  },
  false
)
