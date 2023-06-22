
const URLForm = ({ShortenedUrl}) => {
    
    return (
        <div class="text-container">
            <span class="first-text">Your shortened URL:</span>
            <span class="second-text">{ShortenedUrl}</span>
        </div>
    )
}

export default URLForm