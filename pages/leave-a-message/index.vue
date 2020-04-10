<template>
  <div class="page">
    <div class="header">
      <div class="header-logo">
        <img
          src="/logo.svg"
          alt="">
      </div>
      <div class="header-group">
        <div class="header-trans">
          <nuxt-link
            to="/leave-a-message/?lang=jp"
            :class="['header-trans-jp', language === 'jp' ? 'is-active' : '']">
            JP
          </nuxt-link>
          <div class="header-trans-separator">
            /
          </div>
          <nuxt-link
            to="/leave-a-message/?lang=en"
            :class="['header-trans-en', language === 'en' ? 'is-active' : '']">
            EN
          </nuxt-link>
        </div>
        <div class="header-channel">
          <a
            class="header-channel-link"
            rel="noopener"
            target="_blank"
            href="https://m.youtube.com/channel/UCJSMWiWOe7L4HgHmXXvYZwA">
            <span class="header-channel-inner">
              <span class="header-channel-icon">
                <img
                  src="/leave-a-message/youtube.svg"
                  alt="">
              </span>
              <span class="header-channel-name">
                PIXELGRAM<br>
                Channel
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="logo">
        <img
          src="/leave-a-message/logo.svg"
          alt="leave-a-message">
      </div>
      <div class="section">
        <p class="paragraph">
          {{ trans[language].line1 }}
        </p>
        <p class="paragraph">
          {{ trans[language].line2 }}
        </p>
        <p class="paragraph">
          {{ trans[language].line3 }}
        </p>
        <p class="paragraph" v-html="trans[language].line4" />
      </div>
      <div class="section">
        <p class="header01">
          {{ trans[language].line5 }}
        </p>
        <p class="paragraph">
          {{ trans[language].line6 }}
        </p>
        <p class="paragraph" v-html="trans[language].line7" />
        <p class="paragraph">
          {{ trans[language].line8 }}
        </p>
        <p class="paragraph">
          {{ trans[language].line9 }}
        </p>
        <p class="paragraph">
          {{ trans[language].line10 }}
        </p>
        <p class="paragraph">
          {{ trans[language].line11 }}
        </p>
        <p class="paragraph">
          {{ trans[language].line12 }}
        </p>
        <p class="paragraph bold">
          #leave_a_message<br>「メッセージをどうぞ」
        </p>
        <p class="signature">
          2020.4.5<br>
          GIMA☆KENTA – PIXELGRAM<br>
          発起人：PIXELGRAM
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
      <div class="section">
        <div class="button-outer">
          <div class="button">
            <a
              class="button-link"
              rel="noopener"
              target="_blank"
              href="https://m.youtube.com/channel/UCJSMWiWOe7L4HgHmXXvYZwA">
              <span class="button-inner">
                <span class="button-icon">
                  <img
                    src="/leave-a-message/youtube.svg"
                    alt="">
                </span>
                PIXELGRAM Channel
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      © 2020 PIXELGRAM LLC.
    </div>
  </div>
</template>

