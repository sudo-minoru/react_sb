# react ストーリーブック勉強用

## 参考サイト

https://microcms.io/blog/storybook-react-use/

## インストール

### プロジェクト作成

npx create-react-app react_sb --template typescript

### ストーリーブックインストール

npx -p @storybook/cli sb init --type react_scripts

## ストーリーブック起動

yarn storybook

### ストーリーブック起動時に Cannot find module 'babel-loader' のエラーが発生する場合

yarn add --dev babel-loader@8.0.5
