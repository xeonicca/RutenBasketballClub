<template>
  <div class="flex flex-1 flex-col md:px-6 pt-10" id="content">
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <div>
        <h2 class="font-bold text-xl">第二屆露天籃球社季後賽</h2>
      </div>
    </div>
    <div class="item zoom">
      <div class="item-parent">
        <Match name=""></Match>
        <strong class="item-order">#9</strong>
      </div>
      <div class="pair">
        <div class="item-childrens">
          <div class="item-child">
            <MatchRound order="8">
              <Match slot="parent" name=""></Match>
              <MatchRound order="6" slot="firstChild">
                <Match slot="parent" name=""></Match>
                <MatchRound slot="firstChild" order="2">
                  <Match slot="parent" name=""></Match>
                  <Match slot="firstChild" name="The Avengers"></Match>
                  <Match slot="secondChild" name="Team 絲襪"></Match>
                </MatchRound>
                <MatchRound slot="secondChild" order="3">
                  <Match slot="parent" name=""></Match>
                  <Match slot="firstChild" name="湘北"></Match>
                  <MatchRound slot="secondChild" order="1">
                    <Match slot="parent" name=""></Match>
                    <Match slot="firstChild" name="Team Ray"></Match>
                    <Match slot="secondChild" name="魔關羽隊"></Match>
                  </MatchRound>
                </MatchRound>
              </MatchRound>
              <MatchRound order="7" slot="secondChild">
                <Match slot="parent" name=""></Match>
                <MatchRound slot="firstChild" order="5">
                  <Match slot="parent" name=""></Match>
                  <MatchRound slot="firstChild" order="4">
                    <Match slot="parent" name=""></Match>
                    <Match slot="firstChild" name=""></Match>
                    <Match slot="secondChild" name=""></Match>
                  </MatchRound>
                  <Match slot="secondChild" name=""></Match>
                </MatchRound>
                <Match slot="secondChild" name=""></Match>
              </MatchRound>
            </MatchRound>
          </div>
          <div class="item-child">
            <Match name=""></Match>
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
  }
}
</script>