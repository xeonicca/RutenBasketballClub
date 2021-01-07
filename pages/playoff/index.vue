<template>
  <div class="flex flex-1 flex-col md:px-6 pt-10" id="content">
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <div>
        <h2 class="font-normal font-bold text-xl">第一屆露天籃球社季後賽</h2>
      </div>
    </div>
    <div class="item zoom">
      <div class="item-parent">
        <Match name="Champion"></Match>
        <strong class="item-order">#8</strong>
      </div>
      <div class="pair">
        <div class="item-childrens">
          <div class="item-child">
            <MatchRound order="6">
              <Match slot="parent" name="#6 Winner"></Match>
              <MatchRound slot="firstChild" order="2">
                <Match slot="parent" name="#2 Winner"></Match>
                <Match slot="firstChild" name="鬼殺隊"></Match>
                <Match slot="secondChild" name="基紐特攻隊"></Match>
              </MatchRound>
              <MatchRound slot="secondChild" order="3">
                <Match slot="parent" name="#3 Winner"></Match>
                <Match slot="firstChild" name="山姆隊"></Match>
                <MatchRound slot="secondChild" order="1">
                  <Match slot="parent" name="#1 Winner"></Match>
                  <Match slot="firstChild" name="子揚隊"></Match>
                  <Match slot="secondChild" name="提姆隊"></Match>
                </MatchRound>
              </MatchRound>
            </MatchRound>
          </div>
          <div class="item-child">
            <MatchRound order="7">
              <Match slot="parent" name="#7 Winner"></Match>
              <MatchRound slot="firstChild" order="5">
                <Match slot="parent" name="#5 Winner"></Match>
                <MatchRound slot="firstChild" order="4">
                  <Match slot="parent" name="#4 Winner"></Match>
                  <Match slot="firstChild" name="#1 Loser"></Match>
                  <Match slot="secondChild" name="#2 Loser"></Match>
                </MatchRound>
                <Match slot="secondChild" name="#3 Loser"></Match>
              </MatchRound>
              <Match slot="secondChild" name="#6 Loser"></Match>
            </MatchRound>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Match from '~/components/Match'
import MatchRound from '~/components/MatchRound'

export default {
  // bracket layout copied from https://codepen.io/nicholasnadel/pen/vYNOWKG
  components: {
    Match,
    MatchRound
  },

  mounted() {
    // copied from https://codepen.io/sean_codes/pen/WdjVyM
  }
}
</script>