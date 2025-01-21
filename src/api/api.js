// src/api/api.js

const BASE_URL = "https://railway.bulletinboard.techtrain.dev";

/**
 * APIリクエストを送信する共通関数
 * @param {string} endpoint - APIのエンドポイント
 * @param {string} method - HTTPメソッド (GET, POST, etc.)
 * @param {Object} [body] - リクエストボディ (任意)
 * @returns {Promise} - APIのレスポンス
 */
export const fetchData = async (endpoint, method = "GET", body = null) => {
  const headers = { "Content-Type": "application/json" };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

import PostList from "./components/PostList";

const App = () => {
  return (
    <div>
      <h1>Railway Bulletin Board</h1>
      <PostList />
    </div>
  );
};

export default App;
