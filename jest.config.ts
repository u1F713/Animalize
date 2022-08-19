import nextJest from 'next/jest'
import type { Config } from 'jest'
import { pathsToModuleNameMapper } from 'ts-jest'
import { defaults } from 'ts-jest/presets'
import { compilerOptions } from './tsconfig.json'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  preset: 'ts-jest',
  testRegex: '.test.(ts|tsx)$',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testEnvironment: 'jest-environment-jsdom',
  rootDir: compilerOptions.baseUrl,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  transform: { ...defaults.transform }
}

export default createJestConfig(config)
