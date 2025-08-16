from __future__ import annotations
from typing import List, Literal, Optional
from pydantic import BaseModel, Field

class ChatMessage(BaseModel):
    role: Literal["system", "user", "assistant"] = Field(..., description="Chat role")
    content: str = Field(..., description="Message content")

class ChatRequest(BaseModel):
    provider: Literal["echo", "openai", "azureopenai"] = Field("echo", description="Which LLM provider to use")
    model: str = Field("echo-001", description="Model name or deployment name")
    temperature: float = Field(0.7, ge=0.0, le=2.0)
    max_tokens: Optional[int] = Field(None, ge=1, description="Max tokens for the response (if supported)")
    messages: List[ChatMessage]

class ChatResponse(BaseModel):
    content: str
