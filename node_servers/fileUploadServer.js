const express = require('express');
const multer = require('multer');
const path = require('path');

// Set up storage options for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Initialize the upload middleware with storage options
const upload = multer({ storage: storage });

function startFileUploadServer() {
    const app = express();

    // Middleware to serve static files from the "uploads" directory
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

    // Define a route to handle file uploads
    app.post('/upload', upload.single('file'), (req, res) => {
        if (req.file) {
            res.send(`File uploaded successfully: ${req.file.filename}`);
        } else {
            res.status(400).send('File upload failed');
        }
    });

    const port = 8004; // Unique port for File Upload Server
    app.listen(port, () => console.log(`File Upload Server started on port ${port}...`));
}

module.exports = startFileUploadServer;
