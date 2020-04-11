<template>
  <div class="page">
    <div class="section">
      <p class="paragraph">
        COVID-19 is casting a shadow all over the world. We PIXELGRAM, as a freelance team, have thought of what we can do against it now that we won’t know when we will see the dawn of this darkness.
      </p>
      <p class="paragraph">
        While the various impacts of COVID-19 have been felt all over, I as a band player have experienced cancellation and postponements of my live concerts, which are my life and energy, one after another. Also, the co-working and social-event space, ORANGE PARK, has to be closed to stop the spread of the virus for 2 months. Honestly speaking, I don’t know when it will be back to normal business again.
      </p>
      <p class="paragraph">
        Whenever I turn on TV or my phone and look at them, or whoever I talk to, there is constant focus on CORONA. All of everyone’s anger and irritation is overflowing little by little. The mood is seriously bad anywhere like the town and the internet. I tried to take actions to ventilate the situation, but all I could do was just see it go worse and worse. I just got overwhelmed by COVID-19.
      </p>
      <p class="paragraph">
        Even so, I couldn’t keep taking this nonsense. After considering what we can do and what we should do, we have come to the conclusion: <span class="bold">It is necessary to gather what’s happening and the real thoughts of people, record them, share them, and leave them for the future.</span>
      </p>
    </div>
    <div class="section">
      <p class="header01">
        Film what is happening and what is on your mind right now and send your video to us.
      </p>
      <p class="paragraph">
        “Buying up things is meaningless!”, “We need compensation!”, “That is fake news, be careful!” Besides what the mass media is broadcasting and the government is proposing, every one of you have been through the impacts and thoughts regardless of nationality, sex, age, or occupation. For example, you may have thoughts like what you have a problem with and how you survive every day that brings anxiety, or what you have a hope for. We don’t have enormous power to change the situation, but we worry about the current situation and think of what to do.
      </p>
      <p class="paragraph">
        Those situations and thoughts of yours: <span class="bold">we will record, share, and leave them for the future without leaving them behind.</span> We have thought that this is what we can do and also what we should do, so I will start to gather as many messages as possible and keep records of them.
      </p>
      <p class="paragraph">
        Someday those records will hopefully be preventing this situation to happen again in the future, and at best will be saving people’s life in case this situation happens again.
      </p>
      <p class="paragraph">
        Actually, those records may be an opportunity to break through the grave situation we are in or ease our anxiety by just getting to know what is happening or thoughts of people where we would never know.
      </p>
      <p class="paragraph">
        So please send us your video where you leave all your thoughts or problems now. Every one of your awareness and voice brings a ray of hope to people. I believe you can change the future.
      </p>
      <p class="paragraph">
        We need your voice. Please tell us your moment.
      </p>
      <p class="paragraph">
        All my best wishes for your health and safety, and the end of the nightmare.
      </p>
      <p class="paragraph bold">
        #leave_a_message
      </p>
      <p class="signature">
        2020.4.5<br>GIMA☆KENTA – PIXELGRAM
      </p>
    </div>
    <div class="section">
      <p class="header02">
        How-to for “Leave a Message”
      </p>
      <div class="list">
        <div class="list-item">
          At the beginning of your video:<br>
          Please say the year, date and place (city or area) when recording your video.
        </div>
        <div class="list-item">
          Self Introduction:<br>
          Please include your name (it doesn't have to be your real name),<br>
          your age (optional),<br>
          and your occupation (optional).
        </div>
        <div class="list-item">
          Then please answer these 4 questions below:<br>
          <div class="list-item number01">
            How are you being affected by COVID-19 (coronavirus)?
          </div>
          <div class="list-item number02">
            What is your main concern about it?
          </div>
          <div class="list-item number03">
            What do you want to do? / What do you want people to do?
          </div>
          <div class="list-item number04">
            Leave a message for the people all over the world!
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
        description: '“#leave_a_message” is a project that PIXELGRAM started. Based on the COVID-19 pandemic, its purpose is to keep video-records of people’s situations and voices worldwide to leave them for the future.',
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
