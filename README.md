## 概要

React Router のテストリポジトリ

## 動作の流れ

1. フォームにキーワードを入力
1. キーワードを URL パラメータに設定し、navigate で画面遷移
1. パラメータからキーワードを取得し、キーワードをもとに fetch でデータを取得
1. データを画面に表示させる

## メリット

- URL パラメータが作成されるので、進む・戻る操作が可能

## デメリット

- URL パラメータが切り替わるたびに fetch でデータ取得して表示しているので、ページの表示がかなり遅い

## 対策

- キャッシュ機能の利用
  - 別リポジトリでテストを行う
