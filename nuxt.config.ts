// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // SSG（静的サイト生成）を有効にする
  ssr: true, 

  // プリレンダリングの設定（必要に応じて）
  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  // ★ここが重要：GitHubのリポジトリ名を設定する
  // デプロイ先が https://username.github.io なら '/my-app/'
  // デプロイ先が https://username.github.io なら '/'
  app: {
    baseURL: '/waiwai-test2/',
    buildAssetsDir: '/_nuxt/', // assetsのパスを固定
  },
})
