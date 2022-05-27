// Our database seed
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const orchid = await prisma.artist.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: 'Orchid',
            albums: {
                create: [{
                    name: 'Chaos Is Me',
                    releaseDate: Date.now(),
                    cover: 'test.png',
                    tracks: {
                        create: [ 
                            {
                                name: 'Le Désordre, C\'est Moi',
                                filename: 'le.mp3'
                            },
                            {
                                name: 'Aesthetic Dialectic',
                                filename: 'ad.mp3'
                            }
                        ]
                    }
                }]
            }
        }
    });

    console.log('seeded: ' + orchid);

    const gangOfFour = await prisma.artist.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: 'Gang Of Four',
            albums: {
                create: [{
                    name: 'Entertainment!',
                    releaseDate: Date.now(),
                    cover: 'test.png',
                    tracks: {
                        create: [ 
                            {
                                name: 'Ether',
                                filename: 'eth.mp3'
                            },
                            {
                                name: 'I Found That Essence Rare',
                                filename: 'ifter.mp3'
                            }
                        ]
                    }
                }]
            }
        }
    });

    console.log('seeded: ' + gangOfFour);

    const gecs = await prisma.artist.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: '100 Gecs',
            albums: {
                create: [{
                    name: '1000 gecs',
                    releaseDate: Date.now(),
                    cover: 'test3.png',
                    tracks: {
                        create: [ 
                            {
                                name: 'ringtone',
                                filename: 'rt.mp3'
                            },
                            {
                                name: 'hand crushed by a mallet',
                                filename: 'hand.mp3'
                            }
                        ]
                    }
                }]
            }
        }
    });

    console.log('seeded: ' + gecs);

    console.log('database seed successfully!');
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });