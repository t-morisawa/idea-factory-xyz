# Netlify
https://epic-mayer-262a99.netlify.com/

# デプロイ
masterブランチにpushすれば自動で更新されます

# 開発計画

 - DONE ホスティングする
 - DONE Gatsby.JSでフルリプレイス
 - DONE study bootstrap
 - descriptionsをmarkdownでかけるようにする
 - 項目自体を増やす
 - 各項目のdescriptionsを書く(markdownで)
 - 各アプリケーションのリプレイス
 - (PC)マウスのみで操作できるようにする
 - stydy GatsbyJS
 - study ReactJS
 - 広告展開を考える
 - 各ページの体裁を整える（リプレイス後の方がやりやすいと思うので後で）
 - CircleCI無料枠使って入れる

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



# Gatsbyで簡単な静的サイトを作るまでのメモ考える

## 作成から起動まで

```
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]
```

で新しいサイトができる

```
gatsby develop
```

これで開発サーバが起動

## スタティックファイルの置き場

とりあえずディレクトリ構成が以下のようになっている。

```
components: pagesから読み込まれるコンポーネント
pages: 各ページを構成するReactベースのページが入ってる
styles: optional
utils: optional
tempates: optional
```

## CSS
 - 各ディレクトリに置かれているのでよく分からない
 - 別ファイルにCSSをかく
 - それをJSからimportする
 - サンプルでは生のCSSしか書かれていなかった

## ページ遷移
 - graphqlから取ってきてる
 - そうでなければ `<Link to={'/about/'}` などでいける

## memo
 - VS Codeプラグインがある

## bootstrap
 - npm moduleとして普通にimportしてやれば使えそう https://facebook.github.io/create-react-app/docs/adding-bootstrap
 - React Bootstrap なるものもある https://react-bootstrap.github.io/
 - reactstrap https://reactstrap.github.io/
 
 ```
 import 'bootstrap/dist/css/bootstrap.css';
 ```
 
## npm moduleはいつ入れるのか

普通に入れてしまって良さそう

```
npm install --save bootstrap
```

## import について

importの見に行くパスがよく分からない

## React Componentsのインポート方法

こちらもよく分からない。
 
