import json
import httpx
import streamlit as st

st.set_page_config(page_title="LLM Sampler", page_icon="🤖")

st.title("🤖 LLM Sampler (Streamlit + FastAPI)")

with st.sidebar:
    st.header("Settings")
    backend_base = st.text_input("Backend URL", value="http://localhost:8000", help="FastAPI base URL")
    provider = st.selectbox("Provider", ["echo", "openai", "azureopenai"])
    model = st.text_input("Model / Deployment", value="echo-001")
    temperature = st.slider("Temperature", 0.0, 2.0, 0.7, 0.1)
    max_tokens = st.number_input("Max tokens (optional)", min_value=1, value=256, step=32)

    st.markdown("---")
    st.caption("Tips: No API key? Choose **echo** to simulate responses.")

if "messages" not in st.session_state:
    st.session_state.messages = [{"role": "system", "content": "You are a helpful assistant."}]

# Show chat history
for m in st.session_state.messages:
    if m["role"] == "user":
        with st.chat_message("user"):
            st.markdown(m["content"])
    elif m["role"] == "assistant":
        with st.chat_message("assistant"):
            st.markdown(m["content"])

# Input box
if prompt := st.chat_input("メッセージを入力..."):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    # Call backend
    payload = {
        "provider": provider,
        "model": model,
        "temperature": temperature,
        "max_tokens": int(max_tokens) if max_tokens else None,
        "messages": st.session_state.messages,
    }

    try:
        with st.status("Calling backend...", expanded=False):
            with httpx.Client(timeout=60.0) as client:
                r = client.post(f"{backend_base}/v1/chat", json=payload)
                r.raise_for_status()
                data = r.json()
    except Exception as e:
        assistant_reply = f":warning: エラー: {e}"
    else:
        assistant_reply = data.get("content", "")

    st.session_state.messages.append({"role": "assistant", "content": assistant_reply})
    with st.chat_message("assistant"):
        st.markdown(assistant_reply)
