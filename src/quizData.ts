export type QuizQuestion = {
  id: number
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type QuizModeId = 'proBaseball' | 'spiritsA'

export type QuizMode = {
  id: QuizModeId
  label: string
  badge: string
  questions: QuizQuestion[]
}

export const proBaseballQuiz: QuizQuestion[] = [
  {
    id: 1,
    question: 'プロ野球のシーズン最多本塁打記録（60本）を打ったのは誰ですか？',
    options: ['王貞治', 'W.バレンティーン', '松井秀喜', '近藤健介'],
    correctIndex: 1,
    explanation:
      '2013年ソフトバンクのW.バレンティーンが60本塁打を達成して、王貞治選手が保持していた55本の記録を更新したんだよ！',
  },
  {
    id: 2,
    question: '打者に四球を与えるのに必要なボールの数は何球ですか？',
    options: ['3球', '4球', '5球', '6球'],
    correctIndex: 1,
    explanation:
      '野球のルールでは、打者に4球のボールが投げられると四球（フォアボール）になって、一塁へ進塁するんだよ！',
  },
  {
    id: 3,
    question: 'プロ野球で生涯本塁打記録（868本）を保持している選手は誰ですか？',
    options: ['長嶋茂雄', '王貞治', '松井秀喜', '大谷翔平'],
    correctIndex: 1,
    explanation:
      '王貞治選手は1960年代から1980年代にかけて巨人でプレーして、868本塁打というプロ野球史上最多の記録を樹立したんだよ！',
  },
  {
    id: 4,
    question: 'プロ野球の球団数は全部で何球団ですか？',
    options: ['10球団', '11球団', '12球団', '14球団'],
    correctIndex: 2,
    explanation:
      'セ・リーグ6球団とパ・リーグ6球団の合計12球団で、NPBのシーズンが行われているんだよ！',
  },
  {
    id: 5,
    question: '1試合の規定イニング数は何イニングですか？',
    options: ['7イニング', '8イニング', '9イニング', '10イニング'],
    correctIndex: 2,
    explanation:
      'プロ野球の通常試合は9イニング制で、同点のときは延長戦に入ることがあるんだよ！',
  },
  {
    id: 6,
    question: '2023年WBCで優勝した国はどこですか？',
    options: ['アメリカ', '日本', '韓国', 'ドミニカ共和国'],
    correctIndex: 1,
    explanation:
      '2023年のWBC決勝で日本がアメリカに勝って優勝して、侍ジャパンが世界一になったんだよ！',
  },
  {
    id: 7,
    question: 'パ・リーグに所属していない球団はどれですか？',
    options: ['ソフトバンク', '巨人', '日本ハム', 'オリックス'],
    correctIndex: 1,
    explanation:
      '巨人はセ・リーグの球団で、ソフトバンク・日本ハム・オリックスはパ・リーグ所属なんだよ！',
  },
  {
    id: 8,
    question: '満塁本塁打の得点は何点ですか？',
    options: ['3点', '4点', '5点', '6点'],
    correctIndex: 1,
    explanation:
      '満塁本塁打（グランドスラム）は打者を含めて4人が生還するから、4点入るんだよ！',
  },
  {
    id: 9,
    question: '日本シリーズ最多優勝回数を誇る球団はどこですか？',
    options: ['巨人', 'ソフトバンク', 'ヤクルト', '西武'],
    correctIndex: 0,
    explanation:
      '読売ジャイアンツが日本シリーズ優勝回数の最多記録を持っていて、プロ野球界の強豪球団なんだよ！',
  },
  {
    id: 10,
    question: 'バッティングタイトルで争われる主な記録はどれですか？',
    options: ['本塁打数', '盗塁数', '打率', '失点'],
    correctIndex: 2,
    explanation:
      'バッティングタイトルはシーズン打率の1位を決めるタイトルで、打撃の安定感を示す記録なんだよ！',
  },
]

export const spiritsAQuiz: QuizQuestion[] = [
  {
    id: 1,
    question: 'プロ野球スピリッツAを開発している会社はどこですか？',
    options: ['コナミ', 'バンダイナムコ', 'セガ', 'カプコン'],
    correctIndex: 0,
    explanation:
      'プロ野球スピリッツAはコナミデジタルエンタテインメントが開発している野球カードゲームなんだよ！',
  },
  {
    id: 2,
    question: '1チームのスタメン打者は通常何人ですか？',
    options: ['9人', '8人', '10人', '7人'],
    correctIndex: 0,
    explanation:
      '野球のルールどおり、スピリッツAでもスタメン打者は9人で打順を組むんだよ！',
  },
  {
    id: 3,
    question: '他のプレイヤーとリアルタイムで対戦できるモードはどれですか？',
    options: ['ライブ対戦', 'キャリアモード', 'ストーリーモード', 'チュートリアル'],
    correctIndex: 0,
    explanation:
      'ライブ対戦モードでは、他のプレイヤーとリアルタイムで試合を楽しめるんだよ！',
  },
  {
    id: 4,
    question: '選手カードのレアリティで、一般的に最も高いクラスはどれですか？',
    options: ['Sランク', 'Cランク', 'Nランク', 'Eランク'],
    correctIndex: 0,
    explanation:
      'Sランクは高い能力値を持つ選手カードの代表で、デッキの中心になりやすいんだよ！',
  },
  {
    id: 5,
    question: '選手カードに付いている特殊能力のことを何と呼びますか？',
    options: ['スキル', 'バッジ', '称号', 'エンブレム'],
    correctIndex: 0,
    explanation:
      '選手カードにはスキルが付いていて、試合中の能力や効果を左右する大事な要素なんだよ！',
  },
  {
    id: 6,
    question: 'シーズンを進めて順位を競う基本的なモードはどれですか？',
    options: ['リーグ戦', 'ミニゲーム', 'カード分解', '観戦のみ'],
    correctIndex: 0,
    explanation:
      'リーグ戦モードでは、自分のデッキでシーズンを戦いながら順位を上げていくんだよ！',
  },
  {
    id: 7,
    question: '他のプレイヤーと選手カードを交換できる機能はどれですか？',
    options: ['トレード', 'オークション', '郵便', 'ダウンロード'],
    correctIndex: 0,
    explanation:
      'トレード機能を使うと、他のプレイヤーと選手カードを交換できるんだよ！',
  },
  {
    id: 8,
    question: '期間限定で開催されるイベント対戦の代表例はどれですか？',
    options: ['ナインダーショー', 'フリーマッチ', '練習試合', 'オートプレイ'],
    correctIndex: 0,
    explanation:
      'ナインダーショーは人気のイベントモードで、期間限定の対戦を楽しめるんだよ！',
  },
  {
    id: 9,
    question: '先発投手の基本的な登板ルールとして正しいのはどれですか？',
    options: ['1試合に1回登板', '1イニングに3回登板', '1試合に5回登板', '登板回数に制限なし'],
    correctIndex: 0,
    explanation:
      '先発投手は基本的に1試合1登板がルールで、ローテーションを組んで使うんだよ！',
  },
  {
    id: 10,
    question: 'デッキ編成で自分で決められる項目はどれですか？',
    options: ['打順', '球場の天候', '審判の名前', '放送局'],
    correctIndex: 0,
    explanation:
      'デッキ編成画面では打順や起用選手を自分で決めて、チームの戦い方を作れるんだよ！',
  },
]

export const quizModes: Record<QuizModeId, QuizMode> = {
  proBaseball: {
    id: 'proBaseball',
    label: 'プロ野球編',
    badge: 'プロ野球',
    questions: proBaseballQuiz,
  },
  spiritsA: {
    id: 'spiritsA',
    label: 'スピリッツA問題編',
    badge: 'スピリッツA',
    questions: spiritsAQuiz,
  },
}

export const quizModeList: QuizMode[] = Object.values(quizModes)
