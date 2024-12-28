@import "react-toastify/dist/ReactToastify.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700;800&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
    color: green; /* Set the font color to green globally */
    font-family: "Poppins", sans-serif;
}

button {
    background-color: green; /* Set the background color of buttons to green */
    color: white; /* Set the text color inside the button */
    border: none; /* Remove default borders */
    padding: 0.5rem 1rem; /* Add padding for better appearance */
    border-radius: 0.25rem; /* Add a slight border radius */
    cursor: pointer; /* Change the cursor to pointer on hover */
    transition: background-color 0.3s ease; /* Smooth transition effect */
}

button:hover {
    background-color: #006400; /* Darker green on hover for better UX */
}

body {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-overflow-style: none; /* IE and Edge scrollbar style */
    scrollbar-width: none; /* Firefox scrollbar style */
}

.custom_scrollbar::-webkit-scrollbar {
    width: 5px;
    background-color: transparent; /* Transparent background for the scrollbar */
}

.custom_scrollbar::-webkit-scrollbar-thumb {
    background-color: green; /* Set the scrollbar thumb color to green */
    border-radius: 5px; /* Add rounded corners for the thumb */
}

.hide-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
    display: none; /* Hide scrollbar for webkit-based browsers */
}

.ani-delay-50 {
    animation-delay: 500ms; /* 500ms animation delay */
}

.ani-delay-100 {
    animation-delay: 1000ms; /* 1000ms animation delay */
}

.animate-shimmer {
    animation: shimmer 1.2s infinite linear;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.7)
    );
    background-size: 200px 100%;
}

@keyframes shimmer {
    0% {
        background-position: -100px 0;
    }
    100% {
        background-position: 100px 0;
    }
}
