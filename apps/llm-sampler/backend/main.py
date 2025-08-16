import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from .schemas import ChatRequest, ChatResponse
from .llm_providers import chat_complete

load_dotenv()

app = FastAPI(title="LLM Sampler API", version="0.1.0")

# Allow local dev origins by default
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"ok": True, "message": "LLM Sampler API is up"}

@app.post("/v1/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    try:
        content = await chat_complete(
            provider=req.provider,
            model=req.model,
            messages=req.messages,
            temperature=req.temperature,
            max_tokens=req.max_tokens,
        )
        return ChatResponse(content=content)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
