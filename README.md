# react ストーリーブック勉強用

## 参考サイト

https://microcms.io/blog/storybook-react-use/

### アトミックデザインについて

https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B

## インストール

### プロジェクト作成

npx create-react-app react_sb --template typescript

### ストーリーブックインストール

npx -p @storybook/cli sb init --type react_scripts

## ストーリーブック起動

yarn storybook

### ストーリーブック起動時に Cannot find module 'babel-loader' のエラーが発生する場合

yarn add --dev babel-loader@8.1.0

## 追加でインストールしたモジュール

yarn add semantic-ui-react semantic-ui-css
