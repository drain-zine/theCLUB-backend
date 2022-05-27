import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

import prisma from './client';
const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

jest.mock('./playlistController', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}))

// beforeEach(() => {
//   mockReset(prismaMock as DeepMockProxy<PrismaClient>);
// })

export { prismaMock };