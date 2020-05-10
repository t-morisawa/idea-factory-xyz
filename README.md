# Netlify
https://idea-factory.xyz/

# デプロイ
masterブランチにpushすれば自動で更新されます

# 開発

以下のコマンドを叩くとローカルの開発用サーバが起動

```
gatsby develop
```

# デプロイ設定(gatsby)
## auto
netlifyとかで以下のコマンドを実行させれば良い

```
npm install && npm run build
```

## manual
```
gatsby build
```

publicディレクトリをどこかにホスティングする


# 新規追加手順

1. `/src/markdown` にmdファイルを作成し説明文を書く

2. `/src/pages/idea` にページファイルを作成

3. `/src/scamper/constants` に記述 

4. `/src/pages/index.js` トップページからリンクする
