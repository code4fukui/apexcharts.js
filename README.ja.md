# ApexCharts.js

ApexChartsは、シンプルなAPIと100以上のすぐに使えるサンプルを備え、インタラクティブなデータ可視化を構築できるモダンなJavaScriptチャートライブラリです。期待される機能がすべて詰まっており、アプリやダッシュボードで美しくレスポンシブな可視化を実現する十数種類のチャートタイプが含まれています。ApexChartsは、商用および非商用プロジェクトで利用可能なMITライセンスのオープンソースプロジェクトです。

## デモ

[デモを見る](https://apexcharts.com/javascript-chart-demos/)

## 機能

- 折れ線、面、横棒、縦棒、円、ドーナツ、散布図、バブル、ヒートマップ、ツリーマップなど、十数種類のチャートタイプ
- 外観や動作を設定するための100以上のオプションによる高いカスタマイズ性
- レスポンシブかつモバイルフレンドリー
- 時系列データ、カテゴリデータ、カスタムX軸ラベルをサポート
- ズーム、パン、ツールチップなどのインタラクティブな機能
- 日時（Datetime）、数値（Numeric）、カテゴリ（Category）のX軸タイプをサポート
- 単一および複数のY軸をサポート
- 積み上げチャートおよびグループ化チャートをサポート
- アノテーション、範囲、面チャートをサポート
- カスタムフォーマッターを備えた高度なデータラベル
- Vue、React、Angular、Stencilなどの人気フレームワークとの容易な統合

## 要件

ApexChartsは外部依存関係がなく、任意のJavaScriptプロジェクトで使用できます。

## 使い方

最小限の設定で基本的な棒グラフを作成するには、以下のように記述します。

```js
import ApexCharts from 'https://code4fukui.github.io/apexcharts.js/ApexCharts.js';

const options = {
  chart: {
    type: 'bar'
  },
  series: [
    {
      name: 'sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
};

const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
```

## ライセンス

MIT License — [LICENSE](LICENSE)を参照してください。
