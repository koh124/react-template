React + TypeScript + CSS Modules + ESLint + jest開発環境テンプレート

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

・Jest

パッケージをインストール
```
// jsだけならJestのみでテストできる
// ts-jestはJestをTypeScriptに対応させるもの
// @types/jestはJestのAPIの型定義ファイル
$ npm install jest ts-jest @types/jest
```

Jestの設定ファイルを作る
```
// jest.config.jsを生成する
// JestでTypescriptをテストできるようにする設定ファイル
$ yarn ts-jest config:init
```

__test__ディレクトリの中にあるか、*.test.tsがテストファイルの命名規則

テストを実行する
```
$ npm test
```


未実装

・tsx環境のテスト

jestでのtsxファイルのテストは未検証

・CSS Modulesのテスト

・Prettier
