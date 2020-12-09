import Player from '@/storeModels/Player'
import Team from '@/storeModels/Team'
import Game from '@/storeModels/Game'

const classes = { Player, Team, Game };

function dynamicClass (name) {
  return classes[name];
}

export default (context, inject) => {
  inject('createModel', (modelName, data) => {
    const theClass = dynamicClass(modelName)
    return new theClass(data, context.store)
  })
}