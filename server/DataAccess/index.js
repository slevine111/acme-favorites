const { setAssociations, User, Thing, Favorite } = require('./models/index')
const connection = require('./connection')

const dbinit = () => {
  return connection
    .authenticate()
    .then(() => setAssociations())
    .then(() => connection.sync({ force: true }))
}

const createSeedInstances = (model, instances) => {
  return Promise.all(instances.map(instance => model.create(instance)))
}

const syncAndSeed = async () => {
  await dbinit()

  const [curly, larry, moe, shep] = await createSeedInstances(User, [
    { username: 'curly' },
    { username: 'larry' },
    { username: 'moe' },
    { username: 'shep' }
  ])

  const [bar, bazz, foo, quip, quq] = await createSeedInstances(Thing, [
    { name: 'bar' },
    { name: 'bazz' },
    { name: 'foo' },
    { name: 'quip' },
    { name: 'quq' }
  ])

  await createSeedInstances(Favorite, [
    { rank: 1, userId: larry.id, thingId: bar.id },
    { rank: 2, userId: larry.id, thingId: bazz.id },
    { rank: 1, userId: moe.id, thingId: bazz.id },
    { rank: 5, userId: moe.id, thingId: bar.id },
    { rank: 7, userId: moe.id, thingId: foo.id }
  ])
}

module.exports = syncAndSeed
