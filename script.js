const video = document.getElementById('video');
const button = document.getElementById('button');

/**
 * Requests the user's screen for sharing and sets it as the source for the video element.
 */
async function selectMediaStream() {
    try {
        // Request the screen sharing stream
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Set the stream as the video element's source
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        };
    } catch (error) {
        console.error('Error accessing display media.', error);
        alert('Failed to access display media. Please check your permissions and try again.');
    }
}

/**
 * Handles the button click event to enter Picture-in-Picture mode.
 */
async function handleButtonClick() {
    // Disable the button to prevent multiple clicks
    button.disabled = true;
    try {
        // Request Picture-in-Picture mode
        await video.requestPictureInPicture();
    } catch (error) {
        console.error('Error entering Picture-in-Picture mode.', error);
        alert('Failed to enter Picture-in-Picture mode.');
    } finally {
        // Re-enable the button
        button.disabled = false;
    }
}

// Add event listener to the button
button.addEventListener('click', handleButtonClick);

// Initialize the media stream on page load
selectMediaStream();
