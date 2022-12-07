~~React + CSS Modules + jest開発環境テンプレート~~

React + TypeScript開発環境テンプレート

実装

・TypeScript

【導入方法】

パッケージをインストール
```
// @typesはTypeScript用のreactの型定義情報
$ npm install typescript ts-loader @types/react @types/react-dom
```

TypeScriptコンパイラの設定ファイルの作成
```
$ npx tsc --init

// tsconfig.jsonで追記
"jsx": "react"
```

webpack.config.jsのエントリーポイントとrulesの記述を変更する

```
entry: 'path/to/typescript.tsx',
module: {
  rules: [
    {
      test: /\.tsx?$/,
      loader: 'ts-loader'
    },
  ]
},
// モジュールimport時の拡張子を省略できる
resolve: {
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
},
```

未実装

・tsx環境のテスト

jestでのtsxファイルのテストは未検証

・CSS Modules

TypeScriptで動かすには、CSS Modulesの型定義情報を用意する必要あり

・CSS Modulesのテスト

・ESLint, Prettier
