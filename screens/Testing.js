import React from 'react';
import { WebView } from 'react-native-webview';

function Testing() {
  return (
    <WebView
      // source={{ uri: 'https://chat.openai.com/c/3704d655-7144-4145-89a7-48b33caae49f' }}
      source={{ uri: 'https://63caef88280a46c78e.gradio.live' }}
      style={{ flex: 1 }}
    />
  );
}

export default Testing;
