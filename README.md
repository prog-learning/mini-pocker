# React×TypeScript でポーカー作るよ

全然ポーカー知らない人が簡単なポーカーっぽいアプリ作る

## 仕様

1〜5 の数の書かれたカードが赤青黄の 3 色で計 15 枚

最初に 5 枚引き,そこから 1 枚ずつ変えて役を揃える

カードの変更は 2 回のみ

### 役

- ストレートフラッシュ...同色 1,2,3,4,5
- ストレート...1,2,3,4,5
- フルハウス...同じ数 3 枚と同じ数 2 枚
- スリーカード...同じ数 3 枚
- ツーペア...同じ数 2 枚が 2 つ
- 役なし（ワンペア）

### ルール

10P スタートで BET した POINT を役の上から 5, 4, 3, 2, 1, 0 倍した POINT を獲得できる

これを 3 回繰り返したときの合計点をスコアとする

最高点は 10 × 5 × 5 × 5 = 1250P

## 使用

- React×TypeScript
- Next.js
- recoil
- fower
- jest

## 手順

1. TypeScript の準備
2. カードの型を作成
3. 15 枚のカードを生成
4. 生成したカードを shuffle する
5. カードの最初の 5 枚を並べて表示
6. カードに色を付ける
7. マウスが乗ったカードにエフェクト
8. カードを 2 回だけ引き直せるようにする
9. 役を判定する関数を作成し test する
10. 決定ボタンで役を判定できるようにする
11. BET するポイントを入力
12. 決定ボタンで役に応じたポイントを取得

## Jest Setup

https://qiita.com/keitakn/items/0a714997eb058f2f67e2
