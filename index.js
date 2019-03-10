(() => {
  const video = document.querySelector('#play1_html5_api')

  async function openNextVideo () {
    // Select the next video
    const nextVideos = document.querySelectorAll('.vjs-related-video-container a')
    const nextVideo = nextVideos[0]
    const url = nextVideo.getAttribute('href')

    // Get the new video url
    let response = await fetch(url)
    response = await response.text()
    const videoUrl = response.split('urlVideo" src="')[1].split('"')[0]
    video.src = videoUrl
    video.play()

    // Remove the actual video from list
    nextVideo.remove()

    // Hide the video list
    document.querySelector('.vjs-related-video').classList.remove('vjs-related-video-active')
  }

  // Check if video has ended
  setInterval(() => {
    if (video.ended) {
      console.log('Video terminou, abrindo o próximo...')
      openNextVideo()
    }
  }, 1000)
})()
