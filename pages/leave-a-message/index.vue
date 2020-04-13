<template>
  <div class="page">
    <div class="section">
      <p class="paragraph">
        世界中に暗い影を落としているCOVID-19（新型コロナウイルス感染症）。この暗闇がいつ明けるのかも分からない今、いちフリーランスのチームである私たちPIXELGRAMに何ができるのかを考えました。
      </p>
      <p class="paragraph">
        各地で様々な影響を及ぼしている中、バンドマンである私自身でいうと、生きがいであり生活の糧であるライブが次々と中止・延期に。また、PIXELGRAMで運営しているコワーキング兼イベントスペースのORANGE PARK（オレンジパーク）は、感染拡大の防止のため2ヶ月間の休業。いつ再開できるかもわからない状態にいます。
      </p>
      <p class="paragraph">
        テレビをつけてもスマホを見ても、誰と話してもコロナ、コロナ、コロナ…。一人一人の苛立ちや焦りが少しずつ溢れ出し、街やネットの雰囲気はマジで最悪。そんな状況を換気しようと動いてみてもCOVID-19の勢いに飲み込まれ、ただただ悪化していく状況を眺めることしかできませんでした。
      </p>
      <p class="paragraph">
        とはいえ、ただ黙って受け入れられるわけもなく、自分たちに何ができて、何をすべきかを考えた結果、<span class="bold">「今、各地で起こっていることやリアルな想いを集めて記録し、共有して、未来に残す必要がある」</span>という答えに辿り着きました。
      </p>
    </div>
    <div class="section">
      <p class="header01">
        今、起きていることやあなたの想いを動画に残して届けてください
      </p>
      <p class="paragraph">
        買い占めは無意味だ。こんな補償を必要としている。あれはフェイクだ気をつけて。メディアが報じていることや政府の提言のほかに、実生活ではこんな風に困っていて、こういったことで不安な毎日を過ごしているだとか、あるいは、こんなことに希望を感じているなど、国籍、性別、年齢、職業など関係なく、一人一人にぞれぞれ受けた影響や考えがある。私たちのように、今すぐ現状を大きく変える力がなくても、現状を憂い、何かできないかと考えている人もたくさんいる。
      </p>
      <p class="paragraph">
        そういった、それぞれの今ある状況やリアルな想いを、過去に置いてけぼりにすることなく、<span class="bold">記録し、共有し、残す。</span>これこそが私たちにできることで、すべきことではないかと思い立ち、できる限り多くのメッセージ動画を集め、残していくことにしました。
      </p>
      <p class="paragraph">
        この記録はいつの日か、再び今のような状況になってしまった時に、事前に防げることもあれば、困っていることが解決できたり、もしかすると命を救うための役に立つかもしれません。
      </p>
      <p class="paragraph">
        あるいは、自分たちの知らない場所で起こっていることや誰かの想いを知ることで、今まさに抱えている不安を無くせるかもしれないし、私たちがさまよっている厳しい現状を打開できるきっかけとなるかもしれません。
      </p>
      <p class="paragraph">
        なので、あなたの周りの状況や困っていること、今の想いを動画に残して届けてほしいのです。ひとりひとりの意識と声が、希望の光になる。明日より先の未来を変えられる。そう信じています。
      </p>
      <p class="paragraph">
        あなたの声を求めています。あなたの今を教えてください。
      </p>
      <p class="paragraph">
        一日でも早い事態の終息と皆様の健康と安全を願って。
      </p>
      <p class="paragraph bold">
        #leave_a_message<br>「メッセージをどうぞ」
      </p>
      <p class="signature">
        2020.4.13<br>GIMA☆KENTA – PIXELGRAM
      </p>
    </div>
    <div class="section">
      <p class="header02">
        #leave_a_message 動画の残し方
      </p>
      <div class="list">
        <div class="list-item">
          冒頭で、年月日（2020年0月0日）と撮影場所（録画した都市または地域）を言う
        </div>
        <div class="list-item">
          自己紹介<br>
          名前 ※本名でなくてもOK<br>
          年齢 ※任意<br>
          職業 ※任意
        </div>
        <div class="list-item">
          下記への回答<br>
          <div class="list-item number01">
            COVID-19（新型コロナウイルス感染症）で受けた影響
          </div>
          <div class="list-item number02">
            いま、困っていること
          </div>
          <div class="list-item number03">
            いま何がしたいか／何をしてほしいか
          </div>
          <div class="list-item number04">
            世界中の人に一言伝えられるとすれば、何を伝えたいか
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'leave-a-message',
  data() {
    return {
      meta: {
        title: '#leave_a_message',
        description: '「#leave_a_message」は、COVID-19（新型コロナウイルス）の感染拡大を受け、世界の状況やリアルな声を映像で記録し未来へ残していくためにPIXELGRAMが始動したプロジェクトです。',
        type: 'article',
        url: 'https://pixelgram.jp/leave-a-message/',
        image: 'https://pixelgram.jp/leave-a-message/ogp.png',
      },
    }
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
      ],
    }
  }
}
</script>
