// Sample data for initial posts
const posts = [
    { username: 'CryptoTrader1', content: 'Bitcoin is on the rise! Looking forward to seeing it hit $50k.', date: new Date() },
    { username: 'AltcoinLover', content: 'Ethereum 2.0 is the future of crypto.', date: new Date() }
];

// Function to display posts in the posts container
function displayPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Clear existing posts

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h3>${post.username}</h3>
            <p>${post.content}</p>
            <small>${post.date.toLocaleString()}</small>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Handle form submission
document.getElementById('postForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const content = document.getElementById('content').value;

    if (!username || !content) {
        alert('Please fill out all fields');
        return;
    }

    // Create a new post object
    const newPost = {
        username,
        content,
        date: new Date()
    };

    // Add the new post to the posts array
    posts.push(newPost);

    // Display the updated list of posts
    displayPosts();

    // Reset the form fields
    document.getElementById('postForm').reset();
});

// Initial display of posts when the page loads
displayPosts();
