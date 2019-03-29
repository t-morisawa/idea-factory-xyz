# Gatsbyで簡単な静的サイトを作るまでを考える

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

CSSは各ディレクトリに置かれているのでよく分からない

## memo
 - VS Codeプラグインがある
 - コンポーネントはどこに置くのか？
