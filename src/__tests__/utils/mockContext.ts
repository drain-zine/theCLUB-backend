import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from "@prisma/client";

export type MockContext = {
    prisma: DeepMockProxy<PrismaClient>;
};
  
export const createMockContext = (): MockContext => {
    return {
      prisma: mockDeep<PrismaClient>(),
    };
};