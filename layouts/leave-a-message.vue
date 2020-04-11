<template>
  <div>
    <div class="header">
      <div class="header-logo">
        <nuxt-link to="/">
          <img
            src="/logo.svg"
            alt="">
        </nuxt-link>
      </div>
      <div class="header-group">
        <div class="header-trans">
          <nuxt-link
            to="/leave-a-message"
            class="header-trans-jp">
            JP
          </nuxt-link>
          <div class="header-trans-separator">
            /
          </div>
          <nuxt-link
            to="/leave-a-message_en"
            class="header-trans-en">
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
      <div class="mv  ">
        <img
          src="/leave-a-message/logo.svg"
          alt="leave-a-message">
      </div>
      <nuxt />
      <div class="conversion">
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
      <div class="footer-credit">
        English Translator:Kazumasa Ueda<br>
        Logo:Arata Hirano<br>
        Design:Marina Kawamura, Shu Yoshimori<br>
        Programming:Chiaki Uehira<br>
      </div>
      <div class="footer-copyright">
        © 2020 PIXELGRAM LLC.
      </div>
    </div>
  </div>
</template>

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
        &.nuxt-link-exact-active,
        &.nuxt-link-active {
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
  .conversion {
    margin-top: 96px;
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
  .mv {
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
      line-height: 2.5;
      &:after {
        position: absolute;
        top: 18px;
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
        top: 20px;
        left: -4px;
        background: none;
        width: auto;
        height: auto;
        content: '1.';
      }
      &.number02:after {
        top: 20px;
        left: -4px;
        background: none;
        width: auto;
        height: auto;
        content: '2.';
      }
      &.number03:after {
        top: 20px;
        left: -4px;
        background: none;
        width: auto;
        height: auto;
        content: '3.';
      }
      &.number04:after {
        top: 20px;
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
    padding: 146px 20px 48px;
    color: #fff;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media screen and (max-width: 768px) {
      display: block;
      padding: 112px 24px 62px;
    }
    &-credit {
      line-height: 2.5;
      font-size: 13px;
      @media screen and (max-width: 768px) {
        margin-bottom: 36px;
      }
    }
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
