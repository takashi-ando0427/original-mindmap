# Slack Hierarchy Mindmap (Slack階層化マインドマップ)

## 概要
企業のSlack運用において、チャンネルの乱立や命名規則の崩壊による「情報のサイロ化」や「検索性の低下」は共通の課題です。
本ツールは、Slackのチャンネル構造を視覚的なマインドマップとして設計・整理し、全体像を俯瞰しながら直感的に階層化できるGAS（Google Apps Script）ベースのWebアプリケーションです。

## 作成の背景・目的（DXコンサルタント視点）
業務改善やDX推進において、コミュニケーションツールの設計は基盤となります。
- **課題**: 運用ルールなしにSlackチャンネルが作成されると、どの部署のどのプロジェクトのチャンネルなのかが不明確になり、新入社員のオンボーディングコスト増加や重要な通知の見落としが発生します。
- **解決策**: チャンネルを作成する前に、本ツールを用いてツリー構造（プレフィックス、カテゴリ分け、Canvasへのリンク集約など）をマインドマップで可視化・検討することで、組織全体で統一された情報設計を実現します。

## 機能
- **マインドマップの直感的な編集**: ノードの追加（子・兄弟）、編集、削除をUIおよびショートカットキーで高速に操作可能。
- **クラウド保存 (GAS)**: Google Apps Scriptのプロパティサービスを利用し、クラウド上にデータを保存・復元。
- **ローカルバックアップ**: マインドマップのデータをJSON形式でPCにダウンロード、およびPCからの読み込み機能。
- **ブラウザ履歴保存**: ネットワークが不安定な場合やGAS環境外での利用を想定し、ブラウザのLocalStorageを利用した自動履歴保存・復元機能。

## 技術スタック
- **Frontend**: HTML5, JavaScript, Tailwind CSS (スタイリング), jsMind (マインドマップ描画)
- **Backend**: Google Apps Script (HTML Service, Properties Service)
- **Data Format**: JSON

## 使い方
1. 本リポジトリの `src` フォルダ内にある `code.gs` と `index.html` を新規のGoogle Apps Scriptプロジェクトにコピーします。
2. GASのプロジェクト上で、`コード.gs` に `code.gs` の内容を、新規作成した `index.html` に `index.html` の内容を貼り付けます。
3. Webアプリとしてデプロイし、発行されたURLにアクセスします。

## 開発の工夫点
- **環境に依存しない堅牢性**: GAS環境にデプロイしなくてもローカルのHTMLファイルとして開くだけで、ブラウザのLocalStorageやJSONダウンロード機能を用いてスタンドアロンで動作するよう設計しています。これにより、プロトタイプの迅速な検証を可能にしています。
- **モダンなUI/UX**: Tailwind CSSを採用し、単なるGASのツールに留まらないモダンで洗練されたUIを実現しました。

## 👤 著者

**安藤 傑** (Takashi Ando)

[![Portfolio](https://img.shields.io/badge/Portfolio-Notion-000000?style=for-the-badge&logo=notion&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white)](#)
