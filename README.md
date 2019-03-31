# Netlify
https://festive-bartik-896fe7.netlify.com/

# デプロイ
masterブランチにpushすれば自動で更新されます

# 開発計画

 - DONE ホスティングする
 - DONE Gatsby.JSでフルリプレイス
 - 各項目のdescriptionsを書く
 - 各アプリケーションのリプレイス
 - (PC)マウスのみで操作できるようにする
 - study bootstrap
 - stydy GatsbyJS
 - study ReactJS
 - 広告展開を考える
 - 各ページの体裁を整える（リプレイス後の方がやりやすいと思うので後で）
 - CircleCI無料枠使って入れる

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
