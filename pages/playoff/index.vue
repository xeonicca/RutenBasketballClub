<template>
  <div class="flex flex-1 flex-col md:px-6 pt-10" id="content">
    <div class="winner-bracket">
      <MatchRound class="mb-2">
        <MatchRound slot="matchup" class="mb-2">
          <Match slot="matchup" title="Game 1" homeName="Team 2" awayName="Team 5"></Match>
          <Match slot="matchup" homeName="Team 1"></Match>
          <!-- <Match slot="matchup" title="Game 2" homeName="Team 3" awayName="Team 4"></Match> -->
          <MatchRound slot="advance" class="mb-2">
            <!-- <Match slot="matchup" homeName="Team 1"></Match> -->
            <Match slot="matchup" title="Game 4" homeName="Winner of G1" awayName="Team 1"></Match>
          </MatchRound>
          <!-- <Match slot="advance" title="Game 4" homeName="Winner of G1" awayName="Winner of G2"></Match> -->
        </MatchRound>
        <MatchRound slot="matchup" class="mb-2">
          <Match slot="matchup" title="Game 2" homeName="Team 3" awayName="Team 4"></Match>
          <Match slot="matchup"></Match>
        </MatchRound>
      </MatchRound>
    </div>
    <div class="loser-bracket">
      <MatchRound>
        <Match slot="matchup" title="Game 3" homeName="Loser of G1" awayName="Loser of G2"></Match>
        <Match slot="advance"></Match>
      </MatchRound>
    </div>
  </div>
</template>

<script>
import Match from '~/components/Match'
import MatchRound from '~/components/MatchRound'

export default {
  components: {
    Match,
    MatchRound
  }
}
</script>