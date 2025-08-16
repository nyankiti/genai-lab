import os
from typing import List, Optional, Literal

from .schemas import ChatMessage

Provider = Literal["echo", "openai", "azureopenai"]

async def chat_complete(
    provider: Provider,
    model: str,
    messages: List[ChatMessage],
    temperature: float = 0.7,
    max_tokens: Optional[int] = None,
) -> str:
    provider = provider.lower()
    if provider == "echo":
        # Simple deterministic mock for local testing
        last_user = next((m.content for m in reversed(messages) if m.role == "user"), "")
        return f"[echo] You said: {last_user}"

    if provider == "openai":
        try:
            from openai import AsyncOpenAI
        except Exception as e:
            raise RuntimeError("The 'openai' package is required for provider=openai") from e

        api_key = os.environ.get("OPENAI_API_KEY")
        if not api_key:
            raise RuntimeError("OPENAI_API_KEY is not set")

        client = AsyncOpenAI(api_key=api_key)
        resp = await client.chat.completions.create(
            model=model,
            messages=[m.model_dump() for m in messages],
            temperature=temperature,
            **({"max_tokens": max_tokens} if max_tokens else {}),
        )
        return resp.choices[0].message.content or ""

    if provider == "azureopenai":
        # Uses the Azure variant of the OpenAI SDK
        try:
            from openai import AsyncAzureOpenAI
        except Exception as e:
            raise RuntimeError("The 'openai' package is required for provider=azureopenai") from e

        endpoint = os.environ.get("AZURE_OPENAI_ENDPOINT")
        api_key = os.environ.get("AZURE_OPENAI_API_KEY")
        api_version = os.environ.get("AZURE_OPENAI_API_VERSION", "2024-02-15-preview")
        if not endpoint or not api_key:
            raise RuntimeError("AZURE_OPENAI_ENDPOINT/AZURE_OPENAI_API_KEY is not set")

        client = AsyncAzureOpenAI(api_key=api_key, api_version=api_version, azure_endpoint=endpoint)
        resp = await client.chat.completions.create(
            model=model,  # NOTE: Azure は deployment 名を指定
            messages=[m.model_dump() for m in messages],
            temperature=temperature,
            **({"max_tokens": max_tokens} if max_tokens else {}),
        )
        return resp.choices[0].message.content or ""

    raise ValueError(f"Unknown provider: {provider}")
