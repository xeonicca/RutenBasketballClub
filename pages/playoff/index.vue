<template>
  <div class="flex flex-1 flex-col md:px-6 pt-10" id="content">
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <div>
        <h2 class="font-normal font-bold text-xl">第二屆露天籃球社季後賽</h2>
      </div>
    </div>
    <div class="item zoom">
      <div>
        <div class="item-childrens">
          <div class="item-child">
            <MatchRound order="8">
              <Match slot="parent" name="湘北"></Match>
              <MatchRound order="6" slot="firstChild">
                <Match slot="parent" name="湘北"></Match>
                <MatchRound slot="firstChild" order="2">
                  <Match slot="parent" name="The Avengers"></Match>
                  <Match slot="firstChild" name="The Avengers"></Match>
                  <Match slot="secondChild" name="Team 絲襪"></Match>
                </MatchRound>
                <MatchRound slot="secondChild" order="3">
                  <Match slot="parent" name="湘北"></Match>
                  <Match slot="firstChild" name="湘北"></Match>
                  <MatchRound slot="secondChild" order="1">
                    <Match slot="parent" name="魔關羽隊"></Match>
                    <Match slot="firstChild" name="Team Ray"></Match>
                    <Match slot="secondChild" name="魔關羽隊"></Match>
                  </MatchRound>
                </MatchRound>
              </MatchRound>
              <MatchRound order="7" slot="secondChild">
                <Match slot="parent" name="Team 絲襪"></Match>
                <MatchRound slot="firstChild" order="5">
                  <Match slot="parent" name="Team 絲襪"></Match>
                  <MatchRound slot="firstChild" order="4">
                    <Match slot="parent" name="Team 絲襪"></Match>
                    <Match slot="firstChild" name="Team Ray"></Match>
                    <Match slot="secondChild" name="Team 絲襪"></Match>
                  </MatchRound>
                  <Match slot="secondChild" name="魔關羽隊"></Match>
                </MatchRound>
                <Match slot="secondChild" name="The Avengers"></Match>
              </MatchRound>
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
  }
}
</script>