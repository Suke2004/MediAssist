```markdown
# MediAssist 3.0  

A modern, responsive **AI chat interface with integrated RAG, web search, and voice support**.  
MediAssist 3.0 builds upon Perplexity 2.0, extending functionality with **multi-model support (MedGemma, Gemini, Groq)**, **Retrieval-Augmented Generation (RAG)**, and **two-way voice communication** for a next-gen AI experience.  

---

## ✨ Features  

- **Real-time AI Responses** – Stream AI responses as they're generated  
- **Integrated Web Search** – AI can search the web for up-to-date information  
- **Multi-Model Support** – Switch seamlessly between **MedGemma, Gemini, and Groq** depending on use-case  
- **Retrieval-Augmented Generation (RAG)** – Upload documents or connect to knowledge bases for context-rich answers  
- **Two-Way Voice Communication** – Voice SDK integration enables speaking and listening to the AI in real-time  
- **Conversation Memory** – Maintains context throughout your conversation  
- **Search Process Transparency** – Visual indicators show searching, reading, and writing stages  
- **Responsive Design** – Clean, modern UI that works across devices  

---

## 🏗️ Architecture  

MediAssist 3.0 follows a **client-server architecture**:  

### Client (Next.js + React)  
- Built with **Next.js** and **React**  
- Real-time streaming updates using **Server-Sent Events (SSE)**  
- Components for **chat messages, search status, RAG file uploads, and voice input/output**  
- Responsive design for **desktop, tablet, and mobile**  

### Server (FastAPI + LangGraph)  
- Python backend using **FastAPI** for API endpoints  
- **LangGraph** for conversation flow orchestration  
- **Model Router** for switching between **MedGemma, Gemini, and Groq**  
- **RAG pipeline** – integrates vector database (e.g., Pinecone, Weaviate, or FAISS) for document retrieval  
- **Voice SDK integration** for streaming audio input/output  
- **Server-Sent Events** for real-time AI response streaming  

---

## 📂 Project Structure  

```

mediassist-3.0/
├── client/                     # Next.js + React frontend
│   ├── components/             # Chat UI components
│   ├── pages/                  # Next.js pages
│   ├── public/                 # Static assets
│   └── utils/                  # Client utilities (voice, streaming, etc.)
│
├── server/                     # FastAPI backend
│   ├── app.py                  # FastAPI entry point
│   ├── routers/                # API endpoints (chat, search, voice, rag)
│   ├── services/               # Model router, RAG pipeline, search service
│   ├── vectorstore/            # Vector DB integration (Pinecone / FAISS / Weaviate)
│   ├── requirements.txt        # Python dependencies
│   └── .env.example            # Example environment variables
│
├── docs/                       # Documentation
└── README.md                   # This file

````

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+**
- **Python 3.10+**
- API keys:
  - **MedGemma** (or equivalent endpoint)
  - **Google Gemini API**
  - **Groq API**
  - **Tavily Search API**
  - **OpenAI API (optional, fallback)**
- Vector database account (Pinecone / Weaviate / FAISS local setup)

---

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mediassist-3.0.git
   cd mediassist-3.0
````

2. **Set up the server**

   ```bash
   cd server
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Configure environment variables**
   Copy `.env.example` to `.env` in the `server` directory:

   ```bash
   cp .env.example .env
   ```

   **`.env.example`:**

   ```ini
   # LLM Providers
   OPENAI_API_KEY=your_openai_api_key
   GEMINI_API_KEY=your_gemini_api_key
   GROQ_API_KEY=your_groq_api_key
   MEDGEMMA_API_KEY=your_medgemma_api_key

   # Search
   TAVILY_API_KEY=your_tavily_api_key

   # Vector Database (for RAG)
   VECTOR_DB_URL=your_vector_db_url
   VECTOR_DB_API_KEY=your_vector_db_api_key
   VECTOR_DB_NAME=mediassist_rag

   # Voice SDK / Speech API
   VOICE_API_KEY=your_voice_sdk_key
   ```

4. **Set up the client**

   ```bash
   cd ../client
   npm install
   ```

---

### Running the Application

1. **Start the server**

   ```bash
   cd server
   uvicorn app:app --reload
   ```

2. **Start the client**

   ```bash
   cd client
   npm run dev
   ```

3. **Open your browser**

   ```
   http://localhost:3000
   ```

---

## 🔍 How It Works

1. **User sends a message or voice input** via the chat interface
2. **Server processes input** using LangGraph and routes it to the selected model (MedGemma, Gemini, or Groq)
3. **AI decides** whether to:

   * Respond directly
   * Perform a web search via Tavily API
   * Retrieve documents using the RAG pipeline
4. If search/RAG is needed:

   * Query is sent to Tavily or Vector DB
   * Retrieved information is passed back into the LLM
   * AI formulates a context-rich response
5. **Response is streamed back** to the client in real-time
6. **Voice SDK** converts text responses to speech for two-way communication
7. **Search/RAG stages** (searching, retrieving, writing) are displayed to the user

---

## 🎤 Voice Interaction

* **Microphone input** → Convert speech to text → AI processes query
* **AI response** → Streamed text + converted back to audio → Played via browser

This creates a **natural, hands-free conversation experience**.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

* Inspired by the UI and functionality of [Perplexity.ai](https://www.perplexity.ai/)
* Built with [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [FastAPI](https://fastapi.tiangolo.com/), and [LangGraph](https://github.com/langchain-ai/langgraph)
* Powered by **MedGemma**, **Google Gemini**, **Groq**, **OpenAI GPT**, and **Tavily Search API**
* RAG powered by **Pinecone / Weaviate / FAISS**
* Voice communication enabled with **Web Speech API / Voice SDK**

---

