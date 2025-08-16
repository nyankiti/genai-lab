# llm-sampler

Streamlit + FastAPI で **簡易的に LLM を試す** ためのスターター。パッケージ管理は **uv**。  
OpenAI / Azure OpenAI / Echo(ダミー) を切り替えて試せます。

## セットアップ

1) **uv のインストール**（未導入なら）  
```bash
# macOS/Linux
curl -LsSf https://astral.sh/uv/install.sh | sh
# Windows (PowerShell)
iwr https://astral.sh/uv/install.ps1 -UseBasicParsing | iex
```

2) 依存関係を同期
```bash
cd llm-sampler
uv venv
uv sync
```

3) 環境変数を設定（任意）  
`.env.sample` をコピーして `.env` を編集してください。
```bash
cp .env.sample .env
```

4) **バックエンド起動 (FastAPI)**  
```bash
uv run uvicorn backend.main:app --reload --port 8000
```

5) **フロントエンド起動 (Streamlit)** 別ターミナルで
```bash
uv run streamlit run frontend/app.py --server.port 8501
```
- フロントエンド: http://localhost:8501  
- バックエンド:   http://localhost:8000/docs (Swagger UI)

> **APIキーがない場合でも動作**：プロバイダに `Echo` を選べばダミーの応答で UI を確認できます。

## プロバイダ設定

- **OpenAI**: `OPENAI_API_KEY` を `.env` に設定。`model` に例: `gpt-4o-mini`
- **Azure OpenAI**: `.env` に以下を設定し、`model` には **デプロイ名** を入力
  - `AZURE_OPENAI_ENDPOINT`
  - `AZURE_OPENAI_API_KEY`
  - `AZURE_OPENAI_API_VERSION` (例: `2024-02-15-preview`)

## 構成

```
llm-sampler/
├─ pyproject.toml
├─ README.md
├─ .env.sample
├─ backend/
│  ├─ main.py            # FastAPI アプリ
│  ├─ schemas.py         # リクエスト/レスポンス型
│  └─ llm_providers.py   # OpenAI/Azure/Echo 実装
└─ frontend/
   └─ app.py             # Streamlit UI
```

## ライセンス

MIT
