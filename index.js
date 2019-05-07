(() => {
  const video = document.querySelector('#play1_html5_api')

  async function openNextVideo () {
    // Select the next video
    const videoLinks = document.getElementsByClassName('boxMenuEps')[0].getElementsByTagName('div')
    const url = videoLinks[1].getElementsByTagName('a')[0].href

    // Get the new video url
    let response = await fetch(url)
    response = await response.text()
    const videoUrl = response.split('urlVideo" src="')[1].split('"')[0]
    video.src = videoUrl
    video.play()

    // Hide the video list
    document.getElementById('vjs-related-video-close-button').click()
    
    // Remove the actual video from list
    videoLinks[1].remove();
  }

  // Check if video has ended
  setInterval(() => {
    if (video.ended) {
      console.log('Video terminou, abrindo o próximo...')
      openNextVideo()
    }
  }, 1000)
})()
