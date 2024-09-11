const video = document.getElementById('video');
const button = document.getElementById('button');

// Select a Media Player
// Add it to screen
// Play it

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        }

    } catch(error){

    }
    
}
button.addEventListener('click', async function (params) {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture;
    await video.requestPictureInPicture();
    // Reset Button
    button.disabled = false;

    
})
// ON LOAD
selectMediaStream();