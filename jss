/**
 * Base Styles 
 */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

/* Responsive Design */
@media (max-width: 768px) {
    body {
        padding: 1rem;
    }
}

/* Button Hover Effects */
button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #121212;
        color: #e0e0e0;
    }

    button {
        background-color: #1d1d1d;
        color: #e0e0e0;
    }

    button:hover {
        background-color: #333;
    }
}

/* Accessibility Features */
a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #0056b3;
}