<script>
export default {
  layout: 'leave-a-message',
  data() {
    return {
      language: 'jp',
      meta: {
        title: '#leave_a_message',
        description: 'ページ個別のディスクリプション',
        type: 'article',
        url: 'https://pixelgram.jp/leave-a-message/',
        image: 'https://pixelgram.jp/leave-a-message/ogp.png',
      },
      trans: {
        jp: {
          line1: '世界中に暗い影を落としているCOVID-19（新型コロナウイルス感染症）。この暗闇がいつ明けるのかも分からない今、いちフリーランスのチームである私たちPIXELGRAMに何ができるのかを考えました。',
          line2: '各地で様々な影響を及ぼしている中、バンドマンである私自身でいうと、生きがいであり生活の糧であるライブが次々と中止・延期に。また、PIXELGRAMで運営しているコワーキング兼イベントスペースのORANGE PARK（オレンジパーク）は、感染拡大の防止のため2ヶ月間の休業。いつ再開できるかもわからない状態にいます。',
          line3: 'テレビをつけてもスマホを見ても、誰と話してもコロナ、コロナ、コロナ…。一人一人の苛立ちや焦りが少しずつ溢れ出し、街やネットの雰囲気はマジで最悪。そんな状況を換気しようと動いてみてもCOVID-19の勢いに飲み込まれ、ただただ悪化していく状況を眺めることしかできませんでした。',
          line4: 'とはいえ、ただ黙って受け入れらるわけもなく、自分たちに何ができて、何をすべきかを考えた結果、<span class="bold">「今、各地で起こっていることやリアルな想いを集めて記録し、共有して、未来に残す必要がある」<span>という答えに辿り着きました。',
          line5: '今、起きていることやあなたの想いを動画に残して届けてください',
          line6: '買い占めは無意味だ。こんな補償を必要としている。あれはフェイクだ気をつけて。メディアが報じていることや政府の提言のほかに、実生活ではこんな風に困っていて、こういったことで不安な毎日を過ごしているだとか、あるいは、こんなことに希望を感じているなど、国籍、性別、年齢、職業など関係なく、一人一人りにぞれぞれ受けた影響や考えがある。私たちのように、今すぐ現状を大きく変える力がなくても、現状を憂い、何かできないかと考えている人もたくさんいる。',
          line7: 'そういった、それぞれの今ある状況やリアルな想いを、過去に置いてけぼりにすることなく、<span class="bold">記録し、共有し、残す。</span>これこそが私たちにできることで、すべきことではないかと思い立ち、できる限り多くのメッセージ動画を集め、残していくことにしました。',
          line8: 'この記録はいつの日か、再び今のような状況になってしまった時に、事前に防げることもあれば、困っていることが解決できたり、もしかすると命を救うための役に立つかもしれません。',
          line9: 'あるいは、自分たちの知らない場所で起こっていることや誰かの想いを知ることで、今まさに抱えている不安を無くせるかもしれないし、私たちがさまよっている厳しい現状を打開できるきっかけとなるかもしれません。',
          line10: 'なので、あなたの周りの状況や困っていること、今の想いを動画に残して届けてほしいのです。ひとりひとりの意識と声が、希望の光になる。明日より先の未来を変えられる。そう信じています。',
          line11: 'あなたの声を求めています。あなたの今を教えてください。',
          line12: '一日でも早い事態の終息と皆様の健康と安全を願って。'
        },
        en: {
          line1: 'COVID-19 is casting a shadow all over the world. We PIXELGRAM, as a freelance team, have thought of what we can do against it now that we won’t know when we will see the dawn of this darkness.',
          line2: 'While the various impacts of COVID-19 have been felt all over, I as a band player have experienced cancellation and postponements of my live concerts, which are my life and energy, one after another. Also, the co-working and social-event space, ORANGE PARK, has to be closed to stop the spread of the virus for 2 months. Honestly speaking, I don’t know when it will be back to normal business again.',
          line3: 'Whenever I turn on TV or my phone and look at them, or whoever I talk to, there is constant focus on CORONA. All of everyone’s anger and irritation is overflowing little by little. The mood is seriously bad anywhere like the town and the internet. I tried to take actions to ventilate the situation, but all I could do was just see it go worse and worse. I just got overwhelmed by COVID-19.',
          line4: 'Even so, I couldn’t keep taking this nonsense. After considering what we can do and what we should do, we have come to the conclusion: It is necessary to gather what’s happening and the real thoughts of people, record them, share them, and leave them for the future.',
          line5: 'Film what is happening and what is on your mind right now and send your video to us.',
          line6: '“Buying up things is meaningless!”, “We need compensation!”, “That is fake news, be careful!” Besides what the mass media is broadcasting and the government is proposing, every one of you have been through the impacts and thoughts regardless of nationality, sex, age, or occupation. For example, you may have thoughts like what you have a problem with and how you survive every day that brings anxiety, or what you have a hope for. We don’t have enormous power to change the situation, but we worry about the current situation and think of what to do. ',
          line7: 'Those situations and thoughts of yours: we will record, share, and leave them for the future without leaving them behind. We have thought that this is what we can do and also what we should do, so I will start to gather as many messages as possible and keep records of them.',
          line8: 'Someday those records will hopefully be preventing this situation to happen again in the future, and at best will be saving people’s life in case this situation happens again.',
          line9: 'Actually, those records may be an opportunity to break through the grave situation we are in or ease our anxiety by just getting to know what is happening or thoughts of people where we would never know. ',
          line10: 'So please send us your video where you leave all your thoughts or problems now. Every one of your awareness and voice brings a ray of hope to people. I believe you can change the future.',
          line11: 'We need your voice. Please tell us your moment.',
          line12: 'All my best wishes for your health and safety, and the end of the nightmare.'
        },
      }
    }
  },
  watch: {
    $route () {
      if (!this.$route.query.lang) {
        this.language = 'jp'
      }
      if (this.$route.query.lang === 'jp') {
        this.language = 'jp'
      }
      if (this.$route.query.lang === 'en') {
        this.language = 'en'
      }
    }
  },
  created () {
    if (!this.$route.query.lang) {
      this.language = 'jp'
    }
    if (this.$route.query.lang === 'jp') {
      this.language = 'jp'
    }
    if (this.$route.query.lang === 'en') {
      this.language = 'en'
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

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
    padding: 8px 20px;
    @media screen and (max-width: 768px) {
      padding: 8px 12px;
      margin-bottom: 126px;
    }
    &-group {
      display: flex;
      align-items: center;
    }
    &-trans {
      font-family: 'Inter', sans-serif;
      display: flex;
      font-weight: 700;
      margin-right: 16px;
      &-separator {
        margin: 0 8px;
      }
      &-jp,
      &-en {
        text-decoration: none;
        letter-spacing: 2px;
        color: #000;
        &.is-active {
          color: #FF6400;
        }
      }
    }
    &-channel {
      &-inner {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &-icon {
        margin-right: 8px;
        @media screen and (max-width: 768px) {
          margin-right: 0;
          width: 48px;
        }
      }
      &-name {
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
      &-link {
        display: inline-block;
        line-height: 1.2;
        border-radius: 6px;
        letter-spacing: 2px;
        padding: 12px 16px;
        background-color: #FF6400;
        font-weight: 900;
        font-size: 16px;
        text-decoration: none;
        color: #fff;
        @media screen and (max-width: 768px) {
          padding: 16px 10px;
        }
      }
    }
  }
  .container {
    max-width: 998px;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;
  }
  .section + .section {
    margin-top: 96px;
  }
  .logo {
    text-align: center;
    margin-bottom: 126px;
  }
  .paragraph {
    line-height: 2;
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 32px;
    letter-spacing: 1px;
    @media screen and (max-width: 960px) {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }
  .signature {
    line-height: 2;
    font-size: 15px;
  }
  .bold {
    font-size: 25px;
    font-weight: 900;
    @media screen and (max-width: 960px) {
      font-size: 20px;
    }
  }
  .button {
    &-outer {
      text-align: center;
    }
    &-inner {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-icon {
      margin-right: 26px;
      @media screen and (max-width: 768px) {
        margin-right: 8px;
        width: 48px;
      }
    }
    &-link {
      display: inline-block;
      line-height: 0;
      border-radius: 6px;
      letter-spacing: 2px;
      padding: 16px 56px;
      background-color: #FF6400;
      font-weight: 900;
      font-size: 24px;
      text-decoration: none;
      color: #fff;
      @media screen and (max-width: 768px) {
        display: block;
        font-size: 16px;
        padding: 16px 8px;
      }
    }
  }
  .list {
    &-item {
      position: relative;
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 16px;
      padding-left: 16px;
      line-height: 2;
      &:after {
        position: absolute;
        top: 12px;
        left: 0;
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        background-color: #000;
        border-radius: 100%;
        line-height: 0;
      }
      &.number01,
      &.number02,
      &.number03,
      &.number04 {
        margin-bottom: 0;
      }
      &.number01:after {
        top: 14px;
        left: -4px;
        background: none;
        width: auto;
        height: auto;
        content: '1.';
      }
      &.number02:after {
        top: 14px;
        left: -4px;
        background: none;
        width: auto;
        height: auto;
        content: '2.';
      }
      &.number03:after {
        top: 14px;
        left: -4px;
        background: none;
        width: auto;
        height: auto;
        content: '3.';
      }
      &.number04:after {
        top: 14px;
        left: -4px;
        background: none;
        width: auto;
        height: auto;
        content: '4.';
      }
    }
  }
  .footer {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    letter-spacing: 2px;
    margin-top: 200px;
    background-color: #000000;
    padding: 24px 20px;
    text-align: right;
    color: #fff;
    font-size: 10px;
  }
  .header01 {
    background-color: #000;
    color: #fff;
    font-size: 28px;
    font-weight: 900;
    padding: 8px 16px;
    margin-bottom: 48px;
    letter-spacing: 1px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  .header02 {
    border: solid 2px #000;
    font-size: 28px;
    font-weight: 900;
    padding: 8px 16px;
    margin-bottom: 48px;
    letter-spacing: 1px;
    display: inline-block;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
</style>
