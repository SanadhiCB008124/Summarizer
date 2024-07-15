#  Summarizer Tool : A Chrome Extension

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Technologies used](#technologies-used)
- [Features](#features)
- [License](#license)

## Introduction
This project is a web-based text summarization tool that uses a pre-trained AI model to generate summaries of user-provided text. The application is built using Flask for the backend and integrates with Hugging Face's transformers library to leverage advanced NLP models for summarization. The Flask app is exposed to the web using ngrok, making it accessible via a public URL.

## Prerequisites
1. Google Colab
2. Ngrok Account: For exposing the local Flask server to the web. You can get an authtoken from ngrok.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/SanadhiCB008124/Summarizer.git
   ```
2. Install dependencies:
 ```bash
 pip install transformers flask flask-cors pyngrok
 ```
3. Set Up Ngrok:
 ```bash
ngrok authtoken <ngrok-authtoken>

```
4. Run the Flask Application:
 ```bash
python app.py
 ```
5. Access the Application.
   
7. Chrome Extension Installation.

   
## Technologies used

#### Python
- Programming language for building the backend application.

#### Flask
- Web framework used to create the REST API.

#### Transformers
- Hugging Face library used to access pre-trained summarization models.

#### Pyngrok
- Tool used to expose the local Flask server to the web.

#### ngrok
- Provides a public URL for the Flask application.
- 
## Features

-Text Summarization: Users can input text, and the app will return a concise summary.

-API Endpoint: Provides a RESTful API endpoint for text summarization.

-Web Interface: Simple web-based interface for user interactions.

## License

https://opensource.org/license/mit/


Happy coding! 🚀

